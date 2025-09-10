"use client";
import CustomForm from "@/components/customform/CustomForm";
import CustomInput from "@/components/customform/CustomInput";
import CustomSelect from "@/components/customform/CustomSelect";
import { Button } from "@/components/ui/button";
import { useGetCategory } from "@/hooks/category.hook";
import { useGetSingleMenu } from "@/hooks/menu.hook";
import { uploadSingleImage } from "@/services/Menu";
import { convertBase64 } from "@/utils/helperFunctions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface MenuItemUpadePageProps {
  params: Promise<{ id: string }>;
}

function MenuItemUpadePage({ params }: MenuItemUpadePageProps) {
  const { id } = React.use(params);
  const {
    mutate: getSingleMenu,
    data: menuInfo,
    isPending,
  } = useGetSingleMenu();
  const menuData = menuInfo?.data;

  const defaultValue = {
    itemName: menuData?.itemName,
    // category: menuData?.category,
    price: menuData?.price,
    description: menuData?.description,
    image: menuData?.image,
  };

  const [image, setImages] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data } = useGetCategory();
  const categoryOptions = data?.data?.map((cat: any) => ({
    key: cat?._id,
    value: cat?._id,
    label: cat?.catName?.toUpperCase(),
  }));

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const toastId = toast.loading("Please wait! Uploading Image");
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const image = await convertBase64(file);
      const res = await uploadSingleImage(image as string);
      console.log(res);
      setImages(res);
      toast.success("Image uploaded successfully", {
        id: toastId,
      });
      // Clear the file input after upload
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error: any) {
      console.log(error);
      toast.error("Error uploading image", {
        id: toastId,
      });
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedMenuData = {
      ...data,
      price: Number(data.price),
      image,
    };
    console.log(updatedMenuData);
  };

  useEffect(() => {
    getSingleMenu(id);
  }, [id, getSingleMenu]);

  useEffect(() => {
    if (menuData) {
      setImages(menuData?.image);
    }
  }, [menuData]);

  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Update Menu Item
        </h2>
      </div>

      <div className="space-y-6">
        {!isPending && (
          <CustomForm onSubmit={onSubmit} defaultValues={defaultValue}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-1">
                <CustomInput
                  type="text"
                  name="itemName"
                  placeholder="Item Name"
                  label="Item Name"
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="category"
                  label="Category"
                  options={categoryOptions || []}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="flex-1">
                <CustomInput
                  type="number"
                  name="price"
                  placeholder="Price"
                  label="Price"
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  type="text"
                  name="description"
                  placeholder="Description"
                  label="Description"
                />
              </div>
            </div>
            <div className="my-6 sm:my-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base font-medium leading-none">
                  Upload Image
                </label>
                <div className="flex items-center">
                  <label className="flex w-full cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-white px-4 py-6 text-center text-sm text-gray-600 transition-colors hover:border-primary hover:bg-gray-50 sm:px-8 sm:py-12">
                    <svg
                      className="mb-2 h-8 w-8 sm:h-10 sm:w-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="mb-1 font-medium sm:text-base">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </span>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={uploadImage}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 flex justify-center">
              {image ? (
                <Image src={image} alt="uploaded" width={200} height={200} />
              ) : (
                <span>No Image Selected</span>
              )}
            </div>

            <div className="w-full px-2">
              <Button
                type="submit"
                className="w-full cursor-pointer bg-green-800 hover:bg-green-800/90"
                //   disabled={isPending}
              >
                Update Menu Item
              </Button>
            </div>
          </CustomForm>
        )}
      </div>
    </div>
  );
}

export default MenuItemUpadePage;

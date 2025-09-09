"use client";
import CustomForm from "@/components/customform/CustomForm";
import CustomInput from "@/components/customform/CustomInput";
import CustomSelect from "@/components/customform/CustomSelect";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

function AddItemPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Add Menu Item
        </h2>
      </div>
      <div className="space-y-6">
        <CustomForm onSubmit={onSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1">
              <CustomInput
                type="text"
                name="name"
                placeholder="Name"
                label="Name"
              />
            </div>
            <div className="flex-1">
              <CustomSelect name="category" label="Category" options={[]} />
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
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setSelectedFile(file);
                    }}
                    value={selectedFile ? undefined : ""}
                  />
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </p>
            </div>
          </div>
          <div className="w-full px-2">
            <Button
              type="submit"
              className="w-full cursor-pointer bg-green-800 hover:bg-green-800/90"
            >
              Add Menu Item
            </Button>
          </div>
        </CustomForm>
      </div>
    </div>
  );
}

export default AddItemPage;

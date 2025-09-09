"use client";
import CustomForm from "@/components/customform/CustomForm";
import CustomInput from "@/components/customform/CustomInput";
import CustomSelect from "@/components/customform/CustomSelect";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

function AddItemPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="text-black font-sans">
      <h2 className="text-black font-bold text-center text-2xl mb-8">
        Add Item
      </h2>
      <div className="space-y-4">
        <CustomForm onSubmit={onSubmit}>
          <div className="flex flex-row gap-4 space-y-4">
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
          <div className="flex gap-4">
            <div className="flex-1">
              <CustomInput
                type="number"
                name="price"
                placeholder="Price"
                label="Price"
              />
            </div>
            <div className="flex-1">
              <div>
                <CustomInput
                  type="text"
                  name="description"
                  placeholder="Description"
                  label="Description"
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Image
              </label>
              <div className="flex items-center gap-2">
                <label className="flex flex-1 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 py-6 text-sm text-gray-600 transition-colors hover:border-primary hover:bg-gray-50">
                  <svg
                    className="mb-2 h-8 w-8 text-gray-400"
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
                  <span className="font-medium">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-gray-500">
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
              <p className="mt-1 text-sm text-gray-500">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </p>
            </div>
          </div>
        </CustomForm>
      </div>
    </div>
  );
}

export default AddItemPage;

"use client";
import CustomForm from "@/components/customform/CustomForm";
import CustomInput from "@/components/customform/CustomInput";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { useEffect } from "react";
import { useAddUser } from "@/hooks/user.hook";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function AddUser() {
  const { mutate: handleAddUser, isPending, isSuccess } = useAddUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const toastId = toast.loading("Adding User...");
    handleAddUser(data, {
      onSuccess: () => {
        toast.success("User Added Successfully", { id: toastId });
      },
      onError: (error) => {
        toast.error(error?.message, { id: toastId });
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin-management/user-management");
    }
  }, [isSuccess, router]);

  return (
    <div className="text-black">
      <div className="border-l-8 border-primary pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Add User
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-[400px] mx-auto">
        <CustomForm onSubmit={onSubmit}>
          <div className="text-black mb-6">
            <CustomInput
              type="text"
              name="fullName"
              placeholder="Full Name"
              label="Full Name"
              fontColor="text-black"
            />
          </div>
          <div className="mb-6">
            <CustomInput
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              fontColor="text-black"
            />
          </div>
          <div className="mb-6">
            <CustomInput
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              fontColor="text-black"
            />
          </div>
          <Button
            type="submit"
            className="mt-6 w-full cursor-pointer bg-green-700 text-white hover:bg-green-700/90"
            disabled={isPending}
          >
            Create User
          </Button>
        </CustomForm>
      </div>
    </div>
  );
}

export default AddUser;

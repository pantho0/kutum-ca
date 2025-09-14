"use client";
import CustomForm from "@/components/customform/CustomForm";
import CustomInput from "@/components/customform/CustomInput";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLogin } from "@/hooks/auth.hook";

const LoginPage = () => {
  const { mutate: handleLogin } = useLogin();
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data);
  };
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
          User Login
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-[400px] mx-auto space-y-4">
        <CustomForm onSubmit={onSubmit}>
          <div className="text-white">
            <CustomInput
              type="email"
              name="email"
              placeholder="User Email"
              label="User Email"
              fontColor="text-white"
            />
          </div>
          <div>
            <CustomInput
              type="password"
              name="password"
              placeholder="User Password"
              label="User Password"
            />
          </div>

          <Button
            type="submit"
            className="mt-6 w-full text-black cursor-pointer"
          >
            Login
          </Button>
        </CustomForm>
      </div>
    </div>
  );
};

export default LoginPage;

"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      (await cookies()).set("accessToken", data.data?.accessToken);
      (await cookies()).set("refreshToken", data.data?.refreshToken);
    }

    if (!data.success) {
      throw new Error(data.message || "Error adding category");
    }

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

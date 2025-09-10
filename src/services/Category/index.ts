"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const getAllCategory = async () => {
  try {
    const res = await axiosInstance.get("/categories");

    if (!res.data.success) {
      throw new Error(res.data.message || "Error fetching categories");
    }

    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

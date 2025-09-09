"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getMenu = async (query?: Record<string, unknown>) => {
  try {
    const res = await axiosInstance.get("/menus", {
      params: query,
    });

    if (!res.data.success) {
      throw new Error(res.data.message || "Error fetching orders");
    }

    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

"use server";

import { IMenu } from "@/interface";
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

export const getSingleMenu = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/menus/${id}`);
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

export const updateMenu = async (id: string, menudata: IMenu) => {
  try {
    const res = await axiosInstance.put(`/menus/${id}`, menudata);
    if (!res.data.success) {
      throw new Error(res.data.message || "Error updating menu item");
    }
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

export const addMenuItem = async (menudata: IMenu) => {
  try {
    const res = await axiosInstance.post("/menus/create-menu", menudata);
    if (!res.data.success) {
      throw new Error(res.data.message || "Error adding menu item");
    }
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

export const uploadSingleImage = async (image: string) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/cloudinary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    });

    return res.json();
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

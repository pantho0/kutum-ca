/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IMenu } from "@/interface";
import {
  addMenuItem,
  getMenu,
  getSingleMenu,
  updateMenu,
} from "@/services/Menu";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetMenu = () => {
  return useMutation({
    mutationKey: ["menu"],
    mutationFn: async (query?: Record<string, unknown>) => getMenu(query),
  });
};

export const useGetSingleMenu = () => {
  return useMutation({
    mutationKey: ["menu"],
    mutationFn: async (id: string) => getSingleMenu(id),
  });
};

export const useUpdateMenu = () => {
  return useMutation({
    mutationKey: ["menu"],
    // @ts-ignore
    mutationFn: async (id: string, menuData: IMenu) => updateMenu(id, menuData),
    onSuccess: () => {
      toast.success("Menu item updated successfully", { duration: 2000 });
    },
    onError: () => {
      toast.error("Failed to update menu item", { duration: 2000 });
    },
  });
};

export const useAddMenuItem = () => {
  return useMutation({
    mutationKey: ["menu"],
    mutationFn: async (menuData: IMenu) => addMenuItem(menuData),
    onSuccess: () => {
      toast.success("Menu item added successfully", { duration: 2000 });
    },
    onError: () => {
      toast.error("Failed to add menu item", { duration: 2000 });
    },
  });
};

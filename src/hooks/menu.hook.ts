import { IMenu } from "@/interface";
import { addMenuItem, getMenu, getSingleMenu } from "@/services/Menu";
import { useMutation } from "@tanstack/react-query";
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

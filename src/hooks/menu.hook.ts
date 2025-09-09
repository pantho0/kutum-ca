import { getMenu } from "@/services/Menu";
import { useMutation } from "@tanstack/react-query";

export const useGetMenu = () => {
  return useMutation({
    mutationKey: ["menu"],
    mutationFn: async (query?: Record<string, unknown>) => getMenu(query),
  });
};

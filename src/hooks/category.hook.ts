import { getAllCategory } from "@/services/Category";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAllCategory(),
  });
};

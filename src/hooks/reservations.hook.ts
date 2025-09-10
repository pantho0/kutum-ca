import { getAllReservations } from "@/services/Reservations";
import { useQuery } from "@tanstack/react-query";

export const useGetAllReservations = () => {
  return useQuery({
    queryKey: ["reservations"],
    queryFn: async () => await getAllReservations(),
  });
};

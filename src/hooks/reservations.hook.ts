import { getAllReservations } from "@/services/Reservations";
import { useMutation } from "@tanstack/react-query";

export const useGetAllReservations = () => {
  return useMutation({
    mutationKey: ["reservation"],
    mutationFn: async () => await getAllReservations(),
  });
};

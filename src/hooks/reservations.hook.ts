import {
  getAllReservations,
  updatReservationStatus,
} from "@/services/Reservations";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllReservations = () => {
  return useMutation({
    mutationKey: ["reservation"],
    mutationFn: async () => await getAllReservations(),
  });
};

export const useUpdateReservation = () => {
  return useMutation({
    mutationKey: ["reservation"],
    mutationFn: async (reservationData: any) =>
      await updatReservationStatus(reservationData),
    onSuccess: () => {
      toast.success("Reservation updated successfully", { duration: 2000 });
      window.location.replace("/admin-management/reservations");
    },
    onError: () => {
      toast.error("Failed to update reservation", { duration: 2000 });
    },
  });
};

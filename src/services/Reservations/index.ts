"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const getAllReservations = async () => {
  try {
    const res = await axiosInstance.get("/reservations/get-all-reservation");

    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

export const updatReservationStatus = async (reservationData: any) => {
  try {
    const res = await axiosInstance.put(
      `/reservations/update-reservation/${reservationData.id}`,
      reservationData
    );
    if (!res.data.success) {
      throw new Error(res.data.message || "Error updating reservation status");
    }
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

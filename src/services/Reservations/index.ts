import axiosInstance from "@/lib/AxiosInstance";

export const getAllReservations = async () => {
  try {
    const res = await axiosInstance.get("/reservations");
    if (!res.data.success) {
      throw new Error(res.data.message || "Error fetching reservations");
    }
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

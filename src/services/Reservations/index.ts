export const getAllReservations = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/v1/reservations/get-all-reservation",
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || "Error fetching data"
    );
  }
};

"use client";
import ReservationCard from "@/components/adminDashboard/ReservationCard";
import { useGetAllReservations } from "@/hooks/reservations.hook";
import { useEffect } from "react";

function ReservationPage() {
  const { mutate: getAllReservations, data } = useGetAllReservations();

  const reservations = data?.data;

  useEffect(() => {
    getAllReservations();
  }, [getAllReservations]);

  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Reservations
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reservations?.data?.map((r: any) => (
          <ReservationCard
            key={r._id}
            _id={r._id}
            customerName={r.customerName}
            email={r.email}
            phone={r.phone}
            headCount={r.headCount}
            status={r.status}
            date={r.date}
            time={r.time}
            onStatusChange={(val) => console.log(`Changed ${r._id} to ${val}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ReservationPage;

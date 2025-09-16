"use client";
import ReservationCard from "@/components/adminDashboard/ReservationCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllReservations } from "@/hooks/reservations.hook";
import { useEffect, useState } from "react";

function ReservationPage() {
  const { mutate: getAllReservations, data } = useGetAllReservations();
  const [filter, setFilter] = useState<Record<string, unknown>>({});

  const reservations = data?.data;

  useEffect(() => {
    if (filter.status === "all") {
      getAllReservations({});
    } else {
      getAllReservations(filter);
    }
  }, [getAllReservations, filter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setFilter({ searchTerm });
  };

  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-primary pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Reservations
        </h2>
      </div>
      <div className="flex gap-3 justify-between mb-6">
        <div className="flex-1">
          <Input
            type="text"
            name="searchTerm"
            placeholder="Search Reservations"
            onChange={handleSearch}
          />
        </div>
        <div>
          <Select
            onValueChange={(value) => setFilter({ ...filter, status: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
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

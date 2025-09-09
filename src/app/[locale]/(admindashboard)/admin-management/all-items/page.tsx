"use client";

import MenuItemCard, {
  MenuItemCardProps,
} from "@/components/adminDashboard/MenuItemCard";
import CustomInput from "@/components/customform/CustomInput";
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
import { useGetMenu } from "@/hooks/menu.hook";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function AllItemsPage() {
  const [filter, setFilter] = useState<Record<string, unknown>>({});
  const {
    mutate: getAllMenu,
    data,
    isPending,
    isError,
    isSuccess,
  } = useGetMenu();

  useEffect(() => {
    if (filter.category === "all") {
      getAllMenu({});
    } else {
      getAllMenu(filter);
    }
  }, [getAllMenu, filter]);

  const menu: MenuItemCardProps[] = data?.data?.data;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setFilter({ searchTerm });
  };

  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          All Menu Item
        </h2>
      </div>
      <div className="flex gap-3 justify-between mb-6">
        <div className="flex-1">
          <Input
            type="text"
            name="searchTerm"
            placeholder="Search Item"
            onChange={handleSearch}
          />
        </div>
        <div>
          <Select onValueChange={(value) => setFilter({ category: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="breakfast">Breakfast</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {isPending && (
        <div className="flex items-center justify-center h-64">
          <HashLoader color="#3b82f6" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu?.map((item: MenuItemCardProps) => (
          <MenuItemCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AllItemsPage;

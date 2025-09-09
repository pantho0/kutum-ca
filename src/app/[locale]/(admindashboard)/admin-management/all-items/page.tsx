"use client";

import MenuItemCard from "@/components/adminDashboard/MenuItemCard";
import { useGetMenu } from "@/hooks/menu.hook";
import { useEffect } from "react";

function AllItemsPage() {
  const {
    mutate: getAllMenu,
    data,
    isPending,
    isError,
    isSuccess,
  } = useGetMenu();

  useEffect(() => {
    getAllMenu({});
  }, [getAllMenu]);

  const menu = data?.data?.data;

  console.log(menu);

  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          Add Menu Item
        </h2>
      </div>
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu?.map((item) => (
          <MenuItemCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AllItemsPage;

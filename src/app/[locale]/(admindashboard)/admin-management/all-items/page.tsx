"use client";

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
    getAllMenu({ searchTerm: "Toa" });
  }, [getAllMenu]);

  const menu = data?.data?.data;

  console.log(menu);

  return <div className="text-black">AllItemsPage</div>;
}

export default AllItemsPage;

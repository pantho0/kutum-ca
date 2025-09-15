"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCategory } from "@/hooks/category.hook";
import React from "react";

function AllCategoriesPage() {
  const { data: categories } = useGetCategory();
  const categoriesData = categories?.data;
  return (
    <div className="text-black font-sans px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div className="border-l-8 border-green-700 pl-2 sm:pl-4">
        <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          All Categories
        </h2>
      </div>

      <div className="text-black">
        <Table>
          <TableCaption>A list of your categories.</TableCaption>
          <TableHeader>
            <TableRow className="text-black bg-green-100 ">
              <TableHead className="text-black">Category Name</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black text-right">Action</TableHead>
              <TableHead className="text-black text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoriesData?.map((cat: any) => (
              <TableRow key={cat._id}>
                <TableCell className="font-medium">{cat.catName}</TableCell>
                <TableCell>{cat.isDeleted ? "Deleted" : "Active"}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    className="bg-green-700 hover:bg-green-700/90 cursor-pointer text-white"
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    className="bg-red-700 hover:bg-red-700/90 cursor-pointer text-white"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Categories</TableCell>
              <TableCell className="text-right">
                {categoriesData?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default AllCategoriesPage;

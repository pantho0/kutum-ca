import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

interface MenuItemCardProps {
  image: string;
  itemName: string;
  category: {
    _id: string;
    catName: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  price: number;
  description: string;
}

export default function MenuItemCard({
  image,
  itemName,
  category,
  price,
  description,
}: MenuItemCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-md rounded-2xl overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt="Item Image"
          width={500}
          height={500}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{itemName}</CardTitle>
        <p className="text-lg font-bold text-green-600">${price.toFixed(2)}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-white"
          >
            <Pencil className="w-4 h-4 text-white" />
            Update
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

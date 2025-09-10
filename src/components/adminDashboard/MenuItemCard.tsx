import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

export interface MenuItemCardProps {
  _id?: string;
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
    <Card className="w-full max-w-xs shadow-md rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt="Item Image"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <CardHeader className="px-3">
        <CardTitle className="text-base font-semibold">{itemName}</CardTitle>
        <div className="mt-1">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600 text-xs px-2 py-0.5"
          >
            <BadgeCheck className="w-3 h-3 mr-1" />
            {category.catName}
          </Badge>
        </div>
        <p className="text-sm font-bold text-green-600">${price.toFixed(2)}</p>
      </CardHeader>

      <CardContent className="px-3">
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">{description}</p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1 text-xs"
          >
            <Pencil className="w-3 h-3" />
            Update
          </Button>
          <Button
            size="sm"
            variant="destructive"
            className="flex items-center gap-1 text-xs"
          >
            <Trash2 className="w-3 h-3" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

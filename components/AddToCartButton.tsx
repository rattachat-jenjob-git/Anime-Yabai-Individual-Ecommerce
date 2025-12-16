"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import useStore from "@/store";
import toast from "react-hot-toast";
import QuantityButtons from "./QuantityButtons";

interface Props {
  product: any;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const handleAddToCart = () => {
     if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(
        `${product?.name?.substring(0, 12)}... เพิ่มสินค้าเรียบร้อยแล้ว!`
      );
    } else {
      toast.error("ไม่สามารถเพิ่มสินค้าที่จำนวนเกินสต๊อกที่มีได้");
    }
  };
  return (
     <div className="w-full h-12 flex items-center">
      {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-darkColor/80">จำนวน</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">ราคารวม</span>
            {/* <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            /> */}
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={cn(
            "w-full bg-indigo-600 text-lightBg shadow-none border border-indigo-600 font-semibold tracking-wide hover:bg-indigo-800 hover:border-indigo-800 hoverEffect",
            className
          )}
        >
          <ShoppingBag /> {isOutOfStock ? "สินค้าหมด" : "เพิ่มสินค้าลงตะกร้า"}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;

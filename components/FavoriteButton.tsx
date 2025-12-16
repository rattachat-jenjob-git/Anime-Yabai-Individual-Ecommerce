"use client";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? "ลบสินค้าในรายการโปรดเรียบร้อยแล้ว!"
            : "เพิ่มสินค้าในรายการโปรดเรียบร้อยแล้ว!"
        );
      });
    }
  };    
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="text-white w-5 h-5 hover:text-pink-300 hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-darkRed text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
             {favoriteProduct?.length ? favoriteProduct?.length : 0}
          </span>
        </Link>
      ) : (
        <button onClick={handleFavorite} className="group relative hover:text-darkRed hoverEffect border border-darkRed/80 hover:border-darkRed p-1.5 rounded-sm">
          {existingProduct ? (
            <Heart
              fill="#DC143C"
              className="text-darkRed/80 group-hover:text-darkRed hoverEffect mt-.5 w-5 h-5"
            />
          ) : (
            <Heart className="text-darkRed/80 group-hover:text-darkRed hoverEffect mt-.5 w-5 h-5" />
          )}
        </button>
      )}
    </>
  );
};

export default FavoriteButton;

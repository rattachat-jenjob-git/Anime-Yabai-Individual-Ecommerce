"use client";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CardIcon = () => {
  const { items } = useStore();
  return (
    <Link href={"/cart"} className="group relative">
        <ShoppingBag className="w-5 h-5 hover:text-pink-300 hoverEffect text-white"/>
        <span className="absolute -top-1 -right-1 bg-darkRed text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  )
}
export default CardIcon
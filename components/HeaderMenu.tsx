"use client"
import Link from "next/link";
import { headerData } from "../constants/data";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-base capitalize font-semibold text-white">
      {/* Loop headerData ใน data.ts เพื่อเอามาสร้าง Link*/}
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-pink-300 hoverEffect relative group ${pathname ===  item?.href && "text-pink-300"}`}
        >
          {item?.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-pink-300 group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname ===  item?.href && "w-1/2"}`}/>
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-pink-300 group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname ===  item?.href && "w-1/2"}`}/>
        </Link>
      ))}
    </div>
  );
};
export default HeaderMenu;

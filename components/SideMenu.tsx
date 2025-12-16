import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SociaMedia from "./SociaMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef= useOutsideClick <HTMLDivElement>(onClose)
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full  text-black bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div ref={sidebarRef} className="min-w-72 max-w-96 bg-white h-screen p-10 border-r border-r-pink-300 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-black" />
          <button onClick={onClose} className="hover:text-pink-300 hoverEffect">
            <X />
          </button>
        </div>
        {/* loop ข้อมูลของ Header Data มาใส่ในSide menu */}
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item.title}
              className={`hover:text-blue-500 hoverEffect ${pathname ===  item?.href && "text-blue-500"}`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SociaMedia/>
      </div>
    </div>
  );
};
export default SideMenu;

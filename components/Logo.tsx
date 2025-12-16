import Link from "next/link";
import { cn } from "@/lib/utils"; //เอาไว้รวม className โดยไม่ให้ class Tailwind และ UI Library shadcn ชนกัน

const Logo = ({ className}: { className?: string }) => {
  return (
    <Link href={"/"} className="inline-flex" >
      <h2
        className={cn(
          "text-2xl text-white font-black tracking-wider uppercase hover:text-pink-300 hoverEffect group font-sans:",
          className
        )}
      >
        Anime Yabai
      </h2>
    </Link> //เมื่อกดlogo จะไปหน้า Home
  );
};
export default Logo;

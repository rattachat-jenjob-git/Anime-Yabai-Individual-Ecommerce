import Link from "next/link";
import { Title } from "./ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="mt-4 py-16 md:py-0 rounded-lg flex bg-violet-300 px-10  lg:px-24 items-center justify-between">
      <div className="space-y-10">
        <Title>
          รวมสินค้าสายอนิเมะ ของแท้ ส่งเร็ว! <br />
          สินค้าน่ารัก ๆ จากเรื่องโปรด♪
          <br />
        </Title>
        <Link
          href={"/shop"}
          className="bg-darkRed text-white px-5 py-2 rounded-md text-2xl font-semibold hover:text-black hoverEffect"
        >
          ซื้อเลย ! ! !
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};
export default HomeBanner;
//<div className="text-2xl font-bold text-[#5A3FFF]">ทดสอบ</div>

import Logo from "@/components/Logo";
import Link from "next/link";
import "./globals.css";

const NotFoundPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo className="text-black text-3xl" />

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            ❌ ไม่พบหน้าที่คุณกำลังค้นหา
          </h2>
          <p className="mt-2 text-md text-gray-600">
            ขออภัยครับ ไม่พบหน้าที่คุณต้องการ <br/> อาจถูกลบ ย้ายที่หรืออาจพิมพ์ที่อยู่ไม่ถูกต้อง
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <Link
              href="/"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonOrangeDark hoverEffect"
            >
              กลับไปหน้าแรกของร้านค้า
            </Link>
            {/* <Link
              href="/help"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazonBlue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue"
            >
              ศูนย์ช่วยเหลือ
            </Link> */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ต้องการความช่วยเหลือเพิ่มเติม?{" "}
            {/* <Link
              href="/help"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              ส่วนช่วยเหลือ
            </Link>{" "}
            หรือ{" "} */}
            <Link
              href="/contact"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              ติดต่อเรา
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

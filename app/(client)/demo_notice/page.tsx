"use client";
import { useEffect, useState } from "react";
const DemoNoticeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 max-w-md rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6 shadow-xl border border-pink-200 animate-fadeIn">
        <h2 className="text-2xl font-bold text-purple-600 mb-3">
          ⚠️ โปรดทราบ
        </h2>
        <p className="text-gray-700 leading-relaxed">
          เว็บไซต์นี้จัดทำขึ้นเพื่อใช้เป็น{" "}
          <span className="font-semibold text-pink-500">
            เว็บไซต์ตัวอย่าง (Demo)
          </span>{" "}
          เท่านั้น
          <br />
          <br />
          ไม่สามารถสั่งซื้อสินค้า หรือทำธุรกรรมจริงได้
        </p>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 py-2 text-white font-semibold hover:opacity-90 transition"
        >
          เข้าใจแล้ว 💖
        </button>
      </div>
    </div>
  );
};
export default DemoNoticeModal;

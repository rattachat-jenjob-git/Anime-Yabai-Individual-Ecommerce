"use client";

import { useState } from "react";
import Container from "@/components/Container";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    toast.success("ส่งข้อความเรียบร้อยแล้ว 💌");
  };

  return (
    <Container className="py-20 min-h-screen bg-white">
      <div className="mx-auto w-fit px-8 py-4 mb-14 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] animate-fade-in">
        <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] tracking-wide">
          Contact Me
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start animate-fade-in-up">

        {/* Left card */}
        <div className="
          bg-white rounded-3xl p-8
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          border border-purple-100
          transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        ">
          <h2 className="text-3xl font-bold text-purple-600 border-b-2 border-purple-200 pb-3">
            ✨ ติดต่อเราได้เสมอ
          </h2>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            หากคุณมีคำถามหรืออยากติดต่อเรา  
            สามารถส่งข้อความผ่านแบบฟอร์มนี้ได้เลยครับ 😊
          </p>

          <div className="mt-6 pt-5 border-t border-dashed border-purple-200 space-y-4">
            <p className="text-lg font-medium text-gray-700">
              <span className="text-pink-600 font-semibold">อีเมล:</span>  
              rattachat.jenjob@gmail.com
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="text-pink-600 font-semibold">เบอร์โทร:</span>  
              +66 98 990 5689
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="text-pink-600 font-semibold">ที่อยู่:</span>  
              Bangkok, Thailand
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="
          bg-white rounded-3xl p-8
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          border border-purple-100
          transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        ">
          {/* Name */}
          <div className="flex flex-col mb-5">
            <label className="text-xl font-bold text-purple-600 mb-2">
              ชื่อของคุณ
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                p-3 rounded-2xl border-2 border-pink-200
                bg-white focus:ring-4 focus:ring-pink-300
                outline-none transition duration-200
              "
              placeholder="พิมพ์ชื่อของคุณ"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-5">
            <label className="text-xl font-bold text-purple-600 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                p-3 rounded-2xl border-2 border-pink-200
                bg-white focus:ring-4 focus:ring-pink-300
                outline-none transition duration-200
              "
              placeholder="example@mail.com"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mb-6">
            <label className="text-xl font-bold text-purple-600 mb-2">
              ข้อความ
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                p-3 rounded-2xl border-2 border-pink-200 bg-white
                h-36 focus:ring-4 focus:ring-pink-300
                outline-none transition duration-200
              "
              placeholder="พิมพ์ข้อความของคุณ..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="
              w-full py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500
              text-white font-bold text-xl shadow-lg
              transition-all duration-300
              hover:shadow-[0_10px_30px_rgba(236,72,153,0.5)]
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            ส่งข้อความ 💌
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;

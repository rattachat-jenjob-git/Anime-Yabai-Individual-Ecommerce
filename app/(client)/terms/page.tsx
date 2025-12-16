import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with anime-style decoration */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border-b-4 border-pink-400">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-block animate-bounce mb-4">
            <svg
              className="w-16 h-16 mx-auto text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg">ข้อกำหนดและเงื่อนไขการใช้งาน</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 mb-8 shadow-lg border-2 border-pink-300 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-3">
                ✨ยินดีต้อนรับ!
              </h2>
              <p className="text-gray-700 leading-relaxed">
                เว็บไซต์นี้ถูกสร้างขึ้นเพื่อเป็น โปรเจคเดี่ยวสำหรับฝึกพัฒนาเว็บ
                E-Commerce โดยจำลองระบบร้านค้าออนไลน์ธีม สินค้าอนิเมะ เช่น โมเดล
                ฟิกเกอร์ เสื้อผ้า และสินค้าอื่นๆ โปรดทราบว่า:
                เว็บไซต์นี้เป็นเพียงโปรเจคเพื่อการศึกษา ไม่ได้ขายสินค้าจริง
                ไม่มีระบบชำระเงินจริง และไม่มีการจัดส่งสินค้า
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {[
            {
              icon: "📜",
              title: "1. การยอมรับข้อกำหนด",
              color: "from-pink-400 to-rose-500",
              bgColor: "from-pink-50 to-rose-50",
              borderColor: "border-pink-300",
              content:
                "เมื่อคุณเข้าชมเว็บไซต์นี้ ถือว่าคุณยอมรับข้อกำหนดทั้งหมดนี้เว็บไซต์ถูกสร้างเพื่อ สาธิต, เรียนรู้, และ ทดลองระบบ E-Commerce เท่านั้นไม่ใช่แพลตฟอร์มการซื้อขายจริง",
            },
            {
              icon: "👤",
              title: "2. การใช้งานบริการ",
              color: "from-purple-400 to-violet-500",
              bgColor: "from-purple-50 to-violet-50",
              borderColor: "border-purple-300",
              content:
                "คุณตกลงที่จะใช้งานเว็บไซต์ในลักษณะที่เหมาะสมและถูกต้อง และไม่ใช้เว็บไซต์เพื่อ:กระทำผิดกฎหมาย ทำลายระบบ ส่งข้อมูลประสงค์ร้าย แอบอ้างว่ามีการซื้อ-ขายจริง เว็บไซต์นี้มีไว้เพื่อ ดูสินค้า ทดลองฟีเจอร์ และทดสอบประสบการณ์ผู้ใช้ เท่านั้น",
            },
            {
              icon: "🔐",
              title: "3. ความเป็นส่วนตัว",
              color: "from-blue-400 to-cyan-500",
              bgColor: "from-blue-50 to-cyan-50",
              borderColor: "border-blue-300",
              content:
                "เว็บไซต์นี้ ไม่เก็บข้อมูลส่วนตัวจริง เช่น การชำระเงิน, ข้อมูลบัตรเครดิต หรือที่อยู่จัดส่ง ข้อมูลที่อาจถูกเก็บ (เช่น ข้อมูลฟอร์ม) ใช้เพื่อ ทดสอบระบบเท่านั้น ไม่มีการนำข้อมูลไปใช้งานเชิงพาณิชย์หรือนำไปขายต่อ",
            },
            {
              icon: "⚖️",
              title: "4. ทรัพย์สินทางปัญญา",
              color: "from-indigo-400 to-purple-500",
              bgColor: "from-indigo-50 to-purple-50",
              borderColor: "border-indigo-300",
              content:
                "ภาพสินค้า ตัวละครอนิเมะ และเนื้อหาต่าง ๆ ถูกใช้เพื่อ การศึกษาเท่านั้น  ลิขสิทธิ์ของตัวละครทั้งหมดเป็นของเจ้าของลิขสิทธิ์ที่เกี่ยวข้อง เว็บไซต์นี้ไม่มีเจตนาละเมิดลิขสิทธิ์หรือใช้เชิงการค้า",
            },
            {
              icon: "🚫",
              title: "5. ข้อจำกัดความรับผิด",
              color: "from-amber-400 to-orange-500",
              bgColor: "from-amber-50 to-orange-50",
              borderColor: "border-amber-300",
              content:
                "เเว็บไซต์นี้จัดทำขึ้นเพื่อการทดลองใช้งาน เจ้าของโปรเจคจะ ไม่รับผิดชอบต่อความเสียหาย เช่น ความเข้าใจผิดว่าสินค้าซื้อขายจริง ความผิดพลาดของข้อมูล ความเสียหายที่เกิดจากการทดสอบฟังก์ชัน ทุกอย่าง “จำลอง” เพื่อการเรียนรู้เท่านั้น",
            },
            {
              icon: "🔄",
              title: "6. การเปลี่ยนแปลงข้อกำหนด",
              color: "from-teal-400 to-emerald-500",
              bgColor: "from-teal-50 to-emerald-50",
              borderColor: "border-teal-300",
              content:
                "เจ้าของโปรเจคสามารถแก้ไข ปรับปรุง หรือเปลี่ยนแปลงเนื้อหาบนเว็บไซต์ได้ตลอดเวลา เพื่อพัฒนาโปรเจคให้ดีขึ้น การใช้งานต่อถือว่าคุณยอมรับการเปลี่ยนแปลงนั้นโดยอัตโนมัติ",
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${section.bgColor} rounded-2xl p-6 shadow-md border-2 ${section.borderColor} transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{section.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            มีคำถามหรือข้อสงสัย?
          </h3>
          <p className="text-white text-lg mb-6">
            หากคุณมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเรา
          </p>
          <div className="flex justify-center space-x-4">
            <Link href={"/contact"}>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                📧 ติดต่อเรา
              </button>
            </Link>
            <Link href={"/"}>
              <button className="bg-purple-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                ← กลับหน้าหลัก
              </button>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            อัปเดตล่าสุด:{" "}
            {new Date().toLocaleDateString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-32 h-32 pointer-events-none">
        <div className="w-full h-full border-4 border-pink-300 rounded-full animate-ping opacity-20"></div>
      </div>
      <div className="fixed bottom-20 left-10 w-24 h-24 pointer-events-none">
        <div
          className="w-full h-full border-4 border-purple-300 rounded-full animate-ping opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default TermsPage;

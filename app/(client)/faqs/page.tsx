import Container from "@/components/Container";

const FaqsPage = () => {
  return (
    <Container>
      <div className="min-h-screen py-16 px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 shadow-lg shadow-purple-200/40 border border-pink-200">
          <div className="rounded-t-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-6">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">
              คำถามที่พบบ่อย
            </h1>
            <p className="mt-2 text-sm text-white/90">
              Frequently Asked Questions (FAQs)
            </p>
          </div>
          <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
            <div className="rounded-xl bg-white/70 p-5 shadow-sm border border-purple-100">
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                🌸 เว็บไซต์นี้ใช้งานฟรีหรือไม่?
              </h2>
              <p>
                ใช่ เว็บไซต์ของเราสามารถใช้งานได้ฟรี
                โดยไม่มีค่าใช้จ่ายเพิ่มเติม
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-5 shadow-sm border border-purple-100">
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                ✨ จำเป็นต้องสมัครสมาชิกหรือไม่?
              </h2>
              <p>
                การสมัครสมาชิกไม่จำเป็นสำหรับการใช้งานทั่วไป
                แต่การสมัครจะช่วยให้คุณเข้าถึงฟีเจอร์พิเศษเพิ่มเติมได้ เช่น สินค้าโปรด การสั่งซื้อสินค้า
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-5 shadow-sm border border-purple-100">
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                🔒 ข้อมูลส่วนตัวของฉันปลอดภัยหรือไม่?
              </h2>
              <p>
                เราให้ความสำคัญกับความปลอดภัยของข้อมูล
                และมีมาตรการในการปกป้องข้อมูลของผู้ใช้งาน
              </p>
            </div>

            <div className="rounded-xl bg-white/70 p-5 shadow-sm border border-purple-100">
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                💌 สามารถติดต่อทีมงานได้อย่างไร?
              </h2>
              <p>
                คุณสามารถติดต่อเราได้ผ่านหน้า Contact
                หรืออีเมลที่ระบุไว้บนเว็บไซต์
              </p>
            </div>
            <div className="pt-6 text-sm text-gray-500 text-center">
              หากไม่พบคำตอบที่ต้องการ สามารถติดต่อเราได้โดยตรง 💖
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaqsPage;

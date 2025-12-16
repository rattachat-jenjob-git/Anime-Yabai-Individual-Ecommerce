import Container from "@/components/Container";
import Image from "next/image";
import myPhoto from "@/images/Author/IMG_20231213_141032.jpg";

const Aboutpage = () => {
  return (
    <Container className="pt-10 pb-20 relative">
      <div className="fixed top-20 left-10 w-40 h-40 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-1/2 left-1/4 w-32 h-32 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-50 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
              <Image
                src={myPhoto}
                alt="Author"
                height={280}
                width={280}
                className="rounded-2xl object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10 shadow-2xl transform transition duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full -ml-12 -mb-12 opacity-50"></div>         
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  แนะนำตัว
                </h2>
              </div>
              <p className="leading-8 text-gray-700 text-lg mb-6">
                สวัสดีครับ ผมชื่อ<span className="font-bold text-blue-600"> นายรัฐฉัตร เจนจบ </span>
                ตอนนี้กำลังเป็นนักศึกษาระดับปริญญาตรีชั้นปีที่ 3 
                ของ<span className="font-bold text-indigo-600"> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </span>
                คณะวิทยาศาสตร์ประยุกต์ ภาควิชาคณิตศาสตร์ 
                สาขาวิชา<span className="font-bold text-purple-600"> คณิตศาสตร์เชิงวิทยาการคอมพิวเตอร์ (MC) </span>
                เกรดเฉลี่ย <span className="font-bold text-darkRed"> GPAX : 3.74</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-blue-200 transform hover:scale-105 transition duration-300">
                  <div className="text-2xl font-bold text-blue-600">Year 3</div>
                  <div className="text-sm text-gray-600 mt-1">ปีการศึกษา</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-indigo-200 transform hover:scale-105 transition duration-300">
                  <div className="text-2xl font-bold text-orange-400">KMUTNB</div>
                  <div className="text-sm text-gray-600 mt-1">มหาวิทยาลัย</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Interests
          </h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-1 shadow-2xl transform transition duration-500 hover:scale-105">
              <div className="bg-white rounded-3xl p-8 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                    💻
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-800">Programming</h3>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">Python</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">JavaScript</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">TypeScript</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">React</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">Next.js</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">Tailwind</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">HTML</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition duration-300">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-2xl transform transition duration-500 hover:scale-105">
              <div className="bg-white rounded-3xl p-8 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                    📊
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-800">Mathematics</h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 transform hover:scale-105 transition duration-300 border border-indigo-200">
                      <p className="text-lg font-medium text-gray-700">Data Science</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 transform hover:scale-105 transition duration-300 border border-purple-200">
                      <p className="text-lg font-medium text-gray-700">Statistics</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 transform hover:scale-105 transition duration-300 border border-blue-200">
                      <p className="text-lg font-medium text-gray-700">Mathematical Computing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                📝
              </div>
              <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
                "เว็บไซต์นี้จัดทำเพื่อเป็น <span className="font-bold text-blue-600">Project เดี่ยว </span> 
                เพื่อเอาไว้พัฒนาตนเอง<br/>ไม่ได้มีเจตนาจะทำเป็นเว็บไซต์ E-commerce จริงๆ 
                จึงเรียนมาเพื่อทราบ"
              </p>
              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <p className="text-sm text-gray-500 font-bold mx-3">รัฐฉัตร เจนจบ</p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-indigo-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Aboutpage;
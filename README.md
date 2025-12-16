component 20 % มาจาก Package shadcn.com เพื่อช่วยประหยัดเวลาและเขียน code ได้ง่ายขึ้น

ตัวจัดการระบบ login ใช้ clrek

ใช้ sanity.io เป็น Content Management Platform  backend เอาไว้เก็บข้อมูลสินค้า/บทความ/รูปภาพ แล้วให้ Frontend Next.js ดึงไปแสดง

ใช้ motion.dev ในการเคลื่อนไหว animation

ใช้ dayjs ในการแสดงวัน

ใช้ stripe.com จัดการเรื่องชำระเงิน (Payment)

ใช้ sanity เป็น DATABASE

npx shadcn@latest init 
npx shadcn@latest add button ... ... ...
npm install @clerk/nextjs
npm i dayjs
npm run typegen
npmjs.com
npm i react-icons
npm install zustand
npm install react-hot-toast
npm i stripe@latest
npm install -g @sanity/cli

"next": "^16.0.7",
"react": "^19.2.1",
"react-dom": "^19.2.1",
"react-icons": "^5.5.0",
"sanity": "^4.19.0",
"styled-components": "^6.1.19",
"tailwind-merge": "^3.4.0"


get stripe_webhook_secret


//รันตัวนี้เพื่อให้ข้อมูลเข้า sanity ถ้าไม่ใส่ ข้อมูล order จะไม่เข้า
stripe listen --forward-to localhost:3000/api/webhook


stripe trigger checkout.session.completed
# E-commerce Web Application

โปรเจกต์นี้เป็น Web Application ประเภท E-commerce พัฒนาด้วย Next.js ครอบคลุมทั้ง Frontend, Authentication, CMS และ Payment

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React 19
- Tailwind CSS + tailwind-merge
- shadcn/ui (ประมาณ 20% ของ UI Components)
- styled-components
- react-icons

### State & UX

- Zustand – State Management
- react-hot-toast – Notifications
- motion.dev – Animation
- dayjs – แสดงวันและเวลา

### Authentication

- Clerk – ระบบ Login / Register / Session Management

### Backend / CMS / Database

- Sanity.io – Headless CMS และ Database
  - เก็บข้อมูลสินค้า
  - บทความ
  - รูปภาพ

### Payment

- Stripe – จัดการชำระเงิน (Test Mode)

---

## Library & Package Versions

```json
{
  "next": "^16.0.7",
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "react-icons": "^5.5.0",
  "sanity": "^4.19.0",
  "styled-components": "^6.1.19",
  "tailwind-merge": "^3.4.0"
}
```

---

## Installation & Setup

### Install Dependencies

```bash
npm install
```

### shadcn/ui Setup

```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog ...
```

### Authentication (Clerk)

```bash
npm install @clerk/nextjs
```

ตั้งค่า Environment Variables ที่ Clerk Dashboard

---

### Sanity CMS Setup

```bash
npm install -g @sanity/cli
sanity init
npm run typegen
```

Sanity ใช้เป็น CMS และ Database หลัก

---

### Utility Libraries

```bash
npm i dayjs
npm install zustand
npm install react-hot-toast
npm i react-icons
```

---

## Stripe Payment (Test Mode)

### Install Stripe SDK

```bash
npm i stripe@latest
```

### Environment Variables

```env
STRIPE_SECRET_KEY=your_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Webhook

```bash
get stripe_webhook_secret
stripe listen --forward-to localhost:3000/api/webhook
stripe trigger checkout.session.completed
```

---

## Payment Testing

ระบบชำระเงินใช้ Stripe ใน Test Mode เพื่อจำลองขั้นตอนการชำระเงินจริงโดยไม่เกี่ยวข้องกับข้อมูลจริง

สามารถใช้ข้อมูลบัตรสำหรับทดสอบระบบได้ดังนี้

- Card Number: 4242 4242 4242 4242
- Expiry Date: 12/34
- CVV: 123

ข้อมูลดังกล่าวเป็น Test Card ของ Stripe สำหรับทดสอบระบบเท่านั้น
จะไม่มีการตัดเงินจริงหรือเชื่อมต่อกับบัตรของใคร

---

## Data Flow Overview

1. ผู้ใช้ Login ผ่าน Clerk
2. Frontend ดึงข้อมูลสินค้า / บทความจาก Sanity
3. ผู้ใช้ทำรายการสั่งซื้อ
4. Stripe จัดการ Checkout และ Payment
5. Webhook ส่งข้อมูล Order → API Route
6. บันทึกข้อมูล Order ลง Sanity Database

---

## Objective

- ฝึกออกแบบระบบ Web Application แบบ Fullstack
- เรียนรู้การเชื่อมต่อ Third-party Services (Clerk, Stripe, Sanity)
- ฝึกโครงสร้างโปรเจกต์ใกล้เคียง Production
- ใช้เป็น Portfolio สำหรับสมัครงานหรือสหกิจศึกษา

---

## Live Demo

[https://anime-yabai-individual-ecommerce.vercel.app/](https://anime-yabai-individual-ecommerce.vercel.app/)

---

## Note

โปรเจกต์นี้จัดทำเพื่อการศึกษาและใช้เป็นผลงานประกอบเท่านั้น

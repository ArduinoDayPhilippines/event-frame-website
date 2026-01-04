<div align="center">

# 🖼️ FrameIt

### Arduino Day Philippines Official Frame Creator

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Create. Frame. Share.**

*A modern web application for creating and sharing customized photo frames for Arduino Day Philippines events.*

[🚀 Demo](#) · [📖 Documentation](#) · [🐛 Report Bug](#) · [✨ Request Feature](#)

---

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Creation Tools
- **Custom Frame Templates** - Beautiful, ready-made frames
- **Drag & Drop Interface** - Intuitive image positioning
- **Scale & Rotate** - Perfect photo adjustments
- **Rich Text Captions** - Bold, italic, emoji & link support

</td>
<td width="50%">

### 🚀 Sharing & Storage
- **Shareable Links** - One-click frame sharing
- **Cloud Storage** - Save & manage your creations
- **Download Options** - High-quality exports
- **User Dashboard** - Track all your frames

</td>
</tr>
<tr>
<td width="50%">

### 🎯 User Experience
- **Responsive Design** - Mobile & desktop optimized
- **Dark Theme** - Modern sleek aesthetic
- **Fast Performance** - Next.js powered speed
- **Smooth Animations** - GSAP enhanced transitions

</td>
<td width="50%">

### 🔐 Security & Auth
- **Secure Authentication** - Supabase powered
- **Row Level Security** - Data protection
- **Session Management** - Persistent login
- **Password Recovery** - Easy account access

</td>
</tr>
</table>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd event-frame-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

1. **Sign In** - Create an account or log in
2. **Upload Photo** - Drag and drop or browse for your image
3. **Choose Frame** - Browse and select from available frame templates
4. **Customize** - Scale, rotate, and position your photo
5. **Add Caption** - Write a caption with rich text formatting
6. **Share or Download** - Generate a shareable link or download your creation

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icon library
- **html2canvas** - Image capture for downloads
- **GSAP** - Smooth animations

### Backend & Database
- **Supabase** - Authentication, database, and storage
- **PostgreSQL** - Relational database
- **Row Level Security** - Secure data access

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript 5** - Static type checking

## 📁 Project Structure

```
event-frame-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── [frameId]/      # Dynamic frame view page
│   │   ├── api/            # API routes (auth, user data)
│   │   ├── edit/           # Frame editing page
│   │   ├── login/          # Authentication page
│   │   ├── upload/         # Upload & manage frames
│   │   └── page.tsx        # Landing page
│   ├── components/         # React components
│   │   ├── auth/          # Authentication forms
│   │   ├── modals/        # Modal components
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── contexts/          # React Context providers
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
└── README.md             # Documentation
```

## 📧 Support

For questions or support, please contact:
- Facebook: [Arduino Day Philippines](https://www.facebook.com/arduinodayphilippines)
- Instagram: [@arduinodayphilippines](https://www.instagram.com/arduinodayphilippines/)
- LinkedIn: [Arduino Day Philippines](https://www.linkedin.com/company/arduinodayphilippines/)

---

© 2026 ADPH - Arduino Day Philippines. All rights reserved. | Designed for your story.


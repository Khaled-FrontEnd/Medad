// components/Header.jsx
"use client";

import Link, { useLinkStatus } from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let location = usePathname();
  console.log(location);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30"
      dir="ltr"
    >
      <nav className="flex flex-row-reverse justify-between items-center max-w-[1280px] mx-auto px-6 h-20">
        <div className="flex items-center gap-4">
          <span className="font-headline-xl text-headline-xl font-bold text-primary tracking-tight">
            مِداد
          </span>
        </div>
        <div className="hidden md:flex flex-row-reverse items-center gap-8">
          <Link
            className={`${
              location == "/" || location == "/home"
                ? "text-primary border-primary  font-bold border-b-2"
                : "text-on-surface-variant text-label-md"
            }  pb-1 text-label-md`}
            href="/"
          >
            الرئيسية
          </Link>
          <Link
            className={`${
              location == "/tracks"
                ? "text-primary border-primary  font-bold border-b-2"
                : "text-on-surface-variant text-label-md"
            }  pb-1 text-label-md`}
            href="/tracks"
          >
            المسارات
          </Link>
          <Link
            className={`${
              location == "/teachers"
                ? "text-primary border-primary  font-bold border-b-2"
                : "text-on-surface-variant text-label-md"
            }  pb-1 text-label-md`}
            href="/teachers"
          >
            المعلمون
          </Link>
          <Link
            className={`${
              location == "/pricing"
                ? "text-primary border-primary  font-bold border-b-2"
                : "text-on-surface-variant text-label-md"
            }  pb-1 text-label-md`}
            href="/pricing"
          >
            الأسعار
          </Link>
          <Link
           className={`${
              location == "/contact"
                ? "text-primary border-primary  font-bold border-b-2"
                : "text-on-surface-variant text-label-md"
            }  pb-1 text-label-md`}
            href="/contact"
          >
            اتصل بنا
          </Link>
        </div>
        <Link href={'/login'} className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20">
          تسجيل الدخول
        </Link>
      </nav>
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log("Registration data:", formData);
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block"
          >
            الاسم الكامل
          </label>
          <div className="relative group">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="أدخل اسمك الثلاثي"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full h-12 pr-12 pl-4 bg-surface-container-low border-none rounded-lg text-[16px] leading-6 font-normal text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors pointer-events-none">
              person
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block"
          >
            البريد الإلكتروني
          </label>
          <div className="relative group">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 pr-12 pl-4 bg-surface-container-low border-none rounded-lg text-[16px] leading-6 font-normal text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors pointer-events-none">
              mail
            </span>
          </div>
        </div>

        {/* Passwords Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block"
            >
              كلمة المرور
            </label>
            <div className="relative group">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full h-12 pr-12 pl-4 bg-surface-container-low border-none rounded-lg text-[16px] leading-6 font-normal text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors pointer-events-none">
                lock
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block"
            >
              تأكيد كلمة المرور
            </label>
            <div className="relative group">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full h-12 pr-12 pl-4 bg-surface-container-low border-none rounded-lg text-[16px] leading-6 font-normal text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors pointer-events-none">
                verified_user
              </span>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container"
          />
          <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
            أوافق على الشروط والأحكام
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-14 bg-primary-container text-on-primary rounded-xl text-[24px] leading-8 font-semibold hover:shadow-lg hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          إنشاء الحساب
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px bg-outline-variant/30 flex-1" />
        <span className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-outline uppercase tracking-wider">
          أو التسجيل عبر
        </span>
        <div className="h-px bg-outline-variant/30 flex-1" />
      </div>

      {/* Social Sign Up */}
      <SocialButtons />

      {/* Login Link */}
      <div className="mt-8 text-center">
        <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
          لديك حساب بالفعل؟{" "}
          <Link
            href="/login"
            className="text-primary font-bold hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </>
  );
}

// Social Buttons Component
function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Google Button */}
      <button className="flex items-center justify-center gap-2 h-12 bg-white border border-outline-variant/50 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface">
          Google
        </span>
      </button>

      {/* LinkedIn Button */}
      <button className="flex items-center justify-center gap-2 h-12 bg-white border border-outline-variant/50 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface">
          LinkedIn
        </span>
      </button>
    </div>
  );
}

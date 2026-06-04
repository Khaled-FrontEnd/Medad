'use client'

import Link from "next/link"

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
    console.log('Form submitted')
  }

  const togglePassword = (e) => {
    const button = e.currentTarget
    const input = document.getElementById('password')
    const isPassword = input.type === 'password'
    input.type = isPassword ? 'text' : 'password'
    button.textContent = isPassword ? 'visibility_off' : 'visibility'
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block pr-1"
          >
            البريد الإلكتروني
          </label>
          <div className="relative group">
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full px-4 py-3.5 rounded-lg bg-surface-container-low border border-transparent focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none text-right text-[16px] leading-6 font-normal"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
              mail
            </span>
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label
              htmlFor="password"
              className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant block"
            >
              كلمة المرور
            </label>
            <Link
              href="/forgot-password"
              className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-primary hover:underline transition-all"
            >
              نسيت كلمة المرور؟
            </Link>
          </div>
          <div className="relative group">
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3.5 rounded-lg bg-surface-container-low border border-transparent focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none text-right text-[16px] leading-6 font-normal"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
              aria-label="تبديل رؤية كلمة المرور"
            >
              visibility
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary-container text-on-primary py-4 rounded-lg text-[24px] leading-8 font-semibold shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          تسجيل الدخول
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-outline-variant" />
        <span className="flex-shrink mx-4 text-on-tertiary-container text-[12px] leading-4 tracking-[0.02em] font-semibold">
          أو المتابعة عبر
        </span>
        <div className="flex-grow border-t border-outline-variant" />
      </div>

      {/* Social Logins */}
      <SocialButtons />
    </>
  )
}

// Social Buttons Component
function SocialButtons() {
  const socialProviders = [
    {
      name: 'Google',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {socialProviders.map((provider) => (
        <button
          key={provider.name}
          className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors duration-200"
        >
          {provider.icon}
          <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface">
            {provider.name}
          </span>
        </button>
      ))}
    </div>
  )
}

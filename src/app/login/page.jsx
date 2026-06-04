
// app/login/page.jsx
import Link from 'next/link'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import LoginForm from '../components/login/LoginForm'

export const metadata = {
   title: 'تسجيل الدخول | مِداد',
   description: 'تسجيل الدخول إلى منصة مِداد التعليمية',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed" >
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="flex-grow  flex flex-col lg:flex-row-reverse overflow-hidden">
        {/* Left Side: Visual/Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary-container overflow-hidden items-center justify-center p-20">
          {/* Background Blurs */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-right space-y-6">
            <h2 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-white max-w-lg leading-tight">
              ارتقِ بمسارك التعليمي نحو التميز الرقمي
            </h2>
            <p className="text-[18px] leading-7 font-normal text-on-primary-container max-w-md">
              انضم إلى آلاف الطلاب والمعلمين في رحلة معرفية فريدة مصممة بأحدث تقنيات التعليم الحديثة.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-10">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-secondary-fixed text-[32px] leading-10 font-semibold">15k+</div>
                <div className="text-white/60 text-[14px] leading-5 tracking-[0.01em] font-medium">طالب نشط</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-secondary-fixed text-[32px] leading-10 font-semibold">450+</div>
                <div className="text-white/60 text-[14px] leading-5 tracking-[0.01em] font-medium">دورة متقدمة</div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute bottom-0 left-0 w-3/4 opacity-40 translate-y-1/4 -translate-x-1/4">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" className="text-secondary-container/30" />
              <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="3" className="text-secondary-fixed/40" />
              <circle cx="200" cy="200" r="50" fill="currentColor" className="text-secondary-container/20" />
              <path d="M100 200 Q200 100 300 200" stroke="currentColor" strokeWidth="2" className="text-white/20" fill="none" />
              <path d="M100 200 Q200 300 300 200" stroke="currentColor" strokeWidth="2" className="text-white/20" fill="none" />
            </svg>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-10 bg-surface">
          <div className="w-full max-w-[480px] space-y-8">
            {/* Form Header */}
            <div className="text-center lg:text-right space-y-2">
              <h1 className="text-[32px] leading-10 font-semibold text-primary font-bold">
                تسجيل الدخول إلى مِداد
              </h1>
              <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
                مرحباً بك مجدداً! يرجى إدخال بياناتك للمتابعة.
              </p>
            </div>

            {/* Login Card */}
            <div className="bg-white/80 backdrop-blur-[12px] border border-slate-200/80 p-8 rounded-2xl shadow-sm space-y-6">
              <LoginForm />
            </div>

            {/* Registration Link */}
            <div className="text-center">
              <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
                ليس لديك حساب؟{' '}
                <Link href="/register" className="text-primary font-bold hover:underline">
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}



import Link from "next/link";
import Header from "../components/home/Header";
import RegisterForm from "../components/register/RegisterForm";
import Footer from "../components/home/Footer";

export const metadata = {
  title: "إنشاء حساب | مِداد",
  description: "انضم إلى منصة مِداد التعليمية وابدأ رحلتك التعليمية",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Atmospheric Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed/20 -z-10 bento-shape" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl -z-10" />

        {/* تغيير هنا: إضافة items-center و gap للمسافات بدلاً من justify-around */}
        <div className="mx-auto px-4 md:px-10 py-3 flex flex-col md:flex-row items-center gap-12 max-w-[1280px]">
          {/* Right Side: Registration Form */}
          <div className="w-full md:w-[600px] bg-surface-container-lowest p-8 md:p-10 rounded-xl border border-outline-variant/30 shadow-md">
            <div className="mb-8 text-center md:text-right">
              <h1 className="text-[24px] leading-8 font-semibold text-primary mb-2">
                انضم إلى مِداد وابدأ رحلتك
              </h1>
              <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
                قم بإنشاء حسابك اليوم للوصول إلى أدوات التعلم المتميزة
              </p>
            </div>

            <RegisterForm />
          </div>

          {/* Left Side: Visual/Value Proposition (Desktop Only) */}
          <div className="hidden md:flex flex-1 flex-col items-end text-right">
            {/* إضافة w-full لتوسيع العنصر */}
            <div className="w-full bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm max-w-md">
              <span className="inline-flex items-center justify-center p-3 bg-primary-fixed rounded-lg text-primary mb-6">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
              </span>

              <h2 className="text-[32px] leading-10 font-semibold text-primary mb-4 leading-tight">
                مستقبلك يبدأ بكلمة، وينمو بالمداد.
              </h2>

              <p className="text-[18px] leading-7 font-normal text-on-surface-variant mb-8">
                انضم إلى أكثر من ٥٠,٠٠٠ طالب ومعلم في أكبر منصة تعليمية عربية
                حديثة مصممة لتمكين العقول الشابة.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "وصول غير محدود لأكثر من ١٠٠٠ مسار تدريبي",
                  "شهادات معتمدة من نخبة المعلمين العرب",
                  "مجتمع تعليمي تفاعلي ودعم فني على مدار الساعة",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

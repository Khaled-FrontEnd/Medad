// app/tracks/page.jsx
import Link from "next/link";
import Header from "../components/home/Header";
import SearchInput from "../components/tracks/SearchInput";
import Footer from "../components/home/Footer";
import TrackGridSection from "../components/tracks/TrackGridSection";

export const metadata = {
  title: "مداد | المسارات التعليمية",
  description:
    "احترف المهارات المطلوبة عبر مسارات تعليمية متكاملة في البرمجة والذكاء الاصطناعي والتصميم والتسويق",
};

export default function TracksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Track */}
        <FeaturedTrack />

        {/* Track Grid with Filter Sidebar */}
        <TrackGridSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const categories = [
    { label: "الكل", active: true },
    { label: "البرمجة", active: false },
    { label: "الذكاء الاصطناعي", active: false },
    { label: "التصميم", active: false },
    { label: "التسويق", active: false },
    { label: "إدارة الأعمال", active: false },
    { label: "البيانات", active: false },
  ];

  return (
    <section className="hero-gradient py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
        <h1 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-primary mb-6">
          احترف المهارات المطلوبة
          <br />
          عبر مسارات تعليمية متكاملة
        </h1>
        <p className="text-[18px] leading-7 font-normal text-on-surface-variant max-w-2xl mx-auto mb-3">
          نقدم لك رحلة تعلم منظمة تبدأ معك من الصفر وحتى الإتقان، بإشراف خبراء
          في مجالات التقنية والإدارة والتصميم.
        </p>

        {/* Search and Categories */}
        {/* <div className="max-w-3xl mx-auto space-y-8">
          <SearchInput />
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category.label}
                href="#track-grid"
                className={`px-6 py-2 rounded-full text-[14px] leading-5 tracking-[0.01em] font-medium transition-colors ${
                  category.active
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {category.label}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

// ==================== FEATURED TRACK ====================
function FeaturedTrack() {
  return (
    <section className="pb-16 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[32px] leading-10 font-semibold text-on-surface m-5">
          المسار المميز
        </h2>
        {/* <Link
            href="#"
            className="text-primary text-[14px] leading-5 tracking-[0.01em] font-medium flex items-center gap-1"
          >
            عرض جميع المميزات
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
          </Link> */}

        <div className="bg-white rounded-3xl overflow-hidden premium-shadow grid md:grid-cols-2 gap-0">
          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 text-right">
            <div className="inline-flex items-center gap-2 bg-secondary-container/10 text-secondary px-3 py-1 rounded-full mb-6 w-fit">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-[12px] leading-4 tracking-[0.02em] font-semibold">
                الأكثر طلباً
              </span>
            </div>

            <h3 className="text-[32px] leading-10 font-semibold text-on-surface mb-4">
              مسار تعلم الآلة والتعلم العميق
            </h3>
            <p className="text-[16px] leading-6 font-normal text-on-surface-variant mb-8">
             انطلق من الأساسيات الرياضية إلى بناء شبكات عصبية متقدمة باستخدام TensorFlow و PyTorch.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-right">
                <p className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold mb-1">
                  المحتوى
                </p>
                <p className="text-on-surface text-[14px] leading-5 tracking-[0.01em] font-medium">
                  ١٢ دورة تدريبية
                </p>
              </div>
              <div className="text-right border-r border-outline-variant pr-4">
                <p className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold mb-1">
                  المدة
                </p>
                <p className="text-on-surface text-[14px] leading-5 tracking-[0.01em] font-medium">
                  ٨٥ ساعة
                </p>
              </div>
              <div className="text-right border-r border-outline-variant pr-4">
                <p className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold mb-1">
                  المستوى
                </p>
                <p className="text-on-surface text-[14px] leading-5 tracking-[0.01em] font-medium">
                  متوسط
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-row-reverse justify-end">
              <Link
                href={`/tracks/5`}
                className="bg-primary-container text-on-primary px-10 py-4 rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium hover:opacity-90 transition-opacity"
              >
                استكشف المسار الآن
              </Link>
              <Link
                href={`/tracks/5`}
                className="border-2 border-primary text-primary px-6 py-4 rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium hover:bg-primary/5 transition-colors"
              >
                عرض التفاصيل
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative min-h-[320px] md:min-h-full order-1 md:order-2 bg-gradient-to-br overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHp3ZtZwALjTQiB1-KKMBL49PdPz6OqPMBVhhqZwS0Sid51QdqeMviNBEa_GcdKx-41xog2GNsRyjR2j4BvmS9rKKt1GCvmjnTLIx3LDlF-XvEWsJLvIR9RxWYD-O3VFGxrMTbTPsXnllQD9g38MiaWxaEXCMiXZbc08NwcLM1XnCFx2Vxw5_uIK75svKoAYORZ6eo2_CGhKBeSJ7bYyWTSaqMRFRvkS4TOYI7fHwp_EGa0zl6TRw4dFxZqqoH-9JjYGiz88AAkZuI"
              alt="track-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-primary-container relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-secondary rounded-full blur-[100px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-primary rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center relative z-10">
        <h2 className="text-[32px] leading-10 font-semibold text-on-primary mb-6">
          غير مستعد لاختيار مسار محدد؟
        </h2>
        <p className="text-[18px] leading-7 font-normal text-on-primary/80 mb-10 max-w-xl mx-auto">
          تواصل مع مستشارينا التعليميين لمساعدتك في رسم خطة تعلم تناسب أهدافك
          المهنية.
        </p>
        <button className="bg-white text-primary px-10 py-4 rounded-xl text-[24px] leading-8 font-semibold font-bold hover:bg-surface-container-lowest transition-colors shadow-xl">
          احجز استشارة مجانية
        </button>
      </div>
    </section>
  );
}

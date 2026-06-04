import Link from "next/link";

// components/CTASection.jsx
export default function CTASection() {
  return (
    <section className="py-10">
      <div className="max-w-container-max  mx-auto px-margin-desktop">
        <div className="bg-primary-container rounded-[48px] p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="font-display-lg text-display-lg text-on-primary relative z-10">
            جاهز لتبدأ رحلتك التعليمية؟
          </h2>
          <p className="font-body-lg text-on-primary-container/80 max-w-2xl mx-auto relative z-10">
            انضم إلى أكثر من ٥٠ ألف متعلم يبنون مستقبلهم الآن مع مِداد. لا تدع
            الفرصة تفوتك.
          </p>
          <Link
            href={"/login"}
            className="bg-white text-primary px-12 py-5 rounded-2xl font-headline-lg hover:bg-secondary-fixed transition-all active:scale-95 relative top-7 z-10 shadow-2xl"
          >
            انضم إلينا الآن
          </Link>
        </div>
      </div>
    </section>
  );
}

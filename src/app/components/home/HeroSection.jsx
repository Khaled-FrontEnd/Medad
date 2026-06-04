import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex  overflow-hidden hero-gradient py-16">
      <div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 text-right z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
            <span className="font-label-sm text-label-sm">
              الجيل القادم من التعليم الذكي
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            العلم يبدأ من مِداد
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            استمتع بتجربة تعليمية ذكية تعتمد على أحدث التقنيات لمساعدتك في بناء
            مستقبلك المهني بأعلى المعايير العالمية.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href={'./login'} className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-label-md text-[18px] hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              ابدأ التعلم
            </Link>
            <Link href={'./tracks'} className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-label-md text-[18px] hover:bg-primary/5 transition-all active:scale-95">
              استكشف المسارات
            </Link>
          </div>
        </div>

        <div className="relative group min-h-[350px]">
          <div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full -z-10" />
          {/* <ReactSVG src="./online-learning-animate.svg" /> */}
          <Image
            src={"/online-learning-animate.svg"}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

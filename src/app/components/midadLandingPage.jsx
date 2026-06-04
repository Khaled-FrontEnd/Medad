"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { ReactSVG } from "react-svg";

const MidadLandingPage = () => {
  // Refs for observer and counters
  const statsSectionRef = useRef(null);
  const animatedRef = useRef(false);

  // Counter animation function
  const animateCounter = (id, target, isPercentage = false) => {
    let current = 0;
    const element = document.getElementById(id);
    if (!element) return;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.innerText =
          target.toLocaleString() + (isPercentage ? "%" : "+");
        clearInterval(timer);
      } else {
        element.innerText =
          Math.floor(current).toLocaleString() + (isPercentage ? "%" : "+");
      }
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            animateCounter("stat-students", 50000, false);
            animateCounter("stat-courses", 200, false);
            animateCounter("stat-teachers", 150, false);
            animateCounter("stat-success", 98, true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  const demoData = [
    {
      name: "Google",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    },
    {
      name: "Microsoft",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
    {
      name: "Harvard University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47kr9-qH6GNvEL90iVVykHpj-VUXProxfQA&s",
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/44/MIT_Seal.svg",
    },
    {
      name: "Amazon",
      logo: "https://media.icn.com/media/storage/uploads/all/K9bQn9Mzl5A1m24A6b1Qu4jvvD0cRFZr1jj0JGtD.webp",
    },
    {
      name: "Stanford University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHMT7C6XJHzICYwZ9AdgNmli-SvPiII_F4w&s",
    },
    {
      name: "Apple",
      logo: "https://cdn-icons-png.flaticon.com/512/731/731985.png",
    },
    {
      name: "Oxford University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Arms_of_University_of_Oxford.svg",
    },
  ];

  return (
    <div
      className="overflow-x-hidden font-sans"
      style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
    >
      {/* TopNavBar */}
      <header
        className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30"
        dir="ltr"
      >
        <nav className="flex flex-row-reverse justify-between items-center max-w-[1280px] mx-auto px-6 h-20">
          <div className="flex items-center gap-4">
            <span className="text-headline-md font-bold text-primary tracking-tight">
              مِداد
            </span>
          </div>
          <div className="hidden md:flex flex-row-reverse items-center gap-8">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md"
              href="#"
            >
              الرئيسية
            </a>
            <a
              className="text-on-surface-variant text-label-md hover:text-primary transition-colors"
              href="#"
            >
              المسارات
            </a>
            <a
              className="text-on-surface-variant text-label-md hover:text-primary transition-colors"
              href="#"
            >
              المعلمون
            </a>
            <a
              className="text-on-surface-variant text-label-md hover:text-primary transition-colors"
              href="#"
            >
              الأسعار
            </a>
            <a
              className="text-on-surface-variant text-label-md hover:text-primary transition-colors"
              href="#"
            >
              اتصل بنا
            </a>
          </div>
          <Link className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20">
            تسجيل الدخول
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-16 ">
            <div className="space-y-8 animate-fade-in-up content-center">
              <h1 className="font-display-lg text-display-lg leading-tight text-primary">
                العلم يبدأ من مِداد
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                انطلق في رحلتك التعليمية مع منصة مِداد المتطورة. نقدم لك أفضل
                المسارات التعليمية المعتمدة عالمياً بأيدي خبراء متخصصين لتصل إلى
                القمة في مجالك المهني.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-title-lg text-title-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  ابدأ التعلم
                </button>
                <button className="border border-primary text-primary px-10 py-4 rounded-xl font-title-lg text-title-lg hover:bg-primary/5 transition-colors">
                  استكشف المسارات
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-primary/10 blur-[120px] rounded-full scale-150"></div>

              <div
                style={{ width: "70%", marginRight: "auto", marginLeft: 20 }}
                className="hidden sm:block"
              >
                <ReactSVG src="./online-learning-animate.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col gap-10 py-10">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {demoData.map((company, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-xs text-on-surface-variant text-center">
                  {company.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      {/* Stats Section */}
      <section ref={statsSectionRef} className="py-16 ">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-6 text-center">
            <h2 className="font-display-lg text-headline-md text-primary mb-4">
              الإحصائيات
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              أرقاما تتحدث عنا
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around gap-5">
            {[
              { id: "stat-students", label: "طالب نشط", suffix: "+" },
              { id: "stat-courses", label: "دورة تدريبية", suffix: "+" },
              { id: "stat-teachers", label: "معلم خبير", suffix: "+" },
              { id: "stat-success", label: "نسبة النجاح", suffix: "%" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-white rounded-2xl shadow-sm border border-primary/5 md:w-1/4"
              >
                <div
                  className="text-primary font-display-lg text-[40px] mb-2"
                  id={stat.id}
                >
                  {idx === 0
                    ? "50,000+"
                    : idx === 1
                    ? "200+"
                    : idx === 2
                    ? "150+"
                    : "98%"}
                </div>
                <div className="font-label-md text-label-md text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-display-lg text-headline-md text-primary mb-4">
              مساراتنا التعليمية
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              اختر التخصص الذي يناسب طموحاتك وابدأ اليوم
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "terminal",
                title: "البرمجة وتطوير المواقع",
                lessons: 45,
                level: "متوسط",
              },
              {
                icon: "psychology",
                title: "الذكاء الاصطناعي",
                lessons: 38,
                level: "متقدم",
              },
              {
                icon: "brush",
                title: "التصميم الإبداعي",
                lessons: 52,
                level: "مبتدئ",
              },
              {
                icon: "campaign",
                title: "التسويق الرقمي",
                lessons: 30,
                level: "متوسط",
              },
              {
                icon: "security",
                title: "الأمن السيبراني",
                lessons: 60,
                level: "متقدم",
              },
              {
                icon: "monitoring",
                title: "علم البيانات",
                lessons: 42,
                level: "متوسط",
              },
            ].map((track, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl ghost-border group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl">
                    {track.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-title-lg mb-2">
                  {track.title}
                </h3>
                <div className="flex gap-4 mb-6">
                  <span className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      menu_book
                    </span>
                    {track.lessons} درس
                  </span>
                  <span className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      signal_cellular_alt
                    </span>
                    {track.level}
                  </span>
                </div>
                <button className="w-full py-3 rounded-xl border border-primary/20 text-primary font-label-md text-label-md group-hover:bg-primary group-hover:text-white transition-all">
                  عرض المسار
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-6">
              <div className="text-primary font-label-md text-label-md font-bold tracking-widest">
                لماذا مِداد؟
              </div>
              <h2 className="font-display-lg text-headline-md text-on-background">
                نظام تعليمي متكامل صمم خصيصاً لنجاحك
              </h2>
              <p className="font-body-lg text-body-lg text-secondary">
                نحن لا نقدم مجرد دروس، بل نبني لك بيئة تعليمية تفاعلية تضمن
                استيعابك الكامل للمهارات المطلوبة في سوق العمل.
              </p>
              <div className="space-y-4 pt-8">
                {[
                  {
                    title: "تعلم تفاعلي",
                    desc: "تفاعل مباشر مع المحتوى والتمارين التطبيقية.",
                  },
                  {
                    title: "اختبارات ذكية",
                    desc: "تقييم مستمر لمستواك مع توجيهات مخصصة.",
                  },
                  {
                    title: "تتبع التقدم",
                    desc: "لوحة تحكم شاملة لمتابعة مسيرتك التعليمية.",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-sm fill-icon">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-secondary font-label-md text-label-md">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 bottom-0">
              {[
                {
                  icon: "workspace_premium",
                  title: "شهادات معتمدة",
                  desc: "وثق مهاراتك بشهادات احترافية مقبولة.",
                  mt: "mt-12",
                },
                {
                  icon: "groups",
                  title: "مجتمع طلابي",
                  desc: "تبادل الخبرات مع آلاف المتعلمين حول العالم.",
                  mt: "",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-3xl shadow-sm border border-primary/5 ${card.mt}`}
                >
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">
                    {card.icon}
                  </span>
                  <h4 className="font-title-lg text-title-lg mb-2">
                    {card.title}
                  </h4>
                  <p className="text-secondary font-label-md text-label-md">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-display-lg text-headline-md text-primary mb-4">
              تعرف على خبرائنا
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              نخبة من المعلمين الممارسين في كبرى الشركات العالمية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "د. أحمد خالد",
                title: "خبير تطوير برمجيات",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu4hWRN6zF_eCJrJEE2KQ16uMIFYcMlOlBQnq_tQpmndINQzTFFvZ1ydAHu44e1QJu7q35kmHiUuCaNzejuBes3sjlh6M-Hy4_vyQ7TqFhPn4PEehdXMW1s1lw2RkSuDuwWj-0pGsMwnz30lk1OgXKe8ebwnM9IWNhh3T9u0Zrx6irrJnS7_gsQ73a1Uun5POfCSAmkRDwuqzpDSb44MD-HXC2TwSFW34rnqkTJthQoZI8p4g7Uoymkn3R4EnTATRGBSHaBku3WlwR",
              },
              {
                name: "م. سارة منصور",
                title: "خبيرة تصميم واجهات UI/UX",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOL1-CYl1BFWOmLXNMuSuS7B0icURNK3dGL2x1Xu3XTq8D5qqmmiTCJliYyNrLDLfxriiYIod2m057pzgxzfPvydmuENkJsGyQS_JDFNceKLetKecW6NNLkRg-GqLmihZITbYyWzBVhuu69QuM02r6lobxlRk9KI2lBJCTFrwWLHR_vAr-mHmBvm4u5bGSPG5bXxOBA-fo4_NuAcwbc3vJ6CHw7GYznmH5tGEAtX6c5Z-L2xBxDA20sdZN0LlQRtAA9KMhg2aSbjMe",
              },
              {
                name: "أ. فيصل عمر",
                title: "خبير علم البيانات",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy9X5yrGuRpoVXJ9vV9p2LXfgbMptyEPgBhk1vH7s2blngZpzdog_x9BXAkkWhcTA9QLWhbH5T1EwJx0kQTVwdRBdND1zL26B0Ih_d74h8UjbrxkUMBLG-ok2CPALoPcU948f6OotfbscxDgX4gS1lgM-aFyeZqf-e-1qhtX6J8VQgYtoeo_mS4xloNms98jFCukuuKMYRUD8V6NlJlhGcLleIxZtsbTRH7wJd8U47ik7TqWb7Jbr8a-uw8UXXZ1KkXxXrlBmYsm2y",
              },
              {
                name: "د. ليلى حسن",
                title: "خبيرة الأمن السيبراني",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKLnJlTDclJelmfhkxO4NarQdGhzf9Ew-CCd2HdUVczKf1g4cmXxYDpnl4NhGMuT3V1htvHEznOYHEY1wgBMqWZe4ueUo63xu-_gpT65qcG4J1-IjvgiOIhtEt76k27xBr7ANlaDKv5OC9zGZRyqPGSok57Cx1gJexIfAXOqCZbACLlFucAFePIBYoBNxWGGLVBdhb3gMzv2C7fMFKT0D0aezQmj3HQ-WcYD6c_W3bTwGT09ETYG-IPwz59nz89p-prVjVJKzgwvJI",
              },
            ].map((teacher, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <img
                    alt={teacher.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                    src={teacher.img}
                  />
                </div>
                <h3 className="font-headline-md text-title-lg">
                  {teacher.name}
                </h3>
                <p className="text-secondary font-label-md text-label-md">
                  {teacher.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md mb-4">
              ماذا يقول طلابنا؟
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "منصة مِداد غيرت مساري المهني بالكامل. المحتوى منظم جداً والتطبيق العملي ساعدني في الحصول على وظيفة أحلامي.",
                name: "عمران علي",
                track: "طالب مسار البرمجة",
              },
              {
                text: "أفضل ما في مِداد هو المعلمين. الشرح مبسط جداً ومعلومات حديثة تواكب ما نراه في الشركات الكبيرة حالياً.",
                name: "هند جاسم",
                track: "طالبة مسار التصميم",
              },
              {
                text: "الشهادات المعتمدة من مِداد كانت نقطة قوة في سيرتي الذاتية. أنصح كل من يريد تعلم مهارة جديدة بالانضمام.",
                name: "خالد محمود",
                track: "طالب مسار الأمن السيبراني",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-primary-container p-8 rounded-3xl relative"
              >
                <span className="material-symbols-outlined absolute top-4 left-4 text-primary-fixed/20 text-6xl">
                  format_quote
                </span>
                <p className="font-body-md text-body-md mb-8 relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high"></div>
                  <div>
                    <div className="font-title-lg text-label-md">
                      {testimonial.name}
                    </div>
                    <div className="text-primary-fixed/60 font-label-sm text-label-sm">
                      {testimonial.track}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container dark:bg-surface-dim">
        <div className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-base">
          <div className="font-display-lg text-title-lg font-bold text-primary">
            مِداد
          </div>
          <div className="flex gap-6 my-6 md:my-0">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Help Center",
              "Career",
            ].map((item, idx) => (
              <a
                key={idx}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:underline transition-all"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="font-label-md text-label-md text-on-surface-variant opacity-90">
            © 2024 Midad Education Platform. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Add required Google Fonts and Material Icons links */}
    </div>
  );
};

export default MidadLandingPage;

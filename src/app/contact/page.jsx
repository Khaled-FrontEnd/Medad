// app/contact/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle"); // idle, loading, success
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "استفسار عام",
    message: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "استفسار عام",
        message: "",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "location_on",
      label: "الموقع الفعلي",
      value: "حي النخيل، طريق الملك فهد، الرياض، المملكة العربية السعودية",
    },
    {
      icon: "call",
      label: "رقم الهاتف",
      value: "+966 11 234 5678",
      dir: "ltr",
    },
    {
      icon: "mail",
      label: "البريد الإلكتروني",
      value: "support@midad.edu.sa",
      dir: "ltr",
    },
  ];

  const subjects = [
    "استفسار عام",
    "دعم تقني",
    "التسجيل في الدورات",
    "التعاون الأكاديمي",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background antialiased">
      {/* Header */}
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Contact Content Grid */}
        <section className="py-8 max-w-[1280px] mx-auto px-4  md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Info & Map (Right Side in RTL) */}
            <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
              {/* Contact Info Card */}
              <div className="animate-section bg-white p-8 rounded-xl border border-outline-variant/30 contact-card-shadow opacity-0 translate-y-10 transition-all duration-700">
                <h2 className="text-[32px] leading-10 font-semibold text-primary mb-8">
                  معلومات التواصل
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {info.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant mb-1">
                          {info.label}
                        </p>
                        <p
                          className="text-[16px] leading-6 font-normal text-on-surface"
                          dir={info.dir || "rtl"}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="animate-section bg-surface-container-low rounded-xl border border-outline-variant/30 h-[300px] relative overflow-hidden group opacity-0 translate-y-10 transition-all duration-700">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-[80px] text-primary/20 mb-4">
                      map
                    </span>
                    <p className="text-on-surface-variant text-[14px] leading-5 tracking-[0.01em] font-medium">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                {/* Animated Pin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.38813713098!2d46.6752957!3d24.713551700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f035f01d57365%3A0x3099561251f740bc!2z2K3ZiiDYp9mE2YbYrtmK2YQ!5e0!3m2!1sar!2seg!4v1779791902625!5m2!1sar!2seg"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Contact Form (Left Side in RTL) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="animate-section bg-white p-8 lg:p-12 rounded-xl border border-outline-variant/30 contact-card-shadow h-full opacity-0 translate-y-10 transition-all duration-700">
                <h2 className="text-[32px] leading-10 font-semibold text-primary mb-2">
                  أرسل لنا رسالة
                </h2>
                <p className="text-[16px] leading-6 font-normal text-on-surface-variant mb-10">
                  سوف نقوم بالرد على استفسارك في غضون 24 ساعة عمل.
                </p>

                <form
                  ref={formRef}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="fullName"
                        className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant mr-1"
                      >
                        الاسم الكامل
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-[16px] leading-6 font-normal transition-all outline-none"
                        style={{
                          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant mr-1"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        dir="ltr"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-[16px] leading-6 font-normal transition-all outline-none"
                        style={{
                          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant mr-1"
                    >
                      الموضوع
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-[16px] leading-6 font-normal transition-all outline-none appearance-none cursor-pointer"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      }}
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant mr-1"
                    >
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="كيف يمكننا مساعدتك اليوم؟"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-[16px] leading-6 font-normal transition-all outline-none resize-none"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className={`w-full md:w-auto px-10 py-4 rounded-lg text-[14px] leading-5 tracking-[0.01em] font-medium hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 ${
                      formState === "success"
                        ? "bg-green-600 text-white"
                        : "bg-primary-container text-white"
                    } ${
                      formState === "loading"
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formState === "loading" && (
                      <>
                        <span>جاري الإرسال...</span>
                        <span className="material-symbols-outlined animate-spin">
                          sync
                        </span>
                      </>
                    )}
                    {formState === "success" && (
                      <>
                        <span>تم الإرسال بنجاح!</span>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                      </>
                    )}
                    {formState === "idle" && (
                      <>
                        <span>إرسال الرسالة</span>
                        <span className="material-symbols-outlined text-sm">
                          send
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

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
  return (
    <section className="relative pt-24 py-7 overflow-hidden bg-white">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-10 relative z-10 text-center">
        <h1 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-primary mb-6">
          اتصل بنا
        </h1>
        <p className="text-[18px] leading-7 font-normal text-on-surface-variant max-w-2xl mx-auto">
          نحن هنا لمساعدتك في رحلتك التعليمية. سواء كان لديك استفسار حول الدورات
          أو ترغب في الانضمام إلى نخبة المعلمين، فريقنا جاهز للتواصل معك.
        </p>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="py-10 bg-primary-container text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-[32px] leading-10 font-semibold mb-3">
            هل تفضل المحادثة المباشرة؟
          </h2>
          <p className="text-[18px] leading-7 font-normal text-white/80">
            فريق الدعم متاح عبر الدردشة من الأحد إلى الخميس، 9 صباحاً - 5 مساءً.
          </p>
        </div>
        <button className="px-8 py-4 bg-secondary-container text-primary rounded-full text-[14px] leading-5 tracking-[0.01em] font-medium hover:bg-white transition-colors duration-300">
          بدء محادثة فورية
        </button>
      </div>
    </section>
  );
}

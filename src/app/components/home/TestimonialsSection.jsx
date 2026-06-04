// components/TestimonialsSection.jsx
export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "كانت رحلة مذهلة في تعلم الذكاء الاصطناعي. المحتوى باللغة العربية جعل المفاهيم المعقدة سهلة الفهم جداً.",
      name: "عمر خالد",
      role: "مطور بيانات",
      initial: "ع",
    },
    {
      text: "أفضل استثمار قمت به لمستقبلي المهني. حصلت على وظيفة أحلامي في التصميم بعد شهر واحد من إنهاء المسار.",
      name: "سارة أحمد",
      role: "مصممة واجهات",
      initial: "س",
    },
    {
      text: "الدعم الفني ومجتمع الطلاب كانوا دائماً متواجدين للإجابة على تساؤلاتي. تجربة تعليمية متكاملة حقاً.",
      name: "فيصل السعيد",
      role: "مطور ويب",
      initial: "ف",
    },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl text-primary">قالوا عن مِداد</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 relative"
            >
              <span className="material-symbols-outlined text-primary/10 text-6xl absolute top-4 left-4">
                format_quote
              </span>
              
              <div className="flex gap-1 text-secondary-container mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="font-body-md text-on-surface-variant mb-8">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <h6 className="font-label-md text-primary">{testimonial.name}</h6>
                  <p className="text-[12px] text-outline">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
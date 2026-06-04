// components/FAQSection.jsx
export default function FAQSection() {
  const faqs = [
    {
      question: 'هل الشهادات معتمدة دولياً؟',
      answer:
        'نعم، جميع شهادات مِداد معتمدة من قبل شركائنا التقنيين وتعكس معايير الصناعة العالمية، مما يعزز من قوة سيرتك الذاتية.',
      defaultOpen: true,
    },
    {
      question: 'كيف يمكنني الدفع مقابل الدورات؟',
      answer:
        'نوفر خيارات دفع متعددة تشمل البطاقات الائتمانية، مدى، Apple Pay، بالإضافة إلى خطط تقسيط ميسرة للطلاب.',
    },
    {
      question: 'هل يمكنني الوصول إلى المحتوى بعد انتهاء الدورة؟',
      answer:
        'بالتأكيد، بمجرد اشتراكك في مسار، ستحصل على وصول مدى الحياة للمحتوى التعليمي والتحديثات المستقبلية.',
    },
    {
      question: 'هل يوجد دعم فني ومساعدة أثناء التعلم؟',
      answer:
        'نعم، لدينا فريق دعم متخصص متاح على مدار الساعة، بالإضافة إلى مجتمع تفاعلي من المدربين والطلاب لمساعدتك.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl text-primary">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl bg-surface border border-outline-variant/30 overflow-hidden"
              open={faq.defaultOpen}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline-lg text-primary group-open:bg-primary/5 transition-colors">
                {faq.question}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 font-body-md text-on-surface-variant bg-primary/5">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
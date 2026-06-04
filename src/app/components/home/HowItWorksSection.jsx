// components/HowItWorksSection.jsx
export default function HowItWorksSection() {
  const steps = [
    {
      icon: 'ads_click',
      title: '1. اختر مسارك',
      description: 'استعرض مساراتنا التعليمية المتنوعة واختر ما يناسب شغفك.',
    },
    {
      icon: 'school',
      title: '2. ابدأ التعلم',
      description: 'تعلم بمرونة تامة من خلال محتوى غني وتدريبات عملية مكثفة.',
    },
    {
      icon: 'verified',
      title: '3. احصل على الشهادة',
      description: 'أتمم متطلبات المسار واحصل على شهادة معتمدة تفتح لك الأبواب.',
    },
  ]

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-xl text-headline-xl text-primary">
            كيف تبدأ رحلتك؟
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            ثلاث خطوات بسيطة تفصلك عن حلمك المهني
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center relative px-8 ${
                index < steps.length - 1 ? 'step-line' : ''
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center mx-auto mb-6 relative z-10 group hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white">
                  {step.icon}
                </span>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                {step.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
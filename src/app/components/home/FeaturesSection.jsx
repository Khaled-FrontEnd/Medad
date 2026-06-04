// components/FeaturesSection.jsx
export default function FeaturesSection() {
  const features = [
    {
      icon: 'video_library',
      title: 'تعلم تفاعلي',
      description: 'محتوى مرئي عالي الجودة مع تمارين برمجية مباشرة.',
    },
    {
      icon: 'quiz',
      title: 'اختبارات دورية',
      description: 'قيم مستواك باستمرار عبر اختبارات تطبيقية في كل مرحلة.',
    },
    {
      icon: 'trending_up',
      title: 'متابعة التقدم',
      description: 'لوحة تحكم ذكية تظهر مسار تطورك ونقاط القوة والضعف.',
    },
    {
      icon: 'groups',
      title: 'مجتمع نشط',
      description: 'تفاعل مع زملائك والخبراء في منتديات مخصصة لكل مسار.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-label-md tracking-widest uppercase">
              مميزات مِداد
            </span>
            <h2 className="font-display-lg text-display-lg text-primary mt-4 mb-8">
              لماذا تختار منصتنا لتعلم مهارات المستقبل؟
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-surface border border-outline-variant/30 hover:shadow-md transition-shadow"
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">
                    {feature.icon}
                  </span>
                  <h5 className="font-headline-lg text-primary mb-2">{feature.title}</h5>
                  <p className="text-on-surface-variant">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-square bg-primary-container rounded-[64px] rotate-3 absolute -z-10 opacity-10" />
            <div className="bg-white p-8 rounded-[48px] shadow-2xl border border-outline-variant/20 z-10 w-full max-w-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-primary">الإنجاز المكتمل</p>
                  <p className="text-[12px] text-on-surface-variant">تم منذ ٢ دقيقة</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-secondary-container rounded-full" />
                </div>
                <div className="flex justify-between font-label-sm">
                  <span>اكتمال المسار</span>
                  <span className="text-primary font-bold">75%</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low border border-dashed border-primary/20 text-center">
                  <span className="material-symbols-outlined text-primary text-4xl mb-2">
                    workspace_premium
                  </span>
                  <p className="font-headline-lg text-primary">شهادة معتمدة</p>
                  <p className="text-[12px] text-on-surface-variant">
                    جاهزة للتحميل عند الانتهاء
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
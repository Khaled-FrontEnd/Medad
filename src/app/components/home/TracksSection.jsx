// components/TracksSection.jsx
import Link from "next/link";

export default function TracksSection() {
  const tracks = [
    {
      icon: "code",
      title: "البرمجة",
      description:
        "تعلم تطوير الويب، التطبيقات، والأنظمة باستخدام أحدث اللغات البرمجية.",
    },
    {
      icon: "psychology",
      title: "الذكاء الاصطناعي",
      description:
        "اكتشف عالم تعلم الآلة ومعالجة البيانات وبناء الأنظمة الذكية المستقلة.",
    },
    {
      icon: "palette",
      title: "التصميم الإبداعي",
      description:
        "اتقن فنون تجربة المستخدم UI/UX والتصميم الجرافيكي بأساليب عصرية.",
    },
    {
      icon: "campaign",
      title: "التسويق الرقمي",
      description:
        "احترف استراتيجيات النمو، تحسين محركات البحث، وإدارة الحملات الإعلانية.",
    },
    {
      icon: "shield_lock",
      title: "الأمن السيبراني",
      description:
        "تعلم كيفية حماية البيانات والأنظمة من الاختراقات والتهديدات الرقمية.",
    },
    {
      icon: "database",
      title: "علوم البيانات",
      description:
        "حلل البيانات الضخمة وحوّلها إلى رؤى استراتيجية تدعم اتخاذ القرار.",
    },
  ];

  return (
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

              <Link
                href={`./tracks/${idx}`}
                className="w-full block py-3 rounded-xl border border-primary/20 text-primary font-label-md text-label-md group-hover:bg-primary group-hover:text-white transition-all text-center"
              >
                عرض المسار
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/pricing/page.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const pricingPlans = [
    {
      name: 'مجانية',
      description: 'للمستكشفين والراغبين في تجربة المنصة',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: 'دخول محدود للمناهج الأساسية', included: true },
        { text: 'منتدى النقاش العام', included: true },
        { text: 'شهادات معتمدة', included: false },
      ],
      buttonText: 'ابدأ مجاناً',
      buttonStyle: 'outline',
      popular: false,
    },
    {
      name: 'الاحترافية',
      description: 'للمتعلمين الجادين والباحثين عن التميز',
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        { text: 'وصول كامل لجميع المناهج', included: true },
        { text: 'شهادات إتمام معتمدة', included: true },
        { text: 'جلسات توجيه فردية (1-on-1)', included: true },
        { text: 'اختبارات تجريبية غير محدودة', included: true },
      ],
      buttonText: 'اشترك الآن',
      buttonStyle: 'primary',
      popular: true,
    },
    {
      name: 'للشركات',
      description: 'للمؤسسات والفرق التعليمية الكبيرة',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        { text: 'لوحة تحكم للمؤسسة', included: true },
        { text: 'وصول عبر API للمحتوى', included: true },
        { text: 'مدير حساب مخصص', included: true },
        { text: 'تقارير أداء متقدمة للطلاب', included: true },
      ],
      buttonText: 'اطلب عرض سعر',
      buttonStyle: 'secondary',
      popular: false,
      customPrice: 'تواصل معنا',
    },
  ]

  const comparisonFeatures = [
    { feature: 'عدد المناهج المتاحة', free: '5 مناهج', pro: 'غير محدود', enterprise: 'غير محدود' },
    { feature: 'تحميل المحتوى للمشاهدة بدون إنترنت', free: false, pro: true, enterprise: true },
    { feature: 'شهادات إكمال رقمية', free: false, pro: true, enterprise: true },
    { feature: 'دعم فني سريع 24/7', free: false, pro: true, enterprise: true },
    { feature: 'أدوات التحليل والتقارير', free: false, pro: false, enterprise: true },
  ]

  const faqs = [
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer:
        'نقبل الدفع عبر بطاقات مدى، فيزا، ماستركارد، وأبل باي. كما نوفر خيار التحويل البنكي المباشر لخطط الشركات.',
    },
    {
      question: 'هل يمكنني استرداد أموالي إذا لم تعجبني الخدمة؟',
      answer:
        'نعم، نوفر ضمان استعادة الأموال بنسبة 100% خلال أول 14 يوماً من الاشتراك إذا لم تكن راضياً عن المحتوى التعليمي.',
    },
    {
      question: 'كيف يعمل الخصم السنوي؟',
      answer:
        'عند اختيار الدفع السنوي، ستحصل على خصم فوري يعادل تكلفة شهرين مجانيين (حوالي 20% خصم من التكلفة الإجمالية).',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background antialiased">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* Pricing Cards */}
        <section className="pb-16 px-4 md:px-10">
          <div className="md:max-w-[100vw] max-w-[85vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <ComparisonTable features={comparisonFeatures} />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// ==================== HERO SECTION ====================
function HeroSection({ isYearly, setIsYearly }) {
  return (
    <section className="hero-gradient pt-24 pb-16 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto text-center">
        <h1 className="text-[35px] leading-[60px] -tracking-[0.02em] font-bold text-primary mb-6">
          استثمر في مستقبلك التعليمي
        </h1>
        <p className="text-[16px] leading-7 font-normal text-on-surface-variant max-w-2xl mx-auto mb-10">
          اختر الخطة التي تناسب احتياجاتك التعليمية. نوفر لك أفضل الأدوات والمحتوى لتصل إلى قمة مستواك الأكاديمي.
        </p>

        {/* Billing Toggle */}
        <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>
    </section>
  )
}

// Billing Toggle Component
function BillingToggle({ isYearly, setIsYearly }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
        دفع شهري
      </span>

      <button
        onClick={() => setIsYearly(!isYearly)}
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
          isYearly ? 'bg-primary-container' : 'bg-surface-container-highest'
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ${
            isYearly
              ? 'right-1 bg-on-primary'
              : 'right-1 bg-primary-container'
          }`}
          style={{
            transform: isYearly ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
      </button>

      <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
        دفع سنوي
      </span>
      <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[12px] leading-4 tracking-[0.02em] font-semibold">
        خصم 20%
      </span>
    </div>
  )
}

// ==================== PRICING CARD ====================
function PricingCard({ plan, isYearly }) {
  const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice

  return (
    <div
      className={`bg-surface-container-lowest p-5 rounded-[2rem] flex flex-col hover:shadow-lg transition-all duration-300 relative ${
        plan.popular
          ? 'border-2 border-primary shadow-xl shadow-primary/5 scale-105 z-10'
          : 'border border-outline-variant'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[12px] leading-4 tracking-[0.02em] font-semibold">
          الأكثر شيوعاً
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-4">
        <h3
          className={`text-[20px] leading-8 font-semibold mb-2 ${
            plan.popular ? 'text-primary' : 'text-on-surface'
          }`}
        >
          {plan.name}
        </h3>
        <p className="text-[14px] leading-6 font-normal text-on-surface-variant">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-4">
        {plan.customPrice ? (
          <span className="text-[22px] leading-10 font-semibold text-on-surface">
            {plan.customPrice}
          </span>
        ) : (
          <div>
            <span
              className="text-[38px] leading-[60px] -tracking-[0.02em] font-bold text-primary transition-all duration-300"
            >
              {currentPrice}
            </span>
            <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
              {' '}ريال / {isYearly ? 'سنوياً' : 'شهرياً'}
            </span>
          </div>
        )}
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-5 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span
              className={`material-symbols-outlined ${
                feature.included
                  ? plan.popular
                    ? 'text-primary'
                    : 'text-secondary'
                  : 'text-outline-variant'
              }`}
              style={{
                fontVariationSettings: feature.included ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {feature.included ? 'check_circle' : 'cancel'}
            </span>
            <span
              className={`text-[16px] leading-6 font-normal ${
                feature.included ? '' : 'text-on-surface-variant'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        className={`w-full py-4 rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium transition-all active:scale-95 ${
          plan.buttonStyle === 'primary'
            ? 'bg-primary-container text-on-primary hover:shadow-lg'
            : plan.buttonStyle === 'secondary'
            ? 'border-2 border-secondary text-secondary hover:bg-secondary/5'
            : 'border-2 border-primary text-primary hover:bg-primary/5'
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  )
}

// ==================== COMPARISON TABLE ====================
function ComparisonTable({ features }) {
  return (
    <section className="py-24 px-4 md:px-10 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[30px] leading-10 font-semibold text-primary text-center mb-16">
          قارن بين المميزات بالتفصيل
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b-2 border-outline-variant">
                <th className="py-6 text-[22px] leading-8 font-semibold text-on-surface w-1/3">
                  الميزة
                </th>
                <th className="py-6 text-[22px] leading-8 font-semibold text-on-surface-variant text-center">
                  مجانية
                </th>
                <th className="py-6 text-[22px] leading-8 font-semibold text-primary text-center">
                  الاحترافية
                </th>
                <th className="py-6 text-[22px] leading-8 font-semibold text-secondary text-center">
                  الشركات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {features.map((item, index) => (
                <tr key={index}>
                  <td className="py-5 text-[16px] leading-6 font-normal">
                    {item.feature}
                  </td>
                  <td className="py-5 text-center">
                    <FeatureCell value={item.free} />
                  </td>
                  <td className="py-5 text-center">
                    <FeatureCell value={item.pro} />
                  </td>
                  <td className="py-5 text-center">
                    <FeatureCell value={item.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function FeatureCell({ value }) {
  if (typeof value === 'boolean') {
    return (
      <span
        className={`material-symbols-outlined ${
          value ? 'text-secondary' : 'text-error'
        }`}
      >
        {value ? 'check' : 'close'}
      </span>
    )
  }
  return (
    <span className="text-[16px] leading-6 font-normal">{value}</span>
  )
}

// ==================== FAQ SECTION ====================
function FAQSection({ faqs, openFaq, setOpenFaq }) {
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-24 px-4 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[30px] leading-10 font-semibold text-primary text-center mb-12">
          الأسئلة الشائعة حول الفوترة
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 flex justify-between items-center cursor-pointer group text-right"
              >
                <h3 className="text-[24px] leading-8 font-semibold text-on-surface">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaq === index ? 'max-h-96 pb-6 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto bg-primary-container rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-right">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <h2 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-on-primary mb-6">
              جاهز لبدء رحلتك التعليمية؟
            </h2>
            <p className="text-[18px] leading-7 font-normal text-on-primary-container opacity-90">
              انضم لأكثر من 50,000 طالب وطالبة يحققون أهدافهم الأكاديمية مع مِداد.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'/login'} className="bg-on-primary text-primary text-[24px] leading-8 font-semibold px-10 py-5 rounded-2xl shadow-xl hover:bg-surface transition-colors active:scale-95">
              ابدأ الآن مجاناً
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50" />
      </div>
    </section>
  )
}

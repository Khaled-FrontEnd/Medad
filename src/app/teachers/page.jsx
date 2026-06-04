// app/teachers/page.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'

export default function TeachersPage() {
  const [activeFilter, setActiveFilter] = useState('الكل')

  const filters = [
    'الكل',
    'هندسة البرمجيات',
    'الذكاء الاصطناعي',
    'التصميم وتجربة المستخدم',
    'علوم البيانات',
    'التسويق الرقمي',
    'إدارة المشاريع',
  ]

  const featuredTeachers = [
    {
      id: 1,
      name: 'د. سارة المنصور',
      title: 'خبيرة هندسة البرمجيات السحابية - خبرة 15 عاماً',
      description: 'قامت بتدريب أكثر من 5000 مهندس حول العالم في تقنيات AWS و Azure.',
      badge: 'الأكثر طلباً',
      variant: 'primary',
      icon: 'cloud',
    },
    {
      id: 2,
      name: 'أ. فهد العتيبي',
      title: 'كبير علماء البيانات في كبرى الشركات التقنية',
      description: 'متخصص في بناء نماذج التعلم الآلي المعقدة وتحليل البيانات الضخمة.',
      badge: 'خبير البيانات',
      variant: 'secondary',
      icon: 'database',
    },
  ]

  const teachers = [
    {
      id: 1,
      name: 'د. أحمد خالد',
      role: 'AI Senior Expert',
      rating: 4.9,
      courses: 12,
      students: '1.5k',
      description: 'خبير في بناء الأنظمة الذكية وتطوير خوارزميات التعلم العميق مع خبرة تزيد عن 10 سنوات.',
      tags: ['الذكاء الاصطناعي', 'Deep Learning'],
      icon: 'psychology',
    },
    {
      id: 2,
      name: 'أ. ليلى حسن',
      role: 'Product Design Director',
      rating: 4.8,
      courses: 8,
      students: '3.2k',
      description: 'قائدة تصميم بمنتجات تقنية عالمية، تركز على فلسفة التصميم المتمحور حول الإنسان.',
      tags: ['تجربة المستخدم', 'Figma'],
      icon: 'palette',
    },
    {
      id: 3,
      name: 'م. عمر يوسف',
      role: 'Marketing Strategist',
      rating: 5.0,
      courses: 15,
      students: '5.1k',
      description: 'متخصص في بناء العلامات التجارية الرقمية وقيادة حملات التسويق ذات العائد المرتفع.',
      tags: ['التسويق الرقمي', 'SEO'],
      icon: 'campaign',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
          {/* Featured Teachers */}
          <FeaturedTeachers teachers={featuredTeachers} />

          {/* Teachers Grid */}
          <TeachersGrid teachers={teachers} />

          {/* Join as Teacher CTA */}
          <JoinTeacherCTA />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <header className="relative pt-40 pb-20 px-4 md:px-10 overflow-hidden bg-white">
      {/* Abstract Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto relative text-center">
        <h1 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-primary mb-6">
          نخبة الخبراء في مكان واحد
        </h1>
        <p className="text-[18px] leading-7 font-normal text-on-surface-variant max-w-2xl mx-auto mb-12">
          تعلم من أفضل الممارسين في الصناعة والخبراء الأكاديميين المعتمدين عالمياً. رحلتك نحو الإتقان تبدأ مع توجيه من الأفضل.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center bg-surface-container-low p-2 rounded-2xl shadow-md border border-outline-variant/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <span className="material-symbols-outlined absolute right-6 text-outline pointer-events-none">
              search
            </span>
            <input
              className="w-full bg-transparent border-none pr-14 pl-4 py-4 text-[16px] leading-6 font-normal focus:ring-0 placeholder:text-outline/70"
              placeholder="ابحث عن معلم، تخصص، أو مهارة معينة..."
              type="text"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            />
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
              ابحث الآن
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

// ==================== FILTER BAR ====================
function FilterBar({ filters, activeFilter, setActiveFilter }) {
  return (
    <section className=" top-20 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 py-6">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[14px] leading-5 tracking-[0.01em] font-medium border border-outline-variant transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== FEATURED TEACHERS ====================
function FeaturedTeachers({ teachers }) {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stars
          </span>
          <h2 className="text-[32px] leading-10 font-semibold text-primary">
            معلمو الشهر المتميزون
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teachers.map((teacher) => (
          <FeaturedTeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </section>
  )
}

function FeaturedTeacherCard({ teacher }) {
  const isPrimary = teacher.variant === 'primary'

  return (
    <div
      className={`group relative flex flex-col md:flex-row rounded-[32px] overflow-hidden shadow-2xl ${
        isPrimary
          ? 'bg-primary text-white'
          : 'bg-surface-container-highest text-on-surface border border-outline-variant/30'
      }`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 h-80 md:h-auto overflow-hidden bg-gradient-to-br from-primary-container to-secondary-container">
        <div className="w-full h-full flex items-center justify-center">
          <span className="material-symbols-outlined text-[120px] text-white/30 group-hover:scale-110 transition-transform duration-700">
            {teacher.icon}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <span
          className={`text-[12px] font-bold px-3 py-1 rounded-full w-fit mb-4 ${
            isPrimary ? 'bg-secondary text-primary' : 'bg-primary/10 text-primary'
          }`}
        >
          {teacher.badge}
        </span>
        <h3 className="text-[24px] leading-8 font-semibold mb-2">{teacher.name}</h3>
        <p className={`mb-4 text-[14px] leading-5 tracking-[0.01em] font-medium ${
          isPrimary ? 'text-primary-fixed opacity-90' : 'text-on-surface-variant'
        }`}>
          {teacher.title}
        </p>
        <p className={`text-[16px] leading-6 font-normal mb-8 leading-relaxed ${
          isPrimary ? 'opacity-80' : 'text-on-surface-variant'
        }`}>
          {teacher.description}
        </p>
        <div className="flex gap-4">
          <button
            className={`px-6 py-3 rounded-xl font-bold flex-1 transition-colors ${
              isPrimary
                ? 'bg-white text-primary hover:bg-surface-container'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            تصفح الدورات
          </button>
        </div>
      </div>
    </div>
  )
}

// ==================== TEACHERS GRID ====================
function TeachersGrid({ teachers }) {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[24px] leading-8 font-semibold text-primary">
          جميع المعلمين
        </h2>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="text-[14px] leading-5 tracking-[0.01em] font-medium">
            ترتيب حسب:
          </span>
          <select className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer">
            <option>الأعلى تقييماً</option>
            <option>الأحدث انضماماً</option>
            <option>عدد الطلاب</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 text-primary font-bold border border-primary/20 px-8 py-4 rounded-2xl hover:bg-primary/5 transition-all">
          عرض المزيد من الخبراء
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </section>
  )
}

function TeacherCard({ teacher }) {
  return (
    <div className="teacher-card bg-white rounded-3xl p-6 border border-outline-variant/50 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl">
      {/* Avatar */}
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="w-full h-full flex items-center justify-center">
          <span className="material-symbols-outlined text-[48px] text-primary/40">
            {teacher.icon}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Name & Rating */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[20px] leading-8 font-semibold text-on-surface">
              {teacher.name}
            </h3>
            <p className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold">
              {teacher.role}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg">
            <span
              className="material-symbols-outlined text-yellow-500 text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-[14px] leading-5 tracking-[0.01em] font-medium font-bold">
              {teacher.rating}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {teacher.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-[12px] font-bold px-3 py-1 rounded-md ${
                index % 2 === 0
                  ? 'bg-primary/5 text-primary'
                  : 'bg-secondary/5 text-secondary'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-on-surface-variant text-[16px] leading-6 font-normal line-clamp-2 mb-6">
          {teacher.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between py-4 border-y border-outline-variant/30 mb-6">
          <div className="text-center flex-1 border-l border-outline-variant/30">
            <p className="text-primary font-bold text-[24px] leading-8 font-semibold">
              {teacher.courses}
            </p>
            <p className="text-outline text-[12px]">دورة</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-primary font-bold text-[24px] leading-8 font-semibold">
              {teacher.students}
            </p>
            <p className="text-outline text-[12px]">طالب</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-[2] bg-primary text-white py-3 rounded-xl font-bold text-[14px] leading-5 tracking-[0.01em] font-medium hover:bg-primary/90 transition-colors">
            استكشف الدورات
          </button>
          <button className="flex-1 border border-primary text-primary py-3 rounded-xl font-bold text-[14px] leading-5 tracking-[0.01em] font-medium hover:bg-primary/5 transition-colors">
            الملف
          </button>
        </div>
      </div>
    </div>
  )
}

// ==================== JOIN TEACHER CTA ====================
function JoinTeacherCTA() {
  const benefits = [
    { icon: 'payments', title: 'دخل مستدام' },
    { icon: 'language', title: 'انتشار عالمي' },
    { icon: 'support_agent', title: 'دعم تقني' },
    { icon: 'groups', title: 'مجتمع نشط' },
  ]

  return (
    <section className="mt-20 relative bg-primary-container text-white rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full border-[60px] border-white rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-[40px] leading-10 font-semibold mb-6">
            هل أنت خبير في مجالك؟
          </h2>
          <p className="text-[18px] leading-7 font-normal text-primary-fixed opacity-90 mb-10 max-w-xl">
            انضم إلى مِداد وشارك علمك مع الآلاف من الطلاب الطموحين. نحن نوفر لك الأدوات والدعم لتحويل خبرتك إلى دورات تدريبية متميزة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-secondary text-primary px-10 py-5 rounded-2xl font-bold text-[18px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20">
              تقدم الآن كمعلم
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-bold text-[18px] hover:bg-white/20 transition-all">
              اعرف المزيد
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="flex-1 hidden md:block">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white/10 p-6 rounded-2xl text-center"
                >
                  <span className="material-symbols-outlined text-[40px] text-secondary mb-2">
                    {benefit.icon}
                  </span>
                  <h4 className="font-bold">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

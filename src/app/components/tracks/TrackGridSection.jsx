// ==================== TRACK GRID SECTION (CLIENT COMPONENT) ====================
"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

export default function TrackGridSection() {
  // حالة الفلاتر
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const allTracks = [
    {
      id: 1,
      category: "البرمجة",
      title: "مسار هندسة البرمجيات بالعربية",
      description:
        "اتقن أساسيات هندسة البرمجيات وبناء الخوارزميات باستخدام لغات برمجية حديثة مثل JavaScript و TypeScript.",
      courses: "٨ دورات",
      duration: 45,
      durationText: "٤٥ ساعة",
      level: "مبتدئ",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVFZlZUkPT073naTnjpRMfcryO9gDi89p52VmF_FuLxSyBXGNBtfg6kDH46K-TVM42UaO89hmbGtdsUKN11pPZxddnVRdzUL8qF9TiqqZTMS9L2zFc07H2tch41kSIKFr8ypsUqh_99bRwvJ2sxH-Yvdl0fk9ZKDpYVPc_boyUwRMX7kG-Q3W4PbJGHItpZC1RN16qu-vMD3kqJCSPlD9EBXEoCb2gBYup5kEu1K6uHwDdnNogbQoy3lfYhZYRPVABQhfYtPCGA5gb",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      category: "التصميم",
      title: "مسار تصميم تجربة وواجهة المستخدم (UX/UI)",
      description:
        "انطلق من البحث وتحليل المستخدم وصولاً إلى بناء واجهات تفاعلية مذهلة باستخدام Figma و Adobe XD.",
      courses: "٦ دورات",
      duration: 32,
      durationText: "٣٢ ساعة",
      level: "متوسط",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGEGHRar7rARxZUy-x8qmmj9nDA12vFSHvzCu01b_CVk5U0rVE9yLql92ACk6P4xg1lUmhkm7Rc4OiNiBFBkH_KHxFuV3onC6oAjlBwrUjBj0ZIYfgfPq49e0EcDqJFgeo7PMkMfXN9QvD9fLE7MjPVtJGV3Cmmodl7FqiquZiUDnVEPHWyjtsQ5qjn_c8zjZ0jmpyoKRGWijrZfELoKSrw3hpVYVzqyt4zdU1gULZ2ah47XgYDZ65WA-iddxdu72_yYl_OfwjCQxF",
      gradient: "from-pink-500/20 to-orange-500/20",
    },
    {
      id: 3,
      category: "البيانات",
      title: "مسار تحليل البيانات وإدارة الأعمال",
      description:
        "تعلم كيفية تحويل البيانات الخام إلى رؤى استراتيجية تدعم اتخاذ القرار باستخدام أدوات SQL و Power BI.",
      courses: "١٠ دورات",
      duration: 60,
      durationText: "٦٠ ساعة",
      level: "متقدم",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      id: 4,
      category: "التسويق",
      title: "مسار التسويق الرقمي والنمو السريع",
      description:
        "اكتشف أسرار الوصول للعملاء عبر محركات البحث ومنصات التواصل الاجتماعي، واستراتيجيات زيادة المبيعات.",
      courses: "٥ دورات",
      duration: 25,
      durationText: "٢٥ ساعة",
      level: "مبتدئ",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpluSskSWkyMZIuPSMt6UEpgzxV6EuHAlejWe90MYCUJ1XNP_sgrnjUoRYAe7Nza0vexvZWyqCCFgZs9TEqDgI-FBPD4CPOPm8CgPGtgrbXwFTQBv6yvmDYZu5PwIWidXBBtQ8juL4TYumi8vigjBy288rd6-SouYj4BLzobTSgrDxJyWlvTU1fsPhBd4cwuZTIiHaPsPGIaSP1fUdfDHGJbiAYinu_Dt1fS-zFdvqksFP88i7hNuRY1Unb9JxJNKwoSqBQ3Zb6hIE",
      gradient: "from-yellow-500/20 to-red-500/20",
    },
    {
      id: 5,
      category: "الذكاء الاصطناعي",
      title: "مسار تعلم الآلة والتعلم العميق",
      description:
        "انطلق من الأساسيات الرياضية إلى بناء شبكات عصبية متقدمة باستخدام TensorFlow و PyTorch.",
      courses: "٧ دورات",
      duration: 70,
      durationText: "٧٠ ساعة",
      level: "متقدم",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHp3ZtZwALjTQiB1-KKMBL49PdPz6OqPMBVhhqZwS0Sid51QdqeMviNBEa_GcdKx-41xog2GNsRyjR2j4BvmS9rKKt1GCvmjnTLIx3LDlF-XvEWsJLvIR9RxWYD-O3VFGxrMTbTPsXnllQD9g38MiaWxaEXCMiXZbc08NwcLM1XnCFx2Vxw5_uIK75svKoAYORZ6eo2_CGhKBeSJ7bYyWTSaqMRFRvkS4TOYI7fHwp_EGa0zl6TRw4dFxZqqoH-9JjYGiz88AAkZuI",
      gradient: "from-purple-500/20 to-indigo-500/20",
    },
    {
      id: 6,
      category: "إدارة الأعمال",
      title: "مسار إدارة المنتجات الرقمية",
      description:
        "تعلم كيفية إدارة دورة حياة المنتج الرقمي من الفكرة إلى الإطلاق والنمو باستخدام منهجيات Agile.",
      courses: "٩ دورات",
      duration: 55,
      durationText: "٥٥ ساعة",
      level: "متوسط",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  // قائمة التصنيفات المتاحة
  const categories = [
    "الكل",
    "البرمجة",
    "الذكاء الاصطناعي",
    "التصميم",
    "التسويق",
    "البيانات",
    "إدارة الأعمال",
  ];

  // منطق الفلترة المتكامل
  const filteredTracks = useMemo(() => {
    return allTracks.filter((track) => {
      // فلترة حسب التصنيف
      if (selectedCategory !== "الكل" && track.category !== selectedCategory) {
        return false;
      }

      // فلترة حسب المستوى
      if (selectedLevels.length > 0 && !selectedLevels.includes(track.level)) {
        return false;
      }

      // فلترة حسب المدة
      if (selectedDuration) {
        switch (selectedDuration) {
          case "أقل من ٢٠ ساعة":
            if (track.duration >= 20) return false;
            break;
          case "٢٠ - ٥٠ ساعة":
            if (track.duration < 20 || track.duration > 50) return false;
            break;
          case "أكثر من ٥٠ ساعة":
            if (track.duration <= 50) return false;
            break;
          default:
            break;
        }
      }

      // فلترة حسب البحث النصي
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        return (
          track.title.toLowerCase().includes(query) ||
          track.description.toLowerCase().includes(query) ||
          track.category.toLowerCase().includes(query) ||
          track.level.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedLevels, selectedDuration, searchQuery, selectedCategory]);

  // معالج تغيير التصنيف
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // يمكن إضافة تمرير سلس إلى قسم النتائج
    document
      .getElementById("track-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // معالج تغيير مستوى الفلتر
  const handleLevelChange = (level) => {
    setSelectedLevels((prev) => {
      if (prev.includes(level)) {
        return prev.filter((l) => l !== level);
      } else {
        return [...prev, level];
      }
    });
  };

  // معالج تغيير مدة الفلتر
  const handleDurationChange = (duration) => {
    setSelectedDuration(duration === selectedDuration ? "" : duration);
  };

  // معالج البحث
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // إعادة ضبط الفلاتر
  const handleResetFilters = () => {
    setSelectedLevels([]);
    setSelectedDuration("");
    setSearchQuery("");
    setSelectedCategory("الكل");
  };

  const levels = ["مبتدئ", "متوسط", "متقدم"];
  const durations = ["أقل من ٢٠ ساعة", "٢٠ - ٥٠ ساعة", "أكثر من ٥٠ ساعة"];

  // حساب عدد الفلاتر النشطة
  const activeFiltersCount =
    (selectedCategory !== "الكل" ? 1 : 0) +
    selectedLevels.length +
    (selectedDuration ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <section id="track-grid" className="py-16 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        {/* شريط البحث والتصنيفات في الأعلى */}
        <div className="mb-8 space-y-6">
          {/* شريط البحث */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                type="text"
                placeholder="ابحث عن مسار، مهارة، أو مجال..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full h-14 pr-12 pl-4 bg-white border border-outline-variant rounded-2xl text-[16px] leading-6 text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          </div>

          {/* أزرار التصنيفات */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-full text-[14px] leading-5 tracking-[0.01em] font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary-container text-on-primary shadow-md scale-105"
                    : "bg-white text-on-surface-variant hover:bg-surface-container-high hover:shadow-sm border border-outline-variant"
                }`}
              >
                {category === "الكل" ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      apps
                    </span>
                    {category}
                  </span>
                ) : (
                  category
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              levels={levels}
              durations={durations}
              selectedLevels={selectedLevels}
              selectedDuration={selectedDuration}
              activeFiltersCount={activeFiltersCount}
              onLevelChange={handleLevelChange}
              onDurationChange={handleDurationChange}
              onReset={handleResetFilters}
            />
          </aside>

          {/* Main Grid */}
          <div className="flex-grow">
            {/* Results Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
                  {filteredTracks.length === 0
                    ? "لا توجد نتائج مطابقة"
                    : `عرض ${filteredTracks.length} مسار`}
                </p>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[12px] text-primary hover:underline mt-1"
                  >
                    إزالة الفلاتر ({activeFiltersCount})
                  </button>
                )}
              </div>
              {/* يمكن إضافة خيارات ترتيب هنا */}
            </div>

            {filteredTracks.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredTracks.map((track) => (
                    <TrackCard
                      key={track.id}
                      track={track}
                      searchQuery={searchQuery}
                    />
                  ))}
                </div>
                {/* Pagination */}
                <Pagination />
              </>
            ) : (
              <EmptyState
                onReset={handleResetFilters}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Filter Sidebar (Client Component)
function FilterSidebar({
  levels,
  durations,
  selectedLevels,
  selectedDuration,
  activeFiltersCount,
  onLevelChange,
  onDurationChange,
  onReset,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm sticky top-24">
      <div className="flex items-center justify-between mb-6 border-b border-outline-variant pb-4">
        <h4 className="text-[20px] leading-7 font-semibold text-on-surface">
          تصفية النتائج
        </h4>
        {activeFiltersCount > 0 && (
          <span className="bg-primary-container text-on-primary text-[12px] font-semibold px-2 py-1 rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </div>

      <div className="space-y-8">
        {/* Level Filters */}
        <div>
          <p className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">
              signal_cellular_alt
            </span>
            المستوى
          </p>
          <div className="space-y-3">
            {levels.map((level) => (
              <label
                key={level}
                className="flex items-center gap-3 cursor-pointer group hover:bg-surface-container-lowest p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level)}
                  onChange={() => onLevelChange(level)}
                  className="w-5 h-5 rounded border-outline text-primary focus:ring-primary/20 cursor-pointer"
                />
                <span className="text-[16px] leading-6 font-normal text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Duration Filters */}
        <div>
          <p className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">
              schedule
            </span>
            مدة التعلم
          </p>
          <div className="space-y-3">
            {durations.map((duration) => (
              <label
                key={duration}
                className="flex items-center gap-3 cursor-pointer group hover:bg-surface-container-lowest p-2 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="duration"
                  checked={selectedDuration === duration}
                  onChange={() => onDurationChange(duration)}
                  className="w-5 h-5 border-outline text-primary focus:ring-primary/20 cursor-pointer"
                />
                <span className="text-[16px] leading-6 font-normal text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {duration}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={onReset}
          disabled={activeFiltersCount === 0}
          className={`w-full py-3 text-[14px] leading-5 tracking-[0.01em] font-medium border rounded-xl transition-all ${
            activeFiltersCount > 0
              ? "text-error border-error hover:bg-error/5"
              : "text-outline border-outline-variant cursor-not-allowed"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              restart_alt
            </span>
            إعادة ضبط الكل
          </span>
        </button>
      </div>
    </div>
  );
}

// Track Card with search highlighting
function TrackCard({ track, searchQuery }) {
  // دالة لتظليل نص البحث
  const highlightText = (text, query) => {
    if (!query || !text) return text;

    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="bg-yellow-200/50 text-inherit rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/50 group hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div
        className={`relative h-48 overflow-hidden bg-gradient-to-br ${track.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={track.img}
            alt={track.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
          <span className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-primary">
            {searchQuery
              ? highlightText(track.category, searchQuery)
              : track.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[20px] leading-7 font-semibold text-on-surface mb-3 line-clamp-2">
          {searchQuery ? highlightText(track.title, searchQuery) : track.title}
        </h3>
        <p className="text-[14px] leading-6 font-normal text-on-surface-variant line-clamp-2 mb-6">
          {searchQuery
            ? highlightText(track.description, searchQuery)
            : track.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 border-t border-outline-variant pt-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold">
                الدورات
              </span>
              <span className="text-on-surface text-[14px] leading-5 tracking-[0.01em] font-medium">
                {track.courses}
              </span>
            </div>
            <div className="flex flex-col pr-4 border-r border-outline-variant">
              <span className="text-outline text-[12px] leading-4 tracking-[0.02em] font-semibold">
                المدة
              </span>
              <span className="text-on-surface text-[14px] leading-5 tracking-[0.01em] font-medium">
                {track.durationText}
              </span>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-lg text-[12px] leading-4 tracking-[0.02em] font-semibold ${
              track.level === "مبتدئ"
                ? "bg-green-100 text-green-700"
                : track.level === "متوسط"
                ? "bg-orange-100 text-orange-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {track.level}
          </div>
        </div>

        <Link
          href={`/tracks/${track.id}`}
          className="block text-center w-full p-3 bg-primary text-white text-[14px] leading-5 tracking-[0.01em] font-medium rounded-xl hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
        >
          استكشف المسار
        </Link>
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState({ onReset, searchQuery }) {
  return (
    <div className="text-center py-16 bg-white rounded-2xl border border-outline-variant">
      <span
        className="material-symbols-outlined text-[80px] text-outline-variant mb-4 block"
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        {searchQuery ? "search_off" : "filter_alt_off"}
      </span>
      <h3 className="text-[24px] leading-8 font-semibold text-on-surface mb-2">
        {searchQuery ? "لا توجد نتائج للبحث" : "لا توجد مسارات متطابقة"}
      </h3>
      <p className="text-[16px] leading-6 text-on-surface-variant mb-6 max-w-md mx-auto">
        {searchQuery
          ? `لم نتمكن من العثور على نتائج لـ "${searchQuery}". جرب كلمات بحث مختلفة.`
          : "حاول تغيير معايير التصفية أو إعادة ضبط الفلاتر لعرض جميع المسارات المتاحة."}
      </p>
      <div className="flex gap-4 justify-center">
        {searchQuery && (
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-surface-container-high text-on-surface rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium hover:bg-surface-container-highest transition-colors"
          >
            مسح البحث
          </button>
        )}
        <button
          onClick={onReset}
          className="px-6 py-3 bg-primary-container text-on-primary rounded-xl text-[14px] leading-5 tracking-[0.01em] font-medium hover:opacity-90 transition-opacity"
        >
          إعادة ضبط الفلاتر
        </button>
      </div>
    </div>
  );
}

// Pagination
function Pagination() {
  return (
    <div className="mt-16 flex justify-center items-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary text-on-surface-variant transition-colors">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-container text-on-primary text-[14px] leading-5 tracking-[0.01em] font-medium">
        ١
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary text-on-surface-variant transition-colors">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
    </div>
  );
}

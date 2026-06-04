"use client";

export default function SearchInput() {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-outline">search</span>
      </div>
      <input
        className="w-full bg-surface-container-lowest border-none premium-shadow rounded-xl py-4 pr-12 pl-6 focus:ring-2 focus:ring-primary/20 text-[16px] leading-6 font-normal transition-all"
        placeholder="ابحث عن مسار تعليمي (مثلاً: الذكاء الاصطناعي)..."
        type="text"
        style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
      />
    </div>
  );
}

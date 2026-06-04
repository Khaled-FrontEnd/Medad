// app/tracks/[id]/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/app/components/home/Footer";
import Header from "@/app/components/home/Header";

export default function TrackDetailsPage() {
  const params = useParams();
  const trackId = params.id;

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  // قاعدة بيانات المسارات
  const tracksDatabase = {
    1: {
      id: 1,
      category: "البرمجة",
      title: "مسار هندسة البرمجيات بالعربية",
      description:
        "اتقن أساسيات هندسة البرمجيات وبناء الخوارزميات باستخدام لغات برمجية حديثة مثل JavaScript و TypeScript.",
      fullDescription:
        "هذا المسار مصمم للمبرمجين الطموحين الذين يرغبون في بناء أساس قوي في هندسة البرمجيات. سنغطي كل شيء من أساسيات البرمجة وصولاً إلى أنماط التصميم المتقدمة وبناء تطبيقات كاملة. ستتعلم كيفية كتابة كود نظيف وقابل للصيانة والتوسع.",
      courses: 8,
      duration: 45,
      durationText: "٤٥ ساعة",
      level: "مبتدئ",
      students: 1850,
      rating: 4.8,
      reviews: 320,
      price: 349,
      originalPrice: 699,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVFZlZUkPT073naTnjpRMfcryO9gDi89p52VmF_FuLxSyBXGNBtfg6kDH46K-TVM42UaO89hmbGtdsUKN11pPZxddnVRdzUL8qF9TiqqZTMS9L2zFc07H2tch41kSIKFr8ypsUqh_99bRwvJ2sxH-Yvdl0fk9ZKDpYVPc_boyUwRMX7kG-Q3W4PbJGHItpZC1RN16qu-vMD3kqJCSPlD9EBXEoCb2gBYup5kEu1K6uHwDdnNogbQoy3lfYhZYRPVABQhfYtPCGA5gb",
      gradient: "from-blue-500/20 to-purple-500/20",
      instructor: {
        name: "م. خالد الشمري",
        title: "مهندس برمجيات أول - 12 سنة خبرة",
        bio: "خالد مهندس برمجيات متخصص في بناء الأنظمة الموزعة والتطبيقات السحابية. عمل مع شركات تقنية رائدة في Silicon Valley والشرق الأوسط. متحمس لتعليم البرمجة باللغة العربية وجعلها في متناول الجميع.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAVFZlZUkPT073naTnjpRMfcryO9gDi89p52VmF_FuLxSyBXGNBtfg6kDH46K-TVM42UaO89hmbGtdsUKN11pPZxddnVRdzUL8qF9TiqqZTMS9L2zFc07H2tch41kSIKFr8ypsUqh_99bRwvJ2sxH-Yvdl0fk9ZKDpYVPc_boyUwRMX7kG-Q3W4PbJGHItpZC1RN16qu-vMD3kqJCSPlD9EBXEoCb2gBYup5kEu1K6uHwDdnNogbQoy3lfYhZYRPVABQhfYtPCGA5gb",
      },
      learningObjectives: [
        "إتقان أساسيات البرمجة بلغة JavaScript",
        "فهم معمق لأنماط التصميم (Design Patterns)",
        "بناء واجهات برمجة تطبيقات RESTful API",
        "العمل مع قواعد البيانات SQL و NoSQL",
        "تطوير تطبيقات كاملة باستخدام React و Node.js",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "مقدمة في هندسة البرمجيات",
          duration: "4 دروس • 180 دقيقة",
          lessons: [
            {
              title: "ما هي هندسة البرمجيات؟",
              duration: "25:00",
              locked: false,
            },
            {
              title: "أساسيات كتابة الكود النظيف",
              duration: "35:00",
              locked: false,
            },
            {
              title: "مبادئ SOLID في البرمجة",
              duration: "30:00",
              locked: false,
            },
            {
              title: "مشروع تطبيقي: بناء محفظة أعمال",
              duration: "90:00",
              locked: true,
            },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "برمجة JavaScript المتقدمة",
          duration: "6 دروس • 240 دقيقة",
          lessons: [
            {
              title: "Async/Await و Promises",
              duration: "30:00",
              locked: false,
            },
            {
              title: "البرمجة الوظيفية (Functional Programming)",
              duration: "40:00",
              locked: false,
            },
            {
              title: "إدارة الحالة في التطبيقات",
              duration: "45:00",
              locked: false,
            },
            {
              title: "مشروع: بناء محرك بحث صغير",
              duration: "125:00",
              locked: true,
            },
          ],
        },
        {
          id: 3,
          number: "03",
          title: "بناء واجهات المستخدم مع React",
          duration: "8 دروس • 360 دقيقة",
          lessons: [
            {
              title: "مقدمة في React و Virtual DOM",
              duration: "30:00",
              locked: false,
            },
            {
              title: "Hooks وأنماط التصميم المتقدمة",
              duration: "45:00",
              locked: false,
            },
            {
              title: "إدارة الحالة مع Redux",
              duration: "50:00",
              locked: false,
            },
            {
              title: "مشروع: بناء تطبيق إدارة مهام",
              duration: "235:00",
              locked: true,
            },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "ن",
          name: "نورة العنزي",
          rating: 5,
          text: "أفضل مسار برمجة بالعربية على الإطلاق. الكود النظيف أصبح جزءاً من أسلوبي في البرمجة.",
        },
        {
          initial: "س",
          name: "سلمان المطيري",
          rating: 4,
          text: "المحتوى ممتاز والشرح واضح جداً. حصلت على وظيفة مطور مباشرة بعد إكمال المسار.",
        },
      ],
    },
    2: {
      id: 2,
      category: "التصميم",
      title: "مسار تصميم تجربة وواجهة المستخدم (UX/UI)",
      description:
        "انطلق من البحث وتحليل المستخدم وصولاً إلى بناء واجهات تفاعلية مذهلة باستخدام Figma و Adobe XD.",
      fullDescription:
        "انطلق في رحلة شاملة لتعلم فنون التصميم الرقمي من الأساسيات حتى الاحتراف. صمم منتجات رقمية عالمية المستوى وابنِ ملف أعمال يبهر الشركات. سنبدأ من فهم سيكولوجية المستخدم، مروراً بهيكلة المعلومات، وصولاً إلى بناء واجهات تفاعلية مبهرة.",
      courses: 6,
      duration: 32,
      durationText: "٣٢ ساعة",
      level: "متوسط",
      students: 1240,
      rating: 4.9,
      reviews: 500,
      price: 299,
      originalPrice: 599,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGEGHRar7rARxZUy-x8qmmj9nDA12vFSHvzCu01b_CVk5U0rVE9yLql92ACk6P4xg1lUmhkm7Rc4OiNiBFBkH_KHxFuV3onC6oAjlBwrUjBj0ZIYfgfPq49e0EcDqJFgeo7PMkMfXN9QvD9fLE7MjPVtJGV3Cmmodl7FqiquZiUDnVEPHWyjtsQ5qjn_c8zjZ0jmpyoKRGWijrZfELoKSrw3hpVYVzqyt4zdU1gULZ2ah47XgYDZ65WA-iddxdu72_yYl_OfwjCQxF",
      gradient: "from-pink-500/20 to-orange-500/20",
      instructor: {
        name: "أ. أحمد المنصور",
        title: "خبير تصميم منتجات - 10+ سنوات خبرة",
        bio: "عمل أحمد مع كبرى الشركات التقنية في المنطقة والعالم. قام بتدريب أكثر من 5000 طالب وطالبة في مجالات التصميم الرقمي، ويتميز بأسلوب تعليمي يربط النظرية بالتطبيق العملي في سوق العمل.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDGEGHRar7rARxZUy-x8qmmj9nDA12vFSHvzCu01b_CVk5U0rVE9yLql92ACk6P4xg1lUmhkm7Rc4OiNiBFBkH_KHxFuV3onC6oAjlBwrUjBj0ZIYfgfPq49e0EcDqJFgeo7PMkMfXN9QvD9fLE7MjPVtJGV3Cmmodl7FqiquZiUDnVEPHWyjtsQ5qjn_c8zjZ0jmpyoKRGWijrZfELoKSrw3hpVYVzqyt4zdU1gULZ2ah47XgYDZ65WA-iddxdu72_yYl_OfwjCQxF",
      },
      learningObjectives: [
        "فهم كامل لمبادئ تجربة المستخدم (UX Principles)",
        "إتقان أدوات التصميم الحديثة Figma من الصفر",
        "بناء نظم التصميم (Design Systems) المتكاملة",
        "تصميم واجهات متجاوبة للهواتف والويب",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "مقدمة في عالم تجربة المستخدم",
          duration: "4 دروس • 120 دقيقة",
          lessons: [
            {
              title: "ما هو التصميم المتمحور حول الإنسان؟",
              duration: "15:00",
              locked: false,
            },
            {
              title: "رحلة المستخدم وخريطة التعاطف",
              duration: "25:00",
              locked: false,
            },
            {
              title: "تحليل المنافسين وبناء الاستراتيجية",
              duration: "محمي",
              locked: true,
            },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "أساسيات تصميم واجهة المستخدم (UI)",
          duration: "6 دروس • 180 دقيقة",
          lessons: [
            { title: "مبادئ التصميم البصري", duration: "30:00", locked: false },
            {
              title: "نظرية الألوان والطباعة",
              duration: "25:00",
              locked: false,
            },
            {
              title: "تصميم الأيقونات والعناصر البصرية",
              duration: "40:00",
              locked: false,
            },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "س",
          name: "سارة خالد",
          rating: 5,
          text: "كان هذا المسار نقطة تحول في مسيرتي المهنية. الشرح واضح جداً والتطبيقات العملية ساعدتني في بناء ملف أعمالي.",
        },
        {
          initial: "ف",
          name: "فهد العتيبي",
          rating: 4,
          text: "محتوى غني جداً وأستاذ أحمد مبدع في تبسيط المفاهيم المعقدة. أنصح به بشدة لأي شخص يريد دخول مجال التصميم.",
        },
      ],
    },
    3: {
      id: 3,
      category: "البيانات",
      title: "مسار تحليل البيانات وإدارة الأعمال",
      description:
        "تعلم كيفية تحويل البيانات الخام إلى رؤى استراتيجية تدعم اتخاذ القرار باستخدام أدوات SQL و Power BI.",
      fullDescription:
        "في عصر البيانات، القدرة على استخراج الرؤى من البيانات هي مهارة لا غنى عنها. يغطي هذا المسار كل شيء من جمع البيانات وتحليلها إلى بناء لوحات معلومات تفاعلية وتقديم توصيات استراتيجية للإدارة.",
      courses: 10,
      duration: 60,
      durationText: "٦٠ ساعة",
      level: "متقدم",
      students: 950,
      rating: 4.7,
      reviews: 280,
      price: 399,
      originalPrice: 799,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      gradient: "from-green-500/20 to-teal-500/20",
      instructor: {
        name: "د. محمد القحطاني",
        title: "عالم بيانات - دكتوراه في الذكاء الاصطناعي",
        bio: "حاصل على دكتوراه في علوم البيانات من جامعة MIT. عمل كمستشار للعديد من الشركات المدرجة في Fortune 500. شغوف بتبسيط مفاهيم تحليل البيانات وجعلها في متناول الجميع.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      },
      learningObjectives: [
        "إتقان SQL لاستعلام قواعد البيانات",
        "بناء لوحات معلومات تفاعلية باستخدام Power BI",
        "تحليل البيانات باستخدام Python",
        "تقديم توصيات استراتيجية مبنية على البيانات",
        "فهم أساسيات التعلم الآلي للتطبيقات التجارية",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "أساسيات تحليل البيانات",
          duration: "5 دروس • 200 دقيقة",
          lessons: [
            {
              title: "مقدمة في علم البيانات",
              duration: "30:00",
              locked: false,
            },
            {
              title: "جمع البيانات وتنظيفها",
              duration: "45:00",
              locked: false,
            },
            {
              title: "الإحصاء الوصفي والاستدلالي",
              duration: "50:00",
              locked: false,
            },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "SQL لتحليل البيانات",
          duration: "6 دروس • 240 دقيقة",
          lessons: [
            { title: "أساسيات SQL", duration: "35:00", locked: false },
            { title: "الاستعلامات المتقدمة", duration: "45:00", locked: false },
            {
              title: "تحليل البيانات باستخدام SQL",
              duration: "60:00",
              locked: false,
            },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "م",
          name: "منال الحربي",
          rating: 5,
          text: "المسار شامل جداً وغطى كل جوانب تحليل البيانات. تمكنت من الحصول على ترقية في عملي بعد تطبيق ما تعلمته.",
        },
        {
          initial: "ع",
          name: "عبدالله الشهري",
          rating: 4,
          text: "شرح ممتاز وأمثلة عملية من الواقع. المحتوى منظم بشكل منطقي ويسهل متابعته.",
        },
      ],
    },
    4: {
      id: 4,
      category: "التسويق",
      title: "مسار التسويق الرقمي والنمو السريع",
      description:
        "اكتشف أسرار الوصول للعملاء عبر محركات البحث ومنصات التواصل الاجتماعي، واستراتيجيات زيادة المبيعات.",
      fullDescription:
        "تعلّم كيفية بناء استراتيجية تسويق رقمي متكاملة تزيد من وصولك للعملاء وتحقق نمواً سريعاً لأعمالك. يغطي هذا المسار أحدث أساليب التسويق الرقمي من تحسين محركات البحث إلى التسويق عبر المؤثرين.",
      courses: 5,
      duration: 25,
      durationText: "٢٥ ساعة",
      level: "مبتدئ",
      students: 2100,
      rating: 4.6,
      reviews: 450,
      price: 249,
      originalPrice: 499,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpluSskSWkyMZIuPSMt6UEpgzxV6EuHAlejWe90MYCUJ1XNP_sgrnjUoRYAe7Nza0vexvZWyqCCFgZs9TEqDgI-FBPD4CPOPm8CgPGtgrbXwFTQBv6yvmDYZu5PwIWidXBBtQ8juL4TYumi8vigjBy288rd6-SouYj4BLzobTSgrDxJyWlvTU1fsPhBd4cwuZTIiHaPsPGIaSP1fUdfDHGJbiAYinu_Dt1fS-zFdvqksFP88i7hNuRY1Unb9JxJNKwoSqBQ3Zb6hIE",
      gradient: "from-yellow-500/20 to-red-500/20",
      instructor: {
        name: "أ. لمى السبيعي",
        title: "خبيرة تسويق رقمي - 8 سنوات خبرة",
        bio: "قادت حملات تسويقية لأكثر من 100 علامة تجارية في المنطقة. متخصصة في التسويق عبر المحتوى وبناء استراتيجيات النمو السريع للشركات الناشئة.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCpluSskSWkyMZIuPSMt6UEpgzxV6EuHAlejWe90MYCUJ1XNP_sgrnjUoRYAe7Nza0vexvZWyqCCFgZs9TEqDgI-FBPD4CPOPm8CgPGtgrbXwFTQBv6yvmDYZu5PwIWidXBBtQ8juL4TYumi8vigjBy288rd6-SouYj4BLzobTSgrDxJyWlvTU1fsPhBd4cwuZTIiHaPsPGIaSP1fUdfDHGJbiAYinu_Dt1fS-zFdvqksFP88i7hNuRY1Unb9JxJNKwoSqBQ3Zb6hIE",
      },
      learningObjectives: [
        "بناء استراتيجية تسويق رقمي متكاملة",
        "تحسين محركات البحث (SEO) بشكل احترافي",
        "إدارة حملات التسويق عبر وسائل التواصل الاجتماعي",
        "تحليل أداء الحملات وتحسين العائد على الاستثمار",
        "تطبيق استراتيجيات النمو السريع (Growth Hacking)",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "أساسيات التسويق الرقمي",
          duration: "3 دروس • 90 دقيقة",
          lessons: [
            {
              title: "مقدمة في التسويق الرقمي",
              duration: "20:00",
              locked: false,
            },
            { title: "بناء شخصية المشتري", duration: "30:00", locked: false },
            {
              title: "تحديد الأهداف ومؤشرات الأداء",
              duration: "40:00",
              locked: false,
            },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "تحسين محركات البحث (SEO)",
          duration: "4 دروس • 150 دقيقة",
          lessons: [
            {
              title: "البحث عن الكلمات المفتاحية",
              duration: "30:00",
              locked: false,
            },
            {
              title: "تحسين المحتوى والعناصر التقنية",
              duration: "45:00",
              locked: false,
            },
            { title: "بناء الروابط الخلفية", duration: "35:00", locked: false },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "ر",
          name: "ريم المالكي",
          rating: 5,
          text: "طبقت ما تعلمته في مشروعي الخاص وزادت مبيعاتي بنسبة 200%. المسار عملي ومفيد جداً.",
        },
        {
          initial: "ب",
          name: "بندر العتيبي",
          rating: 4,
          text: "من أفضل المسارات في التسويق الرقمي. الأمثلة من السوق السعودي مفيدة جداً وواقعية.",
        },
      ],
    },
    5: {
      id: 5,
      category: "الذكاء الاصطناعي",
      title: "مسار تعلم الآلة والتعلم العميق",
      description:
        "انطلق من الأساسيات الرياضية إلى بناء شبكات عصبية متقدمة باستخدام TensorFlow و PyTorch.",
      fullDescription:
        "انطلق في رحلة عميقة في عالم الذكاء الاصطناعي وتعلم الآلة. من الأساسيات الرياضية إلى بناء وتدريب الشبكات العصبية العميقة. ستتعلم كيفية بناء نماذج ذكاء اصطناعي حقيقية تحل مشاكل واقعية.",
      courses: 7,
      duration: 70,
      durationText: "٧٠ ساعة",
      level: "متقدم",
      students: 780,
      rating: 4.9,
      reviews: 190,
      price: 499,
      originalPrice: 999,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHp3ZtZwALjTQiB1-KKMBL49PdPz6OqPMBVhhqZwS0Sid51QdqeMviNBEa_GcdKx-41xog2GNsRyjR2j4BvmS9rKKt1GCvmjnTLIx3LDlF-XvEWsJLvIR9RxWYD-O3VFGxrMTbTPsXnllQD9g38MiaWxaEXCMiXZbc08NwcLM1XnCFx2Vxw5_uIK75svKoAYORZ6eo2_CGhKBeSJ7bYyWTSaqMRFRvkS4TOYI7fHwp_EGa0zl6TRw4dFxZqqoH-9JjYGiz88AAkZuI",
      gradient: "from-purple-500/20 to-indigo-500/20",
      instructor: {
        name: "د. عبدالرحمن العتيبي",
        title: "باحث في الذكاء الاصطناعي - PhD من Stanford",
        bio: "حاصل على الدكتوراه في التعلم العميق من جامعة ستانفورد. نشر أكثر من 20 بحثاً علمياً في مجالات الذكاء الاصطناعي. يعمل حالياً كمستشار للعديد من الشركات التقنية في Silicon Valley.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBHp3ZtZwALjTQiB1-KKMBL49PdPz6OqPMBVhhqZwS0Sid51QdqeMviNBEa_GcdKx-41xog2GNsRyjR2j4BvmS9rKKt1GCvmjnTLIx3LDlF-XvEWsJLvIR9RxWYD-O3VFGxrMTbTPsXnllQD9g38MiaWxaEXCMiXZbc08NwcLM1XnCFx2Vxw5_uIK75svKoAYORZ6eo2_CGhKBeSJ7bYyWTSaqMRFRvkS4TOYI7fHwp_EGa0zl6TRw4dFxZqqoH-9JjYGiz88AAkZuI",
      },
      learningObjectives: [
        "فهم الأسس الرياضية للتعلم الآلي",
        "بناء نماذج تعلم آلي باستخدام scikit-learn",
        "تطوير شبكات عصبية عميقة باستخدام TensorFlow",
        "تطبيق تقنيات معالجة اللغة الطبيعية (NLP)",
        "بناء أنظمة رؤية حاسوبية باستخدام PyTorch",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "الأسس الرياضية للذكاء الاصطناعي",
          duration: "4 دروس • 160 دقيقة",
          lessons: [
            {
              title: "الجبر الخطي للتعلم الآلي",
              duration: "40:00",
              locked: false,
            },
            {
              title: "التفاضل والتكامل للنماذج العصبية",
              duration: "45:00",
              locked: false,
            },
            { title: "الاحتمالات والإحصاء", duration: "35:00", locked: false },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "تعلم الآلة الكلاسيكي",
          duration: "6 دروس • 240 دقيقة",
          lessons: [
            {
              title: "الانحدار الخطي واللوجستي",
              duration: "40:00",
              locked: false,
            },
            {
              title: "أشجار القرار والغابات العشوائية",
              duration: "45:00",
              locked: false,
            },
            { title: "تقنيات تقييم النماذج", duration: "35:00", locked: false },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "أ",
          name: "أروى الفيصل",
          rating: 5,
          text: "أفضل مسار في الذكاء الاصطناعي بالعربية. الدكتور عبدالرحمن عبقري في تبسيط المفاهيم المعقدة.",
        },
        {
          initial: "خ",
          name: "خالد الشمري",
          rating: 5,
          text: "المسار متقدم فعلاً ويحتاج خلفية قوية في البرمجة والرياضيات، لكن النتائج مذهلة. بنيت أول نموذج تعلم عميق بنفسي.",
        },
      ],
    },
    6: {
      id: 6,
      category: "إدارة الأعمال",
      title: "مسار إدارة المنتجات الرقمية",
      description:
        "تعلم كيفية إدارة دورة حياة المنتج الرقمي من الفكرة إلى الإطلاق والنمو باستخدام منهجيات Agile.",
      fullDescription:
        "اكتسب المهارات اللازمة لإدارة المنتجات الرقمية بنجاح. من تحديد رؤية المنتج وبناء خارطة الطريق إلى إدارة فرق التطوير وقياس نجاح المنتج في السوق. ستتعلم المنهجيات الحديثة في إدارة المنتجات من الألف إلى الياء.",
      courses: 9,
      duration: 55,
      durationText: "٥٥ ساعة",
      level: "متوسط",
      students: 1100,
      rating: 4.8,
      reviews: 310,
      price: 379,
      originalPrice: 759,
      discount: "50%",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      gradient: "from-teal-500/20 to-cyan-500/20",
      instructor: {
        name: "م. نورة السديري",
        title: "مديرة منتجات تنفيذية - 15 سنة خبرة",
        bio: "عملت كمديرة منتجات في Google و Amazon. قادت إطلاق أكثر من 30 منتجاً رقمياً ناجحاً. مؤسسة مجتمع إدارة المنتجات العربي.",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBkS-r28txYA5N7axKgUIbIsY-WSXnkQhl3XKKwLciM83_Yy-86PKS2Rpj3RAAz8gpzTli1dl7Ozg0CS8BfrFPrGWrdwDs7ckykag1bOPHnakObfIn7xZkbsx-RSLMUnHKT4PrIGrBZilYp-WXPnxOVKwCRLZkScG3HHON4FQDyFLzuZ0BIpuJsKlv_ErW7QqUWopUOriMwT_ui4wCfGuOWCcKr0rJ0XixX623kLoxWr2I6osltUBmd0K9YwF4VhQSWSh4kVF4Mf-",
      },
      learningObjectives: [
        "تطوير رؤية واستراتيجية المنتج",
        "بناء خارطة طريق للمنتج (Product Roadmap)",
        "إدارة دورة حياة المنتج كاملة",
        "تطبيق منهجيات Agile و Scrum",
        "تحليل بيانات المنتج واتخاذ القرارات",
      ],
      curriculum: [
        {
          id: 1,
          number: "01",
          title: "أساسيات إدارة المنتجات",
          duration: "4 دروس • 160 دقيقة",
          lessons: [
            {
              title: "دور مدير المنتج في الشركات التقنية",
              duration: "35:00",
              locked: false,
            },
            {
              title: "تحديد رؤية المنتج واستراتيجيته",
              duration: "45:00",
              locked: false,
            },
            { title: "فهم السوق والمنافسين", duration: "40:00", locked: false },
          ],
        },
        {
          id: 2,
          number: "02",
          title: "تطوير المنتج وإطلاقه",
          duration: "5 دروس • 200 دقيقة",
          lessons: [
            { title: "بناء MVP وتطويره", duration: "40:00", locked: false },
            {
              title: "إدارة فرق التطوير متعددة التخصصات",
              duration: "45:00",
              locked: false,
            },
            {
              title: "استراتيجيات الإطلاق والنمو",
              duration: "50:00",
              locked: false,
            },
          ],
        },
      ],
      trackReviews: [
        {
          initial: "م",
          name: "محمد العتيبي",
          rating: 5,
          text: "المسار غير حياتي المهنية. انتقلت من مطور إلى مدير منتج في شركتي وزاد راتبي بنسبة 40%.",
        },
        {
          initial: "ه",
          name: "هند القحطاني",
          rating: 5,
          text: "نورة السديري ملهمة جداً. المنهج عملي ويغطي كل جوانب إدارة المنتجات الرقمية. أنصح به بشدة.",
        },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // محاكاة تحميل البيانات
    setLoading(true);
    const timer = setTimeout(() => {
      const foundTrack = tracksDatabase[trackId];
      if (foundTrack) {
        setTrack(foundTrack);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [trackId]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const enrollmentBenefits = [
    { icon: "movie", label: "وصول كامل لجميع الفيديوهات" },
    { icon: "download", label: "موارد وقوالب قابلة للتحميل" },
    { icon: "assignment", label: "مشروع تخرج وتقييم شخصي" },
    { icon: "workspace_premium", label: "شهادة إتمام معتمدة من مداد" },
    { icon: "all_inclusive", label: "صلاحية مدى الحياة للمحتوى" },
  ];

  const relatedCourses = [
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
  ];

  // عرض شاشة التحميل
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-on-surface">
        <Header isScrolled={isScrolled} />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-[18px] text-on-surface-variant">
              جاري تحميل المسار...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // عرض صفحة 404 إذا لم يتم العثور على المسار
  if (!track) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-on-surface">
        <Header isScrolled={isScrolled} />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center space-y-6">
            <span className="material-symbols-outlined text-[120px] text-outline-variant">
              search_off
            </span>
            <h1 className="text-[48px] leading-[60px] font-bold text-primary">
              المسار غير موجود
            </h1>
            <p className="text-[18px] text-on-surface-variant max-w-md">
              عذراً، لم نتمكن من العثور على المسار الذي تبحث عنه. ربما تم حذفه
              أو الرابط غير صحيح.
            </p>
            <Link
              href="/tracks"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-4 rounded-xl text-[16px] font-medium hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
              العودة إلى المسارات
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Header */}
      <Header isScrolled={isScrolled} />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <HeroSection track={track} />

        {/* Main Content Layout */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column (Main Details) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Course Overview */}
              <OverviewSection track={track} />

              {/* Curriculum */}
              <CurriculumSection
                curriculum={track.curriculum}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
                totalUnits={track.curriculum.length}
              />

              {/* Instructor */}
              <InstructorSection instructor={track.instructor} />

              {/* Reviews */}
              <ReviewsSection reviews={track.ReviewsSection} />
            </div>

            {/* Right Column (Sticky Enrollment Card) */}
            <div className="lg:col-span-4">
              <EnrollmentCard track={track} benefits={enrollmentBenefits} />
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <RelatedCourses courses={relatedCourses} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection({ track }) {
  const levelColors = {
    مبتدئ: "bg-green-100 text-green-700",
    متوسط: "bg-orange-100 text-orange-700",
    متقدم: "bg-purple-100 text-purple-700",
  };

  return (
    <section className="relative bg-surface py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[12px] leading-4 tracking-[0.02em] font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                workspace_premium
              </span>
              {track.category}
            </div>
            <div
              className={`px-3 py-1 rounded-full text-[12px] leading-4 tracking-[0.02em] font-semibold ${
                levelColors[track.level]
              }`}
            >
              {track.level}
            </div>
          </div>

          <h1 className="text-[48px] leading-[60px] -tracking-[0.02em] font-bold text-primary leading-tight">
            {track.title}
          </h1>

          <p className="text-[18px] leading-7 font-normal text-on-surface-variant max-w-2xl">
            {track.fullDescription}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">
                schedule
              </span>
              <span className="text-[14px] leading-5 tracking-[0.01em] font-medium">
                {track.durationText}
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">
                trending_up
              </span>
              <span className="text-[14px] leading-5 tracking-[0.01em] font-medium">
                مستوى {track.level}
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">
                group
              </span>
              <span className="text-[14px] leading-5 tracking-[0.01em] font-medium">
                {track.students.toLocaleString()} طالب ملتحق
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">
                star
              </span>
              <span className="text-[14px] leading-5 tracking-[0.01em] font-medium">
                {track.rating} ({track.reviews} تقييم)
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 relative">
          <div
            className={`rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square bg-gradient-to-br ${track.gradient}`}
          >
            <img
              src={track.img}
              alt={track.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">play_circle</span>
            </div>
            <div>
              <div className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-on-surface-variant">
                محتوى مرئي
              </div>
              <div className="text-[14px] leading-5 tracking-[0.01em] font-medium font-bold text-primary">
                {track.curriculum.length} وحدات تدريبية
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== OVERVIEW SECTION ====================
function OverviewSection({ track }) {
  return (
    <section className="space-y-6" id="overview">
      <h2 className="text-[32px] leading-10 font-semibold text-primary border-r-4 border-secondary pr-4">
        نظرة عامة على المسار
      </h2>

      <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-6">
        <p className="text-[16px] leading-6 font-normal text-on-surface-variant leading-relaxed">
          {track.fullDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <h3 className="col-span-full text-[24px] leading-8 font-semibold text-primary mb-2">
            ماذا ستتعلم؟
          </h3>
          {track?.learningObjectives?.map((objective, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary flex-shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="text-[16px] leading-6 font-normal">
                {objective}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CURRICULUM SECTION ====================
function CurriculumSection({
  curriculum,
  openAccordion,
  toggleAccordion,
  totalUnits,
}) {
  return (
    <section className="space-y-6" id="curriculum">
      <div className="flex justify-between items-center">
        <h2 className="text-[32px] leading-10 font-semibold text-primary border-r-4 border-secondary pr-4">
          منهج المسار
        </h2>
        <span className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
          {totalUnits} وحدة تدريبية
        </span>
      </div>

      <div className="space-y-4">
        {curriculum.map((unit) => (
          <div
            key={unit.id}
            className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(unit.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary">
                  {unit.number}
                </div>
                <div className="text-right">
                  <h4 className="text-[24px] leading-8 font-semibold text-primary">
                    {unit.title}
                  </h4>
                  <p className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-on-surface-variant">
                    {unit.duration}
                  </p>
                </div>
              </div>
              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  openAccordion === unit.id ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {openAccordion === unit.id && unit.lessons.length > 0 && (
              <div className="border-t border-outline-variant/20 p-6 space-y-4 bg-surface/30">
                {unit.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          lesson.locked ? "text-outline" : "text-secondary"
                        }`}
                      >
                        {lesson.locked ? "lock" : "play_circle"}
                      </span>
                      <span
                        className={`text-[16px] leading-6 font-normal ${
                          lesson.locked ? "text-outline" : "text-on-surface"
                        }`}
                      >
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-[12px] leading-4 tracking-[0.02em] font-semibold text-outline">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {openAccordion === unit.id && unit.lessons.length === 0 && (
              <div className="border-t border-outline-variant/20 p-6 bg-surface/30">
                <p className="text-[14px] leading-5 tracking-[0.01em] font-medium text-on-surface-variant">
                  محتوى تفصيلي سيتم عرضه عند الاشتراك
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== INSTRUCTOR SECTION ====================
function InstructorSection({ instructor }) {
  return (
    <section className="space-y-6" id="instructor">
      <h2 className="text-[32px] leading-10 font-semibold text-primary border-r-4 border-secondary pr-4">
        عن المعلم
      </h2>

      <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
        {/* Avatar */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20">
          {instructor.avatar ? (
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[80px] text-primary/30">
                person
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="text-[32px] leading-10 font-semibold text-primary">
            {instructor.name}
          </h3>
          <p className="text-secondary text-[14px] leading-5 tracking-[0.01em] font-medium">
            {instructor.title}
          </p>
          <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
            {instructor.bio}
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">language</span>
            </button>
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== REVIEWS SECTION ====================
function ReviewsSection({ reviews }) {
  return (
    <section className="space-y-6" id="reviews">
      <h2 className="text-[32px] leading-10 font-semibold text-primary border-r-4 border-secondary pr-4">
        آراء الطلاب
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {review.initial}
              </div>
              <div>
                <div className="text-[14px] leading-5 tracking-[0.01em] font-medium font-bold">
                  {review.name}
                </div>
                <div className="flex text-secondary text-[14px]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{
                        fontVariationSettings:
                          i < review.rating ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-6 font-normal text-on-surface-variant">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== ENROLLMENT CARD ====================
function EnrollmentCard({ track, benefits }) {
  return (
    <div className="sticky top-[100px] bg-white rounded-3xl border border-outline-variant/30 shadow-xl p-8 space-y-8">
      {/* Video Preview */}
      <div
        className={`aspect-video rounded-xl relative overflow-hidden group cursor-pointer bg-gradient-to-br ${track.gradient}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={track.img}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <span className="material-symbols-outlined text-white text-[64px] group-hover:scale-125 transition-transform">
              play_circle
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-[12px]">
          معاينة المسار
        </div>
      </div>

      {/* Price & Actions */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[32px] leading-10 font-semibold font-bold text-primary">
            {track.price} ريال
          </span>
          <span className="text-outline line-through text-[14px] leading-5 tracking-[0.01em] font-medium">
            {track.originalPrice} ريال
          </span>
          <span className="bg-error-container text-error px-2 py-0.5 rounded text-[12px] leading-4 tracking-[0.02em] font-semibold font-bold">
            {track.discount} خصم
          </span>
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-xl text-[18px] leading-6 font-semibold hover:bg-primary/90 transition-all active:scale-95 shadow-lg">
          سجل الآن في المسار
        </button>
        <button className="w-full border-2 border-primary text-primary py-4 rounded-xl text-[18px] leading-6 font-semibold hover:bg-primary/5 transition-all">
          إضافة إلى السلة
        </button>
      </div>

      {/* Benefits */}
      <div className="space-y-4 pt-4 border-t border-outline-variant/20">
        <div className="text-[14px] leading-5 tracking-[0.01em] font-medium font-bold text-on-surface">
          يتضمن المسار:
        </div>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-on-surface-variant text-[16px] leading-6 font-normal"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">
                {benefit.icon}
              </span>
              <span>{benefit.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ==================== RELATED COURSES ====================
function RelatedCourses({ courses }) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 mt-24 mb-12">
      <h2 className="text-[32px] leading-10 font-semibold text-primary mb-8 border-r-4 border-secondary pr-4">
        مسارات قد تهمك
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <RelatedCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

function RelatedCourseCard({ course }) {
  return (
    <Link href={`/tracks/${course.id}`}>
      <div className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm group hover:-translate-y-2 transition-all duration-300 h-full">
        {/* Image */}
        <div
          className={`h-48 overflow-hidden bg-gradient-to-br ${course.gradient}`}
        >
          <img
            src={course.img}
            className="material-symbols-outlined text-[80px] text-primary/20 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-[12px]">
              {course.category}
            </span>
            <div className="flex items-center gap-1 text-secondary">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-[12px] leading-4 tracking-[0.02em] font-semibold">
                {course.rating}
              </span>
            </div>
          </div>

          <h3 className="text-[20px] leading-7 font-semibold text-primary group-hover:text-secondary transition-colors">
            {course.title}
          </h3>

          <p className="text-[14px] leading-6 font-normal text-on-surface-variant line-clamp-2">
            {course.description}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <span className="text-[20px] leading-7 font-semibold text-primary">
              {course.price}
            </span>
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
              arrow_back
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

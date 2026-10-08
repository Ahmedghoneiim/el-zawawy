export const siteConfig = {
  name: "الزواوي",

  englishName: "El Zawawy Quran",
  tagline: "رفيقك اليومي مع القرآن الكريم",

  description:
    "تطبيق قرآن كريم متكامل يجمع المصحف، التلاوات الصوتية، التفسير، والأذكار اليومية في تجربة عربية سهلة وسريعة.",
  url: "https://elzawawy-quran.app",
  locale: "ar-EG",
  direction: "rtl",
  contactEmail: "support@elzawawy-quran.app",
  navigation: [
    { label: "الرئيسية", href: "#hero" },

    { label: "مميزات التطبيق", href: "#features" },
    { label: "رحلة المستخدم", href: "#user-journey" },
    { label: "رفيقك على كل جهاز", href: "#cross-device" },
    { label: "الأسئلة الشائعة", href: "#faq" },

    // { label: "المميزات", href: "#features" },
    { label: "تحميل التطبيق", href: "#download" },

  ],
  downloads: {
    appStore: {
      label: "تحميل من App Store",
      storeName: "App Store",
      href: "https://apps.apple.com/app/el-zawawy-quran",
    },
    googlePlay: {
      label: "تحميل من Google Play",
      storeName: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.elzawawy.quran",
    },
  },
  socialLinks: [
    { label: "فيسبوك", href: "https://facebook.com/elzawawyquran" },
    { label: "إكس", href: "https://x.com/elzawawyquran" },
    { label: "يوتيوب", href: "https://youtube.com/@elzawawyquran" },
  ],
};

export const landingFeatures = [
  {
    title: "المصحف الشريف",
    description:
      "قراءة واضحة بواجهة مريحة، انتقال سريع بين السور والصفحات، ودعم كامل للعرض العربي.",
    icon: "ق",
  },
  {
    title: "التلاوات الصوتية",
    description:
      "استمع لأشهر القراء مع مشغل عملي يدعم المتابعة اليومية وحفظ آخر موضع استماع.",
    icon: "ص",
  },
  {
    title: "التفسير والمعاني",
    description:
      "فهم أعمق للآيات من خلال عرض مبسط للتفسير والمعاني بجوار النص القرآني.",
    icon: "ت",
  },
  {
    title: "الأذكار اليومية",
    description:
      "أذكار الصباح والمساء وأذكار متنوعة مصممة لتكون قريبة منك طوال اليوم.",
    icon: "ذ",
  },
];

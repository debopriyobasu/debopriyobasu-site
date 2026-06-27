export const languages = {
  en: 'English',
  es: 'Español',
  hi: 'हिन्दी',
  bn: 'বাংলা',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.home': 'Home',
    'blog.back': '← Back to Home',
    'blog.title': 'Blog',
    'blog.subtitle': 'Writing on software engineering, backend systems, cloud architecture, and full-stack development.',
    'blog.read_more': 'Read my blog →',
    'section.skills': 'Skills',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.certs': 'Certifications',
    'section.education': 'Education',
    'meta.description': 'Senior Full Stack Software Engineer with 7+ years of experience in Java, Spring Boot, React, and Google Cloud Platform. Specialising in cloud-native microservice architecture and full-stack delivery.',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.blog': 'Blog',
    'nav.home': 'Inicio',
    'blog.back': '← Volver al inicio',
    'blog.title': 'Blog',
    'blog.subtitle': 'Artículos sobre ingeniería de software, sistemas backend, arquitectura cloud y desarrollo full-stack.',
    'blog.read_more': 'Leer mi blog →',
    'section.skills': 'Habilidades',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos',
    'section.certs': 'Certificaciones',
    'section.education': 'Educación',
    'meta.description': 'Ingeniero de Software Senior Full Stack con más de 7 años de experiencia en Java, Spring Boot, React y Google Cloud Platform. Especializado en arquitectura de microservicios nativos en la nube.',
  },
  hi: {
    'nav.about': 'मेरे बारे में',
    'nav.blog': 'ब्लॉग',
    'nav.home': 'होम',
    'blog.back': '← होम पर वापस जाएं',
    'blog.title': 'ब्लॉग',
    'blog.subtitle': 'सॉफ्टवेयर इंजीनियरिंग, बैकएंड सिस्टम, क्लाउड आर्किटेक्चर और फुल-स्टैक डेवलपमेंट पर विचार और लेख।',
    'blog.read_more': 'मेरा ब्लॉग पढ़ें →',
    'section.skills': 'कौशल',
    'section.experience': 'अनुभव',
    'section.projects': 'परियोजनाएं',
    'section.certs': 'प्रमाणपत्र',
    'section.education': 'शिक्षा',
    'meta.description': 'जावा, स्प्रिंग बूट, रिएक्ट और गूगल क्लाउड प्लेटफॉर्म में 7+ वर्षों के अनुभव के साथ सीनियर फुल स्टैक सॉफ्टवेयर इंजीनियर। क्लाउड-नेटिव माइक्रोसर्विस आर्किटेक्चर और फुल-स्टैक डिलीवरी में विशेषज्ञ।',
  },
  bn: {
    'nav.about': 'আমার সম্পর্কে',
    'nav.blog': 'ব্লগ',
    'nav.home': 'হোম',
    'blog.back': '← হোমে ফিরে যান',
    'blog.title': 'ব্লগ',
    'blog.subtitle': 'সফ্টওয়্যার ইঞ্জিনিয়ারিং, ব্যাকএন্ড সিস্টেম, ক্লাউড আর্কিটেকচার এবং ফুল-স্ট্যাক ডেভেলপমেন্টের উপর লেখা।',
    'blog.read_more': 'আমার ব্লগ পড়ুন →',
    'section.skills': 'দক্ষতা',
    'section.experience': 'অভিজ্ঞতা',
    'section.projects': 'প্রজেক্টসমূহ',
    'section.certs': 'সার্টিফিকেশন',
    'section.education': 'শিক্ষা',
    'meta.description': 'জাভা, স্প্রিং বুট, রিঅ্যাক্ট এবং গুগল ক্লাউড প্ল্যাটফর্মে ৭+ বছরের অভিজ্ঞতা সম্পন্ন সিনিয়র ফুল স্ট্যাক সফ্টওয়্যার ইঞ্জিনিয়ার। ক্লাউড-নেটিভ মাইক্রোসার্ভিস আর্কিটেকচার এবং ফুল-স্ট্যাক ডেলিভারিতে পারদর্শী।',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/');
  const nonDefaultLocales = Object.keys(ui).filter(l => l !== defaultLang);
  if (segments[1] && nonDefaultLocales.includes(segments[1])) {
    return '/' + segments.slice(2).join('/');
  }
  return pathname;
}

export function getLocalizedPath(pathname: string, targetLang: keyof typeof ui): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (targetLang === defaultLang) {
    return pathWithoutLocale;
  }
  const prefix = `/${targetLang}`;
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
  return `${prefix}${cleanPath}`;
}

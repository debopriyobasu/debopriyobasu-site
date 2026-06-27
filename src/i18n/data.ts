export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string;
  url: string;
}

export interface CertGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  dates: string;
  school: string;
}

export interface HomeData {
  bio: string;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certs: CertGroup[];
  education: EducationItem[];
}

export const homeDataMap: Record<'en' | 'es' | 'hi' | 'bn', HomeData> = {
  en: {
    bio: 'I am a senior full stack software engineer with 7+ years of experience building and modernising software systems end-to-end, from cloud-native microservice backends in Java and Spring Boot to interactive frontend experiences in React.',
    skills: [
      {
        title: 'Backend',
        items: [
          'Java · Spring Boot',
          'FastAPI · Async Python',
          'REST APIs · Microservices',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · Responsive Design',
          'Astro · Component Architecture',
          'REST API Integration',
        ],
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          'Google Cloud Platform (GCP)',
          'Google Kubernetes Engine (GKE)',
          'AWS · Microsoft Azure',
          'Docker · Containerisation',
        ],
      },
      {
        title: 'Developer Platforms',
        items: [
          'Backstage Golden Paths',
          'Jenkins Groovy DSL Pipelines',
          'GitHub Actions · CI/CD',
          'Ollama (Gemma3 · Llama3.2)',
        ],
      },
    ],
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Wipro Limited',
        dates: 'May 2019 – Present',
        bullets: [
          'Spearheaded the software architecture and end-to-end migration of a legacy Java J2EE monolith to a cloud-native Spring Boot 3.x microservice architecture on Google Kubernetes Engine (GKE).',
          'Wrote clean, production-grade code in Java 17 and decoupled system dependencies to shrink a manual 41-day release cycle down to rapid, automated sprint-level deployments driven by Jenkins Groovy DSL pipelines.',
          'Utilised enterprise Backstage Golden Paths and software scaffolding templates to rapidly bootstrap production-ready Java services, ensuring inherited compliance, structured logging, and Day-1 deployment capability.',
          'Extended a proprietary "Easy-Ingest" Python-based framework to abstract complex data pipelines, transforming recurring manual engineering requests into automated, self-service infrastructure scripts.',
          'Collaborated cross-functionally with architects, frontend teams, and QA specialists; championed internal developer platform best practices to maximise onboarding velocity and minimise environment drift.',
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: 'A completely local AI-powered matching engine that scans resumes for deep technical concepts rather than simple keywords, eliminating data privacy risks. Enables secure, zero-incremental-cost processing of thousands of sensitive profiles by executing entirely within local infrastructure.',
        stack: 'FastAPI · Async Python · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'AI & Generative AI',
        items: [
          'Oracle Generative AI Certified Professional',
          'Oracle AI Vector Search Certified Professional',
          'Oracle Cloud Infrastructure Artificial Intelligence Foundations Associate',
        ],
      },
      {
        label: 'Cloud Architecture',
        items: [
          'Google Cloud Professional Cloud Architect',
          'AWS Certified Solutions Architect – Associate',
        ],
      },
      {
        label: 'Google Cloud',
        items: [
          'Google Cloud Associate Cloud Engineer',
          'Google Cloud Associate Data Practitioner',
        ],
      },
      {
        label: 'Microsoft Azure',
        items: [
          'Microsoft Certified Azure Fundamentals',
          'Microsoft Certified Azure Data Fundamentals',
        ],
      },
      {
        label: 'Frontend & Other',
        items: [
          'Mozilla JavaScript Foundations Professional Certificate',
          'Meta Frontend Developer Specialization',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Tech - Computer Science & Engineering',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata',
      },
    ],
  },
  es: {
    bio: 'Soy un ingeniero de software senior full stack con más de 7 años de experiencia construyendo y modernizando sistemas de software de extremo a extremo, desde backends de microservicios nativos en la nube en Java y Spring Boot hasta experiencias frontend interactivas en React.',
    skills: [
      {
        title: 'Backend',
        items: [
          'Java · Spring Boot',
          'FastAPI · Python asíncrono',
          'APIs REST · Microservicios',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · Diseño adaptativo',
          'Astro · Arquitectura de componentes',
          'Integración de APIs REST',
        ],
      },
      {
        title: 'Cloud e Infraestructura',
        items: [
          'Google Cloud Platform (GCP)',
          'Google Kubernetes Engine (GKE)',
          'AWS · Microsoft Azure',
          'Docker · Contenedores',
        ],
      },
      {
        title: 'Plataformas de Desarrollador',
        items: [
          'Rutas doradas de Backstage',
          'Pipelines DSL de Jenkins Groovy',
          'GitHub Actions · CI/CD',
          'Ollama (Gemma3 · Llama3.2)',
        ],
      },
    ],
    experience: [
      {
        role: 'Ingeniero de Software Senior',
        company: 'Wipro Limited',
        dates: 'Mayo 2019 – Presente',
        bullets: [
          'Lideré la arquitectura de software y la migración de extremo a extremo de un monolito heredado de Java J2EE a una arquitectura de microservicios Spring Boot 3.x nativa de la nube en Google Kubernetes Engine (GKE).',
          'Escribí código limpio y apto para producción en Java 17 y desacoplé las dependencias del sistema para reducir un ciclo de lanzamiento manual de 41 días a despliegues rápidos y automatizados a nivel de sprint impulsados por pipelines DSL de Jenkins Groovy.',
          'Utilicé las rutas doradas empresariales de Backstage y plantillas de andamiaje de software para arrancar rápidamente servicios Java listos para producción, garantizando el cumplimiento heredado, el registro estructurado y la capacidad de despliegue desde el primer día.',
          'Extendí un marco propietario "Easy-Ingest" basado en Python para abstraer pipelines de datos complejos, transformando solicitudes manuales recurrentes de ingeniería en scripts de infraestructura automatizados y de autoservicio.',
          'Colaboré de forma multifuncional con arquitectos, equipos de frontend y especialistas en control de calidad; defendí las mejores prácticas de la plataforma interna de desarrollo para maximizar la velocidad de integración y minimizar la desviación del entorno.',
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: 'Un motor de emparejamiento completamente local impulsado por IA que escanea currículums en busca de conceptos técnicos profundos en lugar de simples palabras clave, eliminando los riesgos de privacidad de datos. Permite el procesamiento seguro y con coste incremental cero de miles de perfiles sensibles ejecutándose por completo dentro de la infraestructura local.',
        stack: 'FastAPI · Python asíncrono · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'IA y IA Generativa',
        items: [
          'Oracle Generative AI Certified Professional',
          'Oracle AI Vector Search Certified Professional',
          'Oracle Cloud Infrastructure Artificial Intelligence Foundations Associate',
        ],
      },
      {
        label: 'Arquitectura de Nube',
        items: [
          'Google Cloud Professional Cloud Architect',
          'AWS Certified Solutions Architect – Associate',
        ],
      },
      {
        label: 'Google Cloud',
        items: [
          'Google Cloud Associate Cloud Engineer',
          'Google Cloud Associate Data Practitioner',
        ],
      },
      {
        label: 'Microsoft Azure',
        items: [
          'Microsoft Certified Azure Fundamentals',
          'Microsoft Certified Azure Data Fundamentals',
        ],
      },
      {
        label: 'Frontend y Otros',
        items: [
          'Mozilla JavaScript Foundations Professional Certificate',
          'Meta Frontend Developer Specialization',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Tech - Ingeniería Informática y de Sistemas',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata',
      },
    ],
  },
  hi: {
    bio: 'मैं एक सीनियर फुल स्टैक सॉफ्टवेयर इंजीनियर हूँ, जिसके पास क्लाउड-नेटिव जावा और स्प्रिंग बूट माइक्रोसर्विसेज बैकएंड से लेकर रिएक्ट में इंटरएक्टिव फ्रंटएंड अनुभवों तक, सॉफ्टवेयर सिस्टम्स को एंड-टू-एंड बनाने और आधुनिक बनाने का 7+ वर्षों का अनुभव है।',
    skills: [
      {
        title: 'बैकएंड',
        items: [
          'Java · Spring Boot',
          'FastAPI · एसिंक्रोनस पायथन',
          'REST APIs · माइक्रोसर्विसेज',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'फ्रंटएंड',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · रिस्पॉन्सिव डिजाइन',
          'Astro · कम्पोनेंट आर्किटेक्चर',
          'REST API इंटीग्रेशन',
        ],
      },
      {
        title: 'क्लाउड और इंफ्रास्ट्रक्चर',
        items: [
          'Google Cloud Platform (GCP)',
          'Google Kubernetes Engine (GKE)',
          'AWS · Microsoft Azure',
          'Docker · कंटेनराइजेशन',
        ],
      },
      {
        title: 'डेवलपर प्लेटफॉर्म्स',
        items: [
          'Backstage गोल्डन पाथ्स',
          'Jenkins Groovy DSL पाइपलाइन्स',
          'GitHub Actions · CI/CD',
          'Ollama (Gemma3 · Llama3.2)',
        ],
      },
    ],
    experience: [
      {
        role: 'सीनियर सॉफ्टवेयर इंजीनियर',
        company: 'Wipro Limited',
        dates: 'मई 2019 - वर्तमान',
        bullets: [
          'Google Kubernetes Engine (GKE) पर एक लीगेसी जावा J2EE मोनोलिथ से क्लाउड-नेटिव स्प्रिंग बूट 3.x माइक्रोसर्विस आर्किटेक्चर में सॉफ्टवेयर आर्किटेक्चर और एंड-टू-एंड माइग्रेशन का नेतृत्व किया।',
          'Java 17 में क्लीन, प्रोडक्शन-ग्रेड कोड लिखा और सिस्टम डिपेंडेंसी को डीकपल्स किया, जिससे एक मैनुअल 41-दिन के रिलीज चक्र को जेनकिंस ग्रूवी डीएसएल पाइपलाइनों द्वारा संचालित त्वरित, स्वचालित स्प्रिंट-स्तरीय परिनियोजन (deployments) में बदल दिया गया।',
          'उत्पादन के लिए तैयार जावा सेवाओं को तेजी से बूटस्ट्रैप करने के लिए एंटरप्राइज Backstage गोल्डन पाथ्स और सॉफ्टवेयर स्केफोल्डिंग टेम्पलेट्स का उपयोग किया, जिससे अंतर्निहित अनुपालन, संरचित लॉगिंग और डे-1 परिनियोजन क्षमता सुनिश्चित हुई।',
          'जटिल डेटा पाइपलाइनों को एब्स्ट्रैक्ट करने के लिए एक मालिकाना "Easy-Ingest" पायथन-आधारित ढांचे का विस्तार किया, जिससे बार-बार होने वाले मैनुअल इंजीनियरिंग अनुरोधों को स्वचालित, सेल्फ-सर्विस इंफ्रास्ट्रक्चर स्क्रिप्ट में बदल दिया गया।',
          'आर्किटेक्ट्स, फ्रंटएंड टीमों और क्यूए विशेषज्ञों के साथ क्रॉस-फंक्शनल सहयोग किया; ऑनबोर्डिंग गति को अधिकतम करने और पर्यावरण विचलन को कम करने के लिए आंतरिक डेवलपर प्लेटफॉर्म सर्वोत्तम प्रथाओं का समर्थन किया।',
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: 'पूरी तरह से स्थानीय एआई-संचालित मिलान इंजन जो सरल कीवर्ड के बजाय गहरे तकनीकी कॉन्सेप्ट्स के लिए रेज्यूमे को स्कैन करता है, जिससे डेटा गोपनीयता जोखिम समाप्त हो जाते हैं। स्थानीय इंफ्रास्ट्रक्चर के भीतर पूरी तरह से निष्पादित करके हजारों संवेदनशील प्रोफाइल के सुरक्षित, शून्य-अतिरिक्त-लागत प्रसंस्करण को सक्षम बनाता है।',
        stack: 'FastAPI · एसिंक्रोनस पायथन · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'एआई और जनरेटिव एआई',
        items: [
          'Oracle Generative AI Certified Professional',
          'Oracle AI Vector Search Certified Professional',
          'Oracle Cloud Infrastructure Artificial Intelligence Foundations Associate',
        ],
      },
      {
        label: 'क्लाउड आर्किटेक्चर',
        items: [
          'Google Cloud Professional Cloud Architect',
          'AWS Certified Solutions Architect – Associate',
        ],
      },
      {
        label: 'गूगल क्लाउड',
        items: [
          'Google Cloud Associate Cloud Engineer',
          'Google Cloud Associate Data Practitioner',
        ],
      },
      {
        label: 'माइक्रोसॉफ्ट एज़्योर',
        items: [
          'Microsoft Certified Azure Fundamentals',
          'Microsoft Certified Azure Data Fundamentals',
        ],
      },
      {
        label: 'फ्रंटएंड और अन्य',
        items: [
          'Mozilla JavaScript Foundations Professional Certificate',
          'Meta Frontend Developer Specialization',
        ],
      },
    ],
    education: [
      {
        degree: 'बी.टेक - कंप्यूटर साइंस एंड इंजीनियरिंग',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata (यूनिवर्सिटी ऑफ इंजीनियरिंग एंड मैनेजमेंट, कोलकाता)',
      },
    ],
  },
  bn: {
    bio: 'আমি একজন সিনিয়র ফুল স্ট্যাক সফ্টওয়্যার ইঞ্জিনিয়ার যার ক্লাউড-নেটিভ জাভা এবং স্প্রিং বুট মাইক্রোসার্ভিসেস ব্যাকএন্ড থেকে শুরু করে রিঅ্যাক্টে ইন্টারেক্টিভ ফ্রন্টএন্ড অভিজ্ঞতা পর্যন্ত সফ্টওয়্যার সিস্টেমের এন্ড-টু-এন্ড নির্মাণ এবং আধুনিকীকরণের ৭+ বছরের অভিজ্ঞতা রয়েছে।',
    skills: [
      {
        title: 'ব্যাকএন্ড',
        items: [
          'Java · Spring Boot',
          'FastAPI · অ্যাসিনক্রোনাস পাইথন',
          'REST APIs · মাইক্রোসার্ভিসেস',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'ফ্রন্টএন্ড',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · রেসপন্সিভ ডিজাইন',
          'Astro · কম্পোনেন্ট আর্কিটেকচার',
          'REST API ইন্টিগ্রেশন',
        ],
      },
      {
        title: 'ক্লাউড ও ইনফ্রাস্ট্রাকচার',
        items: [
          'Google Cloud Platform (GCP)',
          'Google Kubernetes Engine (GKE)',
          'AWS · Microsoft Azure',
          'Docker · কন্টেইনারাইজেশন',
        ],
      },
      {
        title: 'ডেভেলপার প্ল্যাটফর্ম',
        items: [
          'Backstage গোল্ডেন পাথস',
          'Jenkins Groovy DSL পাইপলাইনস',
          'GitHub Actions · CI/CD',
          'Ollama (Gemma3 · Llama3.2)',
        ],
      },
    ],
    experience: [
      {
        role: 'সিনিয়র সফ্টওয়্যার ইঞ্জিনিয়ার',
        company: 'Wipro Limited',
        dates: 'মে ২০১৯ - বর্তমান',
        bullets: [
          'Google Kubernetes Engine (GKE)-এ একটি লিগ্যাসি জাভা J2EE মনোলিথ থেকে ক্লাউড-নেটিভ স্প্রিং বুট ৩.x মাইক্রোসার্ভিস আর্কিটেকচারে সফ্টওয়্যার আর্কিটেকচার এবং এন্ড-টু-এন্ড মাইগ্রেশনের নেতৃত্ব দিয়েছি।',
          'Java 17-এ ক্লিন, প্রোডাকশন-গ্রেড কোড লিখেছি এবং সিস্টেম ডিপেনডেন্সি ডিকাপল করেছি, যার ফলে একটি ম্যানুয়াল ৪১-দিনের রিলিজ চক্রকে জেনকিন্স গ্রুভি ডিএসএল পাইপলাইন দ্বারা পরিচালিত দ্রুত, স্বয়ংক্রিয় স্প্রিন্ট-স্তরের ডেপ্লয়মেন্টে রূপান্তর করা সম্ভব হয়েছে।',
          'প্রোডাকশন-রেডি জাভা সার্ভিস দ্রুত বুটস্ট্র্যাপ করতে এন্টারপ্রাইজ Backstage গোল্ডেন পাথস এবং সফ্টওয়্যার স্ক্যাফোল্ডিং টেমপ্লেট ব্যবহার করেছি, যা অন্তর্নিহিত কমপ্লায়েন্স, স্ট্রাকচার্ড লগিং এবং ডে-১ ডেপ্লয়মেন্ট ক্ষমতা নিশ্চিত করেছে।',
          'জটিল ডেটা পাইপলাইনগুলিকে অ্যাবস্ট্রাক্ট করতে একটি প্রোপ্রাইটরি "Easy-Ingest" পাইথন-ভিত্তিক ফ্রেমওয়ার্কের সম্প্রসারণ করেছি, যা ম্যানুয়াল ইঞ্জিনিয়ারিং অনুরোধগুলিকে স্বয়ংক্রিয়, সেলফ-সার্ভিস ইনফ্রাস্ট্রাকচার স্ক্রিপ্টে রূপান্তর করেছে।',
          'আর্কিটেক্ট, ফ্রন্টএন্ড টিম এবং কিউএ বিশেষজ্ঞদের সাথে ক্রস-ফাংশনাল সহযোগিতা করেছি; অনবোর্ডিং গতি বাড়াতে এবং এনভায়রনমেন্ট ড্রিফট কমাতে ইন্টারনাল ডেভেলপার প্ল্যাটফর্মের সর্বোত্তম অনুশীলনগুলিকে উৎসাহিত করেছি।',
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: 'একটি সম্পূর্ণ লোকাল এআই-ভিত্তিক ম্যাচিং ইঞ্জিন যা সাধারণ কিওয়ার্ড সার্চের পরিবর্তে রেজুমের গভীর প্রযুক্তিগত ধারণাগুলি বিশ্লেষণ করে, যার ফলে ডেটা প্রাইভেসি নিয়ে কোনো ঝুঁকি থাকে না। লোকাল ইনফ্রাস্ট্রাকচারের মধ্যে সম্পূর্ণরূপে চালিত হওয়ার কারণে হাজার হাজার সংবেদনশীল প্রোফাইলের নিরাপদ এবং কোনো অতিরিক্ত খরচ ছাড়াই প্রসেসিং নিশ্চিত করে।',
        stack: 'FastAPI · অ্যাসিনক্রোনাস পাইথন · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'এআই এবং জেনারেটিভ এআই',
        items: [
          'Oracle Generative AI Certified Professional',
          'Oracle AI Vector Search Certified Professional',
          'Oracle Cloud Infrastructure Artificial Intelligence Foundations Associate',
        ],
      },
      {
        label: 'ক্লাউড আর্কিটেকচার',
        items: [
          'Google Cloud Professional Cloud Architect',
          'AWS Certified Solutions Architect – Associate',
        ],
      },
      {
        label: 'গুগল ক্লাউড',
        items: [
          'Google Cloud Associate Cloud Engineer',
          'Google Cloud Associate Data Practitioner',
        ],
      },
      {
        label: 'মাইক্রোসফট অ্যাজুর',
        items: [
          'Microsoft Certified Azure Fundamentals',
          'Microsoft Certified Azure Data Fundamentals',
        ],
      },
      {
        label: 'ফ্রন্টএন্ড এবং অন্যান্য',
        items: [
          'Mozilla JavaScript Foundations Professional Certificate',
          'Meta Frontend Developer Specialization',
        ],
      },
    ],
    education: [
      {
        degree: 'বি.টেক - কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata (ইউনিভার্সিটি অফ ইঞ্জিনিয়ারিং অ্যান্ড ম্যানেজমেন্ট, কলকাতা)',
      },
    ],
  },
};

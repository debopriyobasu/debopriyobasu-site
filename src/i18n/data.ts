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

export const homeDataMap: Record<'en' | 'es' | 'hi' | 'bn' | 'de' | 'fr', HomeData> = {
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
          'GCP · AWS · Azure',
          'Docker · GitHub Actions',
          'Harness · Jenkins',
          'Terraform',
        ],
      },
    ],
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Wipro Limited',
        dates: 'May 2019 – Present',
        bullets: [
          'Led Infrastructure Modernization & DevOps Transformation: Directed the end-to-end migration of a legacy Java J2EE monolith (IBM WebSphere) to cloud-native Spring Boot 3.x microservices on Google Kubernetes Engine (GKE), while simultaneously engineering automated Jenkins (Groovy DSL) CI/CD pipelines, successfully slashing production deployment lead times from ~41 days to sprint-based cycles.',
          'Deconstructed Monolithic Architecture: Transformed tightly coupled legacy components into domain-driven, highly scalable backend microservices utilizing Java 17, Spring Boot, and Spring Data JPA/Hibernate to anchor a high-throughput multi-brand banking platform handling 800–1,200 weekly customer referrals.',
          'Engineered Origin Data Products (ODP): Built an automated pipeline to replicate on-premises assets to Google Cloud via Connect:Direct and Python, utilizing TWSd for scheduling and Terraform for IaC. Maintained data product integrity by routing clean loads to BigQuery for analysis while automatically isolating failures into dedicated reject buckets.',
          'Optimized Developer Velocity (DevEx): Leveraged Backstage Golden Paths and standardized service templates to automate engineering workflows, reducing production-ready service bootstrapping time from days to minutes with out-of-the-box logging, monitoring, and compliance configurations.',
          'Spearheaded Enterprise UI Modernization: Drove the frontend migration from the legacy Constellation UI to the enterprise Interstellar Golden Path architecture, building high-performance, customer-facing web applications using React, TypeScript, and Redux.',
          'Engineered Multi-Tenant Frontend Architecture: Built a suite of reusable UI components using the Cancara Design System, enabling seamless, consistent user experiences across multiple distinct banking brands from a single, shared codebase.',
          'Championed Full-Stack Agility: Collaborated closely with architects, QA, and product teams to ship resilient full-stack features using Test-Driven Development (TDD) and Agile methodologies.',
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
          'GCP · AWS · Azure',
          'Docker · GitHub Actions',
          'Harness · Jenkins',
          'Terraform',
        ],
      },
    ],
    experience: [
      {
        role: 'Ingeniero de Software Senior',
        company: 'Wipro Limited',
        dates: 'Mayo 2019 – Presente',
        bullets: [
          'Modernización de infraestructura y transformación DevOps lideradas: Dirigí la migración de extremo a extremo de un monolito heredado de Java J2EE (IBM WebSphere) a microservicios Spring Boot 3.x nativos de la nube en Google Kubernetes Engine (GKE), al mismo tiempo que diseñé pipelines automatizados de CI/CD de Jenkins (Groovy DSL), reduciendo con éxito los tiempos de entrega de despliegue en producción de ~41 días a ciclos basados en sprints.',
          'Arquitectura monolítica deconstruida: Transformé componentes heredados estrechamente acoplados en microservicios backend altamente escalables orientados al dominio utilizando Java 17, Spring Boot y Spring Data JPA/Hibernate para consolidar una plataforma bancaria multimarca de alto rendimiento que gestiona entre 800 y 1.200 referencias de clientes semanales.',
          'Ingeniería de productos de datos de origen (ODP): Construí un pipeline automatizado para replicar activos locales en Google Cloud mediante Connect:Direct y Python, utilizando TWSd para la programación y Terraform para IaC. Mantuve la integridad del producto de datos enrutando las cargas limpias a BigQuery para su análisis, aislando automáticamente los fallos en depósitos de rechazo dedicados.',
          'Velocidad de desarrollo optimizada (DevEx): Aproveché las rutas doradas de Backstage y plantillas de servicio estandarizadas para automatizar los flujos de trabajo de ingeniería, reduciendo el tiempo de inicialización de servicios listos para producción de días a minutos con configuraciones integradas de registro, monitoreo y cumplimiento.',
          'Modernización de la interfaz de usuario empresarial liderada: Impulsé la migración del frontend desde la interfaz de usuario Constellation heredada a la arquitectura Interstellar Golden Path empresarial, creando aplicaciones web de alto rendimiento orientadas al cliente con React, TypeScript y Redux.',
          'Arquitectura frontend multiinquilino diseñada: Creé un conjunto de componentes de interfaz de usuario reutilizables mediante el sistema de diseño Cancara, permitiendo experiencias de usuario fluidas y consistentes en múltiples marcas bancarias distintas a partir de una única base de código compartida.',
          'Defensa de la agilidad full-stack: Colaboré estrechamente con arquitectos, control de calidad y equipos de producto para entregar funciones full-stack resilientes mediante desarrollo guiado por pruebas (TDD) y metodologías ágiles.',
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
    bio: 'मैं एक सीनियर फुल स्टैक सॉफ्टवेयर इंजीनियर हूँ, जिसके पास क्लाउड-नेटिव जावा और स्प्रिंग बूट माइक्रोसर्विसेज बैकएंड से लेकर रिएक्ट में इंटरएक्टिव फ्रंटएंड अनुभवों तक, सॉफ्टवेयर सिस्टम्स को एंड-टू-एंड बनाने और आधुनिक बनाने का ७+ वर्षों का अनुभव है।',
    skills: [
      {
        title: 'बैकएंड',
        items: [
          'जावा · स्प्रिंग बूट',
          'फास्टएपिआई · एसिंक्रोनस पायथन',
          'रेस्ट एपीआई · माइक्रोसर्विसेज',
          'पोस्टग्रेसक्यूएल · पीजीवेक्टर · क्लाउड एसक्यूएल',
        ],
      },
      {
        title: 'फ्रंटएंड',
        items: [
          'रिएक्ट · जावास्क्रिप्ट · टाइपस्क्रिप्ट',
          'एचटीएमएल · सीएसएस · रिस्पॉन्सिव डिजाइन',
          'एस्ट्रो · कम्पोनेंट आर्किटेक्चर',
          'रेस्ट एपीआई इंटीग्रेशन',
        ],
      },
      {
        title: 'क्लाउड और इंफ्रास्ट्रक्चर',
        items: [
          'जीसीपी · एडब्ल्यूएस · एज़्योर',
          'डॉकर · गिटहब एक्शन्स',
          'हार्नेस · जेनकिंस',
          'टेराफॉर्म',
        ],
      },
    ],
    experience: [
      {
        role: 'सीनियर सॉफ्टवेयर इंजीनियर',
        company: 'विप्रो लिमिटेड',
        dates: 'मई २०१९ - वर्तमान',
        bullets: [
          'इन्फ्रास्ट्रक्चर आधुनिकीकरण और डेवऑप्स परिवर्तन का नेतृत्व किया: गूगल कुबेरनेटीस इंजन (GKE) पर क्लाउड-नेटिव स्प्रिंग बूट 3.x माइक्रोसर्विसेज के लिए एक लीगेसी जावा J2EE मोनोलिथ (IBM WebSphere) के एंड-टू-एंड माइग्रेशन को निर्देशित किया, साथ ही स्वचालित जेनकिंस (Groovy DSL) CI/CD पाइपलाइनों को इंजीनियर किया, जिससे उत्पादन परिनियोजन के समय को ~41 दिनों से घटाकर स्प्रिंट-आधारित चक्रों में सफलतापूर्वक बदल दिया गया।',
          'मोनोलिथिक आर्किटेक्चर को डिकंस्ट्रक्ट किया: कसकर जुड़े लीगेसी घटकों को जावा 17, स्प्रिंग बूट और स्प्रिंग डेटा जेपीए/हाइबरनेट का उपयोग करके डोमेन-संचालित, अत्यधिक स्केलेबल बैकएंड माइक्रोसर्विसेज में बदल दिया ताकि 800-1,200 साप्ताहिक ग्राहक रेफ़रल को संभालने वाले एक उच्च-थ्रूपुट मल्टी-ब्रांड बैंकिंग प्लेटफॉर्म को मजबूती दी जा सके।',
          'ओरिजिन डेटा प्रोडक्ट्स (ODP) को इंजीनियर किया: शेड्यूलिंग के लिए TWSd और IaC के लिए टेराफॉर्म का उपयोग करते हुए, Connect:Direct और पायथन के माध्यम से ऑन-प्रिमाइसेस एसेट्स को गूगल क्लाउड पर रेप्लिकेट करने के लिए एक स्वचालित पाइपलाइन का निर्माण किया। विश्लेषण के लिए क्लीन लोड को बिगक्वेरी पर रूट करके डेटा प्रोडक्ट की अखंडता बनाए रखी, जबकि विफलताओं को स्वचालित रूप से समर्पित रिजेक्ट बकेट में अलग कर दिया।',
          'डेवलपर वेलोसिटी (DevEx) को अनुकूलित किया: इंजीनियरिंग वर्कफ़्लो को स्वचालित करने के लिए बैकस्टेज गोल्डन पाथ्स और मानकीकृत सेवा टेम्पलेट्स का लाभ उठाया, जिससे आउट-ऑफ-द-बॉक्स लॉगिंग, मॉनिटरिंग और अनुपालन कॉन्फ़िगरेशन के साथ उत्पादन के लिए तैयार सेवा के बूटस्ट्रैपिंग समय को दिनों से घटाकर मिनटों में कर दिया गया।',
          'एंटरप्राइज यूआई आधुनिकीकरण का नेतृत्व किया: लीगेसी कॉन्स्टेलेशन यूआई से एंटरप्राइज इंटरस्टेलर गोल्डन पाथ आर्किटेक्चर में फ्रंटएंड माइग्रेशन को संचालित किया, जिससे रिएक्ट, टाइपस्क्रिप्ट और रिडक्स का उपयोग करके उच्च प्रदर्शन वाले, ग्राहक-उन्मुख वेब एप्लिकेशन बनाए गए।',
          'मल्टी-टेनेंट फ्रंटएंड आर्किटेक्चर को इंजीनियर किया: कैंकारा डिज़ाइन सिस्टम का उपयोग करके पुन: प्रयोज्य यूआई घटकों का एक सूट बनाया, जिससे एक ही साझा कोडबेस से कई अलग-अलग बैंकिंग ब्रांडों में सहज, सुसंगत उपयोगकर्ता अनुभव सक्षम हुआ।',
          'फुल-स्टैक चपलता (Agility) का समर्थन किया: टेस्ट-ड्रिवन डेवलपमेंट (TDD) और एजाइल कार्यप्रणाली का उपयोग करके लचीली फुल-स्टैक सुविधाओं को शिप करने के लिए आर्किटेक्ट्स, क्यूए और उत्पाद टीमों के साथ मिलकर सहयोग किया।',
        ],
      },
    ],
    projects: [
      {
        title: 'एआई-पावर्ड ऑफलाइन सिमेंटिक रेज्यूमे मैचर',
        description: 'पूरी तरह से स्थानीय एआई-संचालित मिलान इंजन जो सरल कीवर्ड के बजाय गहरे तकनीकी कॉन्सेप्ट्स के लिए रेज्यूमे को स्कैन करता है, जिससे डेटा गोपनीयता जोखिम समाप्त हो जाते हैं। स्थानीय इंफ्रास्ट्रक्चर के भीतर पूरी तरह से निष्पादित करके हजारों संवेदनशील प्रोफाइल के सुरक्षित, शून्य-अतिरिक्त-लागत प्रसंस्करण को सक्षम बनाता है।',
        stack: 'फास्टएपिआई · एसिंक्रोनस पायथन · पोस्टग्रेसक्यूएल + पीजीवेक्टर · ओलामा (गेमा३ / लामा३.२) · डॉकर · रिएक्ट',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'एआई और जनरेटिव एआई',
        items: [
          'ओरेकल जनरेटिव एआई सर्टिफाइड प्रोफेशनल',
          'ओरेकल एआई वेक्टर सर्च सर्टिफाइड प्रोफेशनल',
          'ओरेकल क्लाउड इंफ्रास्ट्रक्चर आर्टिफिशियल इंटेलिजेंस फाउंडेशन्स एसोसिएट',
        ],
      },
      {
        label: 'क्लाउड आर्किटेक्चर',
        items: [
          'गूगल क्लाउड प्रोफेशनल क्लाउड आर्किटेक्ट',
          'एडब्ल्यूएस सर्टिफाइड सॉल्यूशंस आर्किटेक्ट - एसोसिएट',
        ],
      },
      {
        label: 'गूगल क्लाउड',
        items: [
          'गूगल क्लाउड एसोसिएट क्लाउड इंजीनियर',
          'गूगल क्लाउड एसोसिएट डेटा प्रैक्टिशनर',
        ],
      },
      {
        label: 'माइक्रोसॉफ्ट एज़्योर',
        items: [
          'माइक्रोसॉफ्ट सर्टिफाइड एज़्योर फंडामेंटल्स',
          'माइक्रोसॉफ्ट सर्टिफाइड एज़्योर डेटा फंडामेंटल्स',
        ],
      },
      {
        label: 'फ्रंटएंड और अन्य',
        items: [
          'मोज़िला जावास्क्रिप्ट फाउंडेशन्स प्रोफेशनल सर्टिफिकेट',
          'मेटा फ्रंटएंड डेवलपर स्पेशलाइजेशन',
        ],
      },
    ],
    education: [
      {
        degree: 'बी.टेक - कंप्यूटर साइंस एंड इंजीनियरिंग',
        dates: 'सीजीपीए: ८.८३ / १०',
        school: 'यूनिवर्सिटी ऑफ इंजीनियरिंग एंड मैनेजमेंट, कोलकाता',
      },
    ],
  },
  bn: {
    bio: 'আমি একজন সিনিয়র ফুল স্ট্যাক সফ্টওয়্যার ইঞ্জিনিয়ার যার ক্লাউড-নেটিভ জাভা এবং স্প্রিং বুট মাইক্রোসার্ভিসেস ব্যাকএন্ড থেকে শুরু করে রিঅ্যাক্টে ইন্টারেক্টিভ ফ্রন্টএন্ড অভিজ্ঞতা পর্যন্ত সফ্টওয়্যার সিস্টেমের এন্ড-টু-এন্ড নির্মাণ এবং আধুনিকীকরণের ৭+ বছরের অভিজ্ঞতা রয়েছে।',
    skills: [
      {
        title: 'ব্যাকএন্ড',
        items: [
          'জাভা · স্প্রিং বুট',
          'ফাস্টএপিআই · অ্যাসিনক্রোনাস পাইথন',
          'রেস্ট এপিআই · মাইক্রোসার্ভিসেস',
          'পোস্টগ্রেসকিউএল · পিজিভেক্টর · ক্লাউড এসকিউএল',
        ],
      },
      {
        title: 'ফ্রন্টএন্ড',
        items: [
          'রিঅ্যাক্ট · জাভাস্ক্রিপ্ট · টাইপস্ক্রিপ্ট',
          'এইচটিএমএল · সিএসএস · রেসপন্সিভ ডিজাইন',
          'অ্যাস্ট্রো · কম্পোনেন্ট আর্কিটেকচার',
          'রেস্ট এপিআই ইন্টিগ্রেশন',
        ],
      },
      {
        title: 'ক্লাউড ও ইনফ্রাস্ট্রাকচার',
        items: [
          'জিসিপি · এডাব্লিউএস · আজুর',
          'ডকার · গিটহাব অ্যাকশনস',
          'হার্নেস · জেনকিন্স',
          'টেরাফর্ম',
        ],
      },
    ],
    experience: [
      {
        role: 'সিনিয়র সফ্টওয়্যার ইঞ্জিনিয়ার',
        company: 'উইপ্রো লিমিটেড',
        dates: 'মে ২০১৯ - বর্তমান',
        bullets: [
          'ইনফ্রাস্ট্রাকচার আধুনিকীকরণ ও ডেভঅপ্স রূপান্তরের নেতৃত্ব দিয়েছি: গুগল কুবারনেটিস ইঞ্জিন (GKE)-এ ক্লাউড-নেটিভ স্প্রিং বুট ৩.x মাইক্রোসার্ভিসেসের জন্য একটি লিগেসি জাভা জে২ইই মনোলিথ (IBM WebSphere) এর এন্ড-টু-এন্ড মাইগ্রেশন পরিচালনা করেছি, পাশাপাশি স্বয়ংক্রিয় জেনকিন্স (Groovy DSL) CI/CD পাইপলাইন তৈরি করেছি, যা প্রোডাকশন ডেপ্লয়মেন্টের সময়কে ~৪১ দিন থেকে কমিয়ে স্প্রিন্ট-ভিত্তিক চক্রে সফলভাবে রূপান্তর করেছে।',
          'মনোলিথিক আর্কিটেকচার ডিকনস্ট্রাক্ট করেছি: জাভা ১৭, স্প্রিং বুট এবং স্প্রিং ডেটা জেপিএ/হাইবারনেট ব্যবহার করে শক্তভাবে যুক্ত লিগেসি উপাদানগুলিকে ডোমেন-চালিত, অত্যন্ত স্কেলেবল ব্যাকএন্ড মাইক্রোসার্ভিসেসে রূপান্তরিত করেছি যাতে প্রতি সপ্তাহে ৮০০–১,২০০টি কাস্টমার রেফারেল হ্যান্ডেল করতে সক্ষম একটি হাই-থ্রুপুট মাল্টি-ব্র্যান্ড ব্যাংকিং প্ল্যাটফর্ম পরিচালনা করা যায়।',
          'ওরিজিন ডেটা প্রোডাক্টস (ODP) তৈরি করেছি: শিডিউলিংয়ের জন্য TWSd এবং IaC-এর জন্য টেরাফর্ম ব্যবহার করে Connect:Direct এবং পাইথনের মাধ্যমে অন-প্রিমিসেস সম্পদগুলিকে গুগল ক্লাউডে রেপ্লিকেট করার জন্য একটি স্বয়ংক্রিয় পাইপলাইন তৈরি করেছি। বিশ্লেষণের জন্য ক্লিন লোডগুলিকে বিগকোয়ারিতে পাঠিয়ে ডেটা প্রোডাক্টের অখণ্ডতা বজায় রেখেছি এবং ব্যর্থ লোডগুলিকে স্বয়ংক্রিয়ভাবে ডেডিকেটেড রিজেক্ট বাকেটে আলাদা করেছি।',
          'ডেভেলপার ভেলোসিটি (DevEx) অপ্টিমাইজ করেছি: ইঞ্জিনিয়ারিং ওয়ার্কফ্লো স্বয়ংক্রিয় করতে ব্যাকস্টেজ গোল্ডেন পাথস এবং প্রমিত সার্ভিস টেমপ্লেট ব্যবহার করেছি, যা আউট-অফ-দ্য-বক্স লগিং, মনিটরিং এবং কমপ্লায়েন্স কনফিগারেশন সহ প্রোডাকশন-রেডি সার্ভিস বুটস্ট্র্যাপ করার সময়কে দিন থেকে মিনিটে নামিয়ে এনেছে।',
          'এন্টারপ্রাইজ ইউআই আধুনিকীকরণের নেতৃত্ব দিয়েছি: লিগেসি কনস্টেলেশন ইউআই থেকে এন্টারপ্রাইজ ইন্টারস্টেলার গোল্ডেন পাথ আর্কিটেকচারে ফ্রন্টএন্ড মাইগ্রেশন পরিচালনা করেছি, রিঅ্যাক্ট, টাইপস্ক্রিপ্ট এবং রিডাক্স ব্যবহার করে উচ্চ-পারফরম্যান্স কাস্টমার-ফেসিং ওয়েব অ্যাপ্লিকেশন তৈরি করেছি।',
          'মাল্টি-টেন্যান্ট ফ্রন্টএন্ড আর্কিটেকচার তৈরি করেছি: ক্যানকারা ডিজাইন সিস্টেম ব্যবহার করে পুনরায় ব্যবহারযোগ্য ইউআই উপাদানের একটি সেট তৈরি করেছি, যা একটি একক, শেয়ার্ড কোডবেস থেকে একাধিক পৃথক ব্যাংকিং ব্র্যান্ড জুড়ে নির্বিঘ্ন ও সামঞ্জস্যপূর্ণ ব্যবহারকারীর অভিজ্ঞতা নিশ্চিত করেছে।',
          'ফুল-স্ট্যাক এজিলিটি বজায় রেখেছি: টেস্ট-ড্রিভেন ডেভেলপমেন্ট (TDD) এবং এজাইল মেথডোলজি ব্যবহার করে স্থিতিস্থাপক ফুল-স্ট্যাক ফিচার শিপ করতে আর্কিটেক্ট, কিউএ এবং প্রোডাক্ট টিমের সাথে ঘনিষ্ঠভাবে কাজ করেছি।',
        ],
      },
    ],
    projects: [
      {
        title: 'এআই-পাওয়ার্ড অফলাইন সিমেন্টিক রেজুমে ম্যাচিং ইঞ্জিন',
        description: 'একটি সম্পূর্ণ লোকাল এআই-ভিত্তিক ম্যাচিং ইঞ্জিন যা সাধারণ কিওয়ার্ড সার্চের পরিবর্তে রেজুমের গভীর প্রযুক্তিগত ধারণাগুলি বিশ্লেষণ করে, যার ফলে ডেটা প্রাইভেসি নিয়ে কোনো ঝুঁকি থাকে না। লোকাল ইনফ্রাস্ট্রাকচারের মধ্যে সম্পূর্ণরূপে চালিত হওয়ার কারণে হাজার হাজার সংবেদনশীল প্রোফাইলের নিরাপদ এবং কোনো অতিরিক্ত খরচ ছাড়াই প্রসেসিং নিশ্চিত করে।',
        stack: 'ফাস্টএপিআই · অ্যাসিনক্রোনাস পাইথন · পোস্টগ্রেসকিউএল + পিজিভেক্টর · ওলামা (গেমা৩ / লামা৩.২) · ডকার · রিঅ্যাক্ট',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'এআই এবং জেনারেটিভ এআই',
        items: [
          'ওরেকল জেনারেটিভ এআই সার্টিফাইড প্রফেশনাল',
          'ওরেকল এআই ভেক্টর সার্চ সার্টিফাইড প্রফেশনাল',
          'ওরেকল ক্লাউড ইনফ্রাস্ট্রাকচার আর্টিফিশিয়াল ইন্টেলিজেন্স ফাউন্ডেশনস অ্যাসোসিয়েট',
        ],
      },
      {
        label: 'ক্লাউড আর্কিটেকচার',
        items: [
          'গুগল ক্লাউড প্রফেশনাল ক্লাউড আর্কিটেক্ট',
          'এডাব্লিউএস সার্টিফাইড সলিউশনস আর্কিটেক্ট - অ্যাসোসিয়েট',
        ],
      },
      {
        label: 'গুগল ক্লাউড',
        items: [
          'গুগল ক্লাউড অ্যাসোসিয়েট ক্লাউড ইঞ্জিনিয়ার',
          'গুগল ক্লাউড অ্যাসোসিয়েট ডেটা প্র্যাকটিশনার',
        ],
      },
      {
        label: 'মাইক্রোসফট অ্যাজুর',
        items: [
          'মাইক্রোসফট সার্টিফাইড অ্যাজুর ফান্ডামেন্টালস',
          'মাইক্রোসফট সার্টিফাইড অ্যাজুর ডেটা ফান্ডামেন্টালস',
        ],
      },
      {
        label: 'ফ্রন্টএন্ড এবং অন্যান্য',
        items: [
          'মজিলা জাভাস্ক্রিপ্ট ফাউন্ডেশনস প্রফেশনাল সার্টিফিকেট',
          'মেটা ফ্রন্টএন্ড ডেভেলপার স্পেশালাইজেশন',
        ],
      },
    ],
    education: [
      {
        degree: 'বি.টেক - কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
        dates: 'সিজিপিএ: ৮.৮৩ / ১০',
        school: 'ইউনিভার্সিটি অফ ইঞ্জিনিয়ারিং অ্যান্ড ম্যানেজমেন্ট, কলকাতা',
      },
    ],
  },
  de: {
    bio: 'Ich bin ein Senior Full Stack Software Engineer mit mehr als 7 Jahren Erfahrung im End-to-End-Aufbau und der Modernisierung von Softwaresystemen, von Cloud-nativem Microservice-Backend in Java und Spring Boot bis hin zu interaktiven Frontend-Erlebnissen in React.',
    skills: [
      {
        title: 'Backend',
        items: [
          'Java · Spring Boot',
          'FastAPI · Asynchrones Python',
          'REST-APIs · Microservices',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · Responsive Design',
          'Astro · Komponentenarchitektur',
          'REST-API-Integration',
        ],
      },
      {
        title: 'Cloud & Infrastruktur',
        items: [
          'GCP · AWS · Azure',
          'Docker · GitHub Actions',
          'Harness · Jenkins',
          'Terraform',
        ],
      },
    ],
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Wipro Limited',
        dates: 'Mai 2019 - Gegenwart',
        bullets: [
          'Leitung der Infrastrukturmodernisierung & DevOps-Transformation: Leitung der End-to-End-Migration eines Legacy Java J2EE-Monolithen (IBM WebSphere) zu Cloud-nativen Spring Boot 3.x-Microservices auf der Google Kubernetes Engine (GKE), während gleichzeitig automatisierte Jenkins (Groovy DSL) CI/CD-Pipelines entwickelt wurden, wodurch die Durchlaufzeiten für Produktionsbereitstellungen erfolgreich von ~41 Tagen auf Sprint-basierte Zyklen verkürzt wurden.',
          'Dekonstruktion der monolithischen Architektur: Transformation eng gekoppelter Legacy-Komponenten in domänengetriebene, hochskalierbare Backend-Microservices unter Verwendung von Java 17, Spring Boot und Spring Data JPA/Hibernate, um eine Multimarken-Bankingplattform mit hohem Durchsatz zu verankern, die wöchentlich 800–1.200 Kundenempfehlungen verarbeitet.',
          'Entwicklung von Origin-Datenprodukten (ODP): Erstellung einer automatisierten Pipeline zur Replikation von On-Premises-Assets in die Google Cloud über Connect:Direct und Python unter Verwendung von TWSd für die Zeitplanung und Terraform für IaC. Aufrechterhaltung der Integrität von Datenprodukten durch Weiterleitung sauberer Lasten an BigQuery zur Analyse, während Fehler automatisch in dedizierte Reject-Buckets isoliert wurden.',
          'Optimierung der Entwicklergeschwindigkeit (DevEx): Nutzung von Backstage Golden Paths und standardisierten Service-Vorlagen zur Automatisierung von Engineering-Workflows, wodurch die Bootstrapping-Zeit für produktionsreife Dienste von Tagen auf Minuten reduziert wurde, mit Out-of-the-Box-Konfigurationen für Protokollierung, Überwachung und Compliance.',
          'Federführend bei der Modernisierung der Enterprise-Benutzeroberfläche: Vorantreiben der Frontend-Migration von der veralteten Constellation-Benutzeroberfläche zur Enterprise-Interstellar-Golden-Path-Architektur und Erstellung hochperformanter, kundenorientierter Webanwendungen mit React, TypeScript und Redux.',
          'Entwicklung einer mandantenfähigen Frontend-Architektur: Erstellung einer Suite wiederverwendbarer UI-Komponenten unter Verwendung des Cancara-Designsystems, um nahtlose, konsistente Benutzererlebnisse über mehrere verschiedene Bankenmarken hinweg aus einer einzigen, gemeinsamen Codebasis zu ermöglichen.',
          'Förderung von Full-Stack-Agilität: Enge Zusammenarbeit mit Architekten, QS- und Produktteams zur Bereitstellung robuster Full-Stack-Funktionen unter Verwendung von testgetriebener Entwicklung (TDD) und agilen Methoden.',
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: 'Eine vollständig lokale KI-gestützte Matching-Engine, die Lebensläufe auf tiefgehende technische Konzepte statt auf einfache Schlüsselwörter scannt und so Datenschutzrisiken ausschließt. Ermöglicht die sichere Verarbeitung Tausender sensibler Profile zu null Grenzkosten durch die Ausführung vollständig innerhalb der lokalen Infrastruktur.',
        stack: 'FastAPI · Asynchrones Python · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React',
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'KI & Generative KI',
        items: [
          'Oracle Generative AI Zertifizierter Experte',
          'Oracle AI Vector Search Zertifizierter Experte',
          'Oracle Cloud Infrastructure AI Foundations-Associate',
        ],
      },
      {
        label: 'Cloud-Architektur',
        items: [
          'Google Cloud Professional Cloud-Architekt',
          'AWS Certified Solutions Architect - Associate',
        ],
      },
      {
        label: 'Google Cloud',
        items: [
          'Google Cloud Associate Cloud-Ingenieur',
          'Google Cloud Associate Data-Praktiker',
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
        label: 'Frontend & Sonstiges',
        items: [
          'Mozilla JavaScript-Grundlagen Professional-Zertifikat',
          'Meta Frontend-Entwickler Spezialisierung',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Tech - Informatik & Ingenieurwesen',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata',
      },
    ],
  },
  fr: {
    bio: "Je suis un ingénieur logiciel senior full stack avec plus de 7 ans d'expérience dans la construction et la modernisation de systèmes logiciels de bout en bout, des backends de microservices cloud-native en Java et Spring Boot aux expériences frontend interactives en React.",
    skills: [
      {
        title: 'Backend',
        items: [
          'Java · Spring Boot',
          'FastAPI · Python asynchrone',
          'APIs REST · Microservices',
          'PostgreSQL · pgvector · Cloud SQL',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'React · JavaScript · TypeScript',
          'HTML · CSS · Design adaptatif',
          'Astro · Architecture des composants',
          'Intégration d\'API REST',
        ],
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          'GCP · AWS · Azure',
          'Docker · GitHub Actions',
          'Harness · Jenkins',
          'Terraform',
        ],
      },
    ],
    experience: [
      {
        role: 'Ingénieur Logiciel Senior',
        company: 'Wipro Limited',
        dates: 'Mai 2019 - Présent',
        bullets: [
          "Modernisation de l'infrastructure et transformation DevOps dirigées: Direction de la migration de bout en bout d'un monolithe Java J2EE existant (IBM WebSphere) vers des microservices Spring Boot 3.x natifs du cloud sur Google Kubernetes Engine (GKE), tout en concevant simultanément des pipelines CI/CD Jenkins (Groovy DSL) automatisés, réduisant avec succès les délais de déploiement en production de ~41 jours à des cycles basés sur des sprints.",
          "Architecture monolithique déconstruite: Transformation de composants existants étroitement couplés en microservices backend hautement évolutifs et axés sur le domaine en utilisant Java 17, Spring Boot et Spring Data JPA/Hibernate pour ancrer une plateforme bancaire multimarque à haut débit gérant entre 800 et 1 200 recommandations de clients par semaine.",
          "Conception de produits de données d'origine (ODP): Construction d'un pipeline automatisé pour répliquer les actifs sur site vers Google Cloud via Connect:Direct et Python, en utilisant TWSd pour la planification et Terraform pour l'IaC. Maintien de l'intégrité des produits de données en acheminant les chargements propres vers BigQuery pour analyse, tout en isolant automatiquement les échecs dans des dossiers de rejet dédiés.",
          "Vitesse des développeurs optimisée (DevEx): Utilisation de Backstage Golden Paths et de modèles de services standardisés pour automatiser les flux de travail d'ingénierie, réduisant le temps d'initialisation des services prêts pour la production de plusieurs jours à quelques minutes grâce à des configurations prêtes à l'emploi de journalisation, de surveillance et de conformité.",
          "Modernisation de l'interface utilisateur d'entreprise menée: Pilotage de la migration frontend de l'interface Constellation existante vers l'architecture d'entreprise Interstellar Golden Path, en créant des applications web hautes performances orientées client avec React, TypeScript et Redux.",
          "Conception d'une architecture frontend multi-locataire: Création d'une suite de composants d'interface utilisateur réutilisables à l'aide du système de conception Cancara, permettant des expériences utilisateur fluides et cohérentes sur plusieurs marques bancaires distinctes à partir d'une base de code unique et partagée.",
          "Plaidoyer pour l'agilité full-stack: Collaboration étroite avec les architectes, l'assurance qualité et les équipes produit pour livrer des fonctionnalités full-stack résilientes en utilisant le développement piloté par les tests (TDD) et les méthodologies agiles.",
        ],
      },
    ],
    projects: [
      {
        title: 'AI-Powered Offline Semantic Resume Matcher',
        description: "Un moteur de correspondance entièrement local basé sur l'IA qui analyse les CV pour y trouver des concepts techniques profonds plutôt que de simples mots-clés, éliminant ainsi les risques liés à la confidentialité des données. Permet un traitement sécurisé et à coût matériel nul de milliers de profils sensibles en s'exécutant entièrement au sein de l'infrastructure locale.",
        stack: "FastAPI · Python asynchrone · PostgreSQL + pgvector · Ollama (Gemma3 / Llama3.2) · Docker · React",
        url: 'https://github.com/debopriyobasu/semantic-resume-matcher',
      },
    ],
    certs: [
      {
        label: 'IA & IA Générative',
        items: [
          'Professionnel certifié en IA générative Oracle',
          'Professionnel certifié en recherche vectorielle IA Oracle',
          "Associé aux fondations d'intelligence artificielle de l'infrastructure cloud Oracle",
        ],
      },
      {
        label: 'Architecture Cloud',
        items: [
          'Architecte cloud professionnel Google Cloud',
          'Architecte de solutions certifié AWS - Associé',
        ],
      },
      {
        label: 'Google Cloud',
        items: [
          'Ingénieur cloud associé Google Cloud',
          'Praticien de données associé Google Cloud',
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
        label: 'Frontend & Autre',
        items: [
          'Certificat professionnel des fondations JavaScript Mozilla',
          'Spécialisation de développeur frontend Meta',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Tech - Informatique & Ingénierie des systèmes',
        dates: 'CGPA: 8.83 / 10',
        school: 'University of Engineering & Management, Kolkata',
      },
    ],
  },
};

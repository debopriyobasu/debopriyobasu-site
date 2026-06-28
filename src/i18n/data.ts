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
          '**Led Cloud-Native Platform Modernization:** Directed the end-to-end migration of a legacy Java J2EE monolith (IBM WebSphere) to domain-driven Spring Boot 3.x microservices on Google Kubernetes Engine (GKE), transforming tightly coupled components using Java 17, Spring Data JPA/Hibernate, and configuring Harness CI/CD pipelines to slash deployment lead times from ~41 days to 2-week release cycles, powering a multi-brand banking platform serving 3 brands and processing 1,200 customer referrals weekly.',
          '**Engineered Origin Data Products (ODP):** Designed and implemented an automated pipeline replicating ~1 GB of on-premises assets daily to Google Cloud via Connect:Direct and Python, with TWSd scheduling and Terraform IaC, routing clean loads to BigQuery for analysis while auto-isolating failures into dedicated reject buckets.',
          '**Accelerated Service Delivery (DevEx):** Adopted Backstage Golden Path templates to reduce production-ready service bootstrapping from days to minutes, with logging, monitoring, and compliance configurations included by default.',
          '**Engineered Multi-Tenant Frontend Architecture:** Built a suite of reusable React/TypeScript components using the Cancara Design System, enabling consistent UX across 3 banking brands from a single shared codebase, architected for zero-effort onboarding of additional brands.',
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
          '**Liderazgo en Modernización de Plataforma Cloud-Native:** Dirigí la migración de extremo a extremo de un monolito heredado de Java J2EE (IBM WebSphere) a microservicios Spring Boot 3.x orientados al dominio en Google Kubernetes Engine (GKE), transformando componentes estrechamente acoplados mediante Java 17, Spring Data JPA/Hibernate, y configurando pipelines Harness CI/CD para reducir los tiempos de entrega de perfiles de implementación de ~41 días a ciclos de lanzamiento de 2 semanas, impulsando una plataforma bancaria multimarca que sirve a 3 marcas y procesa 1.200 recomendaciones de clientes semanalmente.',
          '**Ingeniería de Productos de Datos de Origen (ODP):** Diseñé e implementé un pipeline automatizado que replica ~1 GB de activos locales diariamente a Google Cloud mediante Connect:Direct y Python, con planificación TWSd y Terraform IaC, enrutando cargas limpias a BigQuery y aislando automáticamente los fallos en depósitos de rechazo dedicados.',
          '**Aceleración de la Entrega de Servicios (DevEx):** Adopté las plantillas Golden Path de Backstage para reducir el bootstrapping de servicios listos para producción de días a minutos, con configuraciones de registro, monitoreo y cumplimiento incluidas por defecto.',
          '**Arquitectura Frontend Multimarca:** Construí un conjunto de componentes reutilizables React/TypeScript con el sistema de diseño Cancara, habilitando una UX consistente en 3 marcas bancarias desde una única base de código compartida, diseñada para incorporar nuevas marcas sin esfuerzo.',
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
          '**इन्फ्रास्ट्रक्चर आधुनिकीकरण और डेवऑप्स परिवर्तन का नेतृत्व:** GKE पर क्लाउड-नेटिव स्प्रिंग बूट 3.x माइक्रोसर्विसेज के लिए IBM WebSphere J2EE मोनोलिथ के एंड-टू-एंड माइग्रेशन का नेतृत्व किया, Harness CI/CD पाइपलाइन कॉन्फ़िगर की, जिससे उत्पादन परिनियोजन समय ~41 दिनों से घटकर 2-सप्ताह के रिलीज़ चक्र में आ गया।',
          '**ओरिजिन डेटा प्रोडक्ट्स (ODP) का इंजीनियरिंग:** Connect:Direct और Python के माध्यम से प्रतिदिन ~1 GB ऑन-प्रिमाइसेस डेटा को Google Cloud पर स्वचालित रूप से प्रतिलिपि बनाने के लिए पाइपलाइन डिज़ाइन की, TWSd शेड्यूलिंग और Terraform IaC के साथ, क्लीन लोड को BigQuery में रूट किया और विफलताओं को डेडिकेटेड रिजेक्ट बकेट में अलग किया।',
          '**डोमेन-ड्रिवन माइक्रोसर्विसेज प्लेटफॉर्म की आर्किटेक्चरिंग:** Java 17, Spring Boot और Spring Data JPA/Hibernate का उपयोग करके तंग रूप से जुड़े लीगेसी घटकों को डोमेन-संचालित बैकएंड माइक्रोसर्विसेज में बदला, जो 3 बैंकिंग ब्रांड को सेवा प्रदान करती है और प्रति सप्ताह 800–1,200 ग्राहक रेफ़रल प्रोसेस करती है।',
          '**सेवा वितरण में त्वरण (DevEx):** Backstage Golden Path टेम्पलेट अपनाकर प्रोडक्शन-रेडी सेवा बूटस्ट्रैपिंग को दिनों से मिनटों में घटाया, डिफ़ॉल्ट रूप से लॉगिंग, मॉनिटरिंग और अनुपालन कॉन्फ़िगरेशन शामिल।',
          '**मल्टी-टेनेंट फ्रंटएंड आर्किटेक्चर:** Cancara डिज़ाइन सिस्टम का उपयोग करके पुन: प्रयोज्य React/TypeScript घटकों का एक सूट बनाया, एकल साझा कोडबेस से 3 बैंकिंग ब्रांडों में सुसंगत UX सक्षम किया, अतिरिक्त ब्रांडों की शून्य-प्रयास ऑनबोर्डिंग के लिए डिज़ाइन किया गया।',
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
          'মাল্টি-টেন্যান্ট ফ্রন্টএন্ড আর্কিটেকচার তৈরি করেছি: ক্যানকারা ডিজাইন সিস্টেম ব্যবহার করে পুনরায় ব্যবহারযোগ্য ইউআই উপাদানের একটি সেট তৈরি করেছি, যা একটি একক, শেয়ার্ড কোডবেস থেকে একাধিক পৃথক ব্যাংকিং ব্র্যান্ড জুড়ে নির্বিঘ্ন ও সামঞ্জস্যপূর্ণ ব্যবহারকারীর অভিজ্ঞতা নিশ্চিত করেছে।',
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
          '**Leitung der Cloud-native Plattformmodernisierung:** Leitung der End-to-End-Migration eines Legacy-Java-J2EE-Monolithen (IBM WebSphere) zu domänengetriebenen Spring Boot 3.x-Microservices auf der Google Kubernetes Engine (GKE), Umwandlung eng gekoppelter Komponenten unter Verwendung von Java 17, Spring Data JPA/Hibernate und Konfiguration von Harness-CI/CD-Pipelines, um die Bereitstellungszeiten von ~41 Tagen auf 2-Wochen-Releasezyklen zu verkürzen, wodurch eine Multi-Brand-Banking-Plattform angetrieben wird, die 3 Marken bedient und wöchentlich 1.200 Kundenempfehlungen verarbeitet.',
          '**Entwicklung von Origin-Datenprodukten (ODP):** Entwurf und Implementierung einer automatisierten Pipeline zur täglichen Replikation von ~1 GB On-Premises-Daten nach Google Cloud über Connect:Direct und Python, mit TWSd-Scheduling und Terraform IaC, Weiterleitung sauberer Lasten an BigQuery und automatischer Isolierung von Fehlern in dedizierte Reject-Buckets.',
          '**Beschleunigung der Service-Bereitstellung (DevEx):** Einführung von Backstage Golden Path-Vorlagen zur Reduzierung des Bootstrappings produktionsreifer Services von Tagen auf Minuten, mit standardmäßig enthaltenen Protokollierungs-, Überwachungs- und Compliance-Konfigurationen.',
          '**Entwicklung einer mandantenfähigen Frontend-Architektur:** Erstellung einer Suite wiederverwendbarer React/TypeScript-Komponenten mit dem Cancara-Designsystem, die eine konsistente UX über 3 Bankenmarken aus einer gemeinsamen Codebasis ermöglicht und für das mühelose Onboarding weiterer Marken ausgelegt ist.',
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
          "**Direction de la Modernisation de la Plateforme Cloud-Native:** Direction de la migration de bout en bout d'un monolithe Java J2EE hérité (IBM WebSphere) vers des microservices Spring Boot 3.x orientés domaine sur Google Kubernetes Engine (GKE), transformation des composants étroitement couplés à l'aide de Java 17, Spring Data JPA/Hibernate et configuration des pipelines Harness CI/CD pour réduire les délais de déploiement de ~41 jours à des cycles de publication de 2 semaines, alimentant une plateforme bancaire multimarque desservant 3 marques et traitant 1 200 recommandations de clients par semaine.",
          "**Ingénierie des Produits de Données d'Origine (ODP):** Conception et mise en oeuvre d'un pipeline automatisé répliquant ~1 Go d'actifs sur site quotidiennement vers Google Cloud via Connect:Direct et Python, avec planification TWSd et Terraform IaC, acheminant les chargements propres vers BigQuery et isolant automatiquement les échecs dans des compartiments de rejet dédiés.",
          "**Accélération de la Livraison de Services (DevEx):** Adoption des modèles Golden Path de Backstage pour réduire le bootstrapping des services prêts pour la production de plusieurs jours à quelques minutes, avec des configurations de journalisation, de surveillance et de conformité incluses par défaut.",
          "**Architecture Frontend Multi-Locataire:** Création d'une suite de composants React/TypeScript réutilisables avec le système de conception Cancara, permettant une UX cohérente sur 3 marques bancaires depuis une base de code partagée unique, conçue pour l'intégration sans effort de marques supplémentaires.",
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

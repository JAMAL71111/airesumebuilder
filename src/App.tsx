import { useState, useEffect } from 'react';
import { articlesData, Post } from './articlesData';

// 🌐 قاموس الترجمة الشامل للموقع لدعم اللغتين بدون الحاجة لملفات معقدة
const translations = {
  ar: {
    dir: 'rtl',
    font: "'Tajawal', sans-serif",
    nav: { home: 'الرئيسية', blog: 'المدونة والنصائح', about: 'من نحن', contact: 'اتصل بنا' },
    hero: { badge: '🚀 أداة بناء السيرة الذاتية الذكية', title1: 'أنشئ سيرتك الذاتية ', title2: 'الاحترافية', title3: ' مجاناً', sub: 'أدخل بياناتك بالأسفل وشاهد سيرتك الذاتية تُبنى أمامك خطوة بخطوة وبشكل فوري.' },
    form: {
      cvLangTitle: '🌐 لغة السيرة الذاتية (CV Language)', cvLangAr: 'العربية', cvLangEn: 'English',
      personal: 'البيانات الشخصية', photo: 'الصورة الشخصية', photoSuccess: '✅ تم اختيار الصورة بنجاح', photoBtn: '📸 اختر صورة شخصية',
      name: 'الاسم الكامل', namePh: 'مثال: جمال حميد الشمهاني', job: 'المسمى الوظيفي', jobPh: 'مثال: مهندس برمجيات', dobNat: 'تاريخ الميلاد والجنسية', dobNatPh: 'مثال: سبتمبر 1991 - يمني',
      contact: 'معلومات الاتصال', address: 'العنوان الكامل', addressPh: 'مثال: صنعاء - اليمن', email: 'البريد الإلكتروني', phone: 'رقم الهاتف', social: 'منصات التواصل (افصل بسطر جديد)',
      career: 'المسار المهني والعلمي', edu: 'التعليم والمؤهلات', eduPh: 'سنة التخرج | اسم المؤسسة | التخصص', exp: 'الخبرات العملية', expPh: 'اسم الشركة | المسمى | المهام', train: 'التدريب المهني', trainPh: 'الدورات التدريبية',
      skillsSect: 'المهارات والإضافات', skills: 'المهارات (افصل بسطر جديد)', langs: 'اللغات (افصل بسطر جديد)', interests: 'الاهتمامات (افصل بسطر جديد)'
    },
    cv: {
      profile: 'النبذة الشخصية', name: 'الاسم', dobNat: 'تاريخ الميلاد والجنسية', address: 'العنوان', phone: 'رقم الهاتف', email: 'البريد الإلكتروني',
      langs: 'اللغات', social: 'منصات التواصل', edu: 'التعليم والمؤهلات', exp: 'الخبرات العملية', train: 'التدريب المهني', skills: 'المهارات', interests: 'الاهتمامات'
    },
    actions: { download: 'تحميل السيرة الذاتية (PDF)', backBlog: 'العودة للمدونة', readMore: 'اقرأ المزيد' },
    blog: { title: 'نصائح مهنية وأسرار التوظيف', sub: 'دليلك الشامل لكتابة سيرة ذاتية احترافية واجتياز المقابلات الشخصية.' },
    about: { title: 'من نحن', content1: 'مرحباً بكم في منصة Fareestate، المنصة المتخصصة في تصميم وبناء السير الذاتية الاحترافية لدعم مسارك المهني.', content2: 'تم تأسيس وتطوير هذا الموقع بهدف مساعدة الآخرين وخاصة الشباب والباحثين عن عمل في تخطي عقبات التوظيف وأنظمة الفرز الآلي (ATS) بكل يسر وسهولة ومجاناً بالكامل.' },
    contactInfo: { title: 'اتصل بنا', sub: 'نحن هنا للإجابة على استفساراتك وتلقي مقترحاتك لتطوير المنصة.', formTitle: 'أرسل لنا رسالة', name: 'الاسم الكامل', email: 'البريد الإلكتروني', msg: 'نص الرسالة', send: 'إرسال الرسالة', success: 'تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.', wa: 'مراسلة عبر واتساب', mail: 'مراسلة عبر البريد' },
    legal: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', privacyText: 'نحن في Fareestate نولي اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين أو جمع بيانات السيرة الذاتية التي تدخلها، حيث تتم المعالجة بالكامل محلياً داخل متصفحك. كما نستخدم ملفات تعريف الارتباط (Cookies) الخاصة بـ Google AdSense لتحسين تجربة الإعلانات.', termsText: 'باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام الخاصة باستخدام أدواتنا المجانية. جميع الحقوق محفوظة.' },
    footer: '© 2026 FAREESTATE. جميع الحقوق محفوظة.'
  },
  en: {
    dir: 'ltr',
    font: "'Inter', sans-serif",
    nav: { home: 'Home', blog: 'Blog & Tips', about: 'About Us', contact: 'Contact Us' },
    hero: { badge: '🚀 Smart CV Builder', title1: 'Create Your ', title2: 'Professional', title3: ' CV For Free', sub: 'Enter your details below and watch your resume build instantly step-by-step.' },
    form: {
      cvLangTitle: '🌐 CV Language', cvLangAr: 'Arabic (العربية)', cvLangEn: 'English',
      personal: 'Personal Information', photo: 'Profile Photo', photoSuccess: '✅ Photo selected successfully', photoBtn: '📸 Choose Profile Photo',
      name: 'Full Name', namePh: 'e.g. Jamal Al-Shamhani', job: 'Job Title', jobPh: 'e.g. Software Engineer', dobNat: 'DOB & Nationality', dobNatPh: 'e.g. Sep 1991 - Yemeni',
      contact: 'Contact Information', address: 'Full Address', addressPh: 'e.g. Sanaa - Yemen', email: 'Email Address', phone: 'Phone Number', social: 'Social Media (new line separated)',
      career: 'Career & Education', edu: 'Education & Qualifications', eduPh: 'Year | Institution | Major', exp: 'Work Experience', expPh: 'Company | Role | Tasks', train: 'Professional Training', trainPh: 'Training Courses',
      skillsSect: 'Skills & Extras', skills: 'Skills (new line separated)', langs: 'Languages (new line separated)', interests: 'Interests (new line separated)'
    },
    cv: {
      profile: 'Profile', name: 'Name', dobNat: 'DOB & Nationality', address: 'Address', phone: 'Phone Number', email: 'Email',
      langs: 'Languages', social: 'Social Media', edu: 'Education', exp: 'Experience', train: 'Training', skills: 'Skills', interests: 'Interests'
    },
    actions: { download: 'Download CV (PDF)', backBlog: 'Back to Blog', readMore: 'Read More' },
    blog: { title: 'Career Tips & Hiring Secrets', sub: 'Your comprehensive guide to writing a professional CV and passing interviews.' },
    about: { title: 'About Us', content1: 'Welcome to Fareestate, the specialized platform for designing and building professional CVs to support your career path.', content2: 'This website was founded with the aim of helping others, especially youth and job seekers, to overcome hiring obstacles and Applicant Tracking Systems (ATS) easily and entirely for free.' },
    contactInfo: { title: 'Contact Us', sub: 'We are here to answer your inquiries and receive your suggestions to improve the platform.', formTitle: 'Send us a message', name: 'Full Name', email: 'Email Address', msg: 'Message', send: 'Send Message', success: 'Your message has been sent successfully! Thank you.', wa: 'Contact via WhatsApp', mail: 'Contact via Email' },
    legal: { privacy: 'Privacy Policy', terms: 'Terms of Use', privacyText: 'At Fareestate, we take your privacy seriously. We do not store or collect the CV data you enter; processing is done entirely locally in your browser. We also use Google AdSense cookies to improve the advertising experience.', termsText: 'By using Fareestate, you agree to abide by the terms and conditions for using our free tools. All rights reserved.' },
    footer: '© 2026 FAREESTATE. All rights reserved.'
  }
};

// --- Helper Functions for Category Styling (Added) ---
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    // English categories
    'CV Writing': 'bg-blue-100 text-blue-800 border-blue-200',
    'Interviews': 'bg-purple-100 text-purple-800 border-purple-200',
    'Career Path': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'ATS Systems': 'bg-amber-100 text-amber-800 border-amber-200',
    'Job Search': 'bg-rose-100 text-rose-800 border-rose-200',
    'Freelance': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    
    // Arabic categories (Fallback to the same colors based on translation or direct match)
    'كتابة السيرة الذاتية': 'bg-blue-100 text-blue-800 border-blue-200',
    'المقابلات الشخصية': 'bg-purple-100 text-purple-800 border-purple-200',
    'المسار المهني': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'أنظمة ATS': 'bg-amber-100 text-amber-800 border-amber-200',
    'البحث عن عمل': 'bg-rose-100 text-rose-800 border-rose-200',
    'العمل الحر': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  };
  return colors[category] || 'bg-slate-100 text-slate-800 border-slate-200';
};

export default function App() {
  // 🔵 لغة الموقع بالكامل
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  // 🔵 لغة السيرة الذاتية المستخرجة (يمكن أن تكون السيرة إنجليزية بينما الموقع عربي)
  const [cvLang, setCvLang] = useState<'ar' | 'en'>('ar');
  
  const t = translations[lang]; // اختصار للوصول للنصوص
  const cvT = translations[cvLang].cv; // نصوص السيرة الذاتية

  // 🔵 إضافة كود Google Analytics تلقائياً
  useEffect(() => {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y4KB4KK320';
    document.head.appendChild(gaScript);

    const gaConfigScript = document.createElement('script');
    gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y4KB4KK320');
    `;
    document.head.appendChild(gaConfigScript);
  }, []);

  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  
  const [photo, setPhoto] = useState<string>('');
  const [dobNationality, setDobNationality] = useState('');
  const [address, setAddress] = useState('');
  const [languages, setLanguages] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [training, setTraining] = useState('');
  const [interests, setInterests] = useState('');

  // حالات نموذج الاتصال
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');
  const [showSendOptions, setShowSendOptions] = useState(false); // إضافة حالة الخيارات

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    setCurrentPage('blog');
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // إظهار خيارات الإرسال بدلاً من الإرسال المباشر الوهمي
    setShowSendOptions(true);
  };

  const handleSendChoice = () => {
    // دالة لتنفيذ عملية الإرسال وإظهار رسالة النجاح وتفريغ الحقول
    setShowSendOptions(false);
    setContactStatus(t.contactInfo.success);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setContactStatus(''), 5000);
  };

  const inputClassName = "w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-white hover:border-blue-300 transition-all duration-300 shadow-sm";
  const cardClassName = "bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 border border-slate-100 relative overflow-hidden group";

  return (
    <div className={`min-h-screen bg-slate-50/50 text-slate-800 flex flex-col justify-between selection:bg-blue-200 selection:text-blue-900 ${lang === 'en' ? 'text-left' : 'text-right'}`} dir={t.dir} style={{ fontFamily: t.font }}>
      
      {/* 🔴 إعدادات الطباعة */}
      <style>
        {`
          @media print {
            @page { margin: 0; size: auto; }
            html, body, #root { width: 100% !important; height: 100% !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background-color: white !important; }
            body > *:not(#root) { display: none !important; }
            .cv-print-area { position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; max-height: 100% !important; margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; page-break-inside: avoid !important; z-index: 99999 !important; box-shadow: none !important; border: none !important; transform: none !important; }
            .cv-print-main-row { min-height: 0 !important; height: 100% !important; flex: 1 !important; display: flex !important; overflow: hidden !important; }
            .cv-sidebar { height: 100% !important; padding: 20px 15px !important; gap: 12px !important; }
            .cv-main-content { height: 100% !important; padding: 20px 25px !important; }
            .print-header { padding: 25px 30px 15px 30px !important; border-bottom-width: 8px !important; }
            .cv-print-area { font-size: 11px !important; }
            .cv-print-area h1 { font-size: 24px !important; margin-bottom: 2px !important; line-height: 1.1 !important; }
            .cv-print-area h2 { font-size: 14px !important; line-height: 1.1 !important; margin-top: 0 !important;}
            .cv-print-area h3 { font-size: 13px !important; margin-bottom: 6px !important; }
            .cv-print-area p, .cv-print-area span, .cv-print-area li, .cv-print-area div { font-size: 10.5px !important; line-height: 1.4 !important; }
            .print-pic { width: 75px !important; height: 95px !important; margin: 0 auto 10px auto !important; }
          }
        `}
      </style>

      {/* 🟢 شريط التنقل العلوي مع زر تغيير اللغة */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 print:hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            translate="no"
            className="notranslate text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
          >
            Fareestate
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-slate-600">
            <button onClick={() => { setCurrentPage('home'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'home' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>{t.nav.home}</button>
            <button onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'blog' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>{t.nav.blog}</button>
            <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>{t.nav.about}</button>
            <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>{t.nav.contact}</button>
            
            {/* مبدل اللغة للموقع */}
            <div className="ms-4 flex bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button onClick={() => setLang('ar')} className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${lang === 'ar' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500'}`}>عربي</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${lang === 'en' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500'}`}>EN</button>
            </div>
          </nav>
        </div>
      </header>

      {/* 🟢 محتوى الموقع الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full space-y-12 print:p-0 print:m-0 print:block">
        
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0 print:block">
            
            {/* قسم الترحيب */}
            <section className="text-center space-y-5 print:hidden relative z-10 pt-4 pb-8">
              <div className="inline-block px-5 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold shadow-sm animate-fade-in-up">{t.hero.badge}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.hero.title2}</span> {t.hero.title3}
              </h1>
              <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">{t.hero.sub}</p>
            </section>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 print:block relative items-start">
              
              {/* 📝 القسم الأيمن (نماذج الإدخال) */}
              <section className="w-full lg:w-[45%] space-y-6 print:hidden">
                
                {/* 🌐 اختيار لغة السيرة الذاتية (مفصول عن لغة الموقع) */}
                <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <span className="font-bold text-slate-800 text-lg">{t.form.cvLangTitle}</span>
                  <div className="flex bg-slate-50 border border-slate-200 rounded-xl p-1 shadow-inner">
                    <button onClick={() => setCvLang('ar')} className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${cvLang === 'ar' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>{t.form.cvLangAr}</button>
                    <button onClick={() => setCvLang('en')} className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${cvLang === 'en' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>{t.form.cvLangEn}</button>
                  </div>
                </div>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-blue-50 p-2.5 rounded-xl text-xl">👤</span> {t.form.personal}
                  </h2>
                  
                  <div className="mb-5 space-y-2">
                    <label className="block text-sm font-bold text-slate-700">{t.form.photo}</label>
                    <div className="relative">
                      <input type="file" id="photo-upload" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                      <label htmlFor="photo-upload" className="flex items-center justify-center w-full p-3.5 bg-blue-50 border-2 border-blue-200 border-dashed rounded-xl text-blue-700 font-bold cursor-pointer hover:bg-blue-100 transition-colors text-sm">
                        {photo ? t.form.photoSuccess : t.form.photoBtn}
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.name}</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={t.form.namePh} className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.job}</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder={t.form.jobPh} className={inputClassName} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.dobNat}</label>
                      <input type="text" value={dobNationality} onChange={(e) => setDobNationality(e.target.value)} placeholder={t.form.dobNatPh} className={inputClassName} />
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-emerald-50 p-2.5 rounded-xl text-xl">📞</span> {t.form.contact}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.address}</label>
                      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={t.form.addressPh} className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.email}</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.phone}</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967..." className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.social}</label>
                      <textarea rows={3} value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} placeholder="linkedin.com/in/...&#10;x.com/..." className={`${inputClassName} text-left resize-none`} dir="ltr"></textarea>
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-amber-50 p-2.5 rounded-xl text-xl">🎓</span> {t.form.career}
                  </h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.edu}</label>
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder={t.form.eduPh} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.exp}</label>
                      <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder={t.form.expPh} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.train}</label>
                      <textarea rows={2} value={training} onChange={(e) => setTraining(e.target.value)} placeholder={t.form.trainPh} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-purple-50 p-2.5 rounded-xl text-xl">⚙️</span> {t.form.skillsSect}
                  </h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.skills}</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.langs}</label>
                      <textarea rows={2} value={languages} onChange={(e) => setLanguages(e.target.value)} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">{t.form.interests}</label>
                      <textarea rows={2} value={interests} onChange={(e) => setInterests(e.target.value)} className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

              </section>

              {/* 👁️ القسم الأيسر (المعاينة الحية للسيرة الذاتية - تتبع cvLang) */}
              <section className="w-full lg:w-[55%] print:w-full lg:sticky lg:top-24 z-10 transition-transform duration-500 flex flex-col gap-6">
                
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-200/60 print:border-none print:shadow-none print:overflow-visible print:pb-0">
                  {/* تحديد اتجاه السيرة الذاتية بناءً على اختيار cvLang */}
                  <div className={

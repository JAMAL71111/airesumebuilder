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
                  <div className={`cv-print-area bg-white w-full min-w-[700px] lg:min-w-0 mx-auto overflow-hidden ${cvLang === 'en' ? 'text-left font-sans' : 'text-right'}`} dir={translations[cvLang].dir}>
                    
                    {/* الهيدر العلوي */}
                    <div className="print-header w-full bg-white pt-8 pb-4 px-10 border-b-[16px] border-[#1A2B3C] mb-6 print:mb-0">
                       <h1 className="text-5xl font-light text-slate-800 mb-1 tracking-widest uppercase">{fullName || cvT.name}</h1>
                       <h2 className="text-xl text-slate-600 font-medium tracking-[0.2em] uppercase">{jobTitle || (cvLang === 'en' ? 'Job Title' : 'المسمى الوظيفي')}</h2>
                    </div>

                    {/* المحتوى السفلي */}
                    <div className="cv-print-main-row flex flex-row w-full min-h-[900px] bg-white">
                      
                      {/* الشريط الجانبي الغامق */}
                      <aside className="cv-sidebar w-[35%] bg-[#1A2B3C] text-white p-8 flex flex-col gap-8" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                        <div className="print-pic w-40 h-48 mx-auto bg-slate-400 overflow-hidden shadow-lg border border-slate-500 relative flex-shrink-0 group">
                           {photo ? (
                             <img src={photo} alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                           ) : (
                             <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 text-sm gap-2">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
                             </div>
                           )}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-4 uppercase text-white tracking-widest">{cvT.profile}</h3>
                          <div className="space-y-4 text-sm font-light">
                            <div>
                              <span className="block text-slate-400 font-bold mb-1 print:mb-0 text-xs uppercase">{cvT.name}</span>
                              <span className="text-slate-100">{fullName || cvT.name}</span>
                            </div>
                            {dobNationality && (
                              <div>
                                <span className="block text-slate-400 font-bold mb-1 print:mb-0 text-xs uppercase">{cvT.dobNat}</span>
                                <span className="text-slate-100 whitespace-pre-line">{dobNationality}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 text-sm font-light">
                          {address && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">{cvT.address}</h3>
                              <span className="text-slate-100">{address}</span>
                            </div>
                          )}
                          {phone && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">{cvT.phone}</h3>
                              <span className="text-slate-100 block" dir="ltr">{phone}</span>
                            </div>
                          )}
                          {email && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">{cvT.email}</h3>
                              <span className="text-slate-100 break-all block">{email}</span>
                            </div>
                          )}
                        </div>

                        {languages && (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">{cvT.langs}</h3>
                            <div className="text-sm font-light text-slate-100 whitespace-pre-line">{languages}</div>
                          </div>
                        )}

                        {socialMedia && (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">{cvT.social}</h3>
                            <div className="text-sm font-light text-slate-100 whitespace-pre-line break-all" dir="ltr">{socialMedia}</div>
                          </div>
                        )}
                      </aside>

                      {/* القسم الرئيسي الفاتح - استخدام خصائص منطقية ps, ms, border-s */}
                      <main className="cv-main-content w-[65%] bg-white p-8 ps-10 text-slate-800">
                        <div className="space-y-8 print:space-y-4">
                          {education && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">🎓</span> {cvT.edu}
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line ps-8 border-s-2 border-slate-100 ms-3">{education}</p>
                            </section>
                          )}

                          {experience && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">💼</span> {cvT.exp}
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line ps-8 border-s-2 border-slate-100 ms-3">{experience}</p>
                            </section>
                          )}

                          {training && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">📋</span> {cvT.train}
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line ps-8 border-s-2 border-slate-100 ms-3">{training}</p>
                            </section>
                          )}

                          {skills && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">⚙️</span> {cvT.skills}
                              </h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-4 ps-6 print:ps-4 print:gap-x-4 ms-3">
                                {skills.split('\n').map((skill, index) => {
                                  if (!skill.trim()) return null;
                                  return (
                                    <div key={index} className="flex flex-col gap-1.5 mb-2 print:mb-0">
                                      <span className="text-slate-700 text-xs font-bold uppercase tracking-wide">{skill.trim()}</span>
                                      <div className="w-full h-1.5 bg-slate-100 flex rounded-full overflow-hidden print:h-1">
                                        <div className="bg-[#1A2B3C] h-full rounded-full" style={{ width: '85%' }}></div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </section>
                          )}

                          {interests && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">🎯</span> {cvT.interests}
                              </h3>
                              <ul className="list-disc list-inside text-slate-600 text-sm leading-loose ps-8 ms-3 marker:text-blue-500">
                                {interests.split('\n').map((interest, i) => (
                                  interest.trim() ? <li key={i}>{interest.trim()}</li> : null
                                ))}
                              </ul>
                            </section>
                          )}
                        </div>
                      </main>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handlePrintPDF} 
                  className="w-full flex justify-center items-center gap-3 py-4 px-6 text-xl font-extrabold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 print:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  {t.actions.download}
                </button>

              </section>
            </div>
          </div>
        )}

        {/* 🟢 صفحة المدونة */}
        {currentPage === 'blog' && (
          <div>
            {!selectedPost ? (
              <>
                <section className="text-center space-y-4 mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.blog.title}</h1>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.blog.sub}</p>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articlesData.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 p-8 flex flex-col h-full group cursor-pointer" onClick={() => handleReadMore(post)}>
                      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{post.icon}</div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full mb-4">{post.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50 text-sm">
                        <span className="text-slate-400 font-medium">{post.date}</span>
                        <button className="text-blue-700 font-bold group-hover:translate-x-[-4px] transition-transform flex items-center gap-1">{t.actions.readMore} &larr;</button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
                <button onClick={handleBackToBlog} className="mb-8 text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors w-fit">
                  &rarr; {t.actions.backBlog}
                </button>
                <header className="text-center mb-10">
                  <div className="text-6xl mb-6">{selectedPost.icon}</div>
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4">{selectedPost.category}</span>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{selectedPost.title}</h1>
                  <time className="text-slate-400 text-sm font-medium">{selectedPost.date}</time>
                </header>
                <div className="prose prose-lg prose-blue mx-auto text-slate-700 leading-loose">
                  <p>{selectedPost.content}</p>
                </div>
              </article>
            )}
          </div>
        )}

        {/* 🟢 صفحة من نحن */}
        {currentPage === 'about' && (
          <article className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b pb-4"><span className="text-4xl">🏢</span> {t.about.title}</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>{t.about.content1}</p>
              <p>{t.about.content2}</p>
            </div>
          </article>
        )}

        {/* 🟢 صفحة اتصل بنا */}
        {currentPage === 'contact' && (
          <article className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3 border-b pb-4"><span className="text-4xl">📬</span> {t.contactInfo.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.contactInfo.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{t.contactInfo.sub}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-[#16a34a] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-3 text-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.964 23.955c-1.848 0-3.666-.46-5.275-1.332l-6.39 1.677 1.716-6.237c-.96-1.657-1.464-3.535-1.464-5.464C.551 5.64 6.185.006 13.136.006c6.953 0 12.585 5.634 12.585 12.593 0 6.958-5.632 12.356-13.757 12.356zm-5.228-3.41c1.554.919 3.328 1.405 5.163 1.405 5.86 0 10.635-4.782 10.635-10.655S17.76 1.94 11.9 1.94c-5.86 0-10.636 4.781-10.636 10.654 0 1.93.53 3.791 1.531 5.432l-1.026 3.731 3.823-1.011zm9.324-7.44c-.218-.109-1.288-.636-1.488-.709-.199-.073-.346-.109-.492.109-.147.218-.564.709-.693.854-.128.146-.258.164-.476.055-.218-.109-.92-.338-1.752-1.078-.647-.577-1.085-1.29-1.213-1.509-.129-.218-.014-.336.095-.445.098-.098.218-.255.326-.382.11-.128.147-.218.219-.364.073-.146.037-.273-.018-.382-.055-.11-.492-1.182-.673-1.618-.178-.428-.359-.37-.492-.377-.128-.007-.275-.007-.423-.007-.147 0-.385.055-.587.273-.201.218-.77 1.701-.77 3.342 0 1.642.788 3.23 1.053 3.559.266.327 2.42 3.69 5.856 5.168.818.351 1.458.56 1.956.717.822.259 1.569.222 2.158.134.661-.099 2.029-.828 2.316-1.628.288-.8.288-1.487.202-1.628-.087-.146-.324-.228-.543-.337z"/></svg>
                    {t.contactInfo.wa}
                  </a>
                  <a href="mailto:jmal30997@gmail.com" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-3 text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    {t.contactInfo.mail}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-inner">
                <h3 className="text-xl font-bold text-slate-800 mb-6">{t.contactInfo.formTitle}</h3>
                {contactStatus && (
                  <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200 text-sm font-bold flex items-center gap-2">
                    <span>✅</span> {contactStatus}
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contactInfo.name}</label>
                    <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className={inputClassName} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contactInfo.email}</label>
                    <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className={`${inputClassName} text-left`} dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contactInfo.msg}</label>
                    <textarea required rows={4} value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className={`${inputClassName} resize-none`}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]">
                    {t.contactInfo.send}
                  </button>
                </form>
              </div>
            </div>
          </article>
        )}

        {/* 🟢 صفحة سياسة الخصوصية */}
        {currentPage === 'privacy' && (
          <article className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b pb-4"><span className="text-4xl">🔒</span> {t.legal.privacy}</h1>
            <p className="text-slate-700 leading-relaxed text-lg">{t.legal.privacyText}</p>
          </article>
        )}

        {/* 🟢 صفحة شروط الاستخدام */}
        {currentPage === 'terms' && (
          <article className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b pb-4"><span className="text-4xl">📜</span> {t.legal.terms}</h1>
            <p className="text-slate-700 leading-relaxed text-lg">{t.legal.termsText}</p>
          </article>
        )}
        
      </main>

      {/* 🟢 التذييل */}
      <footer className="mt-auto py-10 border-t border-slate-200 text-center space-y-6 print:hidden bg-white">
        <p className="text-slate-400 text-sm font-semibold tracking-wide">{t.footer}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-bold">
          <button onClick={() => { setCurrentPage('privacy'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">{t.legal.privacy}</button>
          <button onClick={() => { setCurrentPage('terms'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">{t.legal.terms}</button>
          <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">{t.nav.about}</button>
          <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">{t.nav.contact}</button>
        </div>
      </footer>

    </div>
  );
}

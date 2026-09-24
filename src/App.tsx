import { useState, useEffect } from 'react';
import { articlesData, Post } from './articlesData';

export default function App() {
  // 🔵 إضافة كود Google Analytics تلقائياً عند تحميل التطبيق
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

  // حقول الإدخال بتصميم عصري وتفاعلي
  const inputClassName = "w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:bg-white hover:border-blue-300 transition-all duration-300 shadow-sm";
  
  // تصميم موحد للبطاقات التفاعلية
  const cardClassName = "bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 border border-slate-100 relative overflow-hidden group";

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col justify-between selection:bg-blue-200 selection:text-blue-900" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      
      {/* 🔴 الحل النهائي والقطعي لمشكلة الطباعة في الجوال والصفحة الثانية */}
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

      {/* 🟢 شريط التنقل العلوي */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 print:hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            translate="no"
            className="notranslate text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
          >
            Fareestate
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold text-slate-600">
            <button onClick={() => { setCurrentPage('home'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'home' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>الرئيسية</button>
            <button onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'blog' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>المدونة والنصائح</button>
            <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>من نحن</button>
            <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className={`transition-all hover:text-blue-700 ${currentPage === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : ''}`}>اتصل بنا</button>
          </nav>
        </div>
      </header>

      {/* 🟢 محتوى الموقع الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full space-y-12 print:p-0 print:m-0 print:block">
        
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0 print:block">
            
            {/* قسم الترحيب المطور */}
            <section className="text-center space-y-5 print:hidden relative z-10 pt-4 pb-8">
              <div className="inline-block px-5 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold shadow-sm animate-fade-in-up">🚀 أداة بناء السيرة الذاتية الذكية</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                أنشئ سيرتك الذاتية <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">الاحترافية</span> مجاناً
              </h1>
              <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">أدخل بياناتك بالأسفل وشاهد سيرتك الذاتية تُبنى أمامك خطوة بخطوة وبشكل فوري.</p>
            </section>

            {/* تم تحويل الشبكة (Grid) إلى Flexbox لتمكين تثبيت قسم المعاينة (Sticky) */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 print:block relative items-start">
              
              {/* 📝 القسم الأيمن (نماذج الإدخال - Scrollable) */}
              <section className="w-full lg:w-[45%] space-y-6 print:hidden">
                
                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-blue-50 p-2.5 rounded-xl text-xl">👤</span> البيانات الشخصية
                  </h2>
                  
                  {/* 🟢 الحل الجديد لزر الصورة الشخصية */}
                  <div className="mb-5 space-y-2">
                    <label className="block text-sm font-bold text-slate-700">الصورة الشخصية</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        id="photo-upload" 
                        accept="image/*" 
                        onChange={handlePhotoUpload} 
                        className="hidden" 
                      />
                      <label 
                        htmlFor="photo-upload" 
                        className="flex items-center justify-center w-full p-3.5 bg-blue-50 border-2 border-blue-200 border-dashed rounded-xl text-blue-700 font-bold cursor-pointer hover:bg-blue-100 transition-colors text-sm"
                      >
                        {photo ? '✅ تم اختيار الصورة بنجاح - اضغط لتغييرها' : '📸 اختر صورة شخصية'}
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">الاسم الكامل</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد الشمحاني" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">المسمى الوظيفي</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="مثال: مهندس برمجيات" className={inputClassName} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">تاريخ الميلاد والجنسية</label>
                      <input type="text" value={dobNationality} onChange={(e) => setDobNationality(e.target.value)} placeholder="مثال: سبتمبر 1991 - يمني" className={inputClassName} />
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-emerald-50 p-2.5 rounded-xl text-xl">📞</span> معلومات الاتصال
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">العنوان الكامل</label>
                      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="مثال: صنعاء - اليمن" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">البريد الإلكتروني</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jmal@example.com" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">رقم الهاتف</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967..." className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700">منصات التواصل (افصل بسطر جديد)</label>
                      <textarea rows={3} value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} placeholder="www.linkedin.com/in/...&#10;www.twitter.com/..." className={`${inputClassName} text-left resize-none`} dir="ltr"></textarea>
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-amber-50 p-2.5 rounded-xl text-xl">🎓</span> المسار المهني والعلمي
                  </h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">التعليم والمؤهلات</label>
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder="سنة التخرج | اسم المؤسسة | التخصص" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">الخبرات العملية</label>
                      <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="اسم الشركة | المسمى | المهام" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">التدريب المهني</label>
                      <textarea rows={2} value={training} onChange={(e) => setTraining(e.target.value)} placeholder="الدورات التدريبية" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <article className={cardClassName}>
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                    <span className="bg-purple-50 p-2.5 rounded-xl text-xl">⚙️</span> المهارات والإضافات
                  </h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">المهارات (افصل بسطر جديد)</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="مايكروسوفت وورد&#10;أوتوكاد" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">اللغات (افصل بسطر جديد)</label>
                      <textarea rows={2} value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="العربية / اللغة الأم&#10;الإنجليزية / جيد جداً" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">الاهتمامات (افصل بسطر جديد)</label>
                      <textarea rows={2} value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="القراءة&#10;الرسم" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

              </section>

              {/* 👁️ القسم الأيسر (المعاينة الحية - Sticky) */}
              <section className="w-full lg:w-[55%] print:w-full lg:sticky lg:top-24 z-10 transition-transform duration-500 flex flex-col gap-6">
                
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-200/60 print:border-none print:shadow-none print:overflow-visible print:pb-0">
                  <div className="cv-print-area bg-white w-full min-w-[700px] lg:min-w-0 mx-auto overflow-hidden" dir="ltr">
                    
                    {/* الهيدر العلوي */}
                    <div className="print-header w-full bg-white pt-8 pb-4 pl-12 pr-8 border-b-[16px] border-[#1A2B3C] mb-6 print:mb-0">
                       <h1 className="text-5xl font-light text-slate-800 mb-1 tracking-widest uppercase">{fullName || 'عواد محمد عواد'}</h1>
                       <h2 className="text-xl text-slate-600 font-medium tracking-[0.2em] uppercase">{jobTitle || 'مهندس معماري'}</h2>
                    </div>

                    {/* المحتوى السفلي (مقسم لعمودين) */}
                    <div className="cv-print-main-row flex flex-row w-full min-h-[900px] bg-white">
                      
                      {/* الشريط الجانبي الغامق */}
                      <aside className="cv-sidebar w-[35%] bg-[#1A2B3C] text-white p-8 flex flex-col gap-8" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                        <div className="print-pic w-40 h-48 mx-auto bg-slate-400 overflow-hidden shadow-lg border border-slate-500 relative flex-shrink-0 group">
                           {photo ? (
                             <img src={photo} alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                           ) : (
                             <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 text-sm gap-2">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
                               رفع الصورة
                             </div>
                           )}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-4 uppercase text-white tracking-widest">النبذة الشخصية</h3>
                          <div className="space-y-4 text-sm font-light">
                            <div>
                              <span className="block text-slate-400 font-bold mb-1 print:mb-0 text-xs uppercase">الاسم</span>
                              <span className="text-slate-100">{fullName || 'عواد محمد عواد عباس'}</span>
                            </div>
                            {dobNationality && (
                              <div>
                                <span className="block text-slate-400 font-bold mb-1 print:mb-0 text-xs uppercase">تاريخ الميلاد والجنسية</span>
                                <span className="text-slate-100 whitespace-pre-line">{dobNationality}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 text-sm font-light">
                          {address && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">العنوان</h3>
                              <span className="text-slate-100">{address}</span>
                            </div>
                          )}
                          {phone && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">رقم الهاتف</h3>
                              <span className="text-slate-100 block">{phone}</span>
                            </div>
                          )}
                          {email && (
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-widest">البريد الإلكتروني</h3>
                              <span className="text-slate-100 break-all block">{email}</span>
                            </div>
                          )}
                        </div>

                        {languages && (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">اللغات</h3>
                            <div className="text-sm font-light text-slate-100 whitespace-pre-line">{languages}</div>
                          </div>
                        )}

                        {socialMedia && (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">منصات التواصل</h3>
                            <div className="text-sm font-light text-slate-100 whitespace-pre-line break-all">{socialMedia}</div>
                          </div>
                        )}
                      </aside>

                      {/* القسم الرئيسي الفاتح */}
                      <main className="cv-main-content w-[65%] bg-white p-8 pl-10 text-slate-800">
                        <div className="space-y-8 print:space-y-4">
                          {education && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">🎓</span> التعليم والمؤهلات
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-8 border-l-2 border-slate-100 ml-3">{education}</p>
                            </section>
                          )}

                          {experience && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">💼</span> الخبرات العملية
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-8 border-l-2 border-slate-100 ml-3">{experience}</p>
                            </section>
                          )}

                          {training && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">📋</span> التدريب المهني
                              </h3>
                              <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-8 border-l-2 border-slate-100 ml-3">{training}</p>
                            </section>
                          )}

                          {skills && (
                            <section>
                              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest flex items-center gap-3">
                                <span className="text-[#1A2B3C]">⚙️</span> المهارات
                              </h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pl-6 print:pl-4 print:gap-x-4 ml-3">
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
                                <span className="text-[#1A2B3C]">🎯</span> الاهتمامات
                              </h3>
                              <ul className="list-disc list-inside text-slate-600 text-sm leading-loose pl-8 ml-3 marker:text-blue-500">
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

                {/* زر تحميل السيرة الذاتية التفاعلي */}
                <button 
                  onClick={handlePrintPDF} 
                  className="w-full flex justify-center items-center gap-3 py-4 px-6 text-xl font-extrabold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 print:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  تحميل السيرة الذاتية (PDF)
                </button>

              </section>
            </div>
          </div>
        )}

        {/* باقي الصفحات (المدونة، من نحن، إلخ) */}
        {currentPage === 'blog' && (
          <div>
            {!selectedPost ? (
              <>
                <section className="text-center space-y-4 mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">نصائح مهنية وأسرار التوظيف</h1>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto">دليلك الشامل لكتابة سيرة ذاتية احترافية واجتياز المقابلات الشخصية.</p>
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
                        <button className="text-blue-700 font-bold group-hover:translate-x-[-4px] transition-transform flex items-center gap-1">اقرأ المزيد &larr;</button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
                <button onClick={handleBackToBlog} className="mb-8 text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors w-fit">
                  &rarr; العودة للمدونة
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

        {currentPage === 'about' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3"><span className="text-4xl">🏢</span> من نحن</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني وتجاوز أنظمة الفرز الآلي (ATS).</p>
          </article>
        )}

        {currentPage === 'contact' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3"><span className="text-4xl">📬</span> اتصل بنا</h1>
            <p className="text-slate-600 mb-8 text-lg">يسعدنا تواصلكم معنا لأي استفسار أو دعم فني.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-[#16a34a] hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.964 23.955c-1.848 0-3.666-.46-5.275-1.332l-6.39 1.677 1.716-6.237c-.96-1.657-1.464-3.535-1.464-5.464C.551 5.64 6.185.006 13.136.006c6.953 0 12.585 5.634 12.585 12.593 0 6.958-5.632 12.356-13.757 12.356zm-5.228-3.41c1.554.919 3.328 1.405 5.163 1.405 5.86 0 10.635-4.782 10.635-10.655S17.76 1.94 11.9 1.94c-5.86 0-10.636 4.781-10.636 10.654 0 1.93.53 3.791 1.531 5.432l-1.026 3.731 3.823-1.011zm9.324-7.44c-.218-.109-1.288-.636-1.488-.709-.199-.073-.346-.109-.492.109-.147.218-.564.709-.693.854-.128.146-.258.164-.476.055-.218-.109-.92-.338-1.752-1.078-.647-.577-1.085-1.29-1.213-1.509-.129-.218-.014-.336.095-.445.098-.098.218-.255.326-.382.11-.128.147-.218.219-.364.073-.146.037-.273-.018-.382-.055-.11-.492-1.182-.673-1.618-.178-.428-.359-.37-.492-.377-.128-.007-.275-.007-.423-.007-.147 0-.385.055-.587.273-.201.218-.77 1.701-.77 3.342 0 1.642.788 3.23 1.053 3.559.266.327 2.42 3.69 5.856 5.168.818.351 1.458.56 1.956.717.822.259 1.569.222 2.158.134.661-.099 2.029-.828 2.316-1.628.288-.8.288-1.487.202-1.628-.087-.146-.324-.228-.543-.337z"/></svg>
                مراسلة عبر واتساب
              </a>
              <a href="mailto:jmal30997@gmail.com" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                مراسلة عبر البريد
              </a>
            </div>
          </article>
        )}

        {currentPage === 'privacy' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3"><span className="text-4xl">🔒</span> سياسة الخصوصية</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين أو جمع بيانات السيرة الذاتية التي تدخلها، حيث تتم المعالجة بالكامل داخل متصفحك لضمان السرية التامة والأمان الكامل لمعلوماتك.</p>
          </article>
        )}

        {currentPage === 'terms' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3"><span className="text-4xl">📜</span> شروط الاستخدام</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام الخاصة باستخدام أدوات إنشاء السير الذاتية وقراءة المقالات التوجيهية. الموقع متاح للجميع للاستخدام الشخصي المجاني.</p>
          </article>
        )}
        
      </main>

      {/* 🟢 التذييل */}
      <footer className="mt-auto py-10 border-t border-slate-200 text-center space-y-6 print:hidden bg-white">
        <p className="text-slate-400 text-sm font-semibold tracking-wide">© 2026 FAREESTATE. جميع الحقوق محفوظة.</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-bold">
          <button onClick={() => { setCurrentPage('privacy'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">سياسة الخصوصية</button>
          <button onClick={() => { setCurrentPage('terms'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">شروط الاستخدام</button>
          <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">من نحن</button>
          <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className="hover:text-blue-600 transition-colors">اتصل بنا</button>
        </div>
      </footer>

    </div>
  );
}

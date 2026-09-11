import { useState } from 'react';
import { articlesData, Post } from './articlesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // حالات أداة بناء السيرة الذاتية
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  
  // حالات الإضافات
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

  const inputClassName = "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      
      {/* 🔴 الحل النهائي والقطعي لمشكلة الصفحة الثانية والنقص */}
      <style>
        {`
          @media print {
            @page {
              margin: 0; /* إزالة هوامش المتصفح الافتراضية بالكامل */
              size: auto; /* السماح بتكيف الكود مع A4 أو Letter حسب اختيار المستخدم */
            }
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
              height: 100% !important;
              background-color: white !important;
              overflow: hidden !important; /* منع ظهور أي سكرول أو صفحة إضافية */
            }
            
            body > *:not(#root) { display: none !important; }

            /* جعل السيرة الذاتية تتصرف كصورة واحدة مرنة تناسب حجم الورقة */
            .cv-print-area {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100vw !important;
              height: 100vh !important; /* ربط الارتفاع بحجم الورقة بالضبط */
              max-height: 100vh !important;
              margin: 0 !important;
              padding: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              page-break-inside: avoid !important; /* منع الانقسام قطعياً */
              page-break-before: avoid !important;
              page-break-after: avoid !important;
              z-index: 99999 !important;
            }

            /* تقليل الخطوط بنسبة مئوية مرنة vh/vw لضمان عدم نقص أي نص واستيعاب المحتوى الكثيف */
            .cv-print-area {
              font-size: clamp(8px, 1.5vh, 12px) !important; 
            }
            
            .cv-print-area h1, .cv-print-area h2, .cv-print-area h3 {
              line-height: 1.1 !important;
              margin-bottom: 0.5vh !important;
            }
            
            .cv-print-area p, .cv-print-area span, .cv-print-area li, .cv-print-area div {
              line-height: 1.3 !important;
            }

            .print-padding-fix {
              padding: 2vh 3vw !important;
            }

            .print-gap-fix {
              gap: 1.5vh !important;
            }
          }
        `}
      </style>

      {/* 🟢 شريط التنقل العلوي */}
      <header className="bg-white shadow-sm sticky top-0 z-50 print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            className="text-2xl font-bold text-blue-700 tracking-tight cursor-pointer"
            onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
          >
            Fareestate
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            <button onClick={() => { setCurrentPage('home'); setSelectedPost(null); }} className={`transition-colors ${currentPage === 'home' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>الرئيسية</button>
            <button onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }} className={`transition-colors ${currentPage === 'blog' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>المدونة والنصائح</button>
            <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className={`transition-colors ${currentPage === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>من نحن</button>
            <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className={`transition-colors ${currentPage === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>اتصل بنا</button>
          </nav>
        </div>
      </header>

      {/* 🟢 محتوى الموقع الرئيسي */}
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full space-y-12 print:p-0 print:m-0 print:block">
        
        {/* صفحة الرئيسية */}
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0 print:block">
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">أدخل بياناتك بالأسفل وشاهد سيرتك الذاتية تُبنى أمامك خطوة بخطوة.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:block">
              {/* قسم إدخال البيانات (يختفي عند الطباعة) */}
              <section className="space-y-6 print:hidden">
                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">البيانات الشخصية</h2>
                  <div className="mb-5 space-y-2">
                    <label className="block text-sm font-medium text-slate-700">الصورة الشخصية</label>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد الشمحاني" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المسمى الوظيفي</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="مثال: مهندس برمجيات" className={inputClassName} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">تاريخ الميلاد والجنسية</label>
                      <input type="text" value={dobNationality} onChange={(e) => setDobNationality(e.target.value)} placeholder="مثال: Sep. 1991 - Sudanese" className={inputClassName} />
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">معلومات الاتصال والروابط</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">العنوان الكامل</label>
                      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="مثال: صنعاء - اليمن" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jmal@example.com" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">رقم الهاتف</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967..." className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">منصات التواصل (افصل بسطر جديد)</label>
                      <textarea rows={3} value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} placeholder="www.instagram.com/...&#10;www.twitter.com/..." className={`${inputClassName} text-left resize-none`} dir="ltr"></textarea>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">المسار المهني والعلمي</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التعليم والمؤهلات</label>
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder="سنة التخرج | اسم المؤسسة | التخصص" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الخبرات العملية</label>
                      <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="اسم الشركة | المسمى | المهام" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التدريب المهني</label>
                      <textarea rows={2} value={training} onChange={(e) => setTraining(e.target.value)} placeholder="الدورات التدريبية" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">المهارات والإضافات</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المهارات (افصل بسطر جديد)</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Microsoft Word&#10;AutoCAD" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">اللغات (افصل بسطر جديد)</label>
                      <textarea rows={2} value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Arabic / fluent&#10;English / V. good" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاهتمامات (افصل بسطر جديد)</label>
                      <textarea rows={2} value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="Reading&#10;Sketching" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <button onClick={handlePrintPDF} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all">
                  تحميل السيرة الذاتية (PDF)
                </button>
              </section>

              {/* 🔴 قسم المعاينة الذي سيُطبع كصورة واحدة مرنة تناسب أي مقاس ورق */}
              <section className="cv-print-area bg-white rounded-xl shadow-sm border border-slate-200 w-full mx-auto" dir="ltr">
                
                {/* الهيدر العلوي */}
                <div className="w-full bg-white pt-8 pb-4 pl-12 pr-8 print-padding-fix border-b-[16px] border-[#1A2B3C] mb-6 print:mb-0 print:border-b-[1vh] print:flex-shrink-0">
                   <h1 className="text-5xl font-light text-slate-800 mb-1 tracking-widest uppercase print:text-[3.5vh] print:mb-[0.5vh] leading-none">{fullName || 'AWAAD M. AWAAD'}</h1>
                   <h2 className="text-xl text-slate-600 font-medium tracking-[0.2em] uppercase print:text-[1.8vh] leading-none">{jobTitle || 'ARCHITECT'}</h2>
                </div>

                {/* المحتوى السفلي (مقسم لعمودين) */}
                <div className="flex flex-row w-full min-h-[900px] print:min-h-0 print:flex-grow bg-white print:overflow-hidden">
                  
                  {/* الشريط الجانبي الغامق */}
                  <aside className="w-[35%] bg-[#1A2B3C] text-white p-8 print-padding-fix flex flex-col gap-8 print-gap-fix print:h-full" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                    <div className="w-40 h-48 print:w-[10vw] print:h-[13vw] mx-auto bg-slate-400 overflow-hidden shadow-lg border border-slate-500 relative flex-shrink-0">
                       {photo ? (
                         <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-200 text-sm print:text-[1vh]">Upload Photo</div>
                       )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 uppercase text-white print:text-[2vh] print:mb-[1vh]">PROFILE</h3>
                      <div className="space-y-4 text-sm font-light print:space-y-[1vh] print:text-[1.4vh]">
                        <div>
                          <span className="block text-slate-300 font-bold mb-1 print:mb-0">Name</span>
                          <span className="text-slate-100">{fullName || 'Awaad Mohamed Awaad Abbas'}</span>
                        </div>
                        {dobNationality && (
                          <div>
                            <span className="block text-slate-300 font-bold mb-1 print:mb-0">Date of Birth & Nationality</span>
                            <span className="text-slate-100 whitespace-pre-line">{dobNationality}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 text-sm font-light print:space-y-[1vh] print:text-[1.4vh]">
                      {address && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase print:text-[1.8vh] print:mb-[0.5vh]">ADDRESS</h3>
                          <span className="text-slate-100">{address}</span>
                        </div>
                      )}
                      {phone && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase print:text-[1.8vh] print:mb-[0.5vh]">Mobile</h3>
                          <span className="text-slate-100 block">{phone}</span>
                        </div>
                      )}
                      {email && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase print:text-[1.8vh] print:mb-[0.5vh]">Email</h3>
                          <span className="text-slate-100 break-all block">{email}</span>
                        </div>
                      )}
                    </div>

                    {languages && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase print:text-[1.8vh] print:mb-[1vh]">Language</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line print:text-[1.4vh]">{languages}</div>
                      </div>
                    )}

                    {socialMedia && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase print:text-[1.8vh] print:mb-[1vh]">Social Media</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line break-all print:text-[1.4vh]">{socialMedia}</div>
                      </div>
                    )}
                  </aside>

                  {/* القسم الرئيسي الفاتح */}
                  <main className="w-[65%] bg-white p-8 pl-10 print-padding-fix text-slate-800 print:h-full">
                    <div className="space-y-8 print:space-y-[2vh]">
                      {education && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2 print:text-[1.8vh] print:mb-[1vh]">
                            <span className="text-[#1A2B3C]">🎓</span> EDUCATION AND QUALIFICATIONS
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6 print:text-[1.4vh] print:pl-[2vw]">{education}</p>
                        </section>
                      )}

                      {experience && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2 print:text-[1.8vh] print:mb-[1vh]">
                            <span className="text-[#1A2B3C]">💼</span> EMPLOYMENT
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6 print:text-[1.4vh] print:pl-[2vw]">{experience}</p>
                        </section>
                      )}

                      {training && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2 print:text-[1.8vh] print:mb-[1vh]">
                            <span className="text-[#1A2B3C]">📋</span> PROFESSIONAL TRAINING
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6 print:text-[1.4vh] print:pl-[2vw]">{training}</p>
                        </section>
                      )}

                      {skills && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2 print:text-[1.8vh] print:mb-[1vh]">
                            <span className="text-[#1A2B3C]">⚙️</span> SKILLS
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-3 pl-6 print:pl-[2vw] print:gap-x-[2vw] print:gap-y-[1vh]">
                            {skills.split('\n').map((skill, index) => {
                              if (!skill.trim()) return null;
                              return (
                                <div key={index} className="flex justify-between items-center mb-2 print:mb-0">
                                  <span className="text-slate-700 text-xs font-bold uppercase tracking-wide w-1/2 print:text-[1.2vh]">{skill.trim()}</span>
                                  <div className="w-1/2 h-1.5 bg-slate-200 flex rounded overflow-hidden print:h-[0.8vh]">
                                    <div className="bg-[#1A2B3C] h-full" style={{ width: '85%' }}></div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </section>
                      )}

                      {interests && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2 print:text-[1.8vh] print:mb-[1vh]">
                            <span className="text-[#1A2B3C]">🎯</span> INTERESTS
                          </h3>
                          <ul className="list-disc list-inside text-slate-600 text-sm leading-loose pl-6 print:text-[1.4vh] print:pl-[2vw]">
                            {interests.split('\n').map((interest, i) => (
                              interest.trim() ? <li key={i}>{interest.trim()}</li> : null
                            ))}
                          </ul>
                        </section>
                      )}
                    </div>
                  </main>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* باقي الصفحات (المدونة، من نحن، إلخ) تبقى كما هي بدون تغيير */}
        {/* صفحة المدونة */}
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
                    <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col h-full">
                      <div className="text-4xl mb-4">{post.icon}</div>
                      <span className="text-xs font-bold text-blue-700 mb-2">{post.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50 text-sm">
                        <span className="text-slate-400">{post.date}</span>
                        <button onClick={() => handleReadMore(post)} className="text-blue-700 font-bold hover:underline">اقرأ المزيد &larr;</button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-12">
                <button onClick={handleBackToBlog} className="mb-8 text-blue-700 hover:underline font-bold text-sm">
                  &rarr; العودة للمدونة
                </button>
                <header className="text-center mb-10">
                  <div className="text-6xl mb-6">{selectedPost.icon}</div>
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4">{selectedPost.category}</span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{selectedPost.title}</h1>
                  <time className="text-slate-400 text-sm">{selectedPost.date}</time>
                </header>
                <div className="prose prose-lg prose-blue mx-auto text-slate-700 leading-loose">
                  <p>{selectedPost.content}</p>
                </div>
              </article>
            )}
          </div>
        )}

        {/* صفحة من نحن */}
        {currentPage === 'about' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">من نحن</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني وتجاوز أنظمة الفرز الآلي (ATS).</p>
          </article>
        )}

        {/* صفحة اتصل بنا */}
        {currentPage === 'contact' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">اتصل بنا</h1>
            <p className="text-slate-600 mb-8">يسعدنا تواصلكم معنا لأي استفسار أو دعم فني.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-[#16a34a] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl shadow-sm">مراسلة عبر واتساب</a>
              <a href="mailto:jmal30997@gmail.com" className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-xl shadow-sm">مراسلة عبر البريد</a>
            </div>
          </article>
        )}

        {/* صفحة سياسة الخصوصية */}
        {currentPage === 'privacy' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">سياسة الخصوصية</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين أو جمع بيانات السيرة الذاتية التي تدخلها، حيث تتم المعالجة بالكامل داخل متصفحك لضمان السرية التامة.</p>
          </article>
        )}

        {/* صفحة شروط الاستخدام */}
        {currentPage === 'terms' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">شروط الاستخدام</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام الخاصة باستخدام أدوات إنشاء السير الذاتية وقراءة المقالات التوجيهية.</p>
          </article>
        )}
        
      </main>

      {/* 🟢 التذييل */}
      <footer className="mt-auto py-8 border-t border-slate-200 text-center space-y-4 print:hidden bg-white">
        <p className="text-slate-500 text-sm font-medium">© 2026 Fareestate. جميع الحقوق محفوظة.</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 font-bold">
          <button onClick={() => { setCurrentPage('privacy'); setSelectedPost(null); }} className="hover:text-blue-700 transition-colors">سياسة الخصوصية</button>
          <button onClick={() => { setCurrentPage('terms'); setSelectedPost(null); }} className="hover:text-blue-700 transition-colors">شروط الاستخدام</button>
          <button onClick={() => { setCurrentPage('about'); setSelectedPost(null); }} className="hover:text-blue-700 transition-colors">من نحن</button>
          <button onClick={() => { setCurrentPage('contact'); setSelectedPost(null); }} className="hover:text-blue-700 transition-colors">اتصل بنا</button>
        </div>
      </footer>

    </div>
  );
}

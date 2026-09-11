import { useState } from 'react';
import { articlesData, Post } from './articlesData';

export default function App() {
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

  const inputClassName = "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      
      {/* 🔴 الحل النهائي والقطعي لمشكلة الطباعة في الجوال والصفحة الثانية */}
      <style>
        {`
          @media print {
            @page {
              margin: 0;
              size: auto; 
            }
            
            /* إخفاء أي عناصر خارجية وإلغاء الهوامش تماماً */
            html, body, #root {
              width: 100% !important;
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important;
              background-color: white !important;
            }
            
            body > *:not(#root) { display: none !important; }

            /* تحويل مساحة السيرة الذاتية إلى لوحة ثابتة تطابق حجم الورقة بالضبط */
            .cv-print-area {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
              max-height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              box-sizing: border-box !important;
              display: flex !important;
              flex-direction: column !important;
              overflow: hidden !important;
              page-break-inside: avoid !important;
              z-index: 99999 !important;
            }

            /* إلغاء الارتفاع الثابت (900px) الذي كان يسبب الصفحة الثانية في الجوال */
            .cv-print-main-row {
              min-height: 0 !important;
              height: 100% !important;
              flex: 1 !important;
              display: flex !important;
              overflow: hidden !important;
            }

            .cv-sidebar {
              height: 100% !important;
              padding: 20px 15px !important;
              gap: 12px !important;
            }
            
            .cv-main-content {
              height: 100% !important;
              padding: 20px 25px !important;
            }

            .print-header {
              padding: 25px 30px 15px 30px !important;
              border-bottom-width: 8px !important;
            }

            /* استخدام الخطوط الثابتة (px) لحل مشكلة قراءة متصفحات الجوال الخاطئة */
            .cv-print-area { font-size: 11px !important; }
            .cv-print-area h1 { font-size: 24px !important; margin-bottom: 2px !important; line-height: 1.1 !important; }
            .cv-print-area h2 { font-size: 14px !important; line-height: 1.1 !important; margin-top: 0 !important;}
            .cv-print-area h3 { font-size: 13px !important; margin-bottom: 6px !important; }
            .cv-print-area p, .cv-print-area span, .cv-print-area li, .cv-print-area div {
              font-size: 10.5px !important;
              line-height: 1.4 !important;
            }
            
            .print-pic {
              width: 75px !important;
              height: 95px !important;
              margin: 0 auto 10px auto !important;
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
        
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0 print:block">
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">أدخل بياناتك بالأسفل وشاهد سيرتك الذاتية تُبنى أمامك خطوة بخطوة.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:block">
              {/* قسم إدخال البيانات */}
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

              {/* 🔴 قسم السيرة الذاتية (المعاينة والطباعة) */}
              <section className="cv-print-area bg-white rounded-xl shadow-sm border border-slate-200 w-full mx-auto" dir="ltr">
                
                {/* الهيدر العلوي */}
                <div className="print-header w-full bg-white pt-8 pb-4 pl-12 pr-8 border-b-[16px] border-[#1A2B3C] mb-6 print:mb-0">
                   <h1 className="text-5xl font-light text-slate-800 mb-1 tracking-widest uppercase">{fullName || 'AWAAD M. AWAAD'}</h1>
                   <h2 className="text-xl text-slate-600 font-medium tracking-[0.2em] uppercase">{jobTitle || 'ARCHITECT'}</h2>
                </div>

                {/* المحتوى السفلي (مقسم لعمودين) */}
                <div className="cv-print-main-row flex flex-row w-full min-h-[900px] bg-white">
                  
                  {/* الشريط الجانبي الغامق */}
                  <aside className="cv-sidebar w-[35%] bg-[#1A2B3C] text-white p-8 flex flex-col gap-8" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                    <div className="print-pic w-40 h-48 mx-auto bg-slate-400 overflow-hidden shadow-lg border border-slate-500 relative flex-shrink-0">
                       {photo ? (
                         <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-200 text-sm">Upload Photo</div>
                       )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 uppercase text-white">PROFILE</h3>
                      <div className="space-y-4 text-sm font-light">
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

                    <div className="space-y-4 text-sm font-light">
                      {address && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">ADDRESS</h3>
                          <span className="text-slate-100">{address}</span>
                        </div>
                      )}
                      {phone && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">Mobile</h3>
                          <span className="text-slate-100 block">{phone}</span>
                        </div>
                      )}
                      {email && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">Email</h3>
                          <span className="text-slate-100 break-all block">{email}</span>
                        </div>
                      )}
                    </div>

                    {languages && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase">Language</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line">{languages}</div>
                      </div>
                    )}

                    {socialMedia && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase">Social Media</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line break-all">{socialMedia}</div>
                      </div>
                    )}
                  </aside>

                  {/* القسم الرئيسي الفاتح */}
                  <main className="cv-main-content w-[65%] bg-white p-8 pl-10 text-slate-800">
                    <div className="space-y-8 print:space-y-4">
                      {education && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">🎓</span> EDUCATION AND QUALIFICATIONS
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{education}</p>
                        </section>
                      )}

                      {experience && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">💼</span> EMPLOYMENT
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{experience}</p>
                        </section>
                      )}

                      {training && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">📋</span> PROFESSIONAL TRAINING
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{training}</p>
                        </section>
                      )}

                      {skills && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">⚙️</span> SKILLS
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-3 pl-6 print:pl-4 print:gap-x-4">
                            {skills.split('\n').map((skill, index) => {
                              if (!skill.trim()) return null;
                              return (
                                <div key={index} className="flex justify-between items-center mb-2 print:mb-0">
                                  <span className="text-slate-700 text-xs font-bold uppercase tracking-wide w-1/2">{skill.trim()}</span>
                                  <div className="w-1/2 h-1.5 bg-slate-200 flex rounded overflow-hidden print:h-1">
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
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">🎯</span> INTERESTS
                          </h3>
                          <ul className="list-disc list-inside text-slate-600 text-sm leading-loose pl-6">
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

        {currentPage === 'about' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">من نحن</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني وتجاوز أنظمة الفرز الآلي (ATS).</p>
          </article>
        )}

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

        {currentPage === 'privacy' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">سياسة الخصوصية</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين أو جمع بيانات السيرة الذاتية التي تدخلها، حيث تتم المعالجة بالكامل داخل متصفحك لضمان السرية التامة.</p>
          </article>
        )}

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

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
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');

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

  const inputClassName = "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      
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
            <button onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }} className={`transition-colors ${currentPage === 'blog' && !selectedPost ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>المدونة والنصائح</button>
            <button onClick={() => setCurrentPage('about')} className={`transition-colors ${currentPage === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>من نحن</button>
            <button onClick={() => setCurrentPage('contact')} className={`transition-colors ${currentPage === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}>اتصل بنا</button>
          </nav>
        </div>
      </header>

      {/* 🟢 محتوى الموقع */}
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full space-y-12 print:p-0 print:m-0 print:max-w-full">
        
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0">
            
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">منصتك الأولى لإنشاء سيرة ذاتية تتخطى أنظمة الفرز الآلي (ATS). أدخل بياناتك وحملها كملف PDF فوراً.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:block">
              {/* 📝 قسم إدخال البيانات */}
              <section className="space-y-6 print:hidden">
                <article className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">البيانات الشخصية والمهنية</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد الشمحاني" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المسمى الوظيفي</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="مثال: مهندس برمجيات" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jmal30997@gmail.com" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">رقم الهاتف</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967776202648" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <label className="block text-sm font-medium text-slate-700">الملخص المهني</label>
                    <textarea rows={4} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="اكتب نبذة عن طموحك وخبراتك..." className={`${inputClassName} resize-none`}></textarea>
                  </div>
                  
                  <div className="mt-5 space-y-2">
                    <label className="block text-sm font-medium text-slate-700">الخبرات العملية</label>
                    <textarea rows={4} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="أين عملت وماذا أنجزت؟" className={`${inputClassName} resize-none`}></textarea>
                  </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">التعليم والمهارات</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التعليم والمؤهلات</label>
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder="مثال: خريج ثانوية عامة، معدل 78%" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المهارات (افصل بينها بسطر جديد)</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="مثال:&#10;تطوير الويب&#10;تحليل النظم&#10;حل المشكلات" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <button onClick={handlePrintPDF} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all">
                  تحميل السيرة الذاتية (PDF)
                </button>
              </section>

              {/* 🖨️ قسم المعاينة والإخراج (القالب البصري الاحترافي) */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 print:shadow-none print:border-none print:p-0 print:m-0 print:block overflow-hidden h-full">
                
                <div className="flex flex-col sm:flex-row print:flex-row w-full min-h-[800px] print:h-screen bg-white">
                  
                  {/* العمود الجانبي الأيمن (اللون الداكن) */}
                  <aside 
                    className="w-full sm:w-1/3 print:w-1/3 bg-[#1A2B3C] text-white p-6 sm:p-8 flex flex-col gap-8" 
                    style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
                  >
                    
                    {/* الصورة الشخصية الافتراضية */}
                    <div className="w-32 h-32 mx-auto bg-slate-600 rounded-full overflow-hidden border-4 border-slate-400">
                       <svg className="w-full h-full text-slate-300 bg-slate-700 p-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>

                    {/* قسم النبذة (Profile) */}
                    <div>
                      <h3 className="text-lg font-bold tracking-widest mb-4 uppercase border-b border-slate-500 pb-2 text-slate-200">PROFILE</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="block text-slate-400 text-xs uppercase mb-1">الاسم</span>
                          <span className="font-medium text-base">{fullName || 'جمال حميد الشمحاني'}</span>
                        </div>
                        {/* يمكنك إضافة المزيد من الحقول هنا مستقبلاً كالجنسية وتاريخ الميلاد */}
                      </div>
                    </div>

                    {/* قسم التواصل (Contact) */}
                    <div>
                      <h3 className="text-lg font-bold tracking-widest mb-4 uppercase border-b border-slate-500 pb-2 text-slate-200">CONTACT</h3>
                      <div className="space-y-4 text-sm">
                        {(email || !phone) && (
                          <div>
                            <span className="block text-slate-400 text-xs uppercase mb-1">البريد الإلكتروني</span>
                            <span className="break-words font-medium">{email || 'jmal30997@gmail.com'}</span>
                          </div>
                        )}
                        {phone && (
                          <div>
                            <span className="block text-slate-400 text-xs uppercase mb-1">الهاتف</span>
                            <span className="font-medium inline-block" dir="ltr">{phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </aside>

                  {/* العمود الرئيسي الأيسر (المحتوى الأبيض) */}
                  <main className="w-full sm:w-2/3 print:w-2/3 bg-white p-6 sm:p-8 text-slate-800">
                    
                    {/* ترويسة الاسم */}
                    <header className="mb-8 border-b-2 border-slate-200 pb-6">
                      <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{fullName || 'جمال حميد الشمحاني'}</h1>
                      <h2 className="text-xl text-slate-500 font-medium">{jobTitle || 'مهندس برمجيات'}</h2>
                    </header>

                    <div className="space-y-8">
                      {/* الملخص المهني */}
                      {summary && (
                        <section>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <span className="w-2 h-2 bg-slate-900 rounded-full inline-block"></span>
                            النبذة المهنية
                          </h3>
                          <p className="text-slate-600 leading-relaxed whitespace-pre-line pr-4">{summary}</p>
                        </section>
                      )}

                      {/* الخبرات */}
                      {experience && (
                        <section>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <span className="w-2 h-2 bg-slate-900 rounded-full inline-block"></span>
                            الخبرات العملية
                          </h3>
                          <p className="text-slate-600 leading-relaxed whitespace-pre-line pr-4">{experience}</p>
                        </section>
                      )}

                      {/* التعليم */}
                      {education && (
                        <section>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <span className="w-2 h-2 bg-slate-900 rounded-full inline-block"></span>
                            التعليم والمؤهلات
                          </h3>
                          <p className="text-slate-600 leading-relaxed whitespace-pre-line pr-4">{education}</p>
                        </section>
                      )}

                      {/* المهارات (معروضة كنقاط مرئية شبيهة بأشرطة التقدم) */}
                      {skills && (
                        <section>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <span className="w-2 h-2 bg-slate-900 rounded-full inline-block"></span>
                            المهارات
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
                            {skills.split('\n').map((skill, index) => {
                              if (!skill.trim()) return null;
                              return (
                                <div key={index} className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                                  <span className="text-slate-700 font-medium text-sm">{skill.trim()}</span>
                                  {/* شكل بسيط يحاكي شريط المستوى */}
                                  <div className="flex gap-1">
                                    <div className="w-3 h-1.5 bg-slate-800 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-slate-800 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-slate-800 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-slate-300 rounded-sm"></div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </section>
                      )}
                    </div>

                  </main>
                </div>
              </section>
            </div>

            {/* قسم مميزات الأداة */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 print:hidden">
              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 text-center">
                <span className="text-xs font-bold text-blue-700 mb-2 block">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">خصوصية وأمان تام</h3>
                <p className="text-slate-600 text-sm">بياناتك تُعالج محلياً داخل متصفحك ولا تُحفظ في أي خوادم.</p>
              </article>
              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 text-center">
                <span className="text-xs font-bold text-blue-700 mb-2 block">تصميم بصري</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">هوية احترافية</h3>
                <p className="text-slate-600 text-sm">قالب مقسم بعمودين يبرز مهاراتك بشكل أنيق وجذاب للشركات.</p>
              </article>
              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 text-center">
                <span className="text-xs font-bold text-blue-700 mb-2 block">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">مجانية بالكامل</h3>
                <p className="text-slate-600 text-sm">كافة الخصائص متاحة للجميع بدون رسوم خفية.</p>
              </article>
            </section>
          </div>
        )}

        {/* --- الصفحات الأخرى كما هي --- */}
        {currentPage === 'blog' && (
          <div className="print:hidden">
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
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">من نحن</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني.</p>
          </article>
        )}

        {currentPage === 'contact' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 text-center print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">اتصل بنا</h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-[#16a34a] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl shadow-sm">مراسلة عبر واتساب</a>
              <a href="mailto:jmal30997@gmail.com" className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-xl shadow-sm">مراسلة عبر البريد</a>
            </div>
          </article>
        )}

        {currentPage === 'privacy' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">سياسة الخصوصية</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين بيانات السيرة الذاتية التي تدخلها في خوادمنا.</p>
          </article>
        )}

        {currentPage === 'terms' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">شروط الاستخدام</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام.</p>
          </article>
        )}
        
      </main>

      {/* 🟢 التذييل */}
      <footer className="mt-auto py-8 border-t border-slate-200 text-center space-y-4 print:hidden bg-white">
        <p className="text-slate-500 text-sm font-medium">© 2026 Fareestate. جميع الحقوق محفوظة.</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 font-bold">
          <button onClick={() => setCurrentPage('privacy')} className="hover:text-blue-700 transition-colors">سياسة الخصوصية</button>
          <button onClick={() => setCurrentPage('terms')} className="hover:text-blue-700 transition-colors">شروط الاستخدام</button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-blue-700 transition-colors">من نحن</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-700 transition-colors">اتصل بنا</button>
        </div>
      </footer>

    </div>
  );
}

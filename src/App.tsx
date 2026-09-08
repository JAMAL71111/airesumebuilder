import { useState } from 'react';
import { articlesData, Post } from './articlesData';

export default function App() {
  // حالة التنقل بين صفحات الموقع (تشمل الآن جميع الصفحات المطلوبة لأدسنس)
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  
  // حالة التحكم في فتح مقال معين لقراءته
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

  // دالة لفتح المقال
  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    setCurrentPage('blog');
    window.scrollTo(0, 0); // التمرير للأعلى عند فتح المقال
  };

  // دالة للعودة لقائمة المقالات
  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // دالة طباعة السيرة الذاتية (لتحميلها كـ PDF)
  const handlePrintPDF = () => {
    window.print();
  };

  // كلاس موحد لحقول الإدخال لتسهيل التعديل (التصميم الجديد)
  const inputClassName = "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all";

  return (
    // إضافة خط Tajawal وتنسيقات الخلفية الأساسية للتصميم الجديد
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
            <button 
              onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
              className={`transition-colors ${currentPage === 'home' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }}
              className={`transition-colors ${currentPage === 'blog' && !selectedPost ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}
            >
              المدونة والنصائح
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`transition-colors ${currentPage === 'about' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}
            >
              من نحن
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700'}`}
            >
              اتصل بنا
            </button>
          </nav>
        </div>
      </header>

      {/* 🟢 محتوى الموقع (Main) */}
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full space-y-12">
        
        {/* 1. صفحة الرئيسية */}
        {currentPage === 'home' && (
          <div className="space-y-12">
            
            {/* قسم الترحيب */}
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">منصتك الأولى لإنشاء سيرة ذاتية تتخطى أنظمة الفرز الآلي (ATS). أدخل بياناتك وحملها كملف PDF فوراً.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* قسم إدخال البيانات */}
              <section className="space-y-6 print:hidden">
                
                {/* بطاقة المعلومات الشخصية */}
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
                    <textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="اكتب نبذة عن طموحك وخبراتك..." className={`${inputClassName} resize-none`}></textarea>
                  </div>
                  
                  <div className="mt-5 space-y-2">
                    <label className="block text-sm font-medium text-slate-700">الخبرات العملية</label>
                    <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="أين عملت وماذا أنجزت؟" className={`${inputClassName} resize-none`}></textarea>
                  </div>
                </article>

                {/* بطاقة التعليم والمهارات */}
                <article className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">التعليم والمهارات</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التعليم</label>
                      <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="مثال: خريج ثانوية، معدل 78%" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المهارات</label>
                      <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="مثال: React، البرمجة، حل المشكلات" className={inputClassName} />
                    </div>
                  </div>
                </article>

                <button 
                  onClick={handlePrintPDF}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-md flex justify-center items-center gap-2 transition-all"
                >
                  تحميل السيرة الذاتية (PDF)
                </button>
              </section>

              {/* قسم المعاينة (الذي سيتم طباعته كوثيقة) */}
              <section className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-slate-200 flex flex-col print:shadow-none print:border-none print:p-0">
                <div className="text-center border-b border-slate-200 pb-6 mb-6">
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">{fullName || 'الاسم الكامل'}</h1>
                  <p className="text-lg text-blue-700 font-medium mb-4">{jobTitle || 'المسمى الوظيفي'}</p>
                  <div className="flex items-center gap-3 text-slate-500 text-sm justify-center w-full">
                    <span>{email || 'البريد الإلكتروني'}</span>
                    <span className="text-slate-300">|</span>
                    <span>{phone || 'رقم الهاتف'}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {summary && (
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-3">الملخص المهني</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{summary}</p>
                    </div>
                  )}
                  {experience && (
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-3">الخبرات العملية</h3>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{experience}</p>
                    </div>
                  )}
                  {education && (
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-3">التعليم والمؤهلات</h3>
                      <p className="text-slate-700 text-sm">{education}</p>
                    </div>
                  )}
                  {skills && (
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-3">المهارات</h3>
                      <p className="text-slate-700 text-sm">{skills}</p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* قسم مميزات الأداة (تصميم Grid جديد) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 print:hidden">
              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-blue-700 mb-2">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">خصوصية وأمان تام</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">تتم معالجة بياناتك محلياً داخل متصفحك حصراً ولا يتم حفظها في أي خوادم.</p>
                <div className="flex justify-between items-center text-sm border-t pt-3">
                  <span className="text-slate-400">آمن 100%</span>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow text-center">
                <div className="text-2xl mb-2">✨</div>
                <span className="text-xs font-bold text-blue-700 mb-2">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">تخطى أنظمة الفرز</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">قالب مهيأ ومصمم خصيصاً لاجتياز أنظمة الفرز الآلي (ATS) بنجاح.</p>
              </article>

              <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow text-center">
                <div className="text-2xl mb-2">💎</div>
                <span className="text-xs font-bold text-blue-700 mb-2">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">مجانية بالكامل</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">كافة خصائص بناء السيرة الذاتية وتحميلها متاحة للجميع بدون رسوم خفية.</p>
              </article>
            </section>
          </div>
        )}

        {/* 2. صفحة المدونة */}
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
                    <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all flex flex-col h-full">
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
                <button onClick={handleBackToBlog} className="mb-8 text-blue-700 hover:underline font-bold text-sm flex items-center gap-2">
                  &rarr; العودة للمدونة
                </button>
                <header className="text-center mb-10">
                  <div className="text-6xl mb-6">{selectedPost.icon}</div>
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4">{selectedPost.category}</span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">{selectedPost.title}</h1>
                  <time className="text-slate-400 text-sm">{selectedPost.date}</time>
                </header>
                <div className="prose prose-lg prose-blue mx-auto text-slate-700 leading-loose">
                  <p>{selectedPost.content}</p>
                </div>
              </article>
            )}
          </div>
        )}

        {/* 3. صفحة من نحن */}
        {currentPage === 'about' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">من نحن</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني.</p>
            <p className="text-slate-700 leading-relaxed text-lg">نسعى جاهدين لمساعدة الباحثين عن عمل على إبراز مهاراتهم بأفضل صورة عبر أدوات ذكية ومقالات موثوقة تعزز فرص قبولهم في سوق العمل.</p>
          </article>
        )}

        {/* 4. صفحة اتصل بنا (بالتصميم الجديد) */}
        {currentPage === 'contact' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 text-center print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">اتصل بنا</h1>
            <p className="text-slate-600 mb-10 text-lg">يسعدنا تواصلكم معنا دائماً للإجابة على استفساراتكم.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-[#16a34a] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl shadow-sm w-full sm:w-auto transition-colors">
                مراسلة عبر واتساب
              </a>
              <a href="mailto:jmal30997@gmail.com" className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-xl shadow-sm w-full sm:w-auto transition-colors">
                مراسلة عبر البريد
              </a>
            </div>
          </article>
        )}

        {/* 5. صفحة سياسة الخصوصية */}
        {currentPage === 'privacy' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">سياسة الخصوصية</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين بيانات السيرة الذاتية التي تدخلها في خوادمنا؛ بل تتم معالجتها وطباعتها مباشرة عبر متصفحك.</p>
            <p className="text-slate-700 leading-relaxed text-lg"><strong>ملفات تعريف الارتباط والإعلانات:</strong> نستعين بشركات إعلانية (مثل Google AdSense) لعرض الإعلانات. قد تستخدم هذه الشركات معلومات غير شخصية حول زياراتك لتقديم إعلانات تناسب اهتماماتك.</p>
          </article>
        )}

        {/* 6. صفحة شروط الاستخدام */}
        {currentPage === 'terms' && (
          <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-sm border border-slate-100 print:hidden">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">شروط الاستخدام</h1>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام. الأداة مقدمة مجاناً لمساعدتك في بناء سيرتك الذاتية.</p>
            <p className="text-slate-700 leading-relaxed text-lg">يُمنع نسخ المقالات أو المحتوى التعليمي الموجود في المدونة دون الإشارة للمصدر.</p>
          </article>
        )}
        
      </main>

      {/* 🟢 التذييل (Footer) */}
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

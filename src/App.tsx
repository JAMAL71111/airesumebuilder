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
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full space-y-12">
        
        {currentPage === 'home' && (
          <div className="space-y-12">
            
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">منصتك الأولى لإنشاء سيرة ذاتية تتخطى أنظمة الفرز الآلي (ATS). أدخل بياناتك وحملها كملف PDF فوراً.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 📝 قسم إدخال البيانات */}
              <section className="space-y-6 print:hidden">
                <article className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">البيانات الشخصية والمهنية</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد" className={inputClassName} />
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
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder="مثال: خريج ثانوية، معدل 78%" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المهارات</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="مثال: React، البرمجة، حل المشكلات" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <button onClick={handlePrintPDF} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all">
                  تحميل السيرة الذاتية (PDF)
                </button>
              </section>

              {/* 🖨️ قسم المعاينة والإخراج (بشكل جدول رسمي) */}
              <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 print:shadow-none print:border-none print:p-0 print:m-0 print:block">
                
                {/* رأس السيرة الذاتية */}
                <div className="text-center mb-6">
                  <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{fullName || 'الاسم الكامل'}</h1>
                  <h2 className="text-2xl font-bold text-slate-600">{jobTitle || 'المسمى الوظيفي'}</h2>
                </div>

                {/* الجدول الرسمي (Table) */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border-2 border-slate-800 print:border-slate-800 text-right text-slate-800" style={{ printColorAdjust: 'exact' }}>
                    <tbody>
                      
                      {/* صف معلومات التواصل */}
                      {(email || phone) && (
                        <tr className="border-b-2 border-slate-800 print:border-slate-800">
                          <th className="w-1/3 sm:w-1/4 p-4 bg-slate-100 print:bg-slate-100 border-l-2 border-slate-800 print:border-slate-800 text-blue-800 font-bold align-top text-lg">
                            معلومات التواصل
                          </th>
                          <td className="p-4 align-top leading-loose">
                            {email && <div><strong className="text-slate-900">البريد الإلكتروني:</strong> <span dir="ltr">{email}</span></div>}
                            {phone && <div><strong className="text-slate-900">رقم الهاتف:</strong> <span dir="ltr">{phone}</span></div>}
                          </td>
                        </tr>
                      )}

                      {/* صف الملخص المهني */}
                      {summary && (
                        <tr className="border-b-2 border-slate-800 print:border-slate-800">
                          <th className="w-1/3 sm:w-1/4 p-4 bg-slate-100 print:bg-slate-100 border-l-2 border-slate-800 print:border-slate-800 text-blue-800 font-bold align-top text-lg">
                            الملخص المهني
                          </th>
                          <td className="p-4 align-top whitespace-pre-line text-justify leading-relaxed">
                            {summary}
                          </td>
                        </tr>
                      )}

                      {/* صف الخبرات العملية */}
                      {experience && (
                        <tr className="border-b-2 border-slate-800 print:border-slate-800">
                          <th className="w-1/3 sm:w-1/4 p-4 bg-slate-100 print:bg-slate-100 border-l-2 border-slate-800 print:border-slate-800 text-blue-800 font-bold align-top text-lg">
                            الخبرات العملية
                          </th>
                          <td className="p-4 align-top whitespace-pre-line leading-relaxed">
                            {experience}
                          </td>
                        </tr>
                      )}

                      {/* صف التعليم */}
                      {education && (
                        <tr className="border-b-2 border-slate-800 print:border-slate-800">
                          <th className="w-1/3 sm:w-1/4 p-4 bg-slate-100 print:bg-slate-100 border-l-2 border-slate-800 print:border-slate-800 text-blue-800 font-bold align-top text-lg">
                            التعليم والمؤهلات
                          </th>
                          <td className="p-4 align-top whitespace-pre-line leading-relaxed">
                            {education}
                          </td>
                        </tr>
                      )}

                      {/* صف المهارات */}
                      {skills && (
                        <tr className="border-b-2 border-slate-800 print:border-slate-800">
                          <th className="w-1/3 sm:w-1/4 p-4 bg-slate-100 print:bg-slate-100 border-l-2 border-slate-800 print:border-slate-800 text-blue-800 font-bold align-top text-lg">
                            المهارات
                          </th>
                          <td className="p-4 align-top whitespace-pre-line leading-relaxed">
                            {skills}
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
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
                <span className="text-xs font-bold text-blue-700 mb-2 block">مميزات الأداة</span>
                <h3 className="text-lg font-bold text-slate-800 mb-2">تخطى أنظمة الفرز</h3>
                <p className="text-slate-600 text-sm">قالب مهيأ لاجتياز أنظمة الفرز الآلي (ATS) بنجاح.</p>
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


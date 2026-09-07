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
  };

  // دالة للعودة لقائمة المقالات
  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // دالة طباعة السيرة الذاتية (لتحميلها كـ PDF)
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    // إضافة flex و flex-col و justify-between لضمان بقاء التذييل (Footer) في أسفل الصفحة دائماً
    <div className="min-h-screen bg-gray-50 text-right font-sans flex flex-col justify-between" dir="rtl">
      
      {/* 🟢 شريط التنقل العلوي (متوافق مع عناكب البحث والأجهزة المحمولة) */}
      <header className="bg-white shadow-sm sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            {/* الشعار */}
            <div 
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
            >
              Fareestate
            </div>

            {/* أزرار التنقل الشاملة */}
            <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
              <button 
                onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
                className={`${currentPage === 'home' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }}
                className={`${currentPage === 'blog' && !selectedPost ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                المدونة والنصائح
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`${currentPage === 'about' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                من نحن
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`${currentPage === 'contact' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                اتصل بنا
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 🟢 محتوى الموقع */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        
        {/* 1. صفحة الرئيسية (تحتوي على أداة بناء السيرة الذاتية القيمة لأدسنس) */}
        {currentPage === 'home' && (
          <div className="space-y-10">
            <div className="text-center print:hidden">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">منصتك الأولى لإنشاء سيرة ذاتية تتخطى أنظمة الفرز الآلي (ATS). أدخل بياناتك وحملها كملف PDF فوراً.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* قسم إدخال البيانات */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 print:hidden">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">البيانات الشخصية والمهنية</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد الشمحاني" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المسمى الوظيفي</label>
                  <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="مثال: مهندس برمجيات" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jmal30997@gmail.com" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967776202648" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الملخص المهني</label>
                  <textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="اكتب نبذة عن طموحك وخبراتك..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الخبرات العملية</label>
                  <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="أين عملت وماذا أنجزت؟" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">التعليم</label>
                  <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="مثال: خريج ثانوية، معدل 78%" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المهارات</label>
                  <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="مثال: React, البرمجة، حل المشكلات" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
                </div>

                <button 
                  onClick={handlePrintPDF}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200 mt-4 shadow-md flex justify-center items-center gap-2"
                >
                  تحميل السيرة الذاتية (PDF)
                </button>
              </div>

              {/* قسم المعاينة (الذي سيتم طباعته) */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col print:shadow-none print:border-none print:p-0">
                <div className="text-center border-b-2 border-gray-100 pb-6 mb-6">
                  <h2 className="text-3xl font-extrabold text-gray-900">{fullName || 'الاسم الكامل'}</h2>
                  <p className="text-lg text-blue-600 font-medium mt-1">{jobTitle || 'المسمى الوظيفي'}</p>
                  <div className="flex justify-center gap-4 text-sm text-gray-500 mt-3">
                    <span>{email || 'البريد الإلكتروني'}</span>
                    <span>|</span>
                    <span>{phone || 'رقم الهاتف'}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {summary && (
                    <div>
                      <h3 className="text-base font-bold text-gray-800 border-b pb-2 mb-2">الملخص المهني</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{summary}</p>
                    </div>
                  )}
                  {experience && (
                    <div>
                      <h3 className="text-base font-bold text-gray-800 border-b pb-2 mb-2">الخبرات العملية</h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{experience}</p>
                    </div>
                  )}
                  {education && (
                    <div>
                      <h3 className="text-base font-bold text-gray-800 border-b pb-2 mb-2">التعليم والمؤهلات</h3>
                      <p className="text-gray-600 text-sm">{education}</p>
                    </div>
                  )}
                  {skills && (
                    <div>
                      <h3 className="text-base font-bold text-gray-800 border-b pb-2 mb-2">المهارات</h3>
                      <p className="text-gray-600 text-sm">{skills}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. صفحة المدونة */}
        {currentPage === 'blog' && (
          <div className="print:hidden">
            {!selectedPost ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">نصائح مهنية وأسرار التوظيف</h2>
                  <p className="mt-4 text-gray-600">دليلك الشامل لكتابة سيرة ذاتية احترافية واجتياز المقابلات الشخصية.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articlesData.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                      <div className="text-4xl mb-4">{post.icon}</div>
                      <span className="text-sm font-semibold text-blue-600 mb-2">{post.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <button onClick={() => handleReadMore(post)} className="text-blue-600 font-medium text-sm hover:text-blue-800">اقرأ المزيد ←</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
                <button onClick={handleBackToBlog} className="mb-8 text-blue-600 hover:text-blue-800 font-medium">→ العودة للمدونة</button>
                <div className="text-center mb-10">
                  <div className="text-6xl mb-6">{selectedPost.icon}</div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">{selectedPost.category}</span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
                  <time className="text-gray-400 text-sm">{selectedPost.date}</time>
                </div>
                <div className="prose prose-lg prose-blue mx-auto text-gray-700 leading-loose">
                  <p>{selectedPost.content}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. صفحة من نحن */}
        {currentPage === 'about' && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 print:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">من نحن</h1>
            <p className="text-gray-700 leading-relaxed mb-4">مرحباً بكم في منصة <strong>Fareestate</strong>، وجهتكم الأولى لإنشاء السير الذاتية الاحترافية وتطوير المسار المهني.</p>
            <p className="text-gray-700 leading-relaxed">نسعى جاهدين لمساعدة الباحثين عن عمل على إبراز مهاراتهم بأفضل صورة عبر أدوات ذكية ومقالات موثوقة تعزز فرص قبولهم في سوق العمل.</p>
          </div>
        )}

        {/* 4. صفحة اتصل بنا (بناءً على طلبك بالروابط المباشرة) */}
        {currentPage === 'contact' && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 text-center print:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
            <p className="text-gray-600 mb-8">يسعدنا تواصلكم معنا دائماً للإجابة على استفساراتكم.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://wa.me/967776202648" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition duration-200">
                مراسلة عبر واتساب
              </a>
              <a href="mailto:jmal30997@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition duration-200">
                مراسلة عبر البريد
              </a>
            </div>
          </div>
        )}

        {/* 5. صفحة سياسة الخصوصية (أساسية لأدسنس) */}
        {currentPage === 'privacy' && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 print:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">سياسة الخصوصية</h1>
            <p className="text-gray-700 leading-relaxed mb-4">نولي في Fareestate اهتماماً بالغاً بخصوصية زوارنا. لا نقوم بتخزين بيانات السيرة الذاتية التي تدخلها في خوادمنا؛ بل تتم معالجتها وطباعتها مباشرة عبر متصفحك.</p>
            <p className="text-gray-700 leading-relaxed"><strong>ملفات تعريف الارتباط والإعلانات:</strong> نستعين بشركات إعلانية (مثل Google AdSense) لعرض الإعلانات. قد تستخدم هذه الشركات معلومات غير شخصية حول زياراتك لتقديم إعلانات تناسب اهتماماتك.</p>
          </div>
        )}

        {/* 6. صفحة شروط الاستخدام (أساسية لأدسنس) */}
        {currentPage === 'terms' && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 print:hidden">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">شروط الاستخدام</h1>
            <p className="text-gray-700 leading-relaxed mb-4">باستخدامك لموقع Fareestate، فإنك توافق على الالتزام بالشروط والأحكام. الأداة مقدمة مجاناً لمساعدتك في بناء سيرتك الذاتية.</p>
            <p className="text-gray-700 leading-relaxed">يُمنع نسخ المقالات أو المحتوى التعليمي الموجود في المدونة دون الإشارة للمصدر.</p>
          </div>
        )}
        
      </main>

      {/* 🟢 التذييل (Footer) - مهم جداً لعناكب البحث ويوفر تنقلاً إضافياً */}
      <footer className="bg-white border-t border-gray-200 py-8 print:hidden mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Fareestate. جميع الحقوق محفوظة.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600 font-medium">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-blue-600">سياسة الخصوصية</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-blue-600">شروط الاستخدام</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-blue-600">من نحن</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-600">اتصل بنا</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

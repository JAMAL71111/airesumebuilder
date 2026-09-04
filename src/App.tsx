import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { Home, BookOpen, Shield, FileText, Phone, Info, Mail, MessageCircle, ArrowRight } from 'lucide-react';
// تم استيراد ملف المقالات الخارجي هنا
import { articlesData } from './articlesData';

// ==========================================
// مكونات الصفحات (Pages Components)
// ==========================================

// مكون لتغيير عنوان المتصفح تلقائياً (SEO)
const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} | Resumate by Fareestate`;
  }, [title]);
  return null;
};

// --- الصفحة الرئيسية ---
const HomePage = () => (
  <div className="text-center py-20 px-4">
    <PageTitle title="الرئيسية" />
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      مرحباً بك في <span className="text-blue-600">Resumate by Fareestate</span>
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
      الأداة الأفضل والأسطورة في عالم بناء السير الذاتية الاحترافية. ابدأ الآن وانطلق نحو مسيرتك المهنية بثقة!
    </p>
    <Link to="/blog" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
      تصفح مدونتنا
    </Link>
  </div>
);

// --- صفحة المدونة (قائمة المقالات) ---
const BlogPage = () => (
  <div className="py-12 px-4 max-w-6xl mx-auto">
    <PageTitle title="المدونة" />
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">المدونة والمقالات</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articlesData.map((article) => (
        <div key={article.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-400">{article.date}</span>
            <Link to={`/blog/${article.id}`} className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
              اقرأ المزيد <ArrowRight className="w-4 h-4 mr-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- صفحة المقال المنفرد (هنا سيعرض أدسنس إعلاناته بامتياز) ---
const SingleArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find(a => a.id === Number(id));

  if (!article) {
    return <div className="text-center py-20 text-2xl text-red-500">المقال غير موجود!</div>;
  }

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <PageTitle title={article.title} />
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <div className="text-gray-500 mb-8 border-b pb-4">تاريخ النشر: {article.date}</div>
        <div className="text-gray-700 leading-relaxed text-lg">
          {article.content}
        </div>
        <div className="mt-10 pt-6 border-t">
          <Link to="/blog" className="text-blue-600 font-semibold hover:underline">
            &rarr; العودة للمدونة
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- صفحة سياسة الخصوصية ---
const PrivacyPage = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto bg-white my-8 rounded-xl shadow-sm">
    <PageTitle title="سياسة الخصوصية" />
    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">سياسة الخصوصية</h2>
    <div className="space-y-4 text-gray-700">
      <p>في Resumate by Fareestate، تعتبر خصوصية زوارنا لها أهمية بالغة بالنسبة لنا...</p>
      <h3 className="text-xl font-bold mt-6">ملفات تعريف الارتباط (Cookies) و Google AdSense</h3>
      <p>نحن نستخدم إعلانات Google AdSense كمورد مالي. تستخدم Google ملفات تعريف الارتباط DART لعرض الإعلانات للمستخدمين بناءً على زيارتهم لموقعنا والمواقع الأخرى على الإنترنت.</p>
    </div>
  </div>
);

// --- صفحة شروط الاستخدام ---
const TermsPage = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto bg-white my-8 rounded-xl shadow-sm">
    <PageTitle title="شروط الاستخدام" />
    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">شروط الاستخدام</h2>
    <div className="space-y-4 text-gray-700">
      <p>باستخدامك لموقع Resumate by Fareestate، فإنك توافق على الالتزام بالشروط والأحكام التالية...</p>
    </div>
  </div>
);

// --- صفحة اتصل بنا (تم تحديثها ببريدك الإلكتروني ورقم الواتساب الخاص بك) ---
const ContactPage = () => (
  <div className="py-12 px-4 max-w-3xl mx-auto text-center">
    <PageTitle title="اتصل بنا" />
    <h2 className="text-3xl font-bold mb-8 text-gray-800">تواصل معنا</h2>
    <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
      <p className="text-gray-600 mb-6">نحن هنا للإجابة على استفساراتك. يمكنك التواصل معنا عبر الطرق التالية:</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* البريد الإلكتروني */}
        <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl flex-1 border border-blue-100">
          <Mail className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
          <a href="mailto:jmal30997@gmail.com" className="text-blue-600 hover:underline">
            jmal30997@gmail.com
          </a>
        </div>

        {/* الواتساب */}
        <div className="flex flex-col items-center p-6 bg-green-50 rounded-xl flex-1 border border-green-100">
          <MessageCircle className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="font-bold text-gray-800 mb-2">واتساب</h3>
          <a href="https://wa.me/967776202648" target="_blank" rel="noreferrer" className="text-green-600 hover:underline font-semibold" dir="ltr">
            +967 776 202 648
          </a>
          <span className="text-sm text-green-600 mt-2">اضغط هنا للمراسلة</span>
        </div>
      </div>
    </div>
  </div>
);

// --- صفحة من نحن ---
const AboutPage = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto bg-white my-8 rounded-xl shadow-sm text-center">
    <PageTitle title="من نحن" />
    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">من نحن</h2>
    <p className="text-gray-700 leading-relaxed">
      Resumate by Fareestate هي منصة متكاملة تهدف إلى مساعدة الشباب والمهنيين في بناء سير ذاتية احترافية تواكب متطلبات سوق العمل العالمي...
    </p>
  </div>
);

// ==========================================
// المكون الرئيسي (Main App Component)
// ==========================================
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-right" dir="rtl">
        
        {/* Header / Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-black text-blue-700 flex items-center">
              Resumate <span className="text-gray-500 text-sm mr-2 font-normal">by Fareestate</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-semibold flex items-center"><Home className="w-4 h-4 ml-1" /> الرئيسية</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-semibold flex items-center"><BookOpen className="w-4 h-4 ml-1" /> المدونة</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 font-semibold flex items-center"><Info className="w-4 h-4 ml-1" /> من نحن</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-semibold flex items-center"><Phone className="w-4 h-4 ml-1" /> اتصل بنا</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area (Routing) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleArticlePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <span className="text-xl font-bold">Resumate <span className="text-gray-400 text-sm">by Fareestate</span></span>
              <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex space-x-4 space-x-reverse text-sm">
              <Link to="/privacy" className="hover:text-blue-400 flex items-center"><Shield className="w-4 h-4 ml-1" /> سياسة الخصوصية</Link>
              <Link to="/terms" className="hover:text-blue-400 flex items-center"><FileText className="w-4 h-4 ml-1" /> شروط الاستخدام</Link>
            </div>
          </div>
        </footer>
        
      </div>
    </Router>
  );
}

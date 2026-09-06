import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// استدعاء الصفحات الموجودة في مجلد pages الخاص بك
import { AboutUs } from './pages/AboutUs';
import { Blog } from './pages/Blog';
import { ContactUs } from './pages/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

// ===================== دالة التمرير للأعلى =====================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ===================== المكون الرئيسي (App) =====================
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: "'Tajawal', system-ui, sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', direction: 'rtl' }}>
        
        <style>{`
          @media print {
            header, footer, .no-print { display: none !important; }
            body, main { background-color: #ffffff !important; padding: 0 !important; margin: 0 !important; }
            .resume-preview { border: none !important; box-shadow: none !important; width: 100% !important; padding: 0 !important; }
          }
          a { text-decoration: none; transition: color 0.3s ease; }
          a:hover { color: #38bdf8 !important; }
        `}</style>

        {/* الهيدر العلوي */}
        <header className="no-print" style={{ borderBottom: '1px solid #334155', padding: '15px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <Link to="/" style={{ margin: 0, fontSize: '22px', color: '#38bdf8', fontWeight: 'bold' }}>
            ✨ Resumate
          </Link>
          
          <nav style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#e2e8f0', fontWeight: 'bold' }}>الرئيسية</Link>
            <Link to="/blog" style={{ color: '#e2e8f0', fontWeight: 'bold' }}>المدونة</Link>
            <Link to="/about" style={{ color: '#e2e8f0', fontWeight: 'bold' }}>من نحن</Link>
            <Link to="/contact" style={{ color: '#e2e8f0', fontWeight: 'bold' }}>اتصل بنا</Link>
          </nav>
        </header>

        {/* المحتوى الرئيسي للروابط */}
        <main style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: 'calc(100vh - 160px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        
        {/* الفوتر */}
        <footer className="no-print" style={{ textAlign: 'center', padding: '25px', backgroundColor: '#1e293b', borderTop: '1px solid #334155', color: '#94a3b8', fontSize: '14px' }}>
          <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ color: '#38bdf8' }}>سياسة الخصوصية</Link> | 
            <Link to="/terms" style={{ color: '#38bdf8' }}>شروط الاستخدام</Link> | 
            <Link to="/about" style={{ color: '#38bdf8' }}>من نحن</Link> |
            <Link to="/contact" style={{ color: '#38bdf8' }}>اتصل بنا</Link>
          </div>
          <p>© 2026 Resumate by Fareestate. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </Router>
  );
}

// ===================== صفحة منشئ السيرة الذاتية (الرئيسية) =====================
function Home() {
  useEffect(() => { document.title = "Resumate - إنشاء سيرة ذاتية احترافية"; }, []);
  
  const [fullName, setFullName] = useState('جمال حميد');
  const [jobTitle, setJobTitle] = useState('مهندس برمجيات | Software Engineer');
  const [email, setEmail] = useState('Jmal30997@gmail.com');
  const [phone, setPhone] = useState('776202648');
  const [location, setLocation] = useState('صنعاء، اليمن');
  const [summary, setSummary] = useState('مهندس برمجيات طموح يمتلك مهارات قوية في تطوير تطبيقات الويب، بناء واجهات المستخدم وتطوير الأنظمة البرمجية الحديثة.');
  const [skills, setSkills] = useState('React, TypeScript, HTML5/CSS3, Git & GitHub');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
      {/* لوحة إدخال البيانات */}
      <div className="no-print" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155' }}>
        <h2 style={{ fontSize: '20px', color: '#38bdf8', marginBottom: '20px' }}>📝 بيانات السيرة الذاتية</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="الاسم الكامل" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
          <input type="text" placeholder="المسمى الوظيفي" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
          <input type="text" placeholder="العنوان" value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
          <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
          <input type="text" placeholder="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
          <textarea rows={4} placeholder="الملخص المهني" value={summary} onChange={(e) => setSummary(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px', resize: 'vertical' }} />
          <input type="text" placeholder="المهارات (افصل بينها بفاصلة)" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '15px' }} />
        </div>
        <button onClick={() => window.print()} style={{ marginTop: '25px', width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          🖨️ طباعة / استخراج PDF
        </button>
      </div>
      
      {/* المعاينة الحية */}
      <div className="resume-preview" style={{ backgroundColor: '#ffffff', color: '#1e293b', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 2.5fr', minHeight: '600px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
        <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '30px 20px' }}>
          <h3 style={{ color: '#38bdf8', fontSize: '14px', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>معلومات الاتصال</h3>
          <p style={{ fontSize: '12px', margin: '10px 0' }}>📍 {location}</p>
          <p style={{ fontSize: '12px', margin: '10px 0' }}>📞 {phone}</p>
          <p style={{ fontSize: '12px', margin: '10px 0', wordBreak: 'break-all' }}>📧 {email}</p>
          
          <h3 style={{ color: '#38bdf8', fontSize: '14px', borderBottom: '1px solid #334155', paddingBottom: '8px', marginTop: '30px' }}>المهارات الأساسية</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '15px' }}>
            {skills.split(',').map((s, i) => s.trim() && <span key={i} style={{ backgroundColor: '#1e293b', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', color: '#38bdf8', border: '1px solid #334155' }}>{s.trim()}</span>)}
          </div>
        </div>
        
        <div style={{ padding: '40px 30px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', color: '#0f172a' }}>{fullName}</h1>
          <p style={{ color: '#0284c7', fontSize: '16px', fontWeight: 'bold', margin: '8px 0 25px 0' }}>{jobTitle}</p>
          
          <h2 style={{ fontSize: '18px', color: '#0f172a', borderRight: '4px solid #0284c7', paddingRight: '12px', marginBottom: '15px' }}>الملخص المهني</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', textAlign: 'justify' }}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

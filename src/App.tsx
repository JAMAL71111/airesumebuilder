import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
// استدعاء ملف المقالات الخاص بك
import { articlesData } from './articlesData';

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
          a:hover { color: '#38bdf8' !important; }
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
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* الفوتر المطابق لسياسات أدسنس */}
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

// ===================== 1. صفحة الرئيسية (منشئ السيرة) =====================
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

// ===================== 2. صفحة المدونة (قائمة المقالات) =====================
function BlogList() {
  useEffect(() => { document.title = "مدونة Resumate - نصائح السيرة الذاتية"; }, []);
  
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const navigate = useNavigate();
  
  // استخراج الأقسام وتصحيح الأنواع البرمجية لـ TypeScript
  const categories: string[] = ['الكل', ...Array.from(new Set(articlesData.map(a => String(a.category))))];
  const filteredArticles = activeCategory === 'الكل' ? articlesData : articlesData.filter(a => String(a.category) === activeCategory);

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '32px', marginBottom: '15px' }}>📚 دليلك المهني الشامل</h1>
        <p style={{ color: '#94a3b8', fontSize: '16px' }}>تصفح {articlesData.length} مقالاً احترافياً لضمان تفوقك في سوق العمل</p>
      </div>
      
      {/* أزرار الفلترة للأقسام */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
        {categories.map((cat, index) => (
          <button key={index} onClick={() => setActiveCategory(cat)} style={{ backgroundColor: activeCategory === cat ? '#0284c7' : '#1e293b', color: '#fff', border: '1px solid #334155', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>
            {cat}
          </button>
        ))}
      </div>
      
      {/* شبكة المقالات */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
        {filteredArticles.map((art) => (
          <article key={art.id} onClick={() => navigate(`/blog/${art.id}`)} style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <div style={{ fontSize: '30px', marginBottom: '15px' }}>{art.icon}</div>
             <span style={{ backgroundColor: '#0f172a', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '12px' }}>{art.category}</span>
             <h3 style={{ color: '#f8fafc', fontSize: '18px', margin: '15px 0' }}>{art.title}</h3>
             <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>{art.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// ===================== 3. صفحة المقال المفرد =====================
function BlogPost() {
  // إضافة التعريف الصارم { id: string } لضمان قبول TypeScript
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 🔥 التعديل الأهم: إجبار النوعين على أن يكونا نصوصاً ليقبلها الفاحص الآلي
  const post = articlesData.find(p => String(p.id) === String(id));

  useEffect(() => {
    if (post) document.title = `${post.title} - Resumate`;
  }, [post]);

  if (!post) return <div style={{textAlign: 'center', padding: '50px', color: '#f8fafc'}}>المقال غير موجود.</div>;

  return (
    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/blog')} style={{ backgroundColor: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', marginBottom: '30px', fontSize: '14px' }}>
        &rarr; العودة للمدونة
      </button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <span style={{ fontSize: '40px' }}>{post.icon}</span>
        <span style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>{post.category}</span>
      </div>
      
      <h1 style={{ color: '#f8fafc', fontSize: '32px', marginBottom: '20px', lineHeight: '1.4' }}>{post.title}</h1>
      <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>نُشر في: {post.date}</div>
      
      <div style={{ lineHeight: '2', color: '#cbd5e1', fontSize: '17px', textAlign: 'justify' }}>
        {post.content}
      </div>
    </div>
  );
}

// ===================== صفحات جوجل أدسنس الإجبارية =====================

function About() {
  useEffect(() => { document.title = "من نحن - Resumate"; }, []);
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9' }}>
      <h1 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '15px', marginBottom: '25px' }}>من نحن (About Us)</h1>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>مرحباً بك في منصة <strong>Resumate by Fareestate</strong>، الوجهة الأولى للباحثين عن التميز المهني.</p>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>نحن منصة تقنية تهدف إلى تبسيط عملية بناء السير الذاتية ومساعدة الشباب والخريجين والمحترفين على تجاوز أنظمة الفرز الآلي (ATS) بسهولة. نؤمن بأن التصميم الجيد والمحتوى المنظم هما مفتاح الحصول على وظيفة الأحلام.</p>
    </div>
  );
}

function Privacy() {
  useEffect(() => { document.title = "سياسة الخصوصية - Resumate"; }, []);
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9' }}>
      <h1 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '15px', marginBottom: '25px' }}>سياسة الخصوصية (Privacy Policy)</h1>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>خصوصية زوارنا لها أهمية بالغة بالنسبة لنا في <strong>Resumate</strong>. توجز هذه الوثيقة أنواع المعلومات الشخصية التي نتلقاها ونجمعها وكيفية استخدامها.</p>
      
      <h3 style={{ color: '#f8fafc', marginTop: '25px' }}>معالجة البيانات محلياً (Client-side)</h3>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>نود التنويه إلى أن أداة بناء السيرة الذاتية الخاصة بنا تعمل بالكامل داخل متصفحك. نحن لا نقوم برفع، حفظ، أو تخزين أي بيانات شخصية (مثل الأسماء أو أرقام الهواتف) على خوادمنا.</p>

      <h3 style={{ color: '#f8fafc', marginTop: '25px' }}>ملفات تعريف الارتباط (Cookies) وجوجل أدسنس</h3>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>نحن، بصفتنا ناشرين، نستخدم خدمات إعلانية مثل Google AdSense. يستخدم جوجل ملفات تعريف الارتباط (DART cookies) لعرض الإعلانات بناءً على زيارات المستخدم لموقعنا والمواقع الأخرى. يمكنك اختيار تعطيل استخدام هذه الملفات بزيارة سياسة خصوصية شبكة إعلانات Google.</p>
    </div>
  );
}

function Terms() {
  useEffect(() => { document.title = "شروط الاستخدام - Resumate"; }, []);
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9' }}>
      <h1 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '15px', marginBottom: '25px' }}>اتفاقية وشروط الاستخدام</h1>
      <p style={{ color: '#cbd5e1', fontSize: '16px' }}>إن استخدامك لمنصة <strong>Resumate</strong> يعني موافقتك الكاملة على الشروط التالية:</p>
      <ul style={{ color: '#cbd5e1', fontSize: '16px', paddingRight: '20px' }}>
        <li style={{ marginBottom: '10px' }}>المنصة مقدمة للاستخدام المجاني لمساعدة المستخدمين على تنسيق سيرهم الذاتية.</li>
        <li style={{ marginBottom: '10px' }}>جميع المقالات والمحتوى المنشور في المدونة هو ملكية حصرية للمنصة ويمنع نسخه.</li>
        <li style={{ marginBottom: '10px' }}>المنصة غير مسؤولة عن صحة البيانات التي يدخلها المستخدم في سيرته الذاتية.</li>
      </ul>
    </div>
  );
}

function Contact() {
  useEffect(() => { document.title = "اتصل بنا - Resumate"; }, []);
  const whatsappNumber = "967776202648"; 
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '50px', borderRadius: '16px', border: '1px solid #334155', maxWidth: '600px', margin: '0 auto', textAlign: 'center', lineHeight: '1.9' }}>
      <h1 style={{ color: '#38bdf8', marginBottom: '20px' }}>اتصل بنا</h1>
      <p style={{ color: '#cbd5e1', marginBottom: '30px', fontSize: '16px' }}>إذا كان لديك أي استفسار، ملاحظة، أو تحتاج إلى مساعدة تقنية، فريقنا جاهز للتواصل معك وتلبية احتياجاتك في أسرع وقت.</p>
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" style={{ display: 'inline-block', backgroundColor: '#25D366', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold' }}>
        💬 تواصل معنا عبر واتساب
      </a>
      <p style={{ color: '#64748b', fontSize: '14px', marginTop: '25px' }}>أوقات العمل: من الأحد إلى الخميس (9 صباحاً - 5 مساءً)</p>
    </div>
  );
}


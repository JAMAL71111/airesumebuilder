import React, { useState } from 'react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const contactEmail = "Jmal30997@gmail.com";

  // البيانات
  const [fullName, setFullName] = useState('محمد عبد الله العريقي');
  const [jobTitle, setJobTitle] = useState('مهندس ميكانيك | Mechanical Project Engineer');
  const [email, setEmail] = useState('m.alariqi.mech@gmail.com');
  const [phone, setPhone] = useState('+967 772 888 999');
  const [location, setLocation] = useState('صنعاء، اليمن');
  const [summary, setSummary] = useState('مهندس ميكانيك محترف يمتلك خبرة عمل عملية تتجاوز 7 سنوات في تصميم وإدارة الإشراف الميداني للمشاريع الهندسية وأنظمة HVAC، أنظمة مكافحة الحريق، وشبكات الضخ الهيدروليكية في كل من اليمن والمملكة العربية السعودية. أتمتع بكفاءة عالية وحاصل على شهادة التوفل (TOEFL) في اللغة الإنجليزية.');
  const [skills, setSkills] = useState('AutoCAD 2D/3D, HVAC Systems, Firefighting Design, Piping & Plumbing, Project Management, TOEFL Certified, Site Supervision');

  return (
    <div style={{ fontFamily: "'Tajawal', sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', direction: 'rtl' }}>
      
      {/* تنسيق الطباعة */}
      <style>{`
        @media print {
          header, footer, .no-print { display: none !important; }
          body, main { background-color: #ffffff !important; padding: 0 !important; margin: 0 !important; }
          .resume-preview { border: none !important; box-shadow: none !important; width: 100% !important; padding: 0 !important; border-radius: 0 !important; }
        }
      `}</style>

      {/* Header */}
      <header className="no-print" style={{ borderBottom: '1px solid #334155', padding: '15px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setCurrentPage('home')}>
          ✨ منشئ السيرة الذاتية الاحترافي
        </h1>
        {currentPage !== 'home' && (
          <button onClick={() => setCurrentPage('home')} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>
            الرئيسية
          </button>
        )}
      </header>

      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {currentPage === 'home' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            
            {/* Input Form */}
            <div className="no-print" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155' }}>
              <h2 style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '20px' }}>📝 تعديل البيانات</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input placeholder="الاسم الكامل" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input placeholder="المسمى الوظيفي" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input placeholder="المدينة، الدولة" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input placeholder="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <textarea placeholder="الملخص المهني" rows={4} value={summary} onChange={(e) => setSummary(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input placeholder="المهارات (مفصولة بفاصلة)" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
              </div>

              <button onClick={() => window.print()} style={{ marginTop: '25px', width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                🖨️ تحميل السيرة الذاتية PDF
              </button>
            </div>

            {/* Preview Card */}
            <div className="resume-preview" style={{ backgroundColor: '#ffffff', color: '#1e293b', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', display: 'grid', gridTemplateColumns: '1fr 2.2fr', minHeight: '600px' }}>
              <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '30px 20px' }}>
                <h3 style={{ color: '#38bdf8', fontSize: '13px', textTransform: 'uppercase', marginBottom: '15px' }}>التواصل</h3>
                <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1' }}>
                  <p>📍 {location}</p>
                  <p>📞 {phone}</p>
                  <p>📧 {email}</p>
                </div>
                <h3 style={{ color: '#38bdf8', fontSize: '13px', textTransform: 'uppercase', marginTop: '30px', marginBottom: '15px' }}>المهارات</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.split(',').map((s, i) => <span key={i} style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', color: '#38bdf8' }}>{s.trim()}</span>)}
                </div>
              </div>
              <div style={{ padding: '35px' }}>
                <h1 style={{ margin: 0, fontSize: '26px', color: '#0f172a' }}>{fullName}</h1>
                <p style={{ color: '#0284c7', fontWeight: '600', marginBottom: '20px' }}>{jobTitle}</p>
                <h2 style={{ fontSize: '15px', color: '#0f172a', borderRight: '4px solid #0284c7', paddingRight: '10px' }}>الملخص المهني</h2>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7' }}>{summary}</p>
              </div>
            </div>
          </div>
        )}

        {/* Legal Pages */}
        {(currentPage !== 'home') && (
            <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px' }}>
                {currentPage === 'privacy' && <div><h2>سياسة الخصوصية</h2><p>نحن نحترم خصوصيتك...</p></div>}
                {currentPage === 'terms' && <div><h2>شروط الخدمة</h2><p>هذا الموقع للاستخدام المهني...</p></div>}
                {currentPage === 'about' && <div><h2>معلومات عنا</h2><p>منشئ سير ذاتية احترافي...</p></div>}
                {currentPage === 'contact' && <div><h2>اتصل بنا</h2><p>تواصل عبر: {contactEmail}</p></div>}
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontSize: '14px' }}>
        <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', color: '#38bdf8', margin: '0 10px', cursor: 'pointer' }}>معلومات عنا</button>
        <button onClick={() => setCurrentPage('privacy')} style={{ background: 'none', border: 'none', color: '#38bdf8', margin: '0 10px', cursor: 'pointer' }}>الخصوصية</button>
        <p>© 2026 برنامج إنشاء السيرة الذاتية.</p>
      </footer>
    </div>
  );
}

export default App;


import React, { useState } from 'react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');

  const contactEmail = "Jmal30997@gmail.com";

  // البيانات الافتراضية
  const [fullName, setFullName] = useState('أحمد عبد الله باحاج');
  const [jobTitle, setJobTitle] = useState('مهندس برمجيات | Full-Stack Developer');
  const [email, setEmail] = useState('ahmed.bahaj.dev@gmail.com');
  const [phone, setPhone] = useState('+967 771 234 567');
  const [location, setLocation] = useState('صنعاء، اليمن');
  const [summary, setSummary] = useState('مهندس برمجيات متخصص في بناء وتطوير تطبيقات الويب والأنظمة السحابية بخبرة تتجاوز 5 سنوات. أمتلك خبرة عميقة في تطوير الواجهات الأمامية والخلفية باستخدام تقنيات React وNode.js، بالإضافة إلى إدارة قواعد البيانات وتأمين الأنظمة.');
  const [skills, setSkills] = useState('React.js, TypeScript, Node.js, HTML5/CSS3, Tailwind CSS, Git/GitHub, RESTful APIs, MySQL, UI/UX Design');

  return (
    <div style={{ fontFamily: "'Tajawal', 'Segoe UI', Tahoma, sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', direction: 'rtl' }}>
      
      {/* قواعد الطباعة وإخفاء عناصر التحكم */}
      <style>{`
        @media print {
          header, footer, .no-print {
            display: none !important;
          }
          body, main {
            background-color: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .resume-preview {
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="no-print" style={{ borderBottom: '1px solid #334155', padding: '15px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setCurrentPage('home')}>
          ✨ منشئ السيرة الذاتية الاحترافي
        </h1>
        {currentPage !== 'home' && (
          <button onClick={() => setCurrentPage('home')} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>
            ← العودة للرئيسية
          </button>
        )}
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {currentPage === 'home' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '25px', alignItems: 'start' }}>
              
              {/* Form Inputs */}
              <div className="no-print" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)' }}>
                <h2 style={{ fontSize: '18px', color: '#38bdf8', marginTop: 0, borderBottom: '1px solid #334155', paddingBottom: '10px' }}>📝 تعديل بيانات السيرة الذاتية</h2>
                
                <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>الاسم الكامل:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>المسمى الوظيفي:</label>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>البريد الإلكتروني:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>رقم الهاتف:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>العنوان / المدينة:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>الملخص المهني:</label>
                <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={4} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box', resize: 'vertical' }} />

                <label style={{ display: 'block', margin: '12px 0 4px', fontSize: '13px', color: '#94a3b8' }}>المهارات (مفصولة بفاصلة):</label>
                <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <button onClick={() => window.print()} style={{ marginTop: '20px', width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  🖨️ تحميل السيرة الذاتية PDF
                </button>
              </div>

              {/* Elegant Two-Column Live Preview */}
              <div className="resume-preview" style={{ backgroundColor: '#ffffff', color: '#1e293b', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', display: 'grid', gridTemplateColumns: '1fr 2.2fr', minHeight: '600px' }}>
                
                {/* Sidebar (Dark Column) */}
                <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
                  {/* Contact Info */}
                  <div>
                    <h3 style={{ color: '#38bdf8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '8px', marginTop: 0 }}>التواصل</h3>
                    <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1', marginTop: '12px' }}>
                      <div style={{ wordBreak: 'break-all' }}>📍 {location}</div>
                      <div style={{ wordBreak: 'break-all' }}>📞 {phone}</div>
                      <div style={{ wordBreak: 'break-all' }}>📧 {email}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 style={{ color: '#38bdf8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>المهارات التقنية</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                      {skills.split(',').map((skill, idx) => (
                        <span key={idx} style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #334155', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '500' }}>
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Main Content Column */}
                <div style={{ padding: '35px 30px', backgroundColor: '#ffffff' }}>
                  
                  {/* Name & Title */}
                  <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', marginBottom: '25px' }}>
                    <h1 style={{ margin: 0, fontSize: '26px', color: '#0f172a', fontWeight: '800' }}>{fullName || 'اسمك الكامل'}</h1>
                    <p style={{ margin: '6px 0 0', color: '#0284c7', fontSize: '15px', fontWeight: '600' }}>{jobTitle || 'المسمى الوظيفي'}</p>
                  </div>

                  {/* Summary */}
                  <div style={{ marginBottom: '25px' }}>
                    <h2 style={{ fontSize: '15px', color: '#0f172a', borderRight: '4px solid #0284c7', paddingRight: '10px', margin: '0 0 12px 0', fontWeight: 'bold' }}>الملخص المهني</h2>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#475569', margin: 0, textAlign: 'justify' }}>{summary}</p>
                  </div>

                  {/* Experience Placeholder */}
                  <div>
                    <h2 style={{ fontSize: '15px', color: '#0f172a', borderRight: '4px solid #0284c7', paddingRight: '10px', margin: '0 0 12px 0', fontWeight: 'bold' }}>الخبرات والإنجازات</h2>
                    <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#64748b', margin: 0 }}>
                      • قيادة وتطوير حلول برمجة عالية الجودة وتصميم واجهات سلسة التجربة.<br />
                      • إدارة الموارد التقنية وتطبيق أحدث المعايير في بناء وتأمين المواقع.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Valuable Content Section for AdSense Approval */}
            <section className="no-print" style={{ marginTop: '50px', backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155', lineHeight: '1.8' }}>
              <h2 style={{ color: '#38bdf8', fontSize: '20px', marginTop: 0 }}>💡 دليل النصائح لكتابة سيرة ذاتية احترافية</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '18px', borderRadius: '10px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#38bdf8', fontSize: '15px', marginTop: 0 }}>1. التوافق مع أنظمة ATS</h3>
                  <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0 }}>استخدم مسميات وظيفية واضحة وكلمات مفتاحية متوافقة مع متطلبات الوظيفة لتجاوز أنظمة الفرز الآلي بسهولة.</p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '18px', borderRadius: '10px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#38bdf8', fontSize: '15px', marginTop: 0 }}>2. صياغة الملخص المهني</h3>
                  <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0 }}>اجعل الملخص المهني مكثفاً ومباشراً (3 إلى 4 أسطر) يبرز أهم خبراتك ومهاراتك التي تضيف قيمة للجهة التوظيفية.</p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '18px', borderRadius: '10px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#38bdf8', fontSize: '15px', marginTop: 0 }}>3. تنظيم المهارات والخبرات</h3>
                  <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0 }}>رتب مهاراتك بوضوح واستخدم أرقاماً ونتائج ملموسة عند الإمكان لإظهار حجم إنجازاتك الحقيقية.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* AdSense Legal Pages */}
        {currentPage === 'privacy' && (
          <div style={{ backgroundColor: '#1e293b', padding: '35px', borderRadius: '16px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>سياسة الخصوصية</h2>
            <p>نحن نولي أهمية قصوى لخصوصية زوارنا. توضح هذه الوثيقة أنواع المعلومات الشخصية التي يتم جمعها وكيفية استخدامها.</p>
            <h3>ملفات تعريف الارتباط (Cookies) وإعلانات Google AdSense:</h3>
            <p>يستخدم موقعنا ملفات تعريف الارتباط لتخزين المعلومات حول تفضيلات الزوار. تستخدم جهات خارجية، بما في ذلك Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زيارات المستخدم السابقة لموقعنا أو لمواقع أخرى على الإنترنت.</p>
          </div>
        )}

        {currentPage === 'terms' && (
          <div style={{ backgroundColor: '#1e293b', padding: '35px', borderRadius: '16px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>شروط الخدمة</h2>
            <p>مرحباً بك في موقع منشئ السيرة الذاتية. استخدامك لموقعنا يعني موافقتك على الشروط والأحكام التالية:</p>
            <ul style={{ paddingRight: '20px' }}>
              <li>الأداة مُقدمة للاستخدام الشخصي والمهني بشكل مجاني بالكامل.</li>
              <li>جميع البيانات المُدخلة يتم معالجتها وتأمينها داخل متصفحك مباشرة.</li>
            </ul>
          </div>
        )}

        {currentPage === 'about' && (
          <div style={{ backgroundColor: '#1e293b', padding: '35px', borderRadius: '16px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>معلومات عنا</h2>
            <p>منشئ السيرة الذاتية هو منصة رقمية مجانية تم تطويرها لمساعدة الباحثين عن عمل والمهنيين على إنشاء سير ذاتية احترافية ومتناسقة خلال دقائق معدودة.</p>
          </div>
        )}

        {currentPage === 'contact' && (
          <div style={{ backgroundColor: '#1e293b', padding: '35px', borderRadius: '16px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>اتصل بنا</h2>
            <p>يسعدنا دائماً الاستماع إلى آرائكم واستفساراتكم عبر البريد الإلكتروني المعتمد:</p>
            <div style={{ backgroundColor: '#0f172a', padding: '15px 20px', borderRadius: '8px', border: '1px solid #334155', display: 'inline-block', marginTop: '10px' }}>
              📧 <a href={`mailto:${contactEmail}`} style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>{contactEmail}</a>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="no-print" style={{ borderTop: '1px solid #334155', padding: '20px', backgroundColor: '#1e293b', marginTop: '40px', fontSize: '14px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>معلومات عنا</button>
          <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>اتصل بنا</button>
          <button onClick={() => setCurrentPage('privacy')} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>سياسة الخصوصية</button>
          <button onClick={() => setCurrentPage('terms')} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>شروط الخدمة</button>
        </div>
        <p style={{ color: '#94a3b8', margin: 0 }}>© 2026 برنامج إنشاء السيرة الذاتية. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
}

export default App;

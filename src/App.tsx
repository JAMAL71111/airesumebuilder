import React, { useState } from 'react';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');

  // البريد الإلكتروني الرسمي للتواصل
  const contactEmail = "Jmal30997@gmail.com";

  // Sample Resume Data
  const [fullName, setFullName] = useState('جمال محمد');
  const [jobTitle, setJobTitle] = useState('مطور ويب / Software Engineer');
  const [email, setEmail] = useState('jamal@example.com');
  const [phone, setPhone] = useState('+967 770 000 000');
  const [summary, setSummary] = useState('مطور شغوف ببناء تطبيقات الويب الحديثة، أمتلك خبرة في تقنيات React و JavaScript وإدارة المشاريع الرقمية.');
  const [skills, setSkills] = useState('React, TypeScript, HTML/CSS, Git, Tailwind CSS');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', direction: 'rtl' }}>
      
      {/* Header */}
      <header style={{ borderBottom: '1px solid #334155', padding: '15px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          📄 منشئ السيرة الذاتية بالذكاء الاصطناعي
        </h1>
        {currentPage !== 'home' && (
          <button onClick={() => setCurrentPage('home')} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>
            ← العودة للرئيسية
          </button>
        )}
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {currentPage === 'home' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              
              {/* Form Inputs */}
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h2 style={{ fontSize: '18px', color: '#38bdf8', marginTop: 0 }}>📝 تعبئة البيانات</h2>
                
                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>الاسم الكامل:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>المسمى الوظيفي:</label>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>البريد الإلكتروني:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>رقم الهاتف:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>الملخص المهني:</label>
                <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={3} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <label style={{ display: 'block', margin: '10px 0 5px', fontSize: '14px' }}>المهارات (مفصولة بفاصلة):</label>
                <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />

                <button onClick={() => window.print()} style={{ marginTop: '20px', width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  🖨️ طباعة / حفظ السيرة الذاتية PDF
                </button>
              </div>

              {/* Live Preview */}
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '30px', borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h1 style={{ margin: '0 0 5px', fontSize: '24px', color: '#0369a1' }}>{fullName || 'الاسم الكامل'}</h1>
                <p style={{ margin: '0 0 15px', color: '#64748b', fontWeight: 'bold' }}>{jobTitle || 'المسمى الوظيفي'}</p>
                
                <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px', fontSize: '13px', color: '#475569', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <span>📧 {email}</span>
                  <span>📞 {phone}</span>
                </div>

                <h3 style={{ borderBottom: '1px solid #0284c7', color: '#0284c7', paddingBottom: '5px', fontSize: '16px' }}>📌 نبذة عني</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{summary}</p>

                <h3 style={{ borderBottom: '1px solid #0284c7', color: '#0284c7', paddingBottom: '5px', fontSize: '16px', marginTop: '20px' }}>🛠️ المهارات</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {skills.split(',').map((skill, index) => (
                    <span key={index} style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Valuable Content Section for AdSense Approval */}
            <section style={{ marginTop: '40px', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155', lineHeight: '1.8' }}>
              <h2 style={{ color: '#38bdf8', fontSize: '20px', marginTop: 0 }}>💡 دليل ونصائح كتابة السيرة الذاتية الاحترافية</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#0284c7', fontSize: '16px', marginTop: 0 }}>1. التوافق مع أنظمة ATS</h3>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>استخدم مسميات وظيفية واضحة وكلمات مفتاحية متوافقة مع متطلبات الوظيفة حتى تتجاوز أنظمة الفرز الآلي للشركات بسهولة.</p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#0284c7', fontSize: '16px', marginTop: 0 }}>2. صياغة الملخص المهني</h3>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>اجعل الملخص المهني مكثفاً ومباشراً (3 إلى 4 أسطر) يبرز أهم خبراتك ومهاراتك التي تضيف قيمة مباشرة للجهة التوظيفية.</p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#0284c7', fontSize: '16px', marginTop: 0 }}>3. تنظيم المهارات والخبرات</h3>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>رتب مهاراتك التقنية والشخصية بوضوح واستخدم أرقاماً ونتائج ملموسة عند الإمكان لإظهار حجم إنجازاتك الحقيقية.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Pages Optimized for Google AdSense */}
        {currentPage === 'privacy' && (
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>سياسة الخصوصية</h2>
            <p>نحن نولي أهمية قصوى لخصوصية زوارنا. توضح هذه الوثيقة أنواع المعلومات الشخصية التي يتم جمعها وكيفية استخدامها.</p>
            <h3>ملفات تعريف الارتباط (Cookies) وإعلانات Google AdSense:</h3>
            <p>يستخدم موقعنا ملفات تعريف الارتباط لتخزين المعلومات حول تفضيلات الزوار. تستخدم جهات خارجية، بما في ذلك Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زيارات المستخدم السابقة لموقعنا أو لم مواقع أخرى على الإنترنت.</p>
            <p>يمكن للمستخدمين إلغاء استخدام ملفات تعريف الارتباط للإعلانات المخصصة عن طريق زيارة إعدادات الإعلانات في Google.</p>
          </div>
        )}

        {currentPage === 'terms' && (
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>شروط الخدمة</h2>
            <p>مرحباً بك في موقع منشئ السيرة الذاتية. استخدامك لموقعنا يعني موافقتك على الشروط والأحكام التالية:</p>
            <ul style={{ paddingRight: '20px' }}>
              <li>الأداة مُقدمة للاستخدام الشخصي والمهني بشكل مجاني بالكامل.</li>
              <li>جميع البيانات المُدخلة يتم معالجتها وتأمينها داخل متصفحك مباشرة.</li>
              <li>يُحظر استخدام الأداة لإنشاء سير ذاتية تحتوي على معلومات مضللة أو غير قانونية.</li>
            </ul>
          </div>
        )}

        {currentPage === 'about' && (
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>معلومات عنا</h2>
            <p>منشئ السيرة الذاتية هو منصة رقمية مجانية تم تطويرها لمساعدة الباحثين عن عمل والمهنيين على إنشاء سير ذاتية احترافية ومتناسقة خلال دقائق معدودة.</p>
            <p>هدفنا هو تسهيل عملية التقديم على الوظائف وتزويد المستخدمين بأدوات معاينة واستخراج سريعة ومجانية تماماً بدون الحاجة لتسجيل أو دفع أي رسوم.</p>
          </div>
        )}

        {currentPage === 'contact' && (
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8' }}>اتصل بنا</h2>
            <p>يسعدنا دائماً الاستماع إلى آرائكم واستفساراتكم حول المنصة.</p>
            <p>يمكنكم التواصل معنا مباشرة عبر البريد الإلكتروني المعتمد:</p>
            <div style={{ backgroundColor: '#0f172a', padding: '15px 20px', borderRadius: '8px', border: '1px solid #334155', display: 'inline-block', marginTop: '10px' }}>
              📧 <a href={`mailto:${contactEmail}`} style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>{contactEmail}</a>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #334155', padding: '20px', backgroundColor: '#1e293b', marginTop: '40px', fontSize: '14px', textAlign: 'center' }}>
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

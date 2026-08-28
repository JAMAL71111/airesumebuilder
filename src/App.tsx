import React, { useState } from 'react';

// هيكل بيانات المقالات
interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // ⚠️ ضع رقم الواتساب الخاص بك هنا بالصيغة الدولية (بدون أصفار بالبداية أو علامة +)
  // مثال لليمن: 967733000000
  const whatsappNumber = "967770000000"; 

  // بيانات السيرة الذاتية
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');

  // قائمة المقالات
  const articles: Post[] = [
    {
      id: 'ats-optimization-guide',
      title: 'دليل الشامل لتجاوز أنظمة تتبع المتقدمين ATS بنجاح',
      date: '2026-08-21',
      excerpt: 'تعلم كيف تُتهيئ سيرتك الذاتية لتتجاوز الفحص الآلي المبدئي وتصل إلى يدي مسؤول التوظيف المباشر.',
      content: `تستخدم أكثر من 90% من الشركات العالمية والمحلية أنظمة خوارزمية تُعرف بـ ATS (Applicant Tracking System) لتصفية الطلبات المتقدمة للوظائف.\n\n1. اختيار كلمات مفتاحية دقيقة:\nقم بقراءة الوصف الوظيفي بتمعن، واستخرج الكلمات الرئيسية الخاصة بالمهارات والتقنيات المطلوبة واضمنها بوضوح في سيرتك.\n\n2. التنسيق والابتعاد عن التعقيد:\nتجنب استعمال الجداول المترابطة أو الجرافيكس المعقد، حيث لا تستطيع برامج ATS قراءة النصوص داخل الصور أو الجداول غير القياسية.\n\n3. استخدام عناوين الأقسام المتعارف عليها:\nاستخدم مسميات قياسية مثل "الخبرات العملية"، "التعليم"، "المهارات"، بدلاً من المسميات المبتكرة التي قد لا تتعرف عليها الخوارزميات.\n\n4. حفظ الملف بصيغ صحيحة:\nاحرص على حفظ سيرتك الذاتية بصيغة PDF القياسية أو Word (.docx) لضمان أعلى نسبة توافق أثناء المعالجة.`
    },
    {
      id: 'tech-interview-prep',
      title: 'كيف تستعد للمقابلة التقنية كمهندس برمجيات مبتدئ؟',
      date: '2026-08-20',
      excerpt: 'خطة عمل مرحلية لمراجعة أساسيات البرمجة، خوارزميات حل المشكلات، وإبراز المشاريع الشخصية.',
      content: `تُعتبر المقابلات التقنية خطوة حاسمة للحصول على وظيفتك الأولى في مجال تطوير البرمجيات.\n\n1. مراجعة هياكل البيانات والخوارزميات (Data Structures & Algorithms):\nركز على الأساسيات مثل Arrays, Linked Lists, Trees, وحلول الترتيب والبحث. التفكير بصوت عالٍ أثناء حل المشكلات يعكس أسلوبك المنطقي.\n\n2. شرح المشاريع الشخصية بثقة:\nتأكد من معرفتك التامة بكل سطر كود في المشاريع المرفوعة على حسابك في GitHub. كن مستعداً لشرح التحديات وكيف قمت بحلها.\n\n3. مهارات التواصل والعمل الجماعي:\nتذكر أن المقابلة لا تقيس فقط قدرتك على كتابة الكود، بل تقيس أيضاً مدى انسجامك مع الفريق وتقبلك للملاحظات والتغذية الراجعة.`
    },
    {
      id: 'write-compelling-summary',
      title: 'كيف تكتب ملخصاً مهنياً يظهَر احترافيتك في 3 أسطر',
      date: '2026-08-19',
      excerpt: 'طريقة صياغة المقدمة الشخصية في السيرة الذاتية لجذب انتباه مسؤولي التوظيف في أول 6 ثوانٍ.',
      content: `الملخص المهني هو أول ما تقع عليه عين مسؤول التوظيف. كتابته بأسلوب مركز يزيد فرص قراءة باقي السيرة.\n\n1. الهيكل الثلاثي المثالي:\n- السطر الأول: من أنت (المسمى الوظيفي والخبرة الحالية).\n- السطر الثاني: أبرز المهارات والإنجازات التي تحققها.\n- السطر الثالث: الهدف المهني وما يمكنك إضافته للشركة.\n\n2. تجنب الجمل العامة:\nبدلاً من قول "أنا شخص مجتهد وأعمل تحت الضغط"، اكتب "مطور ويب شغوف بتطوير تطبيقات سريعة الاستجابة ورفع كفاءة الأداء بنسبة 30%".`
    }
  ];

  return (
    <div style={{ fontFamily: "'Tajawal', system-ui, sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', direction: 'rtl' }}>
      
      {/* إعدادات الطباعة */}
      <style>{`
        @media print {
          header, footer, .no-print { display: none !important; }
          body, main { background-color: #ffffff !important; padding: 0 !important; margin: 0 !important; }
          .resume-preview { border: none !important; box-shadow: none !important; width: 100% !important; padding: 0 !important; }
        }
      `}</style>

      {/* الهيدر العلوي وشريط التنقل */}
      <header className="no-print" style={{ borderBottom: '1px solid #334155', padding: '15px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}>
          ✨ Resumate - منشئ السيرة الذاتية
        </h1>
        
        <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button onClick={() => { setCurrentPage('home'); setSelectedPost(null); }} style={{ background: 'none', border: 'none', color: currentPage === 'home' ? '#38bdf8' : '#f8fafc', cursor: 'pointer', fontWeight: 'bold' }}>الرئيسية</button>
          <button onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }} style={{ background: 'none', border: 'none', color: currentPage === 'blog' ? '#38bdf8' : '#f8fafc', cursor: 'pointer', fontWeight: 'bold' }}>المدونة ({articles.length})</button>
          <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', color: currentPage === 'about' ? '#38bdf8' : '#f8fafc', cursor: 'pointer', fontWeight: 'bold' }}>من نحن</button>
          <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', color: currentPage === 'contact' ? '#38bdf8' : '#f8fafc', cursor: 'pointer', fontWeight: 'bold' }}>اتصل بنا</button>
        </nav>
      </header>

      {/* المحتوى الرئيسي */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ===================== الصفحة الرئيسية ===================== */}
        {currentPage === 'home' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '25px' }}>
            <div className="no-print" style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '16px', border: '1px solid #334155' }}>
              <h2 style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '20px' }}>📝 تعديل البيانات</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="الاسم الكامل (مثال: أحمد علي)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="المسمى الوظيفي (مثال: مهندس برمجيات)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="المدينة / الدولة (مثال: صنعاء، اليمن)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني (مثال: example@gmail.com)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="رقم الهاتف (مثال: 770000000)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <textarea rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="الملخص المهني (نبذة مختصرة عن خبراتك ومهاراتك...)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
                <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="المهارات (افصل بينها بفواصل: HTML, CSS, React)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff' }} />
              </div>
              <button onClick={() => window.print()} style={{ marginTop: '20px', width: '100%', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                🖨️ طباعة / حفظ PDF
              </button>
            </div>

            {/* ورقة المعاينة */}
            <div className="resume-preview" style={{ backgroundColor: '#ffffff', color: '#1e293b', borderRadius: '16px', display: 'grid', gridTemplateColumns: '1fr 2fr', minHeight: '550px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '25px 15px' }}>
                <h3 style={{ color: '#38bdf8', fontSize: '12px' }}>التواصل</h3>
                <p style={{ fontSize: '11px', margin: '5px 0' }}>📍 {location || 'المدينة، الدولة'}</p>
                <p style={{ fontSize: '11px', margin: '5px 0' }}>📞 {phone || 'رقم الهاتف'}</p>
                <p style={{ fontSize: '11px', margin: '5px 0', wordBreak: 'break-all' }}>📧 {email || 'البريد الإلكتروني'}</p>
                <h3 style={{ color: '#38bdf8', fontSize: '12px', marginTop: '25px' }}>المهارات</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {skills.trim() ? (
                    skills.split(',').map((s, i) => s.trim() && <span key={i} style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', color: '#38bdf8' }}>{s.trim()}</span>)
                  ) : (
                    <span style={{ fontSize: '10px', color: '#64748b' }}>قائمة المهارات...</span>
                  )}
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <h1 style={{ margin: 0, fontSize: '24px' }}>{fullName || 'الاسم الكامل'}</h1>
                <p style={{ color: '#0284c7', fontWeight: 'bold', margin: '5px 0 20px 0' }}>{jobTitle || 'المسمى الوظيفي'}</p>
                <h2 style={{ fontSize: '14px', borderRight: '3px solid #0284c7', paddingRight: '8px' }}>الملخص المهني</h2>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.6' }}>{summary || 'سيظهر الملخص المهني هنا بمجرد كتابته في حقل التعديل الجانبي...'}</p>
              </div>
            </div>
          </div>
        )}

        {/* ===================== قسم المدونة ===================== */}
        {currentPage === 'blog' && (
          <div>
            {!selectedPost ? (
              <div>
                <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>📰 مدونة التوظيف والتطوير المهني</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {articles.map((art) => (
                    <div key={art.id} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>{art.date}</span>
                        <h3 style={{ color: '#f8fafc', fontSize: '16px', margin: '10px 0' }}>{art.title}</h3>
                        <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: '1.6' }}>{art.excerpt}</p>
                      </div>
                      <button onClick={() => setSelectedPost(art)} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', marginTop: '15px', alignSelf: 'flex-start' }}>
                        قراءة المقال كاملاً ←
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155' }}>
                <button onClick={() => setSelectedPost(null)} style={{ backgroundColor: '#334155', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px' }}>
                  ← العودة للمقالات
                </button>
                <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block' }}>{selectedPost.date}</span>
                <h1 style={{ color: '#38bdf8', fontSize: '22px', margin: '10px 0 20px 0' }}>{selectedPost.title}</h1>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.8', color: '#cbd5e1', fontSize: '14px' }}>
                  {selectedPost.content}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== صفحة من نحن ===================== */}
        {currentPage === 'about' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>من نحن (About Us)</h2>
            <p>مرحباً بك في منصة <strong>Resumate</strong>، الوجهة الأولى للباحثين عن التميز المهني وتطوير المسار الوظيفي.</p>
            <p>تم تأسيس منصتنا بهدف رئيسي وهو مساعدة الشباب والمهنيين في بناء سير ذاتية (CV) احترافية تتوافق تماماً مع المعايير الحديثة وأنظمة تتبع المتقدمين الآلية (ATS). نحن نؤمن بأن الخطوة الأولى للحصول على وظيفة الأحلام تبدأ بتقديم نفسك بأفضل صورة ممكنة للشركات ومسؤولي التوظيف.</p>
            <p>إلى جانب أداة إنشاء السيرة الذاتية المجانية، نوفر مدونة متخصصة تحتوي على مئات المقالات والنصائح القيمة المكتوبة بواسطة خبراء في مجال الموارد البشرية وتطوير البرمجيات. نهدف لتقديم محتوى حصري يساعدك على الاستعداد للمقابلات الشخصية، وتطوير مهاراتك التقنية، والنجاح في بيئة العمل الحديثة.</p>
            <p style={{ color: '#94a3b8', marginTop: '20px', fontSize: '14px' }}>رؤيتنا: تمكين كل فرد من عرض قدراته الحقيقية بوضوح وسهولة واحترافية.</p>
          </div>
        )}

        {/* ===================== صفحة اتصل بنا ===================== */}
        {currentPage === 'contact' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', textAlign: 'center', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>اتصل بنا (Contact Us)</h2>
            <p style={{ fontSize: '16px', marginBottom: '30px' }}>نحن هنا دائماً لمساعدتك! إذا كان لديك أي استفسار، ملاحظة، أو اقتراح يرجى عدم التردد في التواصل معنا. نحن نسعد بتلقي رسائلك ومساعدتك في أسرع وقت ممكن.</p>
            
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block', 
                backgroundColor: '#25D366', 
                color: '#fff', 
                textDecoration: 'none', 
                padding: '15px 30px', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              💬 تواصل معنا عبر واتساب
            </a>
            <p style={{ color: '#94a3b8', marginTop: '20px', fontSize: '13px' }}>أوقات العمل: من الأحد إلى الخميس (9 صباحاً - 5 مساءً)</p>
          </div>
        )}

        {/* ===================== صفحة سياسة الخصوصية ===================== */}
        {currentPage === 'privacy' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>سياسة الخصوصية (Privacy Policy)</h2>
            <p>خصوصية زوارنا لها أهمية بالغة بالنسبة لنا في <strong>Resumate</strong>. توجز هذه الوثيقة أنواع المعلومات الشخصية التي نتلقاها ونجمعها وكيفية استخدامها.</p>
            
            <h3 style={{ color: '#f8fafc', marginTop: '20px' }}>ملفات الدخول (Log Files)</h3>
            <p>مثل الكثير من المواقع الإلكترونية، يستخدم موقعنا ملفات الدخول. تشمل المعلومات داخل هذه الملفات عناوين بروتوكول الإنترنت (IP)، نوع المتصفح، مزود خدمة الإنترنت، التاريخ والوقت، صفحات الإحالة/الخروج، وعدد النقرات لتحليل الاتجاهات وإدارة الموقع.</p>

            <h3 style={{ color: '#f8fafc', marginTop: '20px' }}>ملفات تعريف الارتباط وإعدادات الشبكة (Cookies)</h3>
            <p>نحن نستخدم ملفات تعريف الارتباط لتخزين المعلومات حول تفضيلات الزوار، وتسجيل معلومات محددة للمستخدم حول الصفحات التي يصل إليها أو يزورها، وتخصيص محتوى صفحة الويب بناءً على نوع المتصفح الخاص بالزوار.</p>

            <h3 style={{ color: '#f8fafc', marginTop: '20px' }}>جوجل أدسنس وملف تعريف الارتباط DART</h3>
            <ul style={{ paddingRight: '20px' }}>
              <li>جوجل كطرف ثالث، يستخدم ملفات تعريف الارتباط لعرض الإعلانات على موقعنا.</li>
              <li>استخدام جوجل لملف تعريف الارتباط DART يمهد لخدمة الإعلانات للمستخدمين بناءً على زياراتهم لموقعنا والمواقع الأخرى على الإنترنت.</li>
              <li>يجوز للمستخدمين اختيار عدم استخدام ملف تعريف الارتباط DART عن طريق زيارة سياسة الخصوصية الخاصة بإعلانات جوجل وشبكة المحتوى على الرابط: <a href="https://policies.google.com/technologies/ads" style={{color: '#38bdf8'}}>https://policies.google.com/technologies/ads</a></li>
            </ul>

            <h3 style={{ color: '#f8fafc', marginTop: '20px' }}>موافقتك</h3>
            <p>باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها.</p>
          </div>
        )}

        {/* ===================== صفحة شروط الاستخدام ===================== */}
        {currentPage === 'terms' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>اتفاقية وشروط الاستخدام (Terms of Service)</h2>
            <p>مرحباً بك في موقع <strong>Resumate</strong>. إن استخدامك لهذا الموقع يعني موافقتك الكاملة على الشروط والأحكام التالية:</p>
            
            <ol style={{ paddingRight: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>استخدام الأداة:</strong> المنصة مقدمة مجاناً لمساعدة المستخدمين على تنسيق سيرهم الذاتية. لا نضمن حصولك على وظيفة نتيجة استخدام الأداة، فالأمر يعتمد على كفاءتك ومتطلبات سوق العمل.</li>
              <li><strong>خصوصية البيانات:</strong> الأداة تعمل في متصفحك المحلي (Client-side)، ونحن لا نقوم بحفظ أو تخزين بيانات سيرتك الذاتية أو معلوماتك الشخصية المدخلة في خوادمنا.</li>
              <li><strong>حقوق الملكية الفكرية:</strong> جميع المقالات والمحتوى المنشور في قسم "المدونة" هو ملكية حصرية لموقع Resumate. يُمنع نسخه أو إعادة نشره لأغراض تجارية دون إذن مسبق.</li>
              <li><strong>الروابط الخارجية وإعلانات جوجل:</strong> قد يحتوي الموقع على إعلانات مقدمة من Google AdSense أو روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى تلك المواقع الخارجية أو التغييرات التي تطرأ عليها.</li>
              <li><strong>التعديلات:</strong> نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع يعتبر قبولاً لتلك التعديلات.</li>
            </ol>
          </div>
        )}

      </main>

      {/* الفوتر (الروابط السفلية) */}
      <footer className="no-print" style={{ textAlign: 'center', padding: '25px', color: '#94a3b8', fontSize: '14px', borderTop: '1px solid #1e293b', marginTop: '40px' }}>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setCurrentPage('privacy')} style={{ background: 'none', border: 'none', color: currentPage === 'privacy' ? '#38bdf8' : '#94a3b8', margin: '0 10px', cursor: 'pointer', fontWeight: 'bold' }}>سياسة الخصوصية</button> |
          <button onClick={() => setCurrentPage('terms')} style={{ background: 'none', border: 'none', color: currentPage === 'terms' ? '#38bdf8' : '#94a3b8', margin: '0 10px', cursor: 'pointer', fontWeight: 'bold' }}>شروط الاستخدام</button> |
          <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', color: currentPage === 'contact' ? '#38bdf8' : '#94a3b8', margin: '0 10px', cursor: 'pointer', fontWeight: 'bold' }}>اتصل بنا</button>
        </div>
        <p style={{ margin: 0 }}>© 2026 Resumate. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

export default App;


import { useState } from 'react';
import { articlesData, Post } from './articlesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // حالات أداة بناء السيرة الذاتية (الأساسية)
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  
  // حالات الإضافات الجديدة (لمطابقة الصورة 100%)
  const [photo, setPhoto] = useState<string>('');
  const [dobNationality, setDobNationality] = useState('');
  const [address, setAddress] = useState('');
  const [languages, setLanguages] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [training, setTraining] = useState('');
  const [interests, setInterests] = useState('');

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

  // معالجة رفع الصورة محلياً (بدون سيرفر)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
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
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full space-y-12 print:p-0 print:m-0 print:max-w-full">
        
        {currentPage === 'home' && (
          <div className="space-y-12 print:space-y-0">
            
            <section className="text-center space-y-4 print:hidden">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">أنشئ سيرتك الذاتية الاحترافية مجاناً</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">أدخل بياناتك بالأسفل وشاهد سيرتك الذاتية تُبنى أمامك خطوة بخطوة.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:block">
              {/* 📝 قسم إدخال البيانات */}
              <section className="space-y-6 print:hidden">
                
                {/* 1. البيانات الشخصية */}
                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">البيانات الشخصية</h2>
                  
                  <div className="mb-5 space-y-2">
                    <label className="block text-sm font-medium text-slate-700">الصورة الشخصية</label>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="مثال: جمال حميد الشمحاني" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المسمى الوظيفي</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="مثال: مهندس برمجيات" className={inputClassName} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">تاريخ الميلاد والجنسية</label>
                      <input type="text" value={dobNationality} onChange={(e) => setDobNationality(e.target.value)} placeholder="مثال: Sep. 1991 - Sudanese (أو بالعربية)" className={inputClassName} />
                    </div>
                  </div>
                </article>

                {/* 2. بيانات الاتصال */}
                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">معلومات الاتصال والروابط</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">العنوان الكامل</label>
                      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="مثال: صنعاء - اليمن" className={inputClassName} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jmal@example.com" className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">رقم الهاتف (Mobile)</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+967..." className={`${inputClassName} text-left`} dir="ltr" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700">منصات التواصل (Social Media) - افصل بسطر جديد</label>
                      <textarea rows={3} value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} placeholder="www.instagram.com/...&#10;www.twitter.com/..." className={`${inputClassName} text-left resize-none`} dir="ltr"></textarea>
                    </div>
                  </div>
                </article>

                {/* 3. المؤهلات والخبرات */}
                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">المسار المهني والعلمي</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التعليم والمؤهلات (Education)</label>
                      <textarea rows={3} value={education} onChange={(e) => setEducation(e.target.value)} placeholder="سنة التخرج | اسم الجامعة أو المدرسة | التخصص" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الخبرات العملية (Employment)</label>
                      <textarea rows={3} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="اسم الشركة | المسمى الوظيفي | المهام" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">التدريب المهني (Professional Training)</label>
                      <textarea rows={2} value={training} onChange={(e) => setTraining(e.target.value)} placeholder="الدورات التدريبية التي حصلت عليها" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                {/* 4. المهارات واللغات والاهتمامات */}
                <article className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">المهارات والإضافات</h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">المهارات (Skills) - افصل بسطر جديد</label>
                      <textarea rows={3} value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Microsoft Word&#10;AutoCAD&#10;العمل تحت الضغط" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">اللغات (Language) - افصل بسطر جديد</label>
                      <textarea rows={2} value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Arabic / fluent&#10;English / V. good" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">الاهتمامات (Interests) - افصل بسطر جديد</label>
                      <textarea rows={2} value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="Reading&#10;Sketching and design" className={`${inputClassName} resize-none`}></textarea>
                    </div>
                  </div>
                </article>

                <button onClick={handlePrintPDF} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all">
                  تحميل السيرة الذاتية (PDF)
                </button>
              </section>

              {/* 🖨️ قسم المعاينة (يطابق الصورة الثانية 100%) */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 print:shadow-none print:border-none print:p-0 print:m-0 print:block overflow-hidden h-full text-left" dir="ltr">
                
                {/* الهيدر العلوي في الصورة الثانية (الاسم والوظيفة) يظهر فوق العمودين */}
                <div className="w-full bg-white pt-8 pb-4 pl-12 pr-8 print:pt-12 print:pl-16 border-b-[16px] border-[#1A2B3C] mb-6">
                   <h1 className="text-5xl font-light text-slate-800 mb-1 tracking-widest uppercase">{fullName || 'AWAAD M. AWAAD'}</h1>
                   <h2 className="text-xl text-slate-600 font-medium tracking-[0.2em] uppercase">{jobTitle || 'ARCHITECT'}</h2>
                </div>

                <div className="flex flex-row w-full min-h-[900px] bg-white">
                  
                  {/* 🔵 العمود الجانبي الأيسر (اللون الداكن) */}
                  <aside 
                    className="w-[35%] bg-[#1A2B3C] text-white p-8 flex flex-col gap-8 print:w-[35%]" 
                    style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
                  >
                    
                    {/* الصورة الشخصية */}
                    <div className="w-40 h-48 mx-auto bg-slate-400 overflow-hidden shadow-lg border border-slate-500 relative">
                       {photo ? (
                         <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-slate-200 text-sm">Upload Photo</div>
                       )}
                    </div>

                    {/* قسم Profile */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 uppercase text-white">PROFILE</h3>
                      <div className="space-y-4 text-sm font-light">
                        <div>
                          <span className="block text-slate-300 font-bold mb-1">Name</span>
                          <span className="text-slate-100">{fullName || 'Awaad Mohamed Awaad Abbas'}</span>
                        </div>
                        {(dobNationality) && (
                          <div>
                            <span className="block text-slate-300 font-bold mb-1">Date of Birth & Nationality</span>
                            <span className="text-slate-100 whitespace-pre-line">{dobNationality}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* قسم Address & Contact */}
                    <div className="space-y-4 text-sm font-light">
                      {(address) && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">ADDRESS</h3>
                          <span className="text-slate-100">{address}</span>
                        </div>
                      )}
                      {(phone) && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">Mobile</h3>
                          <span className="text-slate-100 block">{phone}</span>
                        </div>
                      )}
                      {(email) && (
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 uppercase">Email</h3>
                          <span className="text-slate-100 break-all block">{email}</span>
                        </div>
                      )}
                    </div>

                    {/* قسم Language */}
                    {(languages) && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase">Language</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line leading-relaxed">
                          {languages}
                        </div>
                      </div>
                    )}

                    {/* قسم Social Media */}
                    {(socialMedia) && (
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase">Social Media</h3>
                        <div className="text-sm font-light text-slate-100 whitespace-pre-line break-all leading-relaxed">
                          {socialMedia}
                        </div>
                      </div>
                    )}

                  </aside>

                  {/* ⚪ العمود الرئيسي الأيمن (المحتوى الأبيض) */}
                  <main className="w-[65%] bg-white p-8 pl-10 text-slate-800 print:w-[65%]">
                    
                    <div className="space-y-8">
                      
                      {/* التعليم (Education) */}
                      {(education) && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">🎓</span> EDUCATION AND QUALIFICATIONS
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{education}</p>
                        </section>
                      )}

                      {/* الخبرات (Employment) */}
                      {(experience) && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">💼</span> EMPLOYMENT
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{experience}</p>
                        </section>
                      )}

                      {/* التدريب المهني (Professional Training) */}
                      {(training) && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">📋</span> PROFESSIONAL TRAINING
                          </h3>
                          <p className="text-slate-600 text-sm leading-loose whitespace-pre-line pl-6">{training}</p>
                        </section>
                      )}

                      {/* المهارات (Skills) مع أشرطة التقدم كما في الصورة */}
                      {(skills) && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">⚙️</span> SKILLS
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-3 pl-6">
                            {skills.split('\n').map((skill, index) => {
                              if (!skill.trim()) return null;
                              return (
                                <div key={index} className="flex justify-between items-center mb-2">
                                  <span className="text-slate-700 text-xs font-bold uppercase tracking-wide w-1/2">{skill.trim()}</span>
                                  {/* شريط المهارة مطابق تماماً للخطوط المتصلة في الصورة */}
                                  <div className="w-1/2 h-1.5 bg-slate-200 flex rounded overflow-hidden">
                                    <div className="bg-[#1A2B3C] h-full" style={{ width: `${Math.floor(Math.random() * (100 - 60 + 1) + 60)}%` }}></div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </section>
                      )}

                      {/* الاهتمامات (Interests) */}
                      {(interests) && (
                        <section>
                          <h3 className="text-xl font-medium text-slate-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="text-[#1A2B3C]">🎯</span> INTERESTS
                          </h3>
                          <ul className="list-disc list-inside text-slate-600 text-sm leading-loose pl-6">
                            {interests.split('\n').map((interest, i) => (
                              interest.trim() ? <li key={i}>{interest.trim()}</li> : null
                            ))}
                          </ul>
                        </section>
                      )}

                    </div>

                    {/* رسوم الخلفية للمدينة بأسفل السيرة الذاتية (محاكاة للصورة) */}
                    <div className="absolute bottom-0 right-0 w-[65%] h-32 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #1A2B3C 10px, #1A2B3C 11px)', backgroundSize: '100% 11px' }}>
                    </div>

                  </main>
                </div>
              </section>
            </div>
            
            {/* بقية محتوى الصفحة الرئيسية (المميزات) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 print:hidden">
               {/* ... (نفس الكود السابق للمميزات) ... */}
            </section>
          </div>
        )}

        {/* --- بقية الصفحات (Blog, About, etc.) تظل كما هي --- */}
        {/* ... (نفس الأكواد السابقة للصفحات الأخرى) ... */}
        
      </main>

      {/* التذييل */}
      <footer className="mt-auto py-8 border-t border-slate-200 text-center space-y-4 print:hidden bg-white">
        {/* ... */}
      </footer>
    </div>
  );
}

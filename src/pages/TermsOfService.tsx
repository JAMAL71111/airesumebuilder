import React from 'react';

export function TermsOfService() {
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>شروط الاستخدام</h2>
      <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px' }}>
        <p>باستخدامك لمنصة Resumate، فإنك توافق بالكامل على الشروط والأحكام التالية:</p>
        <ul style={{ paddingRight: '20px', marginTop: '15px' }}>
          <li>**طبيعة الخدمة:** الخدمة مقدمة "كما هي" لمساعدتك في تنسيق سيرتك الذاتية، دون أي ضمانات مؤكدة بالحصول على وظيفة.</li>
          <li>**المسؤولية:** أنت المسؤول الوحيد عن دقة وصحة البيانات والمعلومات التي تقوم بإدخالها وتصديرها في سيرتك الذاتية.</li>
          <li>**الاستخدام العادل:** يُمنع استخدام المنصة لأي أغراض غير قانونية أو لإنشاء محتوى مسيء أو مضلل.</li>
        </ul>
      </div>
    </div>
  );
}

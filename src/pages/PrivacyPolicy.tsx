import React from 'react';

export function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>سياسة الخصوصية</h2>
      <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px' }}>
        <p>نحن في Resumate نولي اهتماماً كبيراً بخصوصية زوارنا. توضح سياسة الخصوصية هذه أنواع المعلومات التي نتلقاها ونجمعها وكيفية استخدامها.</p>
        
        <h3 style={{ color: '#f8fafc', marginTop: '20px', fontSize: '18px' }}>أمان البيانات الشخصية</h3>
        <p>لا نقوم بجمع أو حفظ أو تخزين بيانات سيرتك الذاتية على خوادمنا. تتم معالجة جميع النصوص والمعلومات التي تدخلها محلياً داخل متصفحك لضمان أقصى درجات الخصوصية والأمان.</p>
        
        <h3 style={{ color: '#f8fafc', marginTop: '20px', fontSize: '18px' }}>ملفات تعريف الارتباط (Cookies) وجوجل أدسنس</h3>
        <p>قد يستخدم موقعنا إعلانات Google AdSense كطرف ثالث. تستخدم Google ملفات تعريف الارتباط (مثل ملفات تعريف ارتباط DART) لعرض إعلانات مخصصة للمستخدمين بناءً على زياراتهم لموقعنا والمواقع الأخرى على الإنترنت. يمكن للمستخدمين اختيار تعطيل استخدام ملفات تعريف ارتباط DART بزيارة سياسة خصوصية إعلانات Google.</p>
      </div>
    </div>
  );
}

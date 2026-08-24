import React from 'react';

export function ContactUs() {
  return (
    <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155' }}>
      <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>اتصل بنا</h2>
      <p style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '20px', fontSize: '15px' }}>
        نحن هنا لمساعدتك والاستماع إلى ملاحظاتك! إذا كان لديك أي استفسارات أو اقتراحات لتطوير المنصة، لا تتردد في التواصل معنا:
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px', paddingRight: '20px' }}>
        <li>**البريد الإلكتروني:** support@resumate.com</li>
        <li>**رقم الهاتف:** 776202648</li>
        <li>**العنوان:** صنعاء، اليمن</li>
      </ul>
    </div>
  );
}

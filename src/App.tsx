import React, { useState } from 'react';
// استدعاء واجهة البيانات والمقالات من الملف الخارجي
import { articlesData, Post } from './articlesData';

export function App() {
  // حالة التنقل بين صفحات الموقع
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  
  // حالة التحكم في فتح مقال معين لقراءته
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // دالة لفتح المقال
  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    setCurrentPage('blog');
  };

  // دالة للعودة لقائمة المقالات
  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-right font-sans" dir="rtl">
      
      {/* 🟢 شريط التنقل العلوي (Header) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* الشعار */}
            <div 
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
            >
              Fareestate
            </div>

            {/* أزرار التنقل */}
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              <button 
                onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
                className={`${currentPage === 'home' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => { setCurrentPage('blog'); setSelectedPost(null); }}
                className={`${currentPage === 'blog' && !selectedPost ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'}`}
              >
                المدونة والنصائح
              </button>
              {/* يمكنك إضافة أزرار (من نحن، تواصل معنا) هنا */}
            </nav>
          </div>
        </div>
      </header>

      {/* 🟢 محتوى الموقع */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* صفحة الرئيسية */}
        {currentPage === 'home' && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">مرحباً بك في Fareestate</h1>
            <p className="text-lg text-gray-600 mb-8">منصتك الأولى لإنشاء سيرة ذاتية احترافية تتخطى أنظمة الفرز الآلي.</p>
            {/* ⚠️ ضع هنا كود أداة بناء السيرة الذاتية (النماذج والإدخال) الخاص بك ⚠️ */}
          </div>
        )}

        {/* صفحة المدونة */}
        {currentPage === 'blog' && (
          <div>
            {!selectedPost ? (
              // 1. عرض شبكة المقالات
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">نصائح مهنية وأسرار التوظيف</h2>
                  <p className="mt-4 text-gray-600">دليلك الشامل لكتابة سيرة ذاتية احترافية واجتياز المقابلات الشخصية.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articlesData.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                      <div className="text-4xl mb-4">{post.icon}</div>
                      <span className="text-sm font-semibold text-blue-600 mb-2">{post.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <button 
                          onClick={() => handleReadMore(post)}
                          className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center gap-1"
                        >
                          اقرأ المزيد ←
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // 2. عرض المقال المفتوح (تفاصيل المقال)
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
                <button 
                  onClick={handleBackToBlog}
                  className="mb-8 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors"
                >
                  → العودة للمدونة
                </button>
                
                <div className="text-center mb-10">
                  <div className="text-6xl mb-6">{selectedPost.icon}</div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>
                  <time className="text-gray-400 text-sm">{selectedPost.date}</time>
                </div>

                <div className="prose prose-lg prose-blue mx-auto text-gray-700 leading-loose">
                  <p>{selectedPost.content}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* صفحات أخرى يمكن إضافتها لاحقاً */}
        {currentPage === 'privacy' && <div>صفحة سياسة الخصوصية</div>}
        {currentPage === 'terms' && <div>صفحة شروط الاستخدام</div>}
        
      </main>
    </div>
  );
}


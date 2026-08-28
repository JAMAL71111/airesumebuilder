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
  const whatsappNumber = "967776202648"; 

  // بيانات السيرة الذاتية
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');

  // قائمة المقالات الـ 20 كاملة
  const articles: Post[] = [
    {
      id: 'ats-optimization-guide',
      title: 'دليل الشامل لتجاوز أنظمة تتبع المتقدمين ATS بنجاح',
      date: '2026-08-21',
      excerpt: 'تعلم كيف تُتهيئ سيرتك الذاتية لتتجاوز الفحص الآلي المبدئي وتصل إلى يدي مسؤول التوظيف المباشر.',
      content: `تستخدم أكثر من 90% من الشركات العالمية والمحلية أنظمة خوارزمية تُعرف بـ ATS (Applicant Tracking System) لتصفية الطلبات المتقدمة للوظائف.

1. اختيار كلمات مفتاحية دقيقة:
قم بقراءة الوصف الوظيفي بتمعن، واستخرج الكلمات الرئيسية الخاصة بالمهارات والتقنيات المطلوبة واضمنها بوضوح في سيرتك.

2. التنسيق والابتعاد عن التعقيد:
تجنب استعمال الجداول المترابطة أو الجرافيكس المعقد، حيث لا تستطيع برامج ATS قراءة النصوص داخل الصور أو الجداول غير القياسية.

3. استخدام عناوين الأقسام المتعارف عليها:
استخدم مسميات قياسية مثل "الخبرات العملية"، "التعليم"، "المهارات"، بدلاً من المسميات المبتكرة التي قد لا تتعرف عليها الخوارزميات.

4. حفظ الملف بصيغ صحيحة:
احرص على حفظ سيرتك الذاتية بصيغة PDF القياسية أو Word (.docx) لضمان أعلى نسبة توافق أثناء المعالجة.`
    },
    {
      id: 'tech-interview-prep',
      title: 'كيف تستعد للمقابلة التقنية كمهندس برمجيات مبتدئ؟',
      date: '2026-08-20',
      excerpt: 'خطة عمل مرحلية لمراجعة أساسيات البرمجة، خوارزميات حل المشكلات، وإبراز المشاريع الشخصية.',
      content: `تُعتبر المقابلات التقنية خطوة حاسمة للحصول على وظيفتك الأولى في مجال تطوير البرمجيات.

1. مراجعة هياكل البيانات والخوارزميات (Data Structures & Algorithms):
ركز على الأساسيات مثل Arrays, Linked Lists, Trees, وحلول الترتيب والبحث. التفكير بصوت عالٍ أثناء حل المشكلات يعكس أسلوبك المنطقي.

2. شرح المشاريع الشخصية بثقة:
تأكد من معرفتك التامة بكل سطر كود في المشاريع المرفوعة على حسابك في GitHub. كن مستعداً لشرح التحديات وكيف قمت بحلها.

3. مهارات التواصل والعمل الجماعي:
تذكر أن المقابلة لا تقيس فقط قدرتك على كتابة الكود، بل تقيس أيضاً مدى انسجامك مع الفريق وتقبلك للملاحظات والتغذية الراجعة.`
    },
    {
      id: 'write-compelling-summary',
      title: 'كيف تكتب ملخصاً مهنياً يظهَر احترافيتك في 3 أسطر',
      date: '2026-08-19',
      excerpt: 'طريقة صياغة المقدمة الشخصية في السيرة الذاتية لجذب انتباه مسؤولي التوظيف في أول 6 ثوانٍ.',
      content: `الملخص المهني هو أول ما تقع عليه عين مسؤول التوظيف. كتابته بأسلوب مركز يزيد فرص قراءة باقي السيرة.

1. الهيكل الثلاثي المثالي:
- السطر الأول: من أنت (المسمى الوظيفي والخبرة الحالية).
- السطر الثاني: أبرز المهارات والإنجازات التي تحققها.
- السطر الثالث: الهدف المهني وما يمكنك إضافته للشركة.

2. تجنب الجمل العامة:
بدلاً من قول "أنا شخص مجتهد وأعمل تحت الضغط"، اكتب "مطور ويب شغوف بتطوير تطبيقات سريعة الاستجابة ورفع كفاءة الأداء بنسبة 30%".`
    },
    {
      id: 'action-verbs-in-cv',
      title: 'أهم الأفعال القوية (Action Verbs) لتعزيز خبراتك المكتوبة',
      date: '2026-08-18',
      excerpt: 'استبدل الأفعال التقليدية بأفعال إنجاز ديناميكية تبرز دورك الفعلي في المشاريع والوظائف السابقة.',
      content: `طريقة صياغة المهام السابقة تصنع فارقاً كبيراً في تقييم مستوى مسؤوليتك.

1. أفعال القيادة والتطوير:
استخدم أفعالاً مثل: (صممت، طورت، أطلقت، أدرت، ابتكرت) بدلاً من (كنت مسؤولاً عن).

2. أفعال التحسين والحلول:
مثل: (حسّنت، حللت، قللت، عالجت، أنجزت).

3. ربط الأفعال بنتائج ملموسة:
مثال: "طوّرت واجهة المستخدم مما أدّى إلى تقليل زمن تحميل الصفحة بنسبة 40%".`
    },
    {
      id: 'linkedin-profile-optimization',
      title: 'خطوات تحسين حسابك على لينكد إن لإنشاء فرص عمل مستمرة',
      date: '2026-08-17',
      excerpt: 'استراتيجيات تحويل حسابك في LinkedIn إلى مغناطيس لجلب العروض من مسؤولي التوظيف.',
      content: `LinkedIn ليس مجرد منصة للتواصل، بل هو محرك بحث عن الكفاءات يستخدمه مسؤولو التوظيف يومياً.

1. العنوان الرئيسي (Headline):
لا تكتفِ بوضع "طالب" أو "باحث عن عمل". اكتب المسمى الوظيفي المستهدف والتقنيات الأساسية التي تجيدها.

2. قسم (About):
اكتب قصتك المهنية بأسلوب مشوق، وأبرز أهم الشغف والتقنيات والروابط لمشاريعك المباشرة.

3. التفاعل والمشاركة:
انشر تحديثات دورية عن المشاريع التي تبنيها والمهارات التي تتعلمها، فهذا يزيد من معدل ظهور حسابك.`
    },
    {
      id: 'top-soft-skills-2026',
      title: 'المهارات الشخصية (Soft Skills) الأكثر طلباً في سوق العمل الحديث',
      date: '2026-08-16',
      excerpt: 'لماذا تبحث الشركات عن مهارات التواصل والتفكير النقدي بجانب المهارات التقنية؟',
      content: `المهارات التقنية تضمن لك المقابلة، ولكن المهارات الشخصية هي التي تضمن لك الاستمرار والنمو الوظيفي.

1. التفكير النقدي وحل المشكلات:
القدرة على تحليل المعطيات والوصول إلى حلول منطقية ومبتكرة بدون انتظار توجيهات تفصيلية.

2. التواصل الفعال:
شرح المفاهيم المعقدة بأسلوب بسيط سواء للمفهومين تقنياً أو غير التقنيين.

3. المرونة والتكيف:
سوق التقنية يتغير بسرعة، والقدرة على تعلم أدوات جديدة والتأقلم مع المتغيرات تمثل ميزة تنافسية كبرى.`
    },
    {
      id: 'portfolio-building-tips',
      title: 'كيف تبني معرض أعمال (Portfolio) يبهر مسؤولي التوظيف؟',
      date: '2026-08-15',
      excerpt: 'نصائح لاختيار المشاريع المناسبة وعرضها بطريقة تفاعلية تثبت جودة قدراتك العملية.',
      content: `معرض الأعمال ينقل مهاراتك من مجرد كلام على ورق إلى دليل ملموس ومرئي.

1. الكيف وليس الكم:
عرض 3 مشاريع جيدة ومكتملة بأسلوب محترف أفضل بكثير من عرض 10 مشاريع غير مكتملة أو بسيطة جداً.

2. توثيق المشروع (README):
في كل مشروع على GitHub، اكتب ملف توثيق يشرح هدف المشروع، التقنيات المستخدمة، وكيفية تشغيله.

3. إتاحة رابط حقيقي (Live Demo):
وفر رابطاً مباشراً يمكنك النقر عليه لتجربة المشروع فوراً دون الحاجة لتنزيل الكود.`
    },
    {
      id: 'common-cv-mistakes',
      title: '10 أخطاء قاتلة تجنبها تماماً أثناء إعداد سيرتك الذاتية',
      date: '2026-08-14',
      excerpt: 'تعديل أخطاء صغيرة قد يكون الفارق بين استبعاد ملفك أو دعوتك للمقابلة الشخصية.',
      content: `تأكد من خلو سيرتك الذاتية من الأخطاء التالية لضمان الانطباع الأول المتميز:

1. الأخطاء الإملائية والنحوية.
2. استخدام بريد إلكتروني غير احترافي.
3. تضمين معلومات شخصية غير ضرورية مثل الديانة أو الحالة الاجتماعية.
4. الإطالة الزائدة (اكتفِ بصفحة واحدة إلى صفحتين كحد أقصى).
5. وضع أشرطة تقييم مئوية للمهارات (مثل: 80% في JS) لأنها تقييم غير موضوعي.`
    },
    {
      id: 'freelancing-vs-fulltime',
      title: 'العمل الحر (Freelancing) أم الوظيفة الثابتة: أيهما أنسب لبدايتك؟',
      date: '2026-08-13',
      excerpt: 'مقارنة شاملة بين مزايا وعيوب العمل المستقل والوظائف الدائمة لمساعدتك على اتخاذ القرار الصحيح.',
      content: `لكل مسار مهني مميزاته وتحدياته الخاصة التي تعتمد على ظروفك وأهدافك الشخصية.

العمل الحر:
- المزايا: مرونة الوقت، اختيار المشاريع، والعمل من أي مكان.
- التحديات: عدم استقرار الدخل وضرورة إدارة التراخيص والتسويق لنفسك.

الوظيفة الثابتة:
- المزايا: دخل شهري مستقر، بيئة عمل جماعية، وتأمين صحي وتطوير مستمر.
- التحديات: الالتزام بساعات عمل ثابتة وهيكل إداري محدد.`
    },
    {
      id: 'github-best-practices',
      title: 'كيف تجعل حسابك على GitHub يبدو كحساب مهندس محترف؟',
      date: '2026-08-12',
      excerpt: 'ترتيب المستودعات، كتابة Commits واضحة، وتنظيم ملف Profile README الشخصي.',
      content: `حساب GitHub هو بمثابة السيرة الذاتية الحقيقية لكل مطور برمجيات.

1. تخصيص Profile README:
قم بإنشاء مستودع باسم حسابك واستخدم Markdown لكتابة نبذة عنك والتقنيات التي تستخدمها.

2. رسائل Commit واضحة:
اكتب رسائل تعبيرية توضح التعديل الذي قمت به (مثل: Fix authentication bug) وتجنب الرسائل المبهمة.

3. الاستمرارية (Green Wall):
المواظبة على رفع التحديثات والمشاركة في المشاريع تظهر مدى التزامك وشغفك بالبرمجة.`
    },
    {
      id: 'remote-work-readiness',
      title: 'كيف تجهز نفسك للعمل عن بُعد مع شركات عالمية؟',
      date: '2026-08-11',
      excerpt: 'أهم الأدوات والمهارات المطلوبة للنجاح في بيئات العمل الرقمية غير المباشرة.',
      content: `العمل عن بعد يتطلب انضباطاً ذاتياً واستخداماً محترفاً لأدوات التواصل الحديثة.

1. إدارة الوقت والانضباط الذاتي:
القدرة على تنظيم ساعات العمل والالتزام بالمواعيد النهائية بدون رقابة مباشرة.

2. إتقان أدوات التواصل الرقمي:
مثل Slack, Zoom, Trello, Jira, و Notion لمتابعة المهام والتوثيق.

3. التواصل غير المتزامن (Async Communication):
كتابة رسائل واضحة ومفصلة تقلل من الحاجة للاجتماعات المستمرة وتضمن سير العمل بشكل سلس.`
    },
    {
      id: 'salary-negotiation-guide',
      title: 'فن تفاوض الرواتب: كيف تحصل على العرض المالي الذي تستحقه؟',
      date: '2026-08-10',
      excerpt: 'نصائح عملية للبحث عن متوسط الأجور وطرح توقعاتك المالية بأسلوب احترافي ومقنع.',
      content: `التفاوض على الراتب خطوة طبيعية ومهمة في مسار التوظيف ولا يجب الخوف منها.

1. البحث المسبق:
ابحث عن متوسط الرواتب للمسمى الوظيفي ونفس مستوى الخبرة في منطقتك الجغرافية عبر مواقع مثل Glassdoor.

2. التمهل قبل القبول المباشر:
عند تلقي العرض، اشكر مسؤول التوظيف واطلب مهلة قصيرة لدراسة التفاصيل المالية والميزات.

3. التركيز على القيمة المضافة:
اربط طلبك المالي بالمهارات النادرة والإنجازات التي ستضيفها للفريق.`
    },
    {
      id: 'cover-letter-importance',
      title: 'هل خطاب التغطية (Cover Letter) ما زال مهماً في عام 2026؟',
      date: '2026-08-09',
      excerpt: 'متى يجب إرفاق خطاب تغطية وكيف تكتب خطابات مخصصة لكل وظيفة بذكاء.',
      content: `على الرغم من عدم طلب خطابات التغطية في كل الوظائف، إلا أنها تشكل ورقة رابحة عند استخدامها بذكاء.

1. متى يكون ضرورياً؟
عندما تريد تغيير مسارك المهني، أو تفسير انقطاع زمني في سيرتك، أو عند التقديم على شركات منافسة جداً.

2. الابتعاد عن النماذج الجاهزة:
اجعل الخطاب موجّهاً للشركة وشرحاً لسبب اهتمامك برؤيتها وكيف تتوافق مهاراتك مع احتياجاتهم.`
    },
    {
      id: 'continuous-learning-tech',
      title: 'استراتيجيات التعلم الذاتي والتطور المستمر للمبرمجين',
      date: '2026-08-08',
      excerpt: 'كيف تتابع أحدث التطورات التقنية وتتعلم مكتبات وأطر عمل جديدة بدون تشتت.',
      content: `التطور التكنولوجي السريع يستوجب بناء عادة التعلم المستمر.

1. التركيز على الأساسيات قبل الأطر (Frameworks):
الفهم العميق لأساسيات اللغة يسهل عليك تعلم أي مكتبة جديدة خلال أيام معدودة.

2. أسلوب التعلم بالتطبيق (Project-based learning):
لا تكتفِ بمشاهدة الدورات التدريبية. ابدأ في بناء مشروع عملي فور فهم الأفكار الرئيسية.

3. متابعة المجتمعات البرمجية:
اشترك في نشرات تقنية وتابع المنصات مثل Dev.to و Stack Overflow للبقاء على اطلاع.`
    },
    {
      id: 'building-personal-brand',
      title: 'بناء العلامة التجارية الشخصية (Personal Branding) للمهندسين',
      date: '2026-08-07',
      excerpt: 'كيف تبرز في مجالك وتجعل اسمك مرادفاً للخبرة والجودة في التخصص.',
      content: `العلامة التجارية الشخصية تعني الانطباع الذي يتركه اسمك في مجال عملك.

1. كتابة المقالات والمحتوى التقني:
شارك الشروحات والحلول التي توصلت إليها أثناء عملك عبر مدونتك الشخصية أو منصات كتابة المقالات.

2. تقديم المساعدة في المجتمعات:
أجب على أسئلة المبتدئين وشارك في حل المشكلات على منصات مثل النقاشات التفاعلية.

3. التواجد الرقمي المنتظم:
حافظ على هوية بصرية ومعلومات موحدة عبر حساباتك في مختلف المنصات المهنية.`
    },
    {
      id: 'changing-careers-to-tech',
      title: 'دليل التحول المهني (Career Change) إلى مجال البرمجة بنجاح',
      date: '2026-08-06',
      excerpt: 'كيف تستفيد من خبراتك السابقة عند الانتقال إلى مجال تكنولوجيا المعلومات.',
      content: `الانتقال إلى مجال البرمجة من تخصص آخر هو خطوة ممتازة وممكنة جداً بالخطة الصحيحة.

1. الاستفادة من المهارات القابلة للنقل (Transferable Skills):
خبراتك السابقة في إدارة المشروعات أو المبيعات أو التواصل تعتبر قيمة مضافة ممتازة بجانب المهارة البرمجية.

2. التركيز على مسار واضح:
اختر مساراً محدداً في البداية (مثل تطوير الواجهات الأمامية Web Frontend) وركز عليه حتى الإتقان.`
    },
    {
      id: 'time-management-developers',
      title: 'إدارة الوقت والتركيز العميق (Deep Work) للمطورين',
      date: '2026-08-05',
      excerpt: 'تقنيات تقليل التشتت وزيادة الإنتاجية أثناء كتابة الكود وبناء الأنظمة.',
      content: `كتابة البرمجيات تتطلب تركيزاً ذهنياً عالياً وانقطاعاً عن المشتتات.

1. تقنية البومودورو (Pomodoro Technique):
العمل بتركيز لمدة 25 دقيقة يليه أخذ استراحة 5 دقائق يحافظ على طاقة عقلك طوال اليوم.

2. حظر وقت التركيز العميق:
خصص ساعات محددة في اليوم لكتابة الكود واغلق فيها الإشعارات والبريد الإلكتروني.`
    },
    {
      id: 'importance-of-open-source',
      title: 'المساهمة في البرمجيات مفتوحة المصدر (Open Source): الخطوة الأولى',
      date: '2026-08-04',
      excerpt: 'كيف تبدأ في إضافة تعديلات حقيقية على مشاريع عالمية وتطور خبرتك البرمجية.',
      content: `المساهمة في Open Source تمنحك فرصة التعامل مع أكواد حقيقية ومكتوبة بواسطة خبراء عالميين.

1. البحث عن وسم Good First Issue:
تبحث المشاريع في GitHub عن مساهمين مبتدئين عبر وضع هذا الوسم على المهام البسيطة والمتاحة.

2. تحسين التوثيق والأخطاء البسيطة:
يمكنك البدء بتعديل التوثيق أو تصحيح أخطاء واجهة المستخدم البسيطة كبداية لتعتاد على بيئة العمل.`
    },
    {
      id: 'preparing-for-behavioral-interviews',
      title: 'كيف تجيب على أسئلة المقابلة السلوكية باستخدام استراتيجية STAR',
      date: '2026-08-03',
      excerpt: 'طريقة هيكلة إجاباتك لاستعراض المواقف والتحديات السابقة بأسلوب احترافي.',
      content: `تُستخدم تقنية STAR لتنظيم الإجابات عن المواقف التي واجهتك في العمل السابق:

- S (Situation): شرح المواقف أو الظروف الفعلية.
- T (Task): تحديد المهمة أو التحدي المطلوب منك.
- A (Action): الخطوات والإجراءات المحددة التي اتخذتها.
- R (Result): النتائج الإيجابية الملموسة التي تحققت بفضل عملك.`
    },
    {
      id: 'future-of-software-engineering',
      title: 'مستقبل هندسة البرمجيات في ظل أدوات الذكاء الاصطناعي',
      date: '2026-08-02',
      excerpt: 'كيف تستفيد من أدوات الذكاء الاصطناعي لرفع إنتاجيتك دون الاستغناء عن الأساسيات.',
      content: `الذكاء الاصطناعي لا يستبدل المهندسين، بل يطور طريقة عملهم ويجعلها أكثر سرعة.

1. استخدام أدوات المساعدة البرمجية:
استخدم أدوات الذكاء الاصطناعي لتسريع كتابة الأكواد الروتينية واكتشاف الأخطاء.

2. التركيز على التفكير المعماري (Architecture):
التركيز يزداد على فهم التصميم العام للأنظمة، وأمان البيانات، وحل المشكلات المعقدة التي تتطلب فهماً بشرياً عميقاً.`
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
                <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>📰 مدونة التوظيف والتطوير المهني ({articles.length} مقالاً)</h2>
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

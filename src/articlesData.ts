export interface PostContent {
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface Post {
  id: string;
  date: string; // تم توزيع التواريخ لتبدو طبيعية
  icon: string;
  ar: PostContent;
  en: PostContent;
}

export const articlesData: Post[] = [
  {
    id: '1',
    date: '2026-08-15',
    icon: '🚀',
    ar: {
      category: 'مميزات الأداة',
      title: 'تصميم السيرة الذاتية في ثوانٍ',
      excerpt: 'حول بياناتك إلى سيرة احترافية فوراً.',
      content: 'ودع معقدات برامج التصميم وتنسيق النصوص المزمنة.\nتعتمد أداتنا على تحويل بياناتك المدخلة هندسياً.\nتحصل على مظهر نهائي يليق بطموحاتك بلا جهد.\nابدأ الآن وانطلق نحو وظيفة أحلامك بثقة.\nالسرعة والاحترافية مجتمعتان في مكان واحد.'
    },
    en: {
      category: 'Features',
      title: 'Design Your CV in Seconds',
      excerpt: 'Turn your data into a professional CV instantly.',
      content: 'Say goodbye to complex design software and formatting issues.\nOur tool automatically engineers your input data.\nGet a final look that matches your ambitions effortlessly.\nStart now and head towards your dream job with confidence.\nSpeed and professionalism combined in one place.'
    }
  },
  {
    id: '2',
    date: '2026-08-10',
    icon: '📄',
    ar: {
      category: 'مميزات الأداة',
      title: 'وداعاً لمشاكل تنسيق ملفات الـ Word',
      excerpt: 'تجاوز أخطاء إزاحة النصوص عند الحفظ.',
      content: 'تنهار تصاميم الوورد بمجرد مشاركتها أحياناً.\nنوفر لك هيكلة برمجية تضمن ثبات التنسيق تماماً.\nتبقى الهوامش والعناوين دقيقة وثابتة دائماً.\nاحصل على ملف جاهز يعكس اهتمامك بالتفاصيل.\nانتهت مشكلة انهيار التنسيق إلى الأبد.'
    },
    en: {
      category: 'Features',
      title: 'Goodbye Word Formatting Issues',
      excerpt: 'Overcome text shifting errors when saving.',
      content: 'Word designs sometimes collapse once shared.\nWe provide a programmed structure that ensures formatting stability.\nMargins and headings remain accurate and fixed always.\nGet a ready file that reflects your attention to detail.\nThe formatting collapse issue is gone forever.'
    }
  },
  {
    id: '3',
    date: '2026-08-05',
    icon: '🔒',
    ar: {
      category: 'مميزات الأداة',
      title: 'خصوصية وأمان تام لبياناتك',
      excerpt: 'معالجة محلية داخل متصفحك حصراً.',
      content: 'ندرك تماماً حساسية معلوماتك الشخصية والمهنية.\nتعمل الأداة بتقنية المعالجة المحلية بالمتصفح.\nلا يتم رفع أي بيانات لخوادم خارجية أبداً.\nأرقام هاتفك وتاريخك المهني في أمان تام.\nنضمن لك خصوصية كاملة بلا أي مساومة.'
    },
    en: {
      category: 'Features',
      title: 'Complete Privacy for Your Data',
      excerpt: 'Local processing entirely inside your browser.',
      content: 'We fully understand the sensitivity of your personal info.\nThe tool operates using local browser processing.\nNo data is ever uploaded to external servers.\nYour phone numbers and career history are perfectly safe.\nWe guarantee complete privacy without compromise.'
    }
  },
  {
    id: '4',
    date: '2026-07-28',
    icon: '✨',
    ar: {
      category: 'مميزات الأداة',
      title: 'اصنع انطباعاً أولياً مذهلاً',
      excerpt: 'اخطف أنظار مسؤولي التوظيف بتصميم عصري.',
      content: 'يستغرق مدير التوظيف ثوانٍ لتكوين انطباعه.\nقوالبنا توجه عين القارئ لقوتك وإنجازاتك فوراً.\nتخلص تماماً من التشتت البصري المزعج.\nعزز فرصك بالانتقال للمقابلة بكل قوة.\nالتصميم البسيط هو سر الأناقة المهنية.'
    },
    en: {
      category: 'Features',
      title: 'Make a Stunning First Impression',
      excerpt: 'Catch recruiters eyes with a modern design.',
      content: 'A hiring manager takes seconds to form an impression.\nOur templates direct the reader\'s eye to your strengths instantly.\nCompletely eliminate annoying visual distractions.\nStrongly boost your chances of getting an interview.\nSimple design is the secret to professional elegance.'
    }
  },
  {
    id: '5',
    date: '2026-07-22',
    icon: '💎',
    ar: {
      category: 'مميزات الأداة',
      title: 'أدوات بناء مجانية بالكامل',
      excerpt: 'بلا رسوم خفية أو علامات مائية مزعجة.',
      content: 'ندعم الباحثين عن عمل بتجربة مجانية كاملة.\nأنشئ وحمل سيرتك بكل حرية ودون قيود.\nلا توجد رسوم خفية عند تحميل ملفك.\nركز فقط على تطوير محتواك ومهاراتك.\nنوفر لك منصة تدعم طموحك بلا مقابل.'
    },
    en: {
      category: 'Features',
      title: 'Completely Free Building Tools',
      excerpt: 'No hidden fees or annoying watermarks.',
      content: 'We support job seekers with a fully free experience.\nCreate and download your CV freely without restrictions.\nThere are no hidden fees when downloading your file.\nFocus only on developing your content and skills.\nWe provide a platform that supports your ambition for free.'
    }
  },
  {
    id: '6',
    date: '2026-07-15',
    icon: '🌐',
    ar: {
      category: 'مميزات الأداة',
      title: 'دعم كامل واصيل للغة العربية',
      excerpt: 'خطوط واضحة واتجاه كتابة سليم RTL.',
      content: 'تم ضبط الأداة لتدعم اللغة العربية أصيلاً.\nالمحاذاة والمسافات تظهر بشكل دقيق وسليم.\nخطوط رسمية تناسب سوق العمل الإقليمي.\nاعكس هويتك المهنية بأفضل صورة عربية.\nجاهزية كاملة لتقديم سيرتك في كبرى الشركات.'
    },
    en: {
      category: 'Features',
      title: 'Native Full Arabic Support',
      excerpt: 'Clear fonts and proper RTL direction.',
      content: 'The tool is configured for native Arabic support.\nAlignment and spacing appear accurately and properly.\nOfficial fonts suitable for the regional job market.\nReflect your professional identity in the best Arabic layout.\nFull readiness to submit your CV to major companies.'
    }
  },
  {
    id: '7',
    date: '2026-07-09',
    icon: '🔄',
    ar: {
      category: 'مميزات الأداة',
      title: 'تحديث مستمر بضغطة زر واحدة',
      excerpt: 'أضف خبراتك الجديدة وحمل الملف فوراً.',
      content: 'مسيرتك تتطور ولست مضطراً للبدء من الصفر.\nافتح الأداة وأضف مهارتك الجديدة في ثوانٍ.\nاحصل على نسخة محدثة وعالية الدقة فوراً.\nتحديث السيرة الذاتية أصبح أسهل من أي وقت.\nواكب تطوراتك المهنية بكل سلاسة ومرونة.'
    },
    en: {
      category: 'Features',
      title: 'Continuous One-Click Updates',
      excerpt: 'Add your new experiences and download instantly.',
      content: 'Your career evolves and you don\'t have to start from scratch.\nOpen the tool and add your new skill in seconds.\nGet an updated, high-resolution copy instantly.\nUpdating your CV is now easier than ever.\nKeep up with your career developments smoothly.'
    }
  },
  {
    id: '8',
    date: '2026-06-30',
    icon: '🎨',
    ar: {
      category: 'مميزات الأداة',
      title: 'تصميم خالٍ من الفوضى البصرية',
      excerpt: 'ابعد عن الألوان المزعجة والتشتت.',
      content: 'البساطة هي قمة الأناقة في عالم المهنة.\nتجنبنا الألوان المبالغ فيها واللوحات المعقدة.\nنعتمد على مساحات بيضاء تريح القارئ.\nنجعل المحتوى النصي هو البطل الحقيقي.\nمظهر احترافي يريح عين لجان التوظيف.'
    },
    en: {
      category: 'Features',
      title: 'Clutter-Free Visual Design',
      excerpt: 'Stay away from annoying colors and distractions.',
      content: 'Simplicity is the peak of elegance in the professional world.\nWe avoided exaggerated colors and complex palettes.\nWe rely on white spaces that comfort the reader.\nWe make the text content the real hero.\nA professional look that comforts hiring committees.'
    }
  },
  {
    id: '9',
    date: '2026-06-25',
    icon: '⏰',
    ar: {
      category: 'مميزات الأداة',
      title: 'وفر وقتك الثمين للمقابلة',
      excerpt: 'دع النظام يتولى هندسة وتنسيق بياناتك.',
      content: 'توقف عن إضاعة الوقت بمحاذاة العناوين.\nمهمتنا أتمتة هذه العملية برمجياً بالكامل.\nتفرغ أنت للتحضير الفني والنفسي للمقابلة.\nابحث عن معلومات شركتك المستهدفة بحرية.\nدع الهندسة الورقية لأداتنا الذكية.'
    },
    en: {
      category: 'Features',
      title: 'Save Time for the Interview',
      excerpt: 'Let the system engineer and format your data.',
      content: 'Stop wasting time aligning headings.\nOur mission is to automate this process fully.\nFree yourself for technical and psychological interview prep.\nFreely research information about your target company.\nLeave the paper engineering to our smart tool.'
    }
  },
  {
    id: '10',
    date: '2026-06-18',
    icon: '📈',
    ar: {
      category: 'مميزات الأداة',
      title: 'مرونة فائقة لكل المراحل المهنية',
      excerpt: 'من طالب خريج إلى خبير متمرس.',
      content: 'تتضخم واجهتنا أو تتقلص حسب كمية بياناتك.\nسواء كانت خبرتك تدريباً أو عقوداً طويلة.\nيوزع النظام المحتوى لملء الفراغات بذكاء.\nلا تكدس نصي ولا مساحات فارغة مشوهة.\nقوالب تتكيف بدقة مع حجم تاريخك.'
    },
    en: {
      category: 'Features',
      title: 'High Flexibility for All Career Stages',
      excerpt: 'From a fresh grad to a seasoned expert.',
      content: 'Our interface expands or shrinks based on your data.\nWhether your experience is an internship or decades long.\nThe system distributes content to smartly fill gaps.\nNo text crowding and no distorted empty spaces.\nTemplates that adapt precisely to your history size.'
    }
  },
  {
    id: '11',
    date: '2026-06-10',
    icon: '🤖',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'تجاوز الفرز الآلي بكل سهولة',
      excerpt: 'هيكلة برمجية صديقة لخوارزميات التوظيف.',
      content: 'ترفض أنظمة الـ ATS نسبة ضخمة من السير.\nصممنا أكواد قوالبنا لتتخطى هذا الفحص الآلي.\nتجنبنا الجداول المخفية والأعمدة المعقدة.\nتسلسل نصي واضح تقرأه الروبوتات بسلاسة.\nاضمن وصول سيرتك لعين مسؤول التوظيف.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Bypass ATS Screening Easily',
      excerpt: 'Software structure friendly to hiring algorithms.',
      content: 'ATS systems reject a huge percentage of CVs.\nWe designed our template codes to bypass this automated check.\nWe avoided hidden tables and complex columns.\nA clear text sequence that robots read smoothly.\nEnsure your CV reaches the hiring manager\'s eyes.'
    }
  },
  {
    id: '12',
    date: '2026-06-05',
    icon: '📊',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'تجنب الجرافيك المعقد المضر',
      excerpt: 'الرسومات تعيق الروبوتات عن قراءة مستواك.',
      content: 'أشرطة التقدم والرسومات البيانية عمياء آلياً.\nالأنظمة الحديثة لا تقرأ الصور والدوائر.\nنوفر لك نصوصاً وصفية واضحة ومباشرة.\nتترجم خوارزميات الشركة مستواك بدقة فائقة.\nالتزم بالنصوص النظيفة لتنجح دائماً.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Avoid Harmful Complex Graphics',
      excerpt: 'Graphics block robots from reading your level.',
      content: 'Progress bars and charts are machine-blind.\nModern systems do not read images and circles.\nWe provide you with clear, direct descriptive texts.\nCompany algorithms translate your level accurately.\nStick to clean text to always succeed.'
    }
  },
  {
    id: '13',
    date: '2026-05-28',
    icon: '🔑',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'توزيع الكلمات المفتاحية بذكاء',
      excerpt: 'ارفع نسبة مطابقتك مع متطلبات الإعلان.',
      content: 'يعمل نظام الـ ATS كخوارزمية بحث مصغرة.\nاستخدم حقول أداتنا لتضمين المصطلحات المطلوبة.\nوزع الكلمات بأسلوب طبيعي وغير متكلف.\nاقرأ الإعلان الوظيفي ووافق بينه وبين سيرتك.\nاكسب ثقة الروبوت وبرمجة الشركة.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Smart Keyword Distribution',
      excerpt: 'Increase your match rate with job requirements.',
      content: 'The ATS system acts as a mini search algorithm.\nUse our tool\'s fields to embed required terms.\nDistribute words in a natural, unforced manner.\nRead the job ad and align it with your CV.\nWin the trust of the robot and company software.'
    }
  },
  {
    id: '14',
    date: '2026-05-20',
    icon: '🔤',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'خطوط قياسية آمنة وواضحة',
      excerpt: 'نستخدم خطوطاً تمنع الأخطاء المطبعية الآلية.',
      content: 'الخطوط المزخرفة تظهر كرموز مبهمة للروبوتات.\nاخترنا لك خطوطاً قياسية وآمنة عالمياً.\nنضمن قراءة سيرتك دون أي أخطاء بالتحليل.\nحرفك على الشاشة هو ذاته المقروء آلياً.\nاستقرار وثبات تامة في نقل الحروف.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Safe and Clear Standard Fonts',
      excerpt: 'We use fonts that prevent automated typos.',
      content: 'Decorative fonts appear as vague symbols to robots.\nWe chose globally safe standard fonts for you.\nWe ensure your CV is read without parsing errors.\nYour letter on screen is exactly what is read automatically.\nComplete stability and consistency in text transfer.'
    }
  },
  {
    id: '15',
    date: '2026-05-12',
    icon: '⏳',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'الترتيب الزمني العكسي المنظم',
      excerpt: 'المعيار الذهبي المفضل للروبوتات والبشر.',
      content: 'الترتيب العشوائي يربك الأنظمة الآلية بشدة.\nنطبق المعيار العالمي للترتيب الزمني العكسي.\nنضع أحدث وظيفة أو شهادة في قمة القائمة.\nنتدرج بانتظام نحو المحطات الأقدم بالماضي.\nهيكلة ترشد الروبوت وتريح الباحث.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Organized Reverse Chronological Order',
      excerpt: 'The golden standard preferred by robots and humans.',
      content: 'Random ordering heavily confuses automated systems.\nWe apply the global reverse chronological standard.\nWe place the latest job or degree at the top.\nWe gradually move towards older milestones in the past.\nA structure that guides the robot and comforts the recruiter.'
    }
  },
  {
    id: '16',
    date: '2026-05-04',
    icon: '📋',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'التخلص من الجداول المخفية',
      excerpt: 'تقنيات حديثة تضمن القراءة السليمة.',
      content: 'تعمد بعض القوالب جداول مخفية تدمر التحليل.\nنستخدم تقنيات حديثة كـ Flexbox و Grid.\nنتأكد من توافق الترتيب البصري مع النصي.\nقراءة متسلسلة من اليمين لليسار بدقة.\nبياناتك محفوظة في حقولها الآمنة.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Eliminating Hidden Tables',
      excerpt: 'Modern techniques ensuring proper readability.',
      content: 'Some templates use hidden tables that destroy parsing.\nWe use modern techniques like Flexbox and Grid.\nWe ensure visual order matches text order.\nAccurate sequential reading from right to left.\nYour data is preserved in its secure fields.'
    }
  },
  {
    id: '17',
    date: '2026-04-28',
    icon: '🏷️',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'وضوح وموثوقية المسميات',
      excerpt: 'مسميات قياسية تصنفك بفئتك الصحيحة.',
      content: 'تجنب الابتكار المفرط بالمسميات الغامضة.\nالأنظمة تبحث عن وظائف قياسية ومعروفة.\nأداتنا توفر حقولاً تبرز مسماك بوضوح تام.\nصنف فئتك المهنية بددون أي تأويل مبهم.\nاجعل الروبوت يتعرف عليك بلا عناء.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Clear and Reliable Job Titles',
      excerpt: 'Standard titles classify you in the right category.',
      content: 'Avoid over-innovating with vague job titles.\nSystems look for standard, well-known jobs.\nOur tool provides fields that highlight your title clearly.\nClassify your professional category without ambiguity.\nLet the robot recognize you effortlessly.'
    }
  },
  {
    id: '18',
    date: '2026-04-20',
    icon: '📁',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'تصدير ملفات PDF المتوافقة',
      excerpt: 'ملفات خفيفة وقابلة للقراءة الآلية.',
      content: 'تولد أداتنا ملفات PDF نصية وليست صوراً.\nتجمع بين ثبات التصميم وقابلية القراءة.\nلا تعقيدات تعيق خوارزميات الشركات.\nملف نظيف يحفظ جودته بأي جهاز فتحه.\nالمعيار الأمثل للتقديم الإلكتروني.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Export Compatible PDF Files',
      excerpt: 'Lightweight and machine-readable files.',
      content: 'Our tool generates text-based PDFs, not images.\nIt combines design stability with readability.\nNo complexities to hinder company algorithms.\nA clean file that maintains quality on any device.\nThe optimal standard for electronic submissions.'
    }
  },
  {
    id: '19',
    date: '2026-04-14',
    icon: '🗂️',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'عناوين وأقسام صريحة وواضحة',
      excerpt: 'خريطة مثالية لاستخراج البيانات برمجياً.',
      content: 'يحتاج الـ ATS لعناوين صريحة ومحددة.\nأداتنا تفصل الخبرات عن المهارات بذكاء.\nعنونة قياسية توجّه الروبوت لاستخراج الدقة.\nلا تداخل بين تواريخ وأماكن العمل.\nهندسة تفهم لغة الآلة وتخدم الإنسان.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Explicit and Clear Headings',
      excerpt: 'A perfect map for programmatic data extraction.',
      content: 'ATS needs explicit and specific section headings.\nOur tool smartly separates experiences from skills.\nStandard headings guide the robot to extract accurately.\nNo overlap between dates and workplaces.\nEngineering that understands machine language and serves humans.'
    }
  },
  {
    id: '20',
    date: '2026-04-05',
    icon: '⚖️',
    ar: {
      category: 'أنظمة الفرز ATS',
      title: 'الحشو الذكي بعيداً عن التلاعب',
      excerpt: 'صياغة مفيدة تحترم عقول لجان التوظيف.',
      content: 'الحشو الأبيض المخفي يكشفه النظام ويقصيك.\nالحل بصياغة الكلمات داخل جمل مفيدة.\nصف إنجازاتك بأسلوب واقعي وصحيح.\nتكسب رضا الخوارزمية واحترام المدير.\nاحترافية تامة بلا حيل وهمية.'
    },
    en: {
      category: 'ATS Systems',
      title: 'Smart Stuffing Without Manipulation',
      excerpt: 'Useful phrasing that respects hiring committees.',
      content: 'Hidden white text stuffing is detected and disqualifies you.\nThe solution is phrasing words within useful sentences.\nDescribe your achievements in a realistic, correct manner.\nWin the algorithm\'s approval and the manager\'s respect.\nTotal professionalism with no fake tricks.'
    }
  },
  {
    id: '21',
    date: '2026-03-28',
    icon: '🎓',
    ar: {
      category: 'حديثي التخرج',
      title: 'حلول ذكية لحديثي التخرج',
      excerpt: 'أبرز مشاريعك الأكاديمية كبديل للخبرة.',
      content: 'لا تملك خبرة سابقة؟ لا تقلق أبداً.\nأداتنا تتيح إبراز مشاريع التخرج بمرونة.\nسرد التحديات والحلول يعوض غياب السجل.\nاثبت جدارتك الأكاديمية للشركات بسهولة.\nابدأ مسيرتك المهنية بثقة ومقدرة.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Smart Solutions for Fresh Grads',
      excerpt: 'Highlight academic projects instead of experience.',
      content: 'No prior experience? Don\'t worry at all.\nOur tool allows highlighting grad projects flexibly.\nDetailing challenges and solutions makes up for the lack of history.\nProve your academic worth to companies easily.\nStart your career path with confidence and ability.'
    }
  },
  {
    id: '22',
    date: '2026-03-20',
    icon: '🎯',
    ar: {
      category: 'حديثي التخرج',
      title: 'قوة الهدف المهني المختصر',
      excerpt: 'نبذة علوية توضح شغفك وطموحك.',
      content: 'خصصنا مساحة بارزة لأعلى السيرة الذاتية.\nاكتب سطرين تلخص فيها تخصصك وشغفك.\nوجه انتباه مسؤولي التوظيف لهدفك السامي.\nأظهر قابليتك العالية للتطور والتعلم.\nاصنع فارقاً حقيقياً منذ السطر الأول.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Power of a Brief Career Objective',
      excerpt: 'A top summary showing your passion and ambition.',
      content: 'We allocated a prominent space at the top of the CV.\nWrite two lines summarizing your major and passion.\nDirect recruiters\' attention to your noble goal.\nShow your high capacity for growth and learning.\nMake a real difference from the very first line.'
    }
  },
  {
    id: '23',
    date: '2026-03-12',
    icon: '📜',
    ar: {
      category: 'حديثي التخرج',
      title: 'إبراز المؤهل الأكاديمي بالصدارة',
      excerpt: 'اجعل قسم التعليم يتصدر سيرتك الحديثة.',
      content: 'رأس مالك الحقيقي شهادتك وتفوقك العلمي.\nادعم قسم التعليم ليأخذ مكانه المتقدم.\nاذكر اسم جامعتك وتخصصك الدقيق وأبرز المواد.\nسلط الضوء على نجاحاتك الأكاديمية البارزة.\nاجعل تحصيلك العلمي واجهتك الأولى.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Highlighting Academic Qualifications First',
      excerpt: 'Make education the top section of your recent CV.',
      content: 'Your real asset is your degree and academic excellence.\nPromote the education section to take the top spot.\nMention your university, specific major, and key subjects.\nHighlight your outstanding academic successes.\nMake your educational attainment your primary showcase.'
    }
  },
  {
    id: '24',
    date: '2026-03-05',
    icon: '🏅',
    ar: {
      category: 'حديثي التخرج',
      title: 'توثيق الدورات التدريبية المكتسبة',
      excerpt: 'دليل قاطع على طموحك وسعيك للتطور.',
      content: 'التعلم الذاتي يجسد جديتك الحقيقية.\nأضف دوراتك عبر منصات الإنترنت الشهيرة.\nوثق اسم الدورة والجهة والمهارة المكتسبة.\nعوّض النقص الميداني بشهادات معتمدة.\nاثبت شغفك الدائم باكتساب المعرفة.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Documenting Acquired Training Courses',
      excerpt: 'Definitive proof of your ambition and drive to improve.',
      content: 'Self-learning embodies your true seriousness.\nAdd your courses from popular online platforms.\nDocument the course name, provider, and skill acquired.\nCompensate for lack of field experience with certified credentials.\nProve your constant passion for gaining knowledge.'
    }
  },
  {
    id: '25',
    date: '2026-02-28',
    icon: '🤝',
    ar: {
      category: 'حديثي التخرج',
      title: 'أهمية توثيق العمل التطوعي',
      excerpt: 'يثبت مهاراتك القيادية والتواصلية.',
      content: 'العمل التطوعي يعلمك الالتزام وضغط العمل.\nاكتب تجاربك بنفس هيكلية الوظائف الرسمية.\nبرهن على قدرتك بالتعامل مع مختلف الأنماط.\nارفع قيمتك المهنية بمجتمعك المحلي.\nأنشطة تثبت روح المبادرة لديك.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Importance of Documenting Volunteer Work',
      excerpt: 'It proves your leadership and communication skills.',
      content: 'Volunteering teaches commitment and working under pressure.\nWrite your experiences in the same structure as official jobs.\nProve your ability to deal with different personalities.\nRaise your professional value in your local community.\nActivities that prove your proactive spirit.'
    }
  },
  {
    id: '26',
    date: '2026-02-20',
    icon: '⚙️',
    ar: {
      category: 'حديثي التخرج',
      title: 'تخصيص السيرة لكل فرصة',
      excerpt: 'تعديل سريع يناسب كل إعلان منفرد.',
      content: 'تجنب إرسال نسخة عامة لكل الشركات.\nتتيح لك أداتنا التعديل الفوري والسريع.\nبدل الكلمات المفتاحية حسب كل وظيفة.\nحمل النسخة المخصصة في ثوانٍ معدودة.\nاطبع احترافيتك الموجهة بعناية.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Tailoring CV for Each Opportunity',
      excerpt: 'Quick edits to suit every single job ad.',
      content: 'Avoid sending a generic copy to all companies.\nOur tool allows instant and quick modifications.\nSwap keywords according to each specific job.\nDownload the tailored version in mere seconds.\nPrint your carefully targeted professionalism.'
    }
  },
  {
    id: '27',
    date: '2026-02-14',
    icon: '🔢',
    ar: {
      category: 'حديثي التخرج',
      title: 'الأرقام تدعم إنجازاتك البسيطة',
      excerpt: 'استخدم إحصائيات تبرز مشاريعك الجامعية.',
      content: 'الأرقام تلفت الانتباه وتؤكد الحقائق.\nادعم مشروع تخرجك ببيانات كمية واضحة.\nمثل عدد أفراد الفريق أو حجم العينة المدروسة.\nأظهر قدرتك الفعلية على الإنتاج والتحليل.\nحول النص الإنشائي إلى إنجاز رقمي.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Numbers Support Simple Achievements',
      excerpt: 'Use stats to highlight your university projects.',
      content: 'Numbers grab attention and confirm facts.\nSupport your grad project with clear quantitative data.\nSuch as team size or sample size studied.\nShow your actual capacity for production and analysis.\nTurn narrative text into a numerical achievement.'
    }
  },
  {
    id: '28',
    date: '2026-02-08',
    icon: '🗣️',
    ar: {
      category: 'حديثي التخرج',
      title: 'إبراز المهارات الناعمة الأساسية',
      excerpt: 'التواصل والعمل الجماعي بؤرة اهتمامنا.',
      content: 'الشركات تبحث عن مهارات التأقلم والتواصل.\nادعم مهاراتك بأمثلة قصيرة وواقعية.\nبرهن على قدرتك في حل المشكلات الجماعية.\nأظهر مرونتك العالية داخل فرق العمل.\nمهارات شخصية تقنع مدير التوظيف بك.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Highlighting Core Soft Skills',
      excerpt: 'Communication and teamwork are our focus.',
      content: 'Companies look for adaptability and communication skills.\nSupport your skills with short, realistic examples.\nProve your ability to solve group problems.\nShow your high flexibility within work teams.\nPersonal skills that convince the hiring manager.'
    }
  },
  {
    id: '29',
    date: '2026-01-29',
    icon: '🧩',
    ar: {
      category: 'حديثي التخرج',
      title: 'تجنب الهوايات العامة غير المفيدة',
      excerpt: 'استبعد الهوايات العشوائية استغلالاً للمساحة.',
      content: 'الهوايات العامة تستهلك مساحتك الثمينة.\nاجعل هواياتك متوافقة مع متطلبات مجالك.\nهواية البرمجة تخدم مهندس البرمجيات بقوة.\nاستبعد الهوايات البعيدة عن سياق العمل.\nاستغل كل سطر لمعلومات مفيدة وحقيقية.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Avoid Useless General Hobbies',
      excerpt: 'Exclude random hobbies to save space.',
      content: 'General hobbies consume your precious CV space.\nMake your hobbies align with your field\'s requirements.\nA coding hobby strongly serves a software engineer.\nExclude hobbies far removed from the work context.\nUtilize every line for useful, real information.'
    }
  },
  {
    id: '30',
    date: '2026-01-20',
    icon: '✍️',
    ar: {
      category: 'حديثي التخرج',
      title: 'حتمية المراجعة اللغوية والدقيقة',
      excerpt: 'احمِ سيرتك من أي هفوات إملائية.',
      content: 'الخطأ البسيط يوحي بالإهمال وعدم التركيز.\nاطلب مراجعة سيرتك قبل اعتمادها نهائياً.\nتأكد من خلو ملفك من الأخطاء النحوية.\nانطباع أول نظيف بلا شوائب مطبعية.\nاحترافية تامة في كل حرف مدون.'
    },
    en: {
      category: 'Fresh Graduates',
      title: 'Necessity of Precise Proofreading',
      excerpt: 'Protect your CV from any spelling slips.',
      content: 'A simple error implies negligence and lack of focus.\nAsk someone to review your CV before finalizing it.\nEnsure your file is free of grammatical mistakes.\nA clean first impression with no typographical flaws.\nTotal professionalism in every single letter.'
    }
  },
  {
    id: '31',
    date: '2026-01-15',
    icon: '💼',
    ar: {
      category: 'صياغة الخبرات',
      title: 'تجاوز الوصف الوظيفي الروتيني',
      excerpt: 'ركز على كيفية أدائك للمهام بتميز.',
      content: 'تجنب سرد المهام الروتينية المعتادة.\nالجميع يعرف ما يفعله المحاسب أو المبرمج.\nاستغل حقولنا لسرد إنجازاتك الشخصية الفذة.\nكيف حسنت الأداء ووفرت وقت الشركة؟\nالإنجاز هو ما يميزك عن بقية المتقدمين.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Go Beyond Routine Job Descriptions',
      excerpt: 'Focus on how excellently you performed tasks.',
      content: 'Avoid listing standard routine duties.\nEveryone knows what an accountant or programmer does.\nUse our fields to detail your outstanding personal achievements.\nHow did you improve performance and save company time?\nAchievement is what sets you apart from other applicants.'
    }
  },
  {
    id: '32',
    date: '2026-01-10',
    icon: '🚀',
    ar: {
      category: 'صياغة الخبرات',
      title: 'قاعدة الفعل والإنجاز والنتيجة',
      excerpt: 'ابدأ بأفعال قوية واختم بنتيجة مقاسة.',
      content: 'استخدم أفعال الحركة القوية ببداية السطر.\nاربط الفعل دائماً بنتيجة رقمية واضحة.\nمثل تطوير نظام زاد الإنتاجية لنسبة محددة.\nبرهن بوضوح على حجم تأثيرك الفعلي.\nصياغة هندسية تخطف أنظار اللجان.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Action, Achievement, Result Rule',
      excerpt: 'Start with strong verbs and end with a measured result.',
      content: 'Use strong action verbs at the beginning of the line.\nAlways link the verb to a clear numerical result.\nLike developing a system that increased productivity by X%.\nClearly prove the magnitude of your actual impact.\nEngineering phrasing that catches committees\' eyes.'
    }
  },
  {
    id: '33',
    date: '2026-01-05',
    icon: '📈',
    ar: {
      category: 'صياغة الخبرات',
      title: 'لغة الأرقام الصريحة والمقنعة',
      excerpt: 'الأرقام تجعل إنجازاتك واقعية وقاطعة.',
      content: 'تتوقف العين البشرية تلقائياً عند الأرقام.\nحول الكلمات العامة إلى معطيات كمية.\nاذكر قيم الأرباح وتوفير النفقات صراحة.\nامنح مسؤول التوظيف معياراً حقيقياً لإنتاجك.\nأرقام تثبت كفاءتك بلا شكوك.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Explicit and Convincing Numbers Language',
      excerpt: 'Numbers make your achievements real and definitive.',
      content: 'The human eye naturally stops at numbers.\nTurn general words into quantitative data.\nExplicitly state profit values and cost savings.\nGive the recruiter a real metric for your production.\nNumbers that prove your competence without doubts.'
    }
  }
];

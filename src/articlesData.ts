export interface PostContent {
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface Post {
  id: string;
  date: string; 
  icon: string;
  ar: PostContent;
  en: PostContent;
}

export const articlesData: Post[] = [
  {
    id: '1',
    date: '2026-09-08',
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
    date: '2026-09-05',
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
    date: '2026-09-01',
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
    date: '2026-08-28',
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
    date: '2026-08-25',
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
    date: '2026-08-22',
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
    date: '2026-08-19',
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
    date: '2026-08-15',
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
    date: '2026-08-12',
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
    date: '2026-08-09',
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
    date: '2026-08-05',
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
    date: '2026-08-01',
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
    date: '2026-07-28',
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
    date: '2026-07-25',
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
    date: '2026-07-21',
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
    date: '2026-07-18',
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
    date: '2026-07-14',
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
    date: '2026-07-10',
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
    date: '2026-07-06',
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
    date: '2026-07-02',
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
    date: '2026-06-28',
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
    date: '2026-06-24',
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
    date: '2026-06-20',
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
    date: '2026-06-16',
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
    date: '2026-06-12',
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
    date: '2026-06-08',
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
    date: '2026-06-04',
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
    date: '2026-05-31',
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
    date: '2026-05-27',
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
    date: '2026-05-23',
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
    date: '2026-05-19',
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
    date: '2026-05-15',
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
    date: '2026-05-11',
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
  },
  {
    id: '34',
    date: '2026-05-07',
    icon: '✂️',
    ar: {
      category: 'صياغة الخبرات',
      title: 'اختصار الخبرات القديمة جداً',
      excerpt: 'لا تسرف في تفاصيل ما قبل 10 سنوات.',
      content: 'المساحة محدودة ويجب استغلالها بذكاء.\nالإسهاب بالماضي البعيد لا يفيدك اليوم.\nركز تفاصيلك في أحدث خبراتك التقنية.\nاكتفِ بالمسمى والجهة للوظائف القديمة.\nاجعل تركيزك منصباً على مستواك الحالي.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Summarizing Very Old Experiences',
      excerpt: 'Do not over-detail jobs from 10+ years ago.',
      content: 'Space is limited and must be used smartly.\nDwelling on the distant past doesn\'t help you today.\nFocus your details on your latest technical experiences.\nStick to the title and company for old jobs.\nKeep your focus on your current skill level.'
    }
  },
  {
    id: '35',
    date: '2026-05-03',
    icon: '📅',
    ar: {
      category: 'صياغة الخبرات',
      title: 'الصدق التام في توثيق التواريخ',
      excerpt: 'التلاعب بالتواريخ يدمر مصداقيتك نهائياً.',
      content: 'تجنب تزوير أو تلاعب فترات التوقف المهني.\nالشركات الكبرى تدقق بخلفيات المتقدمين.\nبرر الفجوات بدورات أو مشاريع شخصية نظيفة.\nالصدق يبني أساس الثقة والقبول الدائم.\nمصداقيتك المهنية هي أغلى ما تملك.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Complete Honesty in Documenting Dates',
      excerpt: 'Manipulating dates permanently destroys your credibility.',
      content: 'Avoid forging or manipulating career gap periods.\nMajor companies conduct thorough background checks.\nJustify gaps with courses or clean personal projects.\nHonesty builds the foundation of trust and acceptance.\nYour professional credibility is your most valuable asset.'
    }
  },
  {
    id: '36',
    date: '2026-04-29',
    icon: '🎯',
    ar: {
      category: 'صياغة الخبرات',
      title: 'تخصيص الخبرات للشاغر المستهدف',
      excerpt: 'احذف التفاصيل البعيدة عن الوظيفة.',
      content: 'انتقِ خبراتك بعناية لتخدم الإعلان بدقة.\nأبرز المهام القيادية لوظائف الإدارة العليا.\nالسيرة الناجحة هي السيرة الانتقائية.\nأجب عن تساؤل الشركة بتميز واختصار.\nوجه خبراتك نحو احتياجهم الفعلي.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Tailoring Experiences for the Target Vacancy',
      excerpt: 'Remove details that are irrelevant to the job.',
      content: 'Carefully select experiences to strictly serve the job ad.\nHighlight leadership tasks for senior management roles.\nA successful CV is a selective CV.\nAnswer the company\'s needs with excellence and brevity.\nDirect your experiences toward their actual needs.'
    }
  },
  {
    id: '37',
    date: '2026-04-25',
    icon: '🥇',
    ar: {
      category: 'صياغة الخبرات',
      title: 'ترتيب النقاط حسب الأهمية القصوى',
      excerpt: 'ضع أعظم إنجازاتك في النقطة الأولى.',
      content: 'يتناقص تركيز القارئ مع تتابع السطور.\nلا تدخر أفضل أوراقك لنهاية القائمة.\nرتب إنجازاتك تنازلياً حسب قوة التأثير.\nاضمن قراءة أعظم أعمالك ولو بنظرة سريعة.\nابدأ بالأقوى واجذب الانتباه فوراً.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Ordering Points by Maximum Importance',
      excerpt: 'Place your greatest achievements in the first point.',
      content: 'The reader\'s focus decreases as lines go on.\nDo not save your best cards for the end of the list.\nOrder your achievements descendingly by impact.\nEnsure your greatest work is read even at a glance.\nStart with the strongest to grab attention instantly.'
    }
  },
  {
    id: '38',
    date: '2026-04-21',
    icon: '📝',
    ar: {
      category: 'صياغة الخبرات',
      title: 'الاعتماد على النقاط المنفصلة',
      excerpt: 'تجنب الكتل النصية الضخمة والمخيفة.',
      content: 'الفقرات الطويلة ترهق عين مسؤول التوظيف.\nحول كل إنجاز لنقطة منفصلة ومختصرة.\nلا تتجاوز السطرين لكل نقطة مدونة.\nتستفيد أداتنا من تنسيق هذه النقاط آلياً.\nسهولة بالمسح البصري وسرعة بالقراءة.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Relying on Separate Bullet Points',
      excerpt: 'Avoid massive and intimidating text blocks.',
      content: 'Long paragraphs exhaust the hiring manager\'s eyes.\nTurn every achievement into a separate, brief bullet point.\nDo not exceed two lines per written point.\nOur tool benefits from formatting these points automatically.\nEasy visual scanning and fast reading.'
    }
  },
  {
    id: '39',
    date: '2026-04-17',
    icon: '🚀',
    ar: {
      category: 'صياغة الخبرات',
      title: 'تسليط الضوء على الترقيات الداخلية',
      excerpt: 'دليل قاطع على كفاءتك واكتسابك الثقة.',
      content: 'تدرجك الوظيفي بشركة يثبت جدارتك العالية.\nلا تدمج ترقيتك بفترة واحدة مبهمة.\nافصل المسميات لإظهار تطورك المستمر.\nارسل رسالة ثقة بقدرتك على تحمل المسؤولية.\nمناصب متعددة تعكس نجاحاً متصلاً.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Highlighting Internal Promotions',
      excerpt: 'Definitive proof of your competence and earning trust.',
      content: 'Your career progression in a company proves high merit.\nDo not merge your promotion into one vague period.\nSeparate titles to show your continuous development.\nSend a message of confidence in your ability to take responsibility.\nMultiple positions reflect continuous success.'
    }
  },
  {
    id: '40',
    date: '2026-04-13',
    icon: '💻',
    ar: {
      category: 'صياغة الخبرات',
      title: 'دمج التقنيات بسياق العمل الميداني',
      excerpt: 'اشرح كيف استخدمت البرامج لخدمة الشركة.',
      content: 'لا تكتفِ بذكر اسم البرنامج بالمجرد.\nاربط التقنية بنتيجة تطبيقية مباشرة.\nمثل استخدام الإكسيل لتقليص وقت المراجعة.\nاثبت مهاراتك وقدم دليلاً على نتيجتها.\nتقنيات مسخرة لزيادة الإنتاجية.'
    },
    en: {
      category: 'Writing Experience',
      title: 'Integrating Tech in Field Work Context',
      excerpt: 'Explain how you used software to serve the company.',
      content: 'Do not just mention the software name in abstract.\nLink the technology to a direct applied result.\nLike using Excel to reduce review time.\nProve your skills and provide evidence of their outcome.\nTechnologies harnessed to increase productivity.'
    }
  },
  {
    id: '41',
    date: '2026-04-09',
    icon: '📄',
    ar: {
      category: 'الانطباع البصري',
      title: 'قاعدة الصفحة الواحدة الذهبية',
      excerpt: 'الإيجاز والتركيز هما سر الجاذبية.',
      content: 'الإيجاز يجبرك على استبعاد الحشو الزائد.\nمسؤول التوظيف يفضل الدخول للصلب مباشرة.\nتوزع أداتنا العناصر للاستفادة من المساحات.\nاجمع معلوماتك بصفحة متوازنة ونظيفة.\nلا تكدس بصري ولا فراغات مشوهة.'
    },
    en: {
      category: 'Visual Impression',
      title: 'The Golden One-Page Rule',
      excerpt: 'Brevity and focus are the secrets to attraction.',
      content: 'Brevity forces you to exclude unnecessary filler.\nThe hiring manager prefers getting straight to the point.\nOur tool distributes elements to utilize spaces efficiently.\nGather your info in a balanced, clean single page.\nNo visual clutter and no distorted gaps.'
    }
  },
  {
    id: '42',
    date: '2026-04-05',
    icon: '⚖️',
    ar: {
      category: 'الانطباع البصري',
      title: 'أهمية المساحات الفارغة والهوامش',
      excerpt: 'التصميم الجيد يتنفس براحة تامة.',
      content: 'ملء الصفحة بالحواف يخلق خنقة بصرية.\nالهوامش القياسية تريح عين القارئ.\nنحافظ على تبأعد مناسب بين الأسطر.\nتتبع تطورك المهني من الأعلى للأسفل بسلاسة.\nتنظيم يريح البصر ويسهل القراءة.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Importance of White Space and Margins',
      excerpt: 'Good design breathes comfortably.',
      content: 'Filling the page to the edges creates visual suffocation.\nStandard margins comfort the reader\'s eye.\nWe maintain appropriate spacing between lines.\nTrack your career development from top to bottom smoothly.\nOrganization that comforts the eyes and eases reading.'
    }
  },
  {
    id: '43',
    date: '2026-04-01',
    icon: '🖼️',
    ar: {
      category: 'الانطباع البصري',
      title: 'معايير إضافة الصورة الشخصية',
      excerpt: 'تختلف ثقافات قبول الصور بين الدول.',
      content: 'مقبولة بالشرق الأوسط ومرفوضة بأوروبا أحياناً.\nنوفر لك خيار الإضافة أو الإخفاء بضغطة زر.\nإن أضفتها فاجعلها بخلفية محايدة ورسمية.\nتحكم بملفك ليتناسب مع الجهة المستهدفة.\nمرونة كاملة تلبي كافة الثقافات.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Criteria for Adding a Personal Photo',
      excerpt: 'Photo acceptance cultures vary between countries.',
      content: 'Accepted in the Middle East, sometimes rejected in Europe.\nWe provide the option to add or hide it with a click.\nIf added, use a neutral, official background.\nControl your file to suit the target entity.\nTotal flexibility catering to all cultures.'
    }
  },
  {
    id: '44',
    date: '2026-03-28',
    icon: '🎨',
    ar: {
      category: 'الانطباع البصري',
      title: 'ألوان رسمية ومهنية مريحة',
      excerpt: 'تجنب الفاقع والتزم بالتدرجات الداكنة.',
      content: 'السيرة الذاتية مستند رسمي وليس إعلاناً.\nالتدرجات كالرمادي والأزرق هي الأنسب للطباعة.\nمستوحاة من أفضل ممارسات التصميم المؤسسي.\nمظهر يجمع الأناقة بالطابع الجاد.\nألوان تليق بمقامك المهني.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Official and Comfortable Professional Colors',
      excerpt: 'Avoid bright colors and stick to dark shades.',
      content: 'A CV is an official document, not an advertisement.\nShades like gray and blue are best for printing.\nInspired by the best corporate design practices.\nA look that combines elegance with a serious tone.\nColors befitting your professional status.'
    }
  },
  {
    id: '45',
    date: '2026-03-24',
    icon: '👁️',
    ar: {
      category: 'الانطباع البصري',
      title: 'التباين اللوني المثالي للقراءة',
      excerpt: 'نصوص واضحة على خلفيات بيضاء آمنة.',
      content: 'التدرج المعاكس قد يفسد طباعة سيرتك.\nنضمن أقصى درجات التباين اللوني والوضوح.\nسيرتك واضحة على كافة الشاشات والأجهزة.\nممتازة حتى عند طباعتها بالأبيض والأسود.\nمعايير تقرأ بكل ظروف الإضاءة.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Ideal Color Contrast for Reading',
      excerpt: 'Clear text on safe white backgrounds.',
      content: 'Inverted gradients might ruin your CV\'s print.\nWe guarantee maximum color contrast and clarity.\nYour CV is clear on all screens and devices.\nExcellent even when printed in black and white.\nStandards readable in all lighting conditions.'
    }
  },
  {
    id: '46',
    date: '2026-03-20',
    icon: 'Aa',
    ar: {
      category: 'الانطباع البصري',
      title: 'التسلسل الهرمي لأحجام الخطوط',
      excerpt: 'قاعدة النسبة الذهبية في حجم النصوص.',
      content: 'العنوان البارز يرشد عين القارئ بذكاء.\nغياب التسلسل يجعل الملف كتلة مبهمة.\nنطبق هندسة دقيقة لأحجام العناوين والنصوص.\nتدرج مريح يوضح الأهم فالأهم.\nهيكلة بصرية تريح المشاهد فوراً.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Hierarchical Sequence of Font Sizes',
      excerpt: 'The golden ratio rule for text sizes.',
      content: 'A prominent title smartly guides the reader\'s eye.\nLack of hierarchy turns the file into a vague block.\nWe apply precise engineering to heading and text sizes.\nA comfortable gradient showing what\'s most important.\nA visual structure that instantly comforts the viewer.'
    }
  },
  {
    id: '47',
    date: '2026-03-16',
    icon: '✨',
    ar: {
      category: 'الانطباع البصري',
      title: 'أيقونات دقيقة بلا زخرفة مفرطة',
      excerpt: 'رموز اتجاهية SVG لبيانات الاتصال.',
      content: 'الأيقونات الضخمة تسرق انتباه القارئ.\nنستخدم أيقونات متجهة بدقة عالية وفائقة.\nمخصصة لبيانات الاتصال الأساسية فقط.\nبساطة تخدم الوصول السريع لمعلوماتك.\nلا تشتيت بصري ولا زخرفة زائدة.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Precise Icons without Excessive Decoration',
      excerpt: 'SVG vector symbols for contact data.',
      content: 'Huge icons steal the reader\'s attention.\nWe use ultra-high-resolution vector icons.\nDedicated to essential contact information only.\nSimplicity serving quick access to your info.\nNo visual distraction or extra decoration.'
    }
  },
  {
    id: '48',
    date: '2026-03-12',
    icon: '💾',
    ar: {
      category: 'الانطباع البصري',
      title: 'تجميد التصميم بصيغة PDF',
      excerpt: 'اضمن مطابقة ما تراه لما يراه المدير.',
      content: 'تغير برامج النصوص يفسد التنسيق أحياناً.\nتصديرنا للـ PDF يجمد التصميم تماماً.\nما تراه على شاشتك هو ما يستلمه المدير.\nموثوقية تامة تحمي جهودك الهندسية.\nملفات محفوظة بجودة وثبات دائم.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Freezing Design in PDF Format',
      excerpt: 'Ensure what you see is what the manager sees.',
      content: 'Different text software sometimes ruins formatting.\nOur PDF export freezes the design completely.\nWhat you see on your screen is what the manager receives.\nTotal reliability protecting your engineering efforts.\nFiles preserved with lasting quality and stability.'
    }
  },
  {
    id: '49',
    date: '2026-03-08',
    icon: '📱',
    ar: {
      category: 'الانطباع البصري',
      title: 'معاينة التصميم على الهواتف',
      excerpt: 'جاهزية تامة لشاشات المحمول المختلفة.',
      content: 'يفتح المديرون السير أحياناً من هواتفهم.\nقوالبنا تضمن حدوداً آمنة للخطوط والأحجام.\nتبدو سيرتك متناسقة وواضحة بكل الأجهزة.\nجاهزية للإبهار في أي وقت ومكان.\nتصميم متجاوب وذكي للغاية.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Design Preview on Mobile Phones',
      excerpt: 'Complete readiness for various mobile screens.',
      content: 'Managers sometimes open CVs on their phones.\nOur templates ensure safe boundaries for fonts and sizes.\nYour CV looks harmonious and clear on all devices.\nReady to impress anytime and anywhere.\nA highly responsive and smart design.'
    }
  },
  {
    id: '50',
    date: '2026-03-04',
    icon: '🔗',
    ar: {
      category: 'الانطباع البصري',
      title: 'روابط تشعبية نظيفة وقابلة للنقر',
      excerpt: 'روابط لينكد إن مختصرة ومباشرة.',
      content: 'الروابط الطويلة المليئة بالأرقام تشوه الملف.\nخصصنا روابطك لتعرض اسمك بوضوح تام.\nتتيح أداتنا روابط قابلة للنقر بملف الـ PDF.\nيسهل وصولهم لملفك الرقمي بسلاسة.\nاحترافية تدمج الورقي بالرقمي.'
    },
    en: {
      category: 'Visual Impression',
      title: 'Clean and Clickable Hyperlinks',
      excerpt: 'Short and direct LinkedIn links.',
      content: 'Long URLs filled with numbers distort the file.\nWe customized your links to show your name clearly.\nOur tool enables clickable links in the PDF file.\nMakes it easy to access your digital profile smoothly.\nProfessionalism merging paper with digital.'
    }
  },
  {
    id: '51',
    date: '2026-02-28',
    icon: '🎯',
    ar: {
      category: 'المهارات والقدرات',
      title: 'تخصيص المهارات لمتطلبات الشاغر',
      excerpt: 'اختر ما يصرخ بأنك الشخص المناسب.',
      content: 'لا تدرج كل مهاراتك بشكل عشوائي ومشتت.\nركز على المهارات المذكورة بالإعلان الوظيفي.\nاثبت فهمك لمتطلبات الشركة الدقيقة.\nانتقاء يعكس وعيك واحترافيتك المهنية.\nمهارات موجهة نحو الهدف بدقة.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Customizing Skills for Vacancy Requirements',
      excerpt: 'Choose what screams that you are the right person.',
      content: 'Do not list all your skills randomly and disjointedly.\nFocus on the skills mentioned in the job ad.\nProve your understanding of the company\'s exact needs.\nSelection reflects your awareness and professional caliber.\nSkills accurately directed towards the goal.'
    }
  },
  {
    id: '52',
    date: '2026-02-24',
    icon: '🧠',
    ar: {
      category: 'المهارات والقدرات',
      title: 'التوازن بين المهارات التقنية والناعمة',
      excerpt: 'اجمع بين البرامج والقدرات الشخصية.',
      content: 'الشركة توظف إنساناً وليس آلة صماء.\nوازن بين الأدوات التقنية ومهارات التواصل.\nأظهر قدرتك على التفاوض والعمل تحت ضغط.\nشخصية متكاملة وقادرة على الاندماج.\nتنوع يبرز قدراتك الشاملة.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Balance Between Technical and Soft Skills',
      excerpt: 'Combine software with personal abilities.',
      content: 'The company hires a human, not a deaf machine.\nBalance technical tools with communication skills.\nShow your ability to negotiate and work under pressure.\nA well-rounded personality capable of integrating.\nVariety that highlights your comprehensive abilities.'
    }
  },
  {
    id: '53',
    date: '2026-02-20',
    icon: '✅',
    ar: {
      category: 'المهارات والقدرات',
      title: 'إثبات المهارات الناعمة بالمواقف',
      excerpt: 'ادعم ادعاءاتك بأمثلة حقيقية بالخبرات.',
      content: 'كتابة مهارة التواصل لا تكفي وحدها.\nاربط المهارة بموقف حقيقي بقسم الخبرة.\nبرهن على قدرتك بحل النزاعات وإدارة الوقت.\nصدق يدعمه الفعل والواقع العملي.\nمصداقية تامة أمام مسؤولي التوظيف.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Proving Soft Skills with Situations',
      excerpt: 'Support your claims with real examples in experiences.',
      content: 'Writing "communication skill" alone is not enough.\nLink the skill to a real situation in the experience section.\nProve your ability to resolve conflicts and manage time.\nTruth backed by action and practical reality.\nTotal credibility in front of recruiters.'
    }
  },
  {
    id: '54',
    date: '2026-02-16',
    icon: '🌐',
    ar: {
      category: 'المهارات والقدرات',
      title: 'تحديد مستويات اللغات بصدق',
      excerpt: 'تجنب المبالغة لتنجو من اختبارات المقابلة.',
      content: 'المبالغة بمستوى اللغة قنبلة موقوتة.\nاستخدم معايير أداتنا الواضحة لتحديد مستواك.\nمحادثة ممتازة أو كتابة متوسطة بصدق.\nالشفافية تبني الثقة منذ اللحظة الأولى.\nوضوح يحميك من الإحراج المستقبلي.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Stating Language Levels Honestly',
      excerpt: 'Avoid exaggeration to survive interview tests.',
      content: 'Exaggerating language levels is a ticking time bomb.\nUse our tool\'s clear standards to determine your level.\nExcellent conversation or intermediate writing, honestly.\nTransparency builds trust from the very first moment.\nClarity protects you from future embarrassment.'
    }
  },
  {
    id: '55',
    date: '2026-02-12',
    icon: '⭐',
    ar: {
      category: 'المهارات والقدرات',
      title: 'تجنب أشرطة التقدم المضللة',
      excerpt: 'النجوم والنسب تطرح تساؤلات سلبية.',
      content: 'تقييم مهاراتك بنجوم يفتح باباً للشكوك.\nما الذي ينقصك لتكمل النجمة الأخيرة؟\nنعتمد سرد المهارات النصي المباشر.\nإما أنك تتقن المهارة أو تسعى لتطويرها.\nوضوح يبعد الشكوك غير الضرورية.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Avoiding Misleading Progress Bars',
      excerpt: 'Stars and percentages raise negative questions.',
      content: 'Rating your skills with stars opens the door to doubts.\nWhat are you lacking to complete that last star?\nWe rely on direct text-based skill listing.\nYou either master the skill or are seeking to develop it.\nClarity removes unnecessary doubts.'
    }
  },
  {
    id: '56',
    date: '2026-02-08',
    icon: '🔄',
    ar: {
      category: 'المهارات والقدرات',
      title: 'المهارات القابلة للانتقال لتغيير المسار',
      excerpt: 'ركز على المشتركة لتغيير مجالك بثقة.',
      content: 'الانتقال لمجال جديد يتطلب مهارات مشتركة.\nسلط الضوء على الإدارة والتخطيط والتنظيم.\nقدرات تنتقل معك لأي قطعت عمل آخر.\nتبرر تغييرك لمسارك المهني باحترافية.\nمهارات مرنة تفتح لك أبواباً جديدة.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Transferable Skills for Career Shifts',
      excerpt: 'Focus on shared ones to change fields confidently.',
      content: 'Moving to a new field requires shared skills.\nHighlight management, planning, and organization.\nAbilities that transfer with you to any other sector.\nProfessionally justifies your career path change.\nFlexible skills that open new doors for you.'
    }
  },
  {
    id: '57',
    date: '2026-02-04',
    icon: '🗂️',
    ar: {
      category: 'المهارات والقدرات',
      title: 'تصنيف المهارات في مجموعات منظمة',
      excerpt: 'برمجة، تصميم، ولغات بتبويبات واضحة.',
      content: 'القائمة العشوائية تصعب عملية القراءة.\nرتب مهاراتك ضمن فواصل منطقية وواضحة.\nمهارات تقنية، أدوات، وقدرات إدارية.\nتعكس شخصية منظمة ومرتبة الأفكار.\nاستيعاب سريع من قبل القارئ.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Categorizing Skills in Organized Groups',
      excerpt: 'Programming, design, languages in clear tabs.',
      content: 'A random list makes the reading process difficult.\nArrange your skills within logical and clear dividers.\nTechnical skills, tools, and administrative abilities.\nReflects an organized personality with neat thoughts.\nQuick comprehension by the reader.'
    }
  },
  {
    id: '58',
    date: '2026-01-31',
    icon: '⚡',
    ar: {
      category: 'المهارات والقدرات',
      title: 'التحديث المستمر لأسماء التقنيات',
      excerpt: 'واكب أحدث الإصدارات وتخلص من القديم.',
      content: 'ذكر برامج قديمة يعكس معرفة متأخرة.\nراجع سيرتك دورياً عبر أداتنا السريعة.\nتأكد من إدراج التقنيات الأكثر طلباً بالسوق.\nكن مطلعاً على كل جديد في مجالك.\nتحديثات تعكس حيوية واستمرارية.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Continuous Updating of Tech Names',
      excerpt: 'Keep up with the latest versions and drop the old.',
      content: 'Mentioning old software reflects outdated knowledge.\nReview your CV periodically via our fast tool.\nEnsure including the most in-demand tech in the market.\nBe aware of everything new in your field.\nUpdates reflecting vitality and continuity.'
    }
  },
  {
    id: '59',
    date: '2026-01-27',
    icon: '🏅',
    ar: {
      category: 'المهارات والقدرات',
      title: 'ربط المهارة بشهادة معتمدة',
      excerpt: 'ضمان الجودة عبر شهادات الشركات الكبرى.',
      content: 'لا تترك مهاراتك كادعاءات فارغة ومجردة.\nاربطها بشهادات معتمدة من جوجل ومايكروسوفت.\nتمثل ضمان الجودة لمدير التوظيف.\nتختصر الكثير من أسئلة الاختبارات التقنية.\nتوثيق يرفع مصداقيتك أضعافاً.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Linking Skill to a Certified Degree',
      excerpt: 'Quality assurance via major company certificates.',
      content: 'Do not leave your skills as empty, abstract claims.\nLink them to certificates from Google and Microsoft.\nThey represent quality assurance for the hiring manager.\nIt cuts short many technical test questions.\nDocumentation that raises your credibility manifold.'
    }
  },
  {
    id: '60',
    date: '2026-01-23',
    icon: '🚫',
    ar: {
      category: 'المهارات والقدرات',
      title: 'تجنب الكلمات المبتذلة والمستهلكة',
      excerpt: 'دع إنجازاتك تتحدث بدلاً من الكليشيهات.',
      content: 'كلمات مثل مبدع وشغوف فقدت معناها تماماً.\nمديرو التوظيف يملون من قراءتها تكراراً.\nاستبدل الكليشيهات بالحقائق والأرقام.\nالحقائق لا تكذب وتثبت كفاءتك بصدق.\nلغة واقعية تخاطب العقول.'
    },
    en: {
      category: 'Skills and Abilities',
      title: 'Avoiding Cliché and Overused Words',
      excerpt: 'Let your achievements speak instead of clichés.',
      content: 'Words like "creative" and "passionate" lost meaning completely.\nHiring managers get bored reading them repeatedly.\nReplace clichés with facts and numbers.\nFacts don\'t lie and prove your competence truly.\nRealistic language that speaks to minds.'
    }
  },
  {
    id: '61',
    date: '2026-01-19',
    icon: '❌',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'تفادي الأخطاء الإملائية القاتلة',
      excerpt: 'خطأ مطبعي واحد قد يعرضك للرفض الفوري.',
      content: 'تبحث الشركات عن أي ذريعة لتقليل الأعداد.\nالأخطاء الإملائية هي أسهل سبب للاستبعاد.\nراجع سيرتك واقرأها بصوت عالٍ دائماً.\nاحمِ جهدك من الهفوات النحوية المزعجة.\nدقة تنبئ عن اهتمامك بالتفاصيل.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Avoiding Fatal Spelling Mistakes',
      excerpt: 'One typo can expose you to instant rejection.',
      content: 'Companies look for any excuse to reduce applicant numbers.\nSpelling mistakes are the easiest reason for elimination.\nReview your CV and always read it out loud.\nProtect your effort from annoying grammatical slips.\nAccuracy indicating your attention to details.'
    }
  },
  {
    id: '62',
    date: '2026-01-15',
    icon: '🛑',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'تجنب إدراج معلومات شخصية مفرطة',
      excerpt: 'الحالة الاجتماعية والديانة لا تفيد سيرتك.',
      content: 'السيرة مستند مهني بحت وخالٍ من الخصوصيات.\nالتفاصيل الزائدة تفتح باباً للتحيز المقصود.\nاكتفِ بالاسم ورابط الملف وطرق الاتصال.\nنوفر حقولاً مخصصة للبيانات الأساسية فقط.\nاحمِ خصوصيتك وابتعد عن الحشو.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Avoiding Excessive Personal Info',
      excerpt: 'Marital status and religion do not benefit your CV.',
      content: 'A CV is a purely professional document free of private details.\nExcessive details open the door to intentional bias.\nStick to name, profile link, and contact methods.\nWe provide dedicated fields for basic data only.\nProtect your privacy and stay away from filler.'
    }
  },
  {
    id: '63',
    date: '2026-01-11',
    icon: '📧',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'استخدام بريد إلكتروني مهني ونظيف',
      excerpt: 'تخلص من البريد الطفولي والعشوائي.',
      content: 'البريد الطفولي يدمر فرصك قبل القراءة.\nأنشئ بريداً يتكون من اسمك الأول والأخير.\nتعديل بسيط يرفع احترافيتك بشكل فوري.\nعنوان يعكس نضجك وهويتك الرقمية بجدية.\nبداية صحيحة للتواصل المهني.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Using a Clean, Professional Email',
      excerpt: 'Get rid of childish and random emails.',
      content: 'A childish email ruins your chances before reading.\nCreate an email consisting of your first and last name.\nA simple edit instantly raises your professionalism.\nAn address reflecting your maturity and serious digital identity.\nA correct start for professional communication.'
    }
  },
  {
    id: '64',
    date: '2026-01-07',
    icon: '💾',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'تسمية الملف بصيغة احترافية واضحة',
      excerpt: 'تجنب إرسال ملفات بأسماء عشوائية مبهمة.',
      content: 'ملفات باسم Document1 تضيع بالمجلدات.\nاستخدم اسمك والمسمى الوظيفي لأرشفة سهلة.\nتولد أداتنا أسماء نظيفة عند التحميل.\nيسهل على المدير معرفة صاحب الملف فوراً.\nترتيب يبدأ من اسم الملف نفسه.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Naming the File Professionally',
      excerpt: 'Avoid sending files with vague, random names.',
      content: 'Files named "Document1" get lost in folders.\nUse your name and job title for easy archiving.\nOur tool generates clean names upon downloading.\nMakes it easy for the manager to know the file owner instantly.\nOrganization that starts from the file name itself.'
    }
  },
  {
    id: '65',
    date: '2026-01-03',
    icon: '🗑️',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'حذف عبارة المراجع متوفرة عند الطلب',
      excerpt: 'عبارة قديمة تستهلك مساحة بلا فائدة.',
      content: 'تعلم الشركات أنها قادرة لطلب المراجع.\nاستهلاك الأسطر بهذه العبارة لم يعد مجدياً.\nاستغل المساحة لإضافة إنجاز أو مهارة جديدة.\nطور سيرتك بتجاوز الجمل الاستهلاكية القديمة.\nاستغلال أمثل لكل مساحة متاحة.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Deleting "References Available Upon Request"',
      excerpt: 'An old phrase consuming useless space.',
      content: 'Companies know they are capable of requesting references.\nConsuming lines with this phrase is no longer viable.\nUse the space to add a new achievement or skill.\nDevelop your CV by bypassing old consumable sentences.\nOptimal utilization of every available space.'
    }
  },
  {
    id: '66',
    date: '2025-12-30',
    icon: '📋',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'عدم النسخ الحرفي لإعلان الوظيفة',
      excerpt: 'النقل الحرفي يظهرك كشخص مزيف وغير صادق.',
      content: 'النسخ الحرفي للإعلان يكشفه النظام والمدير.\nعليك استيعاب روح الإعلان وصياغته بأسلوبك.\nأبرز الكلمات المفتاحية ضمن إنجازاتك الحقيقية.\nمصداقية تعكس فهمك الفعلي للمتطلبات.\nابعد عن الخداع واكتب بلسانك.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Not Literally Copying the Job Ad',
      excerpt: 'Literal copying makes you look fake and dishonest.',
      content: 'Literal copying of the ad is exposed by the system and manager.\nYou must grasp the spirit of the ad and phrase it in your style.\nHighlight keywords within your real achievements.\nCredibility reflecting your actual understanding of requirements.\nStay away from deception and write in your own words.'
    }
  },
  {
    id: '67',
    date: '2025-12-26',
    icon: '🤥',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'الصدق بمهاراتك وتجنب المبالغة',
      excerpt: 'الكذب يوصلك للمقابلة ويسقطك بالاتفاق التقني.',
      content: 'ادعاء إتقان لغة لا تعرفها قنبلة موقوتة.\nالخبرات ستختبرك بعمق في المراحل القادمة.\nالفشل بالاختبار يضعك بالقائمة السوداء للأبد.\nكن صادقاً وأظهر سرعة تعلمك بمرونة.\nالشفافية تقيك السقوط المدوي.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Honesty in Skills and Avoiding Exaggeration',
      excerpt: 'Lies get you the interview but fail the tech test.',
      content: 'Claiming mastery of an unknown language is a time bomb.\nExperts will test you deeply in upcoming stages.\nFailing the test puts you on the blacklist forever.\nBe honest and show your fast learning flexibility.\nTransparency protects you from a resounding fall.'
    }
  },
  {
    id: '68',
    date: '2025-12-22',
    icon: '🔑',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'الالتزام بمصطلحات الصناعة المتداولة',
      excerpt: 'غياب مصطلحات مجالك يثير الشكوك حولك.',
      content: 'كل مجال عمل يمتلك مصطلحاته التقنية الخاصة.\nغيابها يوحي بأنك بعيد عن سوق التخصص.\nاطعم خبراتك بالمصطلحات المعترف بها.\nتحدث بطلاقة لغة السوق ومقاييسه.\nاحترافية تثبت انخراطك الحقيقي.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Sticking to Common Industry Terms',
      excerpt: 'Absence of field terminology raises doubts about you.',
      content: 'Every work field has its own technical terminology.\nIts absence suggests you are far from the specialty market.\nFeed your experiences with recognized terms.\nSpeak fluently the language of the market and its metrics.\nProfessionalism proving your real involvement.'
    }
  },
  {
    id: '69',
    date: '2025-12-18',
    icon: '✏️',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'تجنب خلط أنواع خطوط متعددة ومزعجة',
      excerpt: 'استخدم نوعاً أو نوعين كحد أقصى للملف.',
      content: 'خلط الخطوط يجعل سيرتك كقائمة طعام.\nنظامنا يقيدك بخيارات خطوط متناسقة إيجابياً.\nينقذك من فوضى التنسيق واختيار الأحجام.\nمظهر يجمع الأناقة وراحة القراءة معاً.\nتنسيق موحد ومريح للعين.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Avoiding Mixing Multiple Annoying Fonts',
      excerpt: 'Use one or two fonts maximum for the file.',
      content: 'Mixing fonts makes your CV look like a menu.\nOur system limits you to positively harmonious font choices.\nSaves you from formatting chaos and size selection.\nA look that combines elegance and reading comfort together.\nA unified and eye-pleasing layout.'
    }
  },
  {
    id: '70',
    date: '2025-12-14',
    icon: '✉️',
    ar: {
      category: 'أخطاء قاتلة',
      title: 'إرفاق السيرة برسالة تغطية مختصرة',
      excerpt: 'تجنب إرسال إيميل فارغ بارد وبلا روح.',
      content: 'إرسال السيرة بإيميل فارغ تصرف غير محبب.\nاكتب رسالة تعريفية قصيرة ومرحبة.\nلخص لماذا تريد الانضمام لفريقهم باختصار.\nتكمل اللمسة الإنسانية صورتك الاحترافية.\nبداية دافئة تفتح الأبواب الموصدة.'
    },
    en: {
      category: 'Fatal Mistakes',
      title: 'Attaching a Brief Cover Letter',
      excerpt: 'Avoid sending an empty, cold, soulless email.',
      content: 'Sending a CV in an empty email is frowned upon.\nWrite a short, welcoming introductory message.\nBriefly summarize why you want to join their team.\nThe human touch completes your professional image.\nA warm start opens locked doors.'
    }
  },
  {
    id: '71',
    date: '2025-12-10',
    icon: '🎯',
    ar: {
      category: 'ما بعد السيرة',
      title: 'السيرة تذكرة عبور وليست الوظيفة',
      excerpt: 'المقابلة هي الحاسب الحقيقي للقبول.',
      content: 'نجاح سيرتك يجلب لك دعوة المقابلة فقط.\nالهدف هو دخول الاختبار الشخصي بثقة.\nجهز أمثلة حية تدعم كل كلمة كتبتها.\nحول نجاح التصميم لنجاح بالمقابلة.\nالسيرة مفتاح الباب والعمل مهارتك.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'CV is a Ticket, Not the Job',
      excerpt: 'The interview is the real decider for acceptance.',
      content: 'The success of your CV only gets you the interview invite.\nThe goal is to enter the personal test with confidence.\nPrepare live examples to support every word you wrote.\nTurn design success into interview success.\nThe CV is the door key and the job is your skill.'
    }
  },
  {
    id: '72',
    date: '2025-12-06',
    icon: '🧠',
    ar: {
      category: 'ما بعد السيرة',
      title: 'مطابقة إجاباتك مع سيرتك الذاتية',
      excerpt: 'تذكر كل رقم وتفصيلة قمت بتدوينها بملفك.',
      content: 'سيبني المدير أسئلته على ما كتبته بيديك.\nالتلعثم عند سؤالك عن مشروع يدمر مصداقيتك.\nاقرأ سيرتك بدقة قبل حضور أي مقابلة.\nكن جاهزاً لسرد قصة كل سطر مدون.\nتطابق يثبت صدق محتواك المهني.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Matching Your Answers with Your CV',
      excerpt: 'Remember every number and detail you wrote in your file.',
      content: 'The manager will build questions on what you wrote.\nStuttering when asked about a project ruins credibility.\nRead your CV carefully before attending any interview.\nBe ready to tell the story of every written line.\nA match that proves the truth of your professional content.'
    }
  },
  {
    id: '73',
    date: '2025-12-02',
    icon: '🔍',
    ar: {
      category: 'ما بعد السيرة',
      title: 'البحث العميق عن الشركة المستهدفة',
      excerpt: 'اعرف منتجاتهم وتحدياتهم لتبدو مستشاراً.',
      content: 'ادخل المقابلة محاملاً بمعلومات الشركة.\nمن هم منافسوهم وما هي أحدث مشاريعهم؟\nاربط مهارات سيرتك بمشاكلهم القائمة.\nتظهر كمستشار جاهز للحل وليس طالباً.\nبحث يعكس اهتمامك الحقيقي بالانضمام.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Deep Research on the Target Company',
      excerpt: 'Know their products and challenges to look like a consultant.',
      content: 'Enter the interview armed with company info.\nWho are their competitors and what are their latest projects?\nLink your CV skills to their existing problems.\nYou appear as a consultant ready to solve, not a student.\nResearch reflecting your real interest in joining.'
    }
  },
  {
    id: '74',
    date: '2025-11-28',
    icon: '❓',
    ar: {
      category: 'ما بعد السيرة',
      title: 'تجهيز أسئلة ذكية خاصة بك',
      excerpt: 'لا تغادر دون طرح سؤال ذكي بنهاية اللقاء.',
      content: 'الإجابة بـ لا أملك أسئلة تعكس قلة شغفك.\nاسأل عن بيئة العمل والتحديات القائمة.\nأسئلة تعكس تفكيرك الاستراتيجي ووعيك.\nأظهر ثقتك واهتمامك الحقيقي بالفريق.\nنهاية مقابلة تترك انطباعاً لا يُنسى.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Preparing Your Own Smart Questions',
      excerpt: 'Do not leave without asking a smart question at the end.',
      content: 'Answering with "I have no questions" reflects low passion.\nAsk about the work environment and current challenges.\nQuestions reflecting your strategic thinking and awareness.\nShow your confidence and real interest in the team.\nAn interview ending that leaves an unforgettable impression.'
    }
  },
  {
    id: '75',
    date: '2025-11-24',
    icon: '👔',
    ar: {
      category: 'ما بعد السيرة',
      title: 'لغة الجسد الواثقة والمحترفة',
      excerpt: 'مظهرك وثقتك يغلفان صورتك المهنية.',
      content: 'سيرتك تخلق توقعات عالية لدى اللجنة.\nلا تخذلهم بلغة جسد ضعيفة أو مترددة.\nتدرب على المصافحة القوية والتواصل.\nجلوس مريح ومحترف يعكس ثباتك.\nمظهر يترجم قوة محتوى سيرتك.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Confident and Professional Body Language',
      excerpt: 'Your appearance and confidence wrap your professional image.',
      content: 'Your CV creates high expectations for the committee.\nDo not let them down with weak or hesitant body language.\nPractice a firm handshake and eye contact.\nA comfortable and professional posture reflects your stability.\nAn appearance translating the strength of your CV content.'
    }
  },
  {
    id: '76',
    date: '2025-11-20',
    icon: '⭐',
    ar: {
      category: 'ما بعد السيرة',
      title: 'استخدام منهجية STAR للإجابة',
      excerpt: 'موقف، مهمة، إجراء، ونتيجة للإقناع.',
      content: 'سرد القصص يتطلب منهجية واضحة ومنظمة.\nاشرح الموقف والمهمة والخطوات المتبعة.\nاختم بالنتيجة الإيجابية التي تحققت فعلاً.\nاربط إجابتك بما دونته في سيرتك الذاتية.\nإجابات مقنعة ومنهجية لا تقبل الشك.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Using the STAR Method for Answering',
      excerpt: 'Situation, Task, Action, and Result for persuasion.',
      content: 'Storytelling requires a clear and organized methodology.\nExplain the situation, task, and steps taken.\nConclude with the positive result that was actually achieved.\nLink your answer to what you wrote in your CV.\nConvincing and methodical answers that leave no doubt.'
    }
  },
  {
    id: '77',
    date: '2025-11-16',
    icon: '💌',
    ar: {
      category: 'ما بعد السيرة',
      title: 'إرسال رسالة شكر بعد المقابلة',
      excerpt: 'إيميل قصير يرسخ اسمك بذاكرة اللجان.',
      content: 'أرسل رسالة شكر قصيرة بعد المقابلة بساعات.\nأعد التأكيد على حماسك للانضمام للفريق.\nلمسة إنسانية تبرز رُقيك واحترافيتك.\nتكمل الصورة المشرقة التي رسمتها سيرتك.\nتفاصيل بسيطة تصنع فارقاً كبيراً.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Sending a Thank You Email After Interview',
      excerpt: 'A short email anchoring your name in committees memories.',
      content: 'Send a short thank you note hours after the interview.\nReiterate your enthusiasm to join the team.\nA human touch highlighting your class and professionalism.\nCompletes the bright picture drawn by your CV.\nSimple details that make a massive difference.'
    }
  },
  {
    id: '78',
    date: '2025-11-12',
    icon: '💪',
    ar: {
      category: 'ما بعد السيرة',
      title: 'كيف تتعامل بنضج مع الرفض؟',
      excerpt: 'اطلب تغذية راجعة لتطور أداءك مستقبلاً.',
      content: 'الرفض ليس نهاية المطاف المهني أبداً.\nرد بلباقة واطلب معرفة جوانب التحسين.\nرد ناضج قد يبقيك بملفاتهم لفرص أخرى.\nتعلم من كل تجربة لتكون أقوى بالمرة القادمة.\nمرونة نفسية وعقلية عالية.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'How to Deal Maturely with Rejection?',
      excerpt: 'Ask for feedback to develop your future performance.',
      content: 'Rejection is never the end of the professional road.\nRespond politely and ask to know areas for improvement.\nA mature reply might keep you in their files for other chances.\nLearn from every experience to be stronger next time.\nHigh psychological and mental resilience.'
    }
  },
  {
    id: '79',
    date: '2025-11-08',
    icon: '🌐',
    ar: {
      category: 'ما بعد السيرة',
      title: 'مزامنة وتحديث حساب لينكد إن',
      excerpt: 'اجعل حسابك الرقمي مطابقاً لسيرتك.',
      content: 'سيبحثون عنك بلينكد إن بعد إعجابهم بملفك.\nالتعارض بين التواريخ يفقدك المصداقية فوراً.\nتأكد من مطابقة حسابك الرقمي لسيرتك.\nتحديثات دورية تعكس مساراً مهنياً واحداً.\nهوية رقمية متناسقة ونظيفة.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Syncing and Updating LinkedIn Account',
      excerpt: 'Make your digital account match your CV.',
      content: 'They will search for you on LinkedIn after liking your file.\nConflict in dates loses your credibility instantly.\nEnsure your digital account matches your CV.\nPeriodic updates reflecting a single career path.\nA consistent and clean digital identity.'
    }
  },
  {
    id: '80',
    date: '2025-11-04',
    icon: '🚀',
    ar: {
      category: 'ما بعد السيرة',
      title: 'التطور المستمر هو غاية النجاح',
      excerpt: 'استمر بتعلم مهارات جديدة لترتقي.',
      content: 'السيرة العظيمة تعكس مسيرة متطورة حقاً.\nاستثمر بذاتك وتعلم تقنيات ولغات جديدة.\nستكون أداتنا دائماً هنا لترجمة تطورك.\nتصميم هندسي يخطف الأنظار باستمرار.\nمسار مهني صاعد بلا حدود.'
    },
    en: {
      category: 'Beyond the CV',
      title: 'Continuous Development is the Ultimate Success',
      excerpt: 'Keep learning new skills to elevate.',
      content: 'A great CV reflects a truly evolving journey.\nInvest in yourself and learn new technologies and languages.\nOur tool will always be here to translate your evolution.\nAn engineering design that constantly catches the eye.\nAn endlessly rising career path.'
    }
  }
];

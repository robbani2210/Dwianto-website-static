"""
Seed script to add multilingual translations to existing blog posts.
Updates all 10 blog posts with Arabic, Chinese, and Spanish translations.
"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).parent / '.env'
load_dotenv(env_path)

MONGO_URL = os.environ.get('MONGO_URL')
DB_NAME = os.environ.get('DB_NAME')

# Translations keyed by slug
TRANSLATIONS = {
    "complete-guide-fdi-indonesia-2025": {
        "ar": {
            "title": "الدليل الشامل للاستثمار الأجنبي المباشر في إندونيسيا 2025",
            "excerpt": "كل ما تحتاج لمعرفته حول الاستثمار الأجنبي المباشر في إندونيسيا: الأطر التنظيمية، هياكل الملكية، وفرص القطاعات الرئيسية.",
            "meta_description": "دليل شامل للاستثمار الأجنبي المباشر في إندونيسيا يغطي الأطر التنظيمية وإنشاء PT PMA وتحليل القطاعات.",
            "keywords": ["الاستثمار الأجنبي المباشر إندونيسيا", "إنشاء PT PMA", "قوانين الاستثمار الإندونيسية"],
            "content": "<h2>نظرة عامة على مشهد الاستثمار الأجنبي المباشر في إندونيسيا</h2><p>تمثل إندونيسيا أكبر اقتصاد في جنوب شرق آسيا مع ناتج محلي إجمالي يتجاوز تريليون دولار، وتوفر فرصاً كبيرة للمستثمرين الأجانب. يوفر قانون الاستثمار المعدل وقائمة الأعمال الإيجابية إطاراً أكثر شفافية لتدفقات رأس المال الأجنبي.</p><h2>الإطار التنظيمي</h2><p>يجب على المستثمرين الأجانب إنشاء كيان PT PMA (شركة ذات استثمار أجنبي) للعمل في إندونيسيا. تشمل العملية تسجيل الشركة لدى وزارة القانون وحقوق الإنسان والحصول على التراخيص التجارية المناسبة من نظام OSS.</p><h2>القطاعات الرئيسية للاستثمار</h2><p>تشمل القطاعات ذات الأولوية التصنيع والاقتصاد الرقمي والسياحة والبنية التحتية. يقدم كل قطاع حوافز ضريبية ومزايا تنظيمية فريدة للمستثمرين الأجانب المؤهلين.</p><h2>هياكل الملكية</h2><p>قدمت قائمة الأعمال الإيجابية لعام 2021 تغييرات كبيرة على قيود الملكية الأجنبية. يُسمح الآن بنسبة 100% ملكية أجنبية في العديد من القطاعات، مع بعض الاستثناءات في المجالات الاستراتيجية.</p>"
        },
        "zh": {
            "title": "2025年印尼外国直接投资完全指南",
            "excerpt": "了解印尼外国直接投资的方方面面：监管框架、所有权结构和关键行业机会。",
            "meta_description": "印尼外国直接投资综合指南，涵盖监管框架、PT PMA设立和行业分析。",
            "keywords": ["印尼外国直接投资", "PT PMA设立", "印尼投资法"],
            "content": "<h2>印尼外国直接投资格局概述</h2><p>印尼是东南亚最大的经济体，GDP超过1万亿美元，为外国投资者提供了巨大的机遇。修订后的投资法和正面投资清单为外国资本流入提供了更加透明的框架。</p><h2>监管框架</h2><p>外国投资者必须设立PT PMA（外资公司）实体才能在印尼运营。该过程包括在法律和人权部注册公司并从OSS系统获取相应的营业执照。</p><h2>重点投资领域</h2><p>优先发展领域包括制造业、数字经济、旅游业和基础设施。每个领域都为合格的外国投资者提供独特的税收优惠和监管优势。</p><h2>所有权结构</h2><p>2021年正面投资清单对外国所有权限制做出了重大变更。许多行业现在允许100%外资所有权，仅在战略领域有部分例外。</p>"
        },
        "es": {
            "title": "Guía Completa de Inversión Extranjera Directa en Indonesia 2025",
            "excerpt": "Todo lo que necesita saber sobre la IED en Indonesia: marcos regulatorios, estructuras de propiedad y oportunidades sectoriales clave.",
            "meta_description": "Guía completa de inversión extranjera directa en Indonesia que cubre marcos regulatorios, establecimiento de PT PMA y análisis sectorial.",
            "keywords": ["IED Indonesia", "establecimiento PT PMA", "leyes de inversión Indonesia"],
            "content": "<h2>Panorama de la IED en Indonesia</h2><p>Indonesia, la economía más grande del sudeste asiático con un PIB superior a 1 billón de dólares, ofrece oportunidades significativas para inversores extranjeros. La ley de inversión revisada y la Lista Positiva de Inversión proporcionan un marco más transparente para los flujos de capital extranjero.</p><h2>Marco Regulatorio</h2><p>Los inversores extranjeros deben establecer una entidad PT PMA (empresa de inversión extranjera) para operar en Indonesia. El proceso incluye el registro de la empresa ante el Ministerio de Derecho y Derechos Humanos y la obtención de las licencias comerciales correspondientes del sistema OSS.</p><h2>Sectores Clave de Inversión</h2><p>Los sectores prioritarios incluyen manufactura, economía digital, turismo e infraestructura. Cada sector ofrece incentivos fiscales únicos y ventajas regulatorias para inversores extranjeros calificados.</p><h2>Estructuras de Propiedad</h2><p>La Lista Positiva de Inversión de 2021 introdujo cambios significativos en las restricciones de propiedad extranjera. Ahora se permite el 100% de propiedad extranjera en muchos sectores, con algunas excepciones en áreas estratégicas.</p>"
        }
    },
    "pt-pma-setup-guide-foreign-investors": {
        "ar": {
            "title": "إنشاء PT PMA: الدليل الأساسي للمستثمرين الأجانب",
            "excerpt": "دليل خطوة بخطوة لإنشاء شركة PT PMA في إندونيسيا، بما في ذلك متطلبات رأس المال ووثائق التسجيل والجداول الزمنية.",
            "meta_description": "دليل عملي لإنشاء PT PMA في إندونيسيا للمستثمرين الأجانب.",
            "keywords": ["إنشاء PT PMA", "تسجيل شركة إندونيسيا", "استثمار أجنبي"],
            "content": "<h2>فهم هياكل PT PMA</h2><p>PT PMA هي الهيكل القانوني القياسي للشركات المملوكة للأجانب في إندونيسيا. يتيح للمستثمرين الأجانب امتلاك وتشغيل الأعمال التجارية مباشرة في البلاد مع حماية كاملة بموجب القانون الإندونيسي.</p><h2>متطلبات رأس المال</h2><p>الحد الأدنى لخطة الاستثمار لشركة PT PMA هو 10 مليارات روبية إندونيسية (حوالي 640,000 دولار أمريكي)، مع حد أدنى لرأس المال المدفوع يبلغ 10 مليارات أيضاً. قد تنطبق متطلبات محددة حسب القطاع.</p><h2>عملية التسجيل</h2><p>تتضمن العملية عادةً خمس مراحل رئيسية: الموافقة المبدئية من خلال نظام OSS، وصياغة عقد التأسيس، والتسجيل لدى وزارة القانون، والحصول على رقم دافع الضرائب، والحصول على رخصة العمل.</p>"
        },
        "zh": {
            "title": "PT PMA设立：外国投资者基本指南",
            "excerpt": "在印尼设立PT PMA的分步指南，包括资本要求、注册文件和时间表。",
            "meta_description": "外国投资者在印尼设立PT PMA的实用指南。",
            "keywords": ["PT PMA设立", "印尼公司注册", "外国投资"],
            "content": "<h2>了解PT PMA结构</h2><p>PT PMA是印尼外资企业的标准法律结构。它允许外国投资者在印尼法律的全面保护下直接拥有和经营业务。</p><h2>资本要求</h2><p>PT PMA的最低投资计划为100亿印尼盾（约64万美元），最低实缴资本也为100亿印尼盾。可能适用特定行业的额外要求。</p><h2>注册流程</h2><p>该流程通常包括五个关键阶段：通过OSS系统获得初步批准、起草公司章程、在法律部注册、获取税务识别号和获得营业执照。</p>"
        },
        "es": {
            "title": "Establecimiento de PT PMA: Guía Esencial para Inversores Extranjeros",
            "excerpt": "Guía paso a paso para establecer una PT PMA en Indonesia, incluyendo requisitos de capital, documentación y plazos.",
            "meta_description": "Guía práctica para establecer una PT PMA en Indonesia para inversores extranjeros.",
            "keywords": ["establecimiento PT PMA", "registro empresa Indonesia", "inversión extranjera"],
            "content": "<h2>Entendiendo las Estructuras PT PMA</h2><p>PT PMA es la estructura legal estándar para empresas de propiedad extranjera en Indonesia. Permite a los inversores extranjeros poseer y operar negocios directamente en el país con plena protección bajo la ley indonesia.</p><h2>Requisitos de Capital</h2><p>El plan de inversión mínimo para una PT PMA es de 10 mil millones de IDR (aproximadamente $640,000 USD), con un capital mínimo desembolsado también de 10 mil millones de IDR.</p><h2>Proceso de Registro</h2><p>El proceso típicamente involucra cinco etapas clave: aprobación preliminar a través del sistema OSS, redacción de escritura de constitución, registro ante el Ministerio de Derecho, obtención del número de identificación fiscal y obtención de la licencia comercial.</p>"
        }
    },
    "ma-advisory-indonesia-market-overview": {
        "ar": {
            "title": "استشارات الاندماج والاستحواذ في إندونيسيا: نظرة عامة على السوق والفرص",
            "excerpt": "تحليل شامل لسوق الاندماج والاستحواذ في إندونيسيا، بما في ذلك حجم الصفقات واتجاهات القطاعات والتوقعات.",
            "meta_description": "نظرة عامة على سوق الاندماج والاستحواذ في إندونيسيا والفرص للمستشارين والمستثمرين.",
            "keywords": ["اندماج واستحواذ إندونيسيا", "استشارات الاستحواذ", "سوق الاندماج"],
            "content": "<h2>مشهد الاندماج والاستحواذ في إندونيسيا</h2><p>شهد سوق الاندماج والاستحواذ في إندونيسيا نمواً ملحوظاً، مدفوعاً بالتحول الرقمي والمستثمرين الاستراتيجيين الذين يبحثون عن فرص في أكبر اقتصاد في جنوب شرق آسيا.</p><h2>اتجاهات القطاعات الرئيسية</h2><p>القطاعات الأكثر نشاطاً تشمل التكنولوجيا والخدمات المالية والرعاية الصحية والسلع الاستهلاكية. كل قطاع يقدم ديناميكيات فريدة من حيث التقييم والهيكلة التنظيمية.</p><h2>الاعتبارات الرئيسية للصفقات</h2><p>تتطلب صفقات الاندماج والاستحواذ في إندونيسيا فهماً عميقاً للتنظيم المحلي ومعايير الحوكمة والفروق الثقافية في التفاوض. يعد التخطيط الضريبي وهيكلة الملكية من العوامل الحاسمة.</p>"
        },
        "zh": {
            "title": "印尼并购咨询：市场概述与机遇",
            "excerpt": "印尼并购市场的全面分析，包括交易规模、行业趋势和展望。",
            "meta_description": "印尼并购市场概述及顾问和投资者的机遇。",
            "keywords": ["印尼并购", "收购咨询", "并购市场"],
            "content": "<h2>印尼并购格局</h2><p>印尼并购市场经历了显著增长，受数字化转型和寻求东南亚最大经济体机会的战略投资者推动。</p><h2>关键行业趋势</h2><p>最活跃的行业包括科技、金融服务、医疗保健和消费品。每个行业在估值和监管结构方面都有独特的动态。</p><h2>交易关键考虑因素</h2><p>印尼的并购交易需要深入了解当地法规、治理标准和谈判中的文化细微差别。税务规划和所有权结构是关键因素。</p>"
        },
        "es": {
            "title": "Asesoría de Fusiones y Adquisiciones en Indonesia: Panorama del Mercado y Oportunidades",
            "excerpt": "Análisis integral del mercado de fusiones y adquisiciones en Indonesia, incluyendo volumen de transacciones, tendencias sectoriales y perspectivas.",
            "meta_description": "Panorama del mercado de fusiones y adquisiciones de Indonesia y oportunidades para asesores e inversores.",
            "keywords": ["fusiones adquisiciones Indonesia", "asesoría adquisiciones", "mercado M&A"],
            "content": "<h2>El Panorama de Fusiones y Adquisiciones en Indonesia</h2><p>El mercado de fusiones y adquisiciones de Indonesia ha experimentado un crecimiento notable, impulsado por la transformación digital y los inversores estratégicos que buscan oportunidades en la economía más grande del sudeste asiático.</p><h2>Tendencias Sectoriales Clave</h2><p>Los sectores más activos incluyen tecnología, servicios financieros, salud y bienes de consumo. Cada sector presenta dinámicas únicas en valoración y estructuración regulatoria.</p><h2>Consideraciones Clave para Transacciones</h2><p>Las transacciones de fusiones y adquisiciones en Indonesia requieren una comprensión profunda de la regulación local, los estándares de gobernanza y los matices culturales en la negociación.</p>"
        }
    },
    "indonesia-digital-economy-investment-2025": {
        "ar": {
            "title": "الاقتصاد الرقمي في إندونيسيا: فرص الاستثمار 2025",
            "excerpt": "استكشاف الاقتصاد الرقمي المزدهر في إندونيسيا والفرص الاستثمارية في التكنولوجيا المالية والتجارة الإلكترونية والخدمات الرقمية.",
            "meta_description": "فرص الاستثمار في الاقتصاد الرقمي لإندونيسيا عبر التكنولوجيا المالية والتجارة الإلكترونية والخدمات الرقمية.",
            "keywords": ["الاقتصاد الرقمي إندونيسيا", "استثمار التكنولوجيا المالية", "التجارة الإلكترونية"],
            "content": "<h2>ثورة إندونيسيا الرقمية</h2><p>مع أكثر من 200 مليون مستخدم للإنترنت وانتشار الهاتف المحمول المتزايد، تشهد إندونيسيا تحولاً رقمياً هائلاً. من المتوقع أن يصل الاقتصاد الرقمي إلى 146 مليار دولار بحلول 2025.</p><h2>فرص التكنولوجيا المالية</h2><p>يعد قطاع التكنولوجيا المالية من أسرع القطاعات نمواً، حيث يوفر حلول الدفع الرقمي والإقراض والتأمين الرقمي لسكان لا يزال كثير منهم بدون حسابات مصرفية.</p>"
        },
        "zh": {
            "title": "印尼数字经济：2025年投资机遇",
            "excerpt": "探索印尼蓬勃发展的数字经济以及金融科技、电子商务和数字服务领域的投资机会。",
            "meta_description": "印尼数字经济在金融科技、电子商务和数字服务领域的投资机会。",
            "keywords": ["印尼数字经济", "金融科技投资", "电子商务"],
            "content": "<h2>印尼数字革命</h2><p>拥有超过2亿互联网用户和不断增长的移动普及率，印尼正经历大规模数字化转型。数字经济预计到2025年将达到1460亿美元。</p><h2>金融科技机遇</h2><p>金融科技是增长最快的领域之一，为仍有大量无银行账户人口提供数字支付、借贷和数字保险解决方案。</p>"
        },
        "es": {
            "title": "Economía Digital de Indonesia: Oportunidades de Inversión 2025",
            "excerpt": "Exploración de la floreciente economía digital de Indonesia y las oportunidades de inversión en fintech, comercio electrónico y servicios digitales.",
            "meta_description": "Oportunidades de inversión en la economía digital de Indonesia a través de fintech, comercio electrónico y servicios digitales.",
            "keywords": ["economía digital Indonesia", "inversión fintech", "comercio electrónico"],
            "content": "<h2>La Revolución Digital de Indonesia</h2><p>Con más de 200 millones de usuarios de internet y una creciente penetración móvil, Indonesia está experimentando una transformación digital masiva. Se espera que la economía digital alcance los $146 mil millones para 2025.</p><h2>Oportunidades Fintech</h2><p>El sector fintech es uno de los de más rápido crecimiento, ofreciendo soluciones de pagos digitales, préstamos y seguros digitales para una población que en gran parte aún no tiene acceso bancario.</p>"
        }
    },
    "corporate-restructuring-strategies-uncertainty": {
        "ar": {
            "title": "استراتيجيات إعادة هيكلة الشركات في ظل عدم اليقين الاقتصادي",
            "excerpt": "الأساليب والإطارات لإعادة هيكلة الشركات الناجحة خلال الأوقات الاقتصادية الصعبة.",
            "meta_description": "استراتيجيات إعادة هيكلة الشركات في ظل التحديات الاقتصادية.",
            "keywords": ["إعادة هيكلة الشركات", "إعادة هيكلة الديون", "استراتيجية التحول"],
            "content": "<h2>التنقل في عدم اليقين الاقتصادي</h2><p>تتطلب إعادة هيكلة الشركات خلال الأوقات الاقتصادية المضطربة مقاربة منهجية تتناول الأهداف المالية والتشغيلية والاستراتيجية في آنٍ واحد.</p><h2>أدوات إعادة هيكلة الديون</h2><p>تشمل الآليات الشائعة إعادة جدولة الديون وتحويل الديون إلى أسهم والتفاوض مع الدائنين. يعتمد اختيار الأداة على الوضع المحدد وأهداف أصحاب المصلحة.</p>"
        },
        "zh": {
            "title": "经济不确定性下的企业重组策略",
            "excerpt": "经济困难时期成功进行企业重组的方法和框架。",
            "meta_description": "经济挑战中的企业重组策略。",
            "keywords": ["企业重组", "债务重组", "转型策略"],
            "content": "<h2>应对经济不确定性</h2><p>在经济动荡时期的企业重组需要系统性方法，同时解决财务、运营和战略目标。</p><h2>债务重组工具</h2><p>常见机制包括债务重新安排、债转股和债权人谈判。工具选择取决于具体情况和利益相关者目标。</p>"
        },
        "es": {
            "title": "Estrategias de Reestructuración Corporativa en Incertidumbre Económica",
            "excerpt": "Enfoques y marcos para la reestructuración corporativa exitosa durante tiempos económicos difíciles.",
            "meta_description": "Estrategias de reestructuración corporativa durante desafíos económicos.",
            "keywords": ["reestructuración corporativa", "reestructuración de deuda", "estrategia de recuperación"],
            "content": "<h2>Navegando la Incertidumbre Económica</h2><p>La reestructuración corporativa durante tiempos económicos turbulentos requiere un enfoque sistemático que aborde simultáneamente los objetivos financieros, operacionales y estratégicos.</p><h2>Instrumentos de Reestructuración de Deuda</h2><p>Los mecanismos comunes incluyen reprogramación de deuda, conversión de deuda a capital y negociación con acreedores. La elección del instrumento depende de la situación específica.</p>"
        }
    },
    "family-business-succession-planning-indonesia": {
        "ar": {
            "title": "تخطيط التعاقب في الشركات العائلية في إندونيسيا",
            "excerpt": "استراتيجيات وأفضل الممارسات لتخطيط التعاقب في المؤسسات العائلية الإندونيسية.",
            "meta_description": "تخطيط التعاقب وانتقال القيادة في الشركات العائلية الإندونيسية.",
            "keywords": ["تعاقب الأعمال العائلية", "تخطيط التعاقب", "شركات عائلية إندونيسيا"],
            "content": "<h2>تحدي التعاقب في إندونيسيا</h2><p>تشكل الشركات العائلية أكثر من 95% من الأعمال التجارية في إندونيسيا. مع وصول الجيل الأول إلى سن التقاعد، أصبح تخطيط التعاقب أولوية حرجة.</p><h2>بناء إطار التعاقب</h2><p>يتضمن التخطيط الفعال للتعاقب أربعة محاور رئيسية: تطوير القيادة، وهيكلة الحوكمة، والتخطيط المالي، والمواءمة العائلية.</p>"
        },
        "zh": {
            "title": "印尼家族企业继承规划",
            "excerpt": "印尼家族企业继承规划的策略和最佳实践。",
            "meta_description": "印尼家族企业的继承规划和领导层过渡。",
            "keywords": ["家族企业继承", "继承规划", "印尼家族企业"],
            "content": "<h2>印尼的继承挑战</h2><p>家族企业占印尼企业的95%以上。随着第一代创始人接近退休年龄，继承规划成为关键优先事项。</p><h2>构建继承框架</h2><p>有效的继承规划涉及四个关键支柱：领导力发展、治理结构、财务规划和家族协调。</p>"
        },
        "es": {
            "title": "Planificación de Sucesión en Empresas Familiares de Indonesia",
            "excerpt": "Estrategias y mejores prácticas para la planificación de sucesión en empresas familiares indonesias.",
            "meta_description": "Planificación de sucesión y transición de liderazgo en empresas familiares indonesias.",
            "keywords": ["sucesión empresa familiar", "planificación sucesión", "empresas familiares Indonesia"],
            "content": "<h2>El Desafío de la Sucesión en Indonesia</h2><p>Las empresas familiares representan más del 95% de los negocios en Indonesia. Con la primera generación acercándose a la jubilación, la planificación de sucesión se ha convertido en una prioridad crítica.</p><h2>Construyendo un Marco de Sucesión</h2><p>La planificación efectiva de sucesión involucra cuatro pilares clave: desarrollo de liderazgo, estructuración de gobernanza, planificación financiera y alineación familiar.</p>"
        }
    },
    "due-diligence-indonesia-ma-transactions": {
        "ar": {
            "title": "العناية الواجبة في معاملات الاندماج والاستحواذ الإندونيسية",
            "excerpt": "الإطار الشامل لإجراء العناية الواجبة الفعالة في صفقات الاندماج والاستحواذ في إندونيسيا.",
            "meta_description": "إطار العناية الواجبة لمعاملات الاندماج والاستحواذ الإندونيسية.",
            "keywords": ["العناية الواجبة إندونيسيا", "اندماج واستحواذ", "تدقيق الصفقات"],
            "content": "<h2>أهمية العناية الواجبة الشاملة</h2><p>في المعاملات الإندونيسية، تعد العناية الواجبة الشاملة أمراً بالغ الأهمية نظراً للتعقيدات التنظيمية الفريدة وهياكل الملكية ومتطلبات الامتثال التي يمكن أن تؤثر بشكل كبير على تقييم الصفقة وهيكلتها.</p><h2>المجالات الرئيسية للتحقيق</h2><p>تشمل مجالات التركيز الرئيسية: التدقيق القانوني والتنظيمي، والتحليل المالي، والتقييم التشغيلي، والامتثال الضريبي، والتقييم البيئي.</p>"
        },
        "zh": {
            "title": "印尼并购交易中的尽职调查",
            "excerpt": "在印尼并购交易中进行有效尽职调查的综合框架。",
            "meta_description": "印尼并购交易的尽职调查框架。",
            "keywords": ["印尼尽职调查", "并购", "交易审查"],
            "content": "<h2>全面尽职调查的重要性</h2><p>在印尼交易中，由于独特的监管复杂性、所有权结构和合规要求，全面的尽职调查至关重要，这些因素可能会显著影响交易估值和结构。</p><h2>关键调查领域</h2><p>主要关注领域包括：法律和监管审查、财务分析、运营评估、税务合规和环境评估。</p>"
        },
        "es": {
            "title": "Due Diligence en Transacciones de Fusiones y Adquisiciones Indonesias",
            "excerpt": "Marco integral para realizar due diligence efectiva en transacciones de fusiones y adquisiciones en Indonesia.",
            "meta_description": "Marco de due diligence para transacciones de fusiones y adquisiciones indonesias.",
            "keywords": ["due diligence Indonesia", "fusiones adquisiciones", "revisión transacciones"],
            "content": "<h2>La Importancia del Due Diligence Integral</h2><p>En las transacciones indonesias, el due diligence integral es crítico debido a las complejidades regulatorias únicas, las estructuras de propiedad y los requisitos de cumplimiento que pueden impactar significativamente la valoración y estructuración de la transacción.</p><h2>Áreas Clave de Investigación</h2><p>Las áreas de enfoque principales incluyen: auditoría legal y regulatoria, análisis financiero, evaluación operacional, cumplimiento fiscal y evaluación ambiental.</p>"
        }
    },
    "private-equity-investment-indonesia-landscape": {
        "ar": {
            "title": "استثمار الأسهم الخاصة في إندونيسيا: المشهد والفرص",
            "excerpt": "نظرة شاملة على مشهد الأسهم الخاصة في إندونيسيا واتجاهات الاستثمار والقطاعات الواعدة.",
            "meta_description": "مشهد الأسهم الخاصة في إندونيسيا والفرص الاستثمارية.",
            "keywords": ["أسهم خاصة إندونيسيا", "استثمار PE", "رأس المال الاستثماري"],
            "content": "<h2>نضوج سوق الأسهم الخاصة</h2><p>شهدت صناعة الأسهم الخاصة في إندونيسيا نضجاً ملحوظاً، مع تزايد عدد الصناديق وحجم الصفقات. تجذب إندونيسيا المستثمرين المؤسسيين بفضل النمو السكاني والطبقة المتوسطة المتوسعة.</p><h2>القطاعات المستهدفة</h2><p>تشمل القطاعات الأكثر جاذبية التكنولوجيا والخدمات المالية والرعاية الصحية والتعليم والسلع الاستهلاكية.</p>"
        },
        "zh": {
            "title": "印尼私募股权投资：格局与机遇",
            "excerpt": "印尼私募股权格局、投资趋势和有前途行业的全面概述。",
            "meta_description": "印尼私募股权格局和投资机会。",
            "keywords": ["印尼私募股权", "PE投资", "风险投资"],
            "content": "<h2>私募股权市场的成熟</h2><p>印尼的私募股权行业经历了显著的成熟，基金数量和交易规模都在增加。凭借人口增长和不断扩大的中产阶级，印尼吸引了机构投资者。</p><h2>目标行业</h2><p>最具吸引力的行业包括科技、金融服务、医疗保健、教育和消费品。</p>"
        },
        "es": {
            "title": "Inversión de Capital Privado en Indonesia: Panorama y Oportunidades",
            "excerpt": "Visión integral del panorama de capital privado en Indonesia, tendencias de inversión y sectores prometedores.",
            "meta_description": "Panorama de capital privado en Indonesia y oportunidades de inversión.",
            "keywords": ["capital privado Indonesia", "inversión PE", "capital de riesgo"],
            "content": "<h2>Maduración del Mercado de Capital Privado</h2><p>La industria de capital privado de Indonesia ha experimentado una maduración notable, con un número creciente de fondos y tamaño de transacciones. Indonesia atrae a inversores institucionales gracias al crecimiento poblacional y la clase media en expansión.</p><h2>Sectores Objetivo</h2><p>Los sectores más atractivos incluyen tecnología, servicios financieros, salud, educación y bienes de consumo.</p>"
        }
    },
    "regulatory-compliance-foreign-investors-indonesia": {
        "ar": {
            "title": "إطار الامتثال التنظيمي للمستثمرين الأجانب في إندونيسيا",
            "excerpt": "دليل شامل حول متطلبات الامتثال التنظيمي والحوكمة للشركات المملوكة للأجانب في إندونيسيا.",
            "meta_description": "دليل الامتثال التنظيمي للمستثمرين الأجانب في إندونيسيا.",
            "keywords": ["امتثال تنظيمي إندونيسيا", "حوكمة الشركات", "امتثال PT PMA"],
            "content": "<h2>التنقل في المشهد التنظيمي</h2><p>يتطلب الامتثال التنظيمي في إندونيسيا فهماً للعديد من الأطر المتداخلة بما في ذلك قوانين الاستثمار وقوانين الشركات وتنظيمات العمل والالتزامات الضريبية.</p><h2>متطلبات إعداد التقارير</h2><p>يجب على شركات PT PMA الالتزام بمتطلبات إعداد التقارير الدورية لعدة جهات تنظيمية بما في ذلك هيئة تنسيق الاستثمار ووزارة القانون والسلطات الضريبية.</p>"
        },
        "zh": {
            "title": "印尼外国投资者监管合规框架",
            "excerpt": "印尼外资企业监管合规和治理要求的综合指南。",
            "meta_description": "印尼外国投资者的监管合规指南。",
            "keywords": ["印尼监管合规", "公司治理", "PT PMA合规"],
            "content": "<h2>导航监管格局</h2><p>印尼的监管合规需要了解多个重叠的框架，包括投资法、公司法、劳动法规和税务义务。</p><h2>报告要求</h2><p>PT PMA公司必须遵守多个监管机构的定期报告要求，包括投资协调委员会、法律部和税务机关。</p>"
        },
        "es": {
            "title": "Marco de Cumplimiento Regulatorio para Inversores Extranjeros en Indonesia",
            "excerpt": "Guía integral sobre requisitos de cumplimiento regulatorio y gobernanza para empresas de propiedad extranjera en Indonesia.",
            "meta_description": "Guía de cumplimiento regulatorio para inversores extranjeros en Indonesia.",
            "keywords": ["cumplimiento regulatorio Indonesia", "gobernanza corporativa", "cumplimiento PT PMA"],
            "content": "<h2>Navegando el Panorama Regulatorio</h2><p>El cumplimiento regulatorio en Indonesia requiere comprensión de múltiples marcos superpuestos incluyendo leyes de inversión, leyes corporativas, regulaciones laborales y obligaciones fiscales.</p><h2>Requisitos de Informes</h2><p>Las empresas PT PMA deben cumplir con requisitos de informes periódicos ante múltiples reguladores incluyendo la Junta Coordinadora de Inversiones, el Ministerio de Derecho y las autoridades fiscales.</p>"
        }
    },
    "valuation-methodologies-indonesia-ma": {
        "ar": {
            "title": "منهجيات التقييم لمعاملات الاندماج والاستحواذ الإندونيسية",
            "excerpt": "تحليل مفصل لأساليب ومنهجيات التقييم المستخدمة في معاملات الاندماج والاستحواذ في إندونيسيا.",
            "meta_description": "منهجيات التقييم المستخدمة في معاملات الاندماج والاستحواذ الإندونيسية.",
            "keywords": ["تقييم الاندماج والاستحواذ", "تقييم الأعمال إندونيسيا", "التحليل المالي"],
            "content": "<h2>مقاربات التقييم في السياق الإندونيسي</h2><p>يتطلب التقييم في إندونيسيا تعديل المنهجيات العالمية لتعكس ديناميكيات السوق المحلية ومخاطر العملة والأطر التنظيمية.</p><h2>الأساليب الشائعة</h2><p>تشمل الأساليب الرئيسية تحليل التدفقات النقدية المخصومة ومقارنات الشركات المماثلة والمعاملات السابقة وتقييم الأصول الصافية.</p>"
        },
        "zh": {
            "title": "印尼并购交易估值方法论",
            "excerpt": "印尼并购交易中使用的估值方法和方法论的详细分析。",
            "meta_description": "印尼并购交易中使用的估值方法论。",
            "keywords": ["并购估值", "印尼企业估值", "财务分析"],
            "content": "<h2>印尼背景下的估值方法</h2><p>印尼的估值需要调整全球方法论以反映当地市场动态、货币风险和监管框架。</p><h2>常用方法</h2><p>主要方法包括折现现金流分析、可比公司比较、先例交易和净资产估值。</p>"
        },
        "es": {
            "title": "Metodologías de Valoración para Transacciones de Fusiones y Adquisiciones en Indonesia",
            "excerpt": "Análisis detallado de los enfoques y metodologías de valoración utilizados en transacciones de fusiones y adquisiciones en Indonesia.",
            "meta_description": "Metodologías de valoración utilizadas en transacciones de fusiones y adquisiciones indonesias.",
            "keywords": ["valoración M&A", "valoración empresas Indonesia", "análisis financiero"],
            "content": "<h2>Enfoques de Valoración en el Contexto Indonesio</h2><p>La valoración en Indonesia requiere ajustar las metodologías globales para reflejar las dinámicas del mercado local, riesgos cambiarios y marcos regulatorios.</p><h2>Métodos Comunes</h2><p>Los métodos principales incluyen análisis de flujo de caja descontado, comparables de empresas, transacciones precedentes y valoración de activos netos.</p>"
        }
    }
}


async def seed_translations():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]

    for slug, translations in TRANSLATIONS.items():
        result = await db.blogs.update_one(
            {"slug": slug},
            {"$set": {"translations": translations}}
        )
        if result.modified_count > 0:
            print(f"  Updated: {slug}")
        elif result.matched_count > 0:
            print(f"  Already up to date: {slug}")
        else:
            print(f"  NOT FOUND: {slug}")

    count = await db.blogs.count_documents({"translations": {"$exists": True}})
    print(f"\nTotal blogs with translations: {count}")
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_translations())

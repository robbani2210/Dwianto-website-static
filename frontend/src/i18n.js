import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        insights: 'Insights',
        contact: 'Contact'
      },
      hero: {
        slide1: {
          title: 'Strategic Advisory in M&A and Cross-Border Investment',
          subtitle: 'Bridging Global Capital with Indonesian Opportunity',
          cta: 'Explore Our Services'
        },
        slide2: {
          title: 'Institutional Capital Structuring',
          subtitle: 'Engineering Transactions That Create Sustainable Value',
          cta: 'View Our Approach'
        },
        slide3: {
          title: 'Cross-Border Transaction Excellence',
          subtitle: 'Navigating Complex Regulatory Frameworks with Precision',
          cta: 'Discover Success Stories'
        }
      },
      stats: {
        label: 'Our Track Record',
        title: 'Proven Excellence in Capital Advisory',
        experience: 'Years of Combined Experience',
        experienceDesc: 'Deep expertise across international markets',
        transaction: 'Transaction Value',
        transactionDesc: 'Successfully closed deals and mandates',
        mandates: 'Cross-Border Mandates',
        mandatesDesc: 'Active international engagements',
        clients: 'Institutional Clients',
        clientsDesc: 'Corporations, PE firms, and family offices'
      },
      owner: {
        label: 'Leadership',
        name: 'Ijlal Falih Dwianto',
        title: 'Managing Partner',
        bio1: 'Ijlal Falih Dwianto is a Law graduate specializing in International Business Law. With M&A, private equity, and compliance experience across international law offices and globally exposed family businesses, he drives strategic cross-border transactions from Jakarta.',
        bio2: 'A licensed lawyer and market analyst, Dwianto bridges local insight with global execution to unlock measurable value for clients.',
        specialization: 'Specialization',
        specializationValue: 'International Business Law',
        credentials: 'Credentials',
        credentialsValue: 'Licensed Lawyer',
        expertise: 'Expertise',
        expertiseValue: 'M&A & Private Equity',
        focus: 'Focus',
        focusValue: 'Cross-Border Transactions'
      },
      services: {
        label: 'Our Services',
        title: 'Integrated Advisory Framework',
        description: 'We combine financial modeling, governance structuring, regulatory navigation, and negotiation strategy into one disciplined advisory approach for cross-border transactions.',
        ma: {
          title: 'Mergers & Acquisitions',
          description: 'Buy-side and sell-side advisory for cross-border M&A transactions involving Indonesian companies and foreign investors.'
        },
        crossBorder: {
          title: 'Cross-Border Investment',
          description: 'Strategic market entry solutions including PT PMA establishment and ownership structuring for foreign investors.'
        },
        compliance: {
          title: 'Legal & Financial Compliance',
          description: 'Governance structuring and regulatory compliance advisory for investor-backed Indonesian companies.'
        }
      },
      successStories: {
        label: 'Case Studies',
        title: 'Success Stories',
        description: 'Representative transactions demonstrating our integrated advisory approach across M&A, market entry, and restructuring engagements.',
        viewAll: 'View All Cases'
      },
      cta: {
        title: 'Ready to Discuss Your Transaction?',
        description: 'Schedule a confidential consultation to explore how we can support your cross-border investment or M&A objectives.',
        button: 'Schedule Consultation'
      },
      footer: {
        quickLinks: 'Quick Links',
        contactTitle: 'Contact',
        copyright: 'PT Dwianto Capital Advisory. All rights reserved.'
      },
      valueProposition: {
        label: 'What Makes Us Different',
        title: 'Strategic Partner, Not Just Advisor',
        text1: 'Indonesia offers growth potential, but businesses lack capital, technology, and readiness to scale. Global investors lack local market intelligence and structured entry pathways.',
        text2: 'We don\'t just connect parties. We prepare Indonesian companies to meet international investor standards, curate both sides of the transaction, and engineer structures that make cross-border investment succeed.',
        text3: 'Our integrated framework combines institutional structuring, governance discipline, and cross-border execution—reducing risk and increasing certainty in Indonesia market deals.',
        cta: 'Learn More About Our Approach'
      },
      common: {
        learnMore: 'Learn More'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عن',
        services: 'خدمات',
        portfolio: 'محفظة',
        insights: 'رؤى',
        contact: 'اتصل'
      },
      hero: {
        slide1: {
          title: 'استشارات استراتيجية في الاندماج والاستحواذ والاستثمار عبر الحدود',
          subtitle: 'ربط رأس المال العالمي بالفرص الإندونيسية',
          cta: 'استكشف خدماتنا'
        },
        slide2: {
          title: 'هيكلة رأس المال المؤسسي',
          subtitle: 'هندسة المعاملات التي تخلق قيمة مستدامة',
          cta: 'اطلع على نهجنا'
        },
        slide3: {
          title: 'التميز في المعاملات عبر الحدود',
          subtitle: 'التنقل في الأطر التنظيمية المعقدة بدقة',
          cta: 'اكتشف قصص النجاح'
        }
      },
      stats: {
        label: 'سجلنا الحافل',
        title: 'التميز المثبت في الاستشارات الرأسمالية',
        experience: 'سنوات من الخبرة المشتركة',
        experienceDesc: 'خبرة عميقة عبر الأسواق الدولية',
        transaction: 'قيمة المعاملات',
        transactionDesc: 'صفقات وتفويضات مغلقة بنجاح',
        mandates: 'التفويضات عبر الحدود',
        mandatesDesc: 'ارتباطات دولية نشطة',
        clients: 'العملاء المؤسسيين',
        clientsDesc: 'الشركات وشركات الأسهم الخاصة والمكاتب العائلية'
      },
      owner: {
        label: 'القيادة',
        name: 'إجلال فالح دويانتو',
        title: 'الشريك الإداري',
        bio1: 'إجلال فالح دويانتو خريج قانون متخصص في قانون الأعمال الدولية. مع خبرة في الاندماج والاستحواذ والأسهم الخاصة والامتثال عبر مكاتب القانون الدولية والشركات العائلية المعرضة عالمياً، يقود المعاملات الاستراتيجية عبر الحدود من جاكرتا.',
        bio2: 'محامٍ مرخص ومحلل سوق، يربط دويانتو الرؤية المحلية بالتنفيذ العالمي لفتح قيمة قابلة للقياس للعملاء.',
        specialization: 'التخصص',
        specializationValue: 'قانون الأعمال الدولية',
        credentials: 'الاعتمادات',
        credentialsValue: 'محامٍ مرخص',
        expertise: 'الخبرة',
        expertiseValue: 'الاندماج والاستحواذ والأسهم الخاصة',
        focus: 'التركيز',
        focusValue: 'المعاملات عبر الحدود'
      },
      services: {
        label: 'خدماتنا',
        title: 'إطار استشاري متكامل',
        description: 'نجمع بين النمذجة المالية وهيكلة الحوكمة والملاحة التنظيمية واستراتيجية التفاوض في نهج استشاري منضبط واحد للمعاملات عبر الحدود.',
        ma: {
          title: 'عمليات الاندماج والاستحواذ',
          description: 'استشارات جانب الشراء وجانب البيع لمعاملات الاندماج والاستحواذ عبر الحدود التي تشمل الشركات الإندونيسية والمستثمرين الأجانب.'
        },
        crossBorder: {
          title: 'الاستثمار عبر الحدود',
          description: 'حلول دخول السوق الاستراتيجية بما في ذلك إنشاء PT PMA وهيكلة الملكية للمستثمرين الأجانب.'
        },
        compliance: {
          title: 'الامتثال القانوني والمالي',
          description: 'هيكلة الحوكمة والاستشارات التنظيمية للامتثال للشركات الإندونيسية المدعومة من المستثمرين.'
        }
      },
      successStories: {
        label: 'دراسات الحالة',
        title: 'قصص النجاح',
        description: 'معاملات تمثيلية توضح نهجنا الاستشاري المتكامل عبر الاندماج والاستحواذ ودخول السوق وإعادة الهيكلة.',
        viewAll: 'عرض جميع الحالات'
      },
      cta: {
        title: 'هل أنت مستعد لمناقشة معاملتك؟',
        description: 'حدد موعداً لاستشارة سرية لاستكشاف كيف يمكننا دعم أهدافك الاستثمارية أو الاندماج والاستحواذ عبر الحدود.',
        button: 'حدد موعد استشارة'
      },
      footer: {
        quickLinks: 'روابط سريعة',
        contactTitle: 'اتصل',
        copyright: 'شركة PT Dwianto Capital Advisory. جميع الحقوق محفوظة.'
      },
      valueProposition: {
        label: 'ما يميزنا',
        title: 'شريك استراتيجي، ليس مجرد مستشار',
        text1: 'تقدم إندونيسيا إمكانات نمو، لكن الشركات تفتقر إلى رأس المال والتكنولوجيا والاستعداد للتوسع. يفتقر المستثمرون العالميون إلى معلومات السوق المحلية ومسارات الدخول المنظمة.',
        text2: 'نحن لا نربط الأطراف فقط. نقوم بإعداد الشركات الإندونيسية لتلبية معايير المستثمرين الدوليين، وننظم كلا جانبي المعاملة، ونهندس هياكل تجعل الاستثمار عبر الحدود ناجحاً.',
        text3: 'يجمع إطارنا المتكامل بين الهيكلة المؤسسية وانضباط الحوكمة والتنفيذ عبر الحدود - مما يقلل المخاطر ويزيد اليقين في صفقات السوق الإندونيسية.',
        cta: 'تعرف على المزيد حول نهجنا'
      },
      common: {
        learnMore: 'اعرف المزيد'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于',
        services: '服务',
        portfolio: '作品集',
        insights: '见解',
        contact: '联系'
      },
      hero: {
        slide1: {
          title: '并购与跨境投资战略咨询',
          subtitle: '连接全球资本与印尼机会',
          cta: '探索我们的服务'
        },
        slide2: {
          title: '机构资本结构',
          subtitle: '构建创造可持续价值的交易',
          cta: '查看我们的方法'
        },
        slide3: {
          title: '跨境交易卓越',
          subtitle: '精准驾驭复杂监管框架',
          cta: '发现成功案例'
        }
      },
      stats: {
        label: '我们的业绩记录',
        title: '资本咨询卓越证明',
        experience: '综合经验年数',
        experienceDesc: '跨国际市场的深厚专业知识',
        transaction: '交易价值',
        transactionDesc: '成功完成的交易和授权',
        mandates: '跨境授权',
        mandatesDesc: '活跃的国际业务',
        clients: '机构客户',
        clientsDesc: '企业、私募股权和家族办公室'
      },
      owner: {
        label: '领导力',
        name: 'Ijlal Falih Dwianto',
        title: '管理合伙人',
        bio1: 'Ijlal Falih Dwianto是国际商法专业的法学毕业生。拥有跨国律师事务所和全球家族企业的并购、私募股权和合规经验，从雅加达推动战略性跨境交易。',
        bio2: '作为持牌律师和市场分析师，Dwianto将本地洞察与全球执行相结合，为客户创造可衡量的价值。',
        specialization: '专业',
        specializationValue: '国际商法',
        credentials: '资质',
        credentialsValue: '持牌律师',
        expertise: '专长',
        expertiseValue: '并购与私募股权',
        focus: '重点',
        focusValue: '跨境交易'
      },
      services: {
        label: '我们的服务',
        title: '综合咨询框架',
        description: '我们将财务建模、治理结构、监管导航和谈判策略整合为跨境交易的统一纪律咨询方法。',
        ma: {
          title: '并购',
          description: '涉及印尼公司和外国投资者的跨境并购交易买方和卖方咨询。'
        },
        crossBorder: {
          title: '跨境投资',
          description: '战略市场进入解决方案，包括外国投资者的PT PMA设立和股权结构。'
        },
        compliance: {
          title: '法律与财务合规',
          description: '为投资者支持的印尼公司提供治理结构和监管合规咨询。'
        }
      },
      successStories: {
        label: '案例研究',
        title: '成功案例',
        description: '代表性交易展示我们在并购、市场进入和重组业务中的综合咨询方法。',
        viewAll: '查看所有案例'
      },
      cta: {
        title: '准备讨论您的交易？',
        description: '安排保密咨询，探讨我们如何支持您的跨境投资或并购目标。',
        button: '安排咨询'
      },
      footer: {
        quickLinks: '快速链接',
        contactTitle: '联系',
        copyright: 'PT Dwianto Capital Advisory。保留所有权利。'
      },
      valueProposition: {
        label: '我们的不同之处',
        title: '战略合作伙伴，而非仅仅顾问',
        text1: '印尼提供增长潜力，但企业缺乏资本、技术和扩大规模的准备。全球投资者缺乏本地市场情报和结构化进入路径。',
        text2: '我们不仅仅连接各方。我们准备印尼公司满足国际投资者标准，策划交易双方，并设计使跨境投资成功的结构。',
        text3: '我们的综合框架结合了机构结构、治理纪律和跨境执行——降低风险并增加印尼市场交易的确定性。',
        cta: '了解更多关于我们的方法'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        portfolio: 'Portafolio',
        insights: 'Perspectivas',
        contact: 'Contacto'
      },
      hero: {
        slide1: {
          title: 'Asesoría Estratégica en Fusiones, Adquisiciones e Inversión Transfronteriza',
          subtitle: 'Conectando Capital Global con Oportunidades en Indonesia',
          cta: 'Explore Nuestros Servicios'
        },
        slide2: {
          title: 'Estructuración de Capital Institucional',
          subtitle: 'Ingeniería de Transacciones que Crean Valor Sostenible',
          cta: 'Vea Nuestro Enfoque'
        },
        slide3: {
          title: 'Excelencia en Transacciones Transfronterizas',
          subtitle: 'Navegando Marcos Regulatorios Complejos con Precisión',
          cta: 'Descubra Historias de Éxito'
        }
      },
      stats: {
        label: 'Nuestro Historial',
        title: 'Excelencia Comprobada en Asesoría de Capital',
        experience: 'Años de Experiencia Combinada',
        experienceDesc: 'Profunda experiencia en mercados internacionales',
        transaction: 'Valor de Transacciones',
        transactionDesc: 'Acuerdos y mandatos cerrados exitosamente',
        mandates: 'Mandatos Transfronterizos',
        mandatesDesc: 'Compromisos internacionales activos',
        clients: 'Clientes Institucionales',
        clientsDesc: 'Corporaciones, firmas de PE y oficinas familiares'
      },
      owner: {
        label: 'Liderazgo',
        name: 'Ijlal Falih Dwianto',
        title: 'Socio Director',
        bio1: 'Ijlal Falih Dwianto es graduado en Derecho especializado en Derecho Comercial Internacional. Con experiencia en fusiones y adquisiciones, capital privado y cumplimiento en bufetes internacionales y empresas familiares de exposición global, impulsa transacciones estratégicas transfronterizas desde Yakarta.',
        bio2: 'Abogado licenciado y analista de mercado, Dwianto conecta conocimiento local con ejecución global para desbloquear valor medible para los clientes.',
        specialization: 'Especialización',
        specializationValue: 'Derecho Comercial Internacional',
        credentials: 'Credenciales',
        credentialsValue: 'Abogado Licenciado',
        expertise: 'Experiencia',
        expertiseValue: 'Fusiones, Adquisiciones y Capital Privado',
        focus: 'Enfoque',
        focusValue: 'Transacciones Transfronterizas'
      },
      services: {
        label: 'Nuestros Servicios',
        title: 'Marco de Asesoría Integrada',
        description: 'Combinamos modelado financiero, estructuración de gobernanza, navegación regulatoria y estrategia de negociación en un enfoque de asesoría disciplinado para transacciones transfronterizas.',
        ma: {
          title: 'Fusiones y Adquisiciones',
          description: 'Asesoría de compra y venta para transacciones de fusiones y adquisiciones transfronterizas que involucran empresas indonesias e inversores extranjeros.'
        },
        crossBorder: {
          title: 'Inversión Transfronteriza',
          description: 'Soluciones estratégicas de entrada al mercado incluyendo establecimiento de PT PMA y estructuración de propiedad para inversores extranjeros.'
        },
        compliance: {
          title: 'Cumplimiento Legal y Financiero',
          description: 'Estructuración de gobernanza y asesoría de cumplimiento regulatorio para empresas indonesias respaldadas por inversores.'
        }
      },
      successStories: {
        label: 'Casos de Estudio',
        title: 'Historias de Éxito',
        description: 'Transacciones representativas que demuestran nuestro enfoque de asesoría integrada en fusiones y adquisiciones, entrada al mercado y compromisos de reestructuración.',
        viewAll: 'Ver Todos los Casos'
      },
      cta: {
        title: '¿Listo para Discutir su Transacción?',
        description: 'Programe una consulta confidencial para explorar cómo podemos apoyar sus objetivos de inversión transfronteriza o fusiones y adquisiciones.',
        button: 'Programar Consulta'
      },
      footer: {
        quickLinks: 'Enlaces Rápidos',
        contactTitle: 'Contacto',
        copyright: 'PT Dwianto Capital Advisory. Todos los derechos reservados.'
      },
      valueProposition: {
        label: 'Lo Que Nos Hace Diferentes',
        title: 'Socio Estratégico, No Solo Asesor',
        text1: 'Indonesia ofrece potencial de crecimiento, pero las empresas carecen de capital, tecnología y preparación para escalar. Los inversores globales carecen de inteligencia del mercado local y vías de entrada estructuradas.',
        text2: 'No solo conectamos partes. Preparamos a las empresas indonesias para cumplir con los estándares de inversores internacionales, curamos ambos lados de la transacción e ingenieramos estructuras que hacen exitosa la inversión transfronteriza.',
        text3: 'Nuestro marco integrado combina estructuración institucional, disciplina de gobernanza y ejecución transfronteriza, reduciendo el riesgo y aumentando la certeza en las transacciones del mercado indonesio.',
        cta: 'Conozca Más Sobre Nuestro Enfoque'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
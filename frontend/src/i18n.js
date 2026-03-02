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
        title: 'Bridging Global Capital with Indonesian Opportunity',
        subtitle: 'Strategic Advisory in M&A, Capital Structuring, and Cross-Border Transactions',
        cta: 'Request Consultation'
      },
      stats: {
        experience: 'Years of Experience',
        deals: 'Closed Deals',
        clients: 'Clients Worldwide',
        professionals: 'Professionals'
      },
      footer: {
        copyright: 'PT Dwianto Capital Advisory. All rights reserved.'
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
        title: 'ربط رأس المال العالمي بالفرص الإندونيسية',
        subtitle: 'استشارات استراتيجية في الاندماج والاستحواذ وهيكلة رأس المال والمعاملات عبر الحدود',
        cta: 'طلب استشارة'
      },
      stats: {
        experience: 'سنوات من الخبرة',
        deals: 'صفقات مغلقة',
        clients: 'عملاء في جميع أنحاء العالم',
        professionals: 'محترفون'
      },
      footer: {
        copyright: 'شركة PT Dwianto Capital Advisory. جميع الحقوق محفوظة.'
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
        title: '连接全球资本与印尼机会',
        subtitle: '并购、资本结构和跨境交易的战略咨询',
        cta: '请求咨询'
      },
      stats: {
        experience: '年经验',
        deals: '已完成交易',
        clients: '全球客户',
        professionals: '专业人士'
      },
      footer: {
        copyright: 'PT Dwianto Capital Advisory。保留所有权利。'
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
        title: 'Conectando Capital Global con Oportunidades en Indonesia',
        subtitle: 'Asesoría Estratégica en Fusiones y Adquisiciones, Estructuración de Capital y Transacciones Transfronterizas',
        cta: 'Solicitar Consulta'
      },
      stats: {
        experience: 'Años de Experiencia',
        deals: 'Acuerdos Cerrados',
        clients: 'Clientes en Todo el Mundo',
        professionals: 'Profesionales'
      },
      footer: {
        copyright: 'PT Dwianto Capital Advisory. Todos los derechos reservados.'
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
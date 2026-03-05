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
        viewAll: 'View All Cases',
        transactionValue: 'Transaction Value',
        sector: 'Sector',
        stories: {
          s1: {
            category: 'Cross-Border M&A',
            title: 'Strategic Acquisition of Indonesian Manufacturing Asset',
            description: 'Advised international PE firm on $25M acquisition of manufacturing business. Structured transaction to optimize tax efficiency and regulatory compliance.',
            h1: 'Due diligence coordination',
            h2: 'Regulatory approval management',
            h3: 'Post-acquisition integration support',
            value: '$25M',
            sector: 'Manufacturing'
          },
          s2: {
            category: 'FDI Structuring',
            title: 'PT PMA Establishment for European Technology Firm',
            description: 'Facilitated market entry for European SaaS company through PT PMA establishment, licensing coordination, and operational setup.',
            h1: 'PT PMA structuring',
            h2: 'Business license procurement',
            h3: 'Tax optimization framework',
            value: '$8M Capital',
            sector: 'Technology'
          },
          s3: {
            category: 'Corporate Restructuring',
            title: 'Debt Restructuring for Family-Owned Enterprise',
            description: 'Led comprehensive restructuring of $40M debt facility for Indonesian family business, negotiating with multiple creditor groups.',
            h1: 'Creditor negotiations',
            h2: 'Business plan development',
            h3: 'Operational improvements',
            value: '$40M Debt',
            sector: 'Consumer Goods'
          }
        }
      },
      cta: {
        title: 'Ready to Discuss Your Transaction?',
        description: 'Schedule a confidential consultation to explore how we can support your cross-border investment or M&A objectives.',
        button: 'Schedule Consultation'
      },
      footer: {
        quickLinks: 'Quick Links',
        contactTitle: 'Contact',
        copyright: 'PT Dwianto Capital Advisory. All rights reserved.',
        tagline: 'Strategic Advisory in M&A, Capital Structuring, and Cross-Border Transactions',
        legalName: 'PT Dwianto Capital Advisory'
      },
      valueProposition: {
        label: 'What Makes Us Different',
        title: 'Strategic Partner, Not Just Advisor',
        text1: 'Indonesia offers growth potential, but businesses lack capital, technology, and readiness to scale. Global investors lack local market intelligence and structured entry pathways.',
        text2: "We don't just connect parties. We prepare Indonesian companies to meet international investor standards, curate both sides of the transaction, and engineer structures that make cross-border investment succeed.",
        text3: 'Our integrated framework combines institutional structuring, governance discipline, and cross-border execution\u2014reducing risk and increasing certainty in Indonesia market deals.',
        cta: 'Learn More About Our Approach'
      },
      common: {
        learnMore: 'Learn More',
        visitWebsite: 'Visit Website'
      },
      insights: {
        label: 'Insights & Analysis',
        title: 'Industry Insights',
        description: 'Expert analysis, market intelligence, and strategic perspectives on cross-border investment, M&A transactions, and the Indonesian business landscape.',
        seoTitle: 'Insights - Capital Advisory Analysis & Market Intelligence',
        seoDescription: 'Expert insights on cross-border investment, M&A transactions, and the Indonesian market from Dwianto Capital Advisory.',
        searchPlaceholder: 'Search articles...',
        allCategories: 'All',
        loading: 'Loading articles...',
        noResults: 'No articles found matching your criteria.',
        readArticle: 'Read Article',
        backToInsights: 'Back to Insights',
        notFound: 'Article Not Found',
        minRead: 'min read',
        by: 'By',
        relatedTopics: 'Related Topics'
      },
      about: {
        label: 'About Dwianto Capital Advisory',
        title: 'Independent Strategic Capital Advisory',
        description: 'We specialize in M&A, capital structuring, and cross-border investment transactions for enterprises. Our integrated approach combines financial modeling, governance structuring, regulatory navigation, and negotiation strategy.',
        whoWeAre: {
          title: 'Who We Are',
          text1: 'Dwianto Capital Advisory is an independent strategic capital advisory firm providing integrated legal and financial execution for companies entering or expanding in the Indonesian market.',
          text2: 'We specialize in Foreign Direct Investment, business acquisitions, and capital raises, executing intricate ownership restructures that align international capital with local opportunity.',
          text3: "Our approach is distinctive: we don't just introduce parties. We prepare Indonesian companies to meet international investor standards, curate both sides of the transaction, and manage the entire process to completion."
        },
        problem: {
          label: 'The Core Challenge',
          title: 'Bridging the Indonesia Investment Gap',
          investors: {
            title: 'For Global Investors',
            description: 'Indonesia offers growth potential, but investors lack local market intelligence, reliable partners, and structured entry pathways. Regulatory complexity and governance uncertainty create execution risk.'
          },
          companies: {
            title: 'For Indonesian Companies',
            description: "Businesses have growth ambitions but lack capital, technology, and readiness to scale. Meeting international investor standards requires governance frameworks and financial discipline they haven't developed."
          },
          solution: {
            title: 'Our Solution',
            description: 'We bridge this gap with an integrated advisory framework that prepares companies, structures transactions, navigates regulations, and aligns stakeholder incentives\u2014creating structured, transparent capital inflows that strengthen enterprises.'
          }
        },
        vision: {
          title: 'Our Vision',
          text: 'To become a leading cross-border advisory firm that institutionalizes foreign direct investment into Indonesia, strengthening governance, capital discipline, and long-term enterprise growth.'
        },
        mission: {
          title: 'Our Mission',
          item1: 'Facilitate structured and transparent capital inflows into Indonesia',
          item2: 'Prepare domestic companies to meet international investor standards',
          item3: 'Design and execute cross-border transactions with governance integrity and execution certainty'
        },
        values: {
          label: 'Core Values',
          title: 'What Guides Our Work',
          precision: {
            title: 'Precision',
            description: 'We approach every structure and negotiation with analytical rigor and attention to detail.'
          },
          integrity: {
            title: 'Integrity',
            description: 'We maintain independence, confidentiality, and ethical discipline in all engagements.'
          },
          alignment: {
            title: 'Strategic Alignment',
            description: "We design transactions where all stakeholders' incentives are balanced for mutual success."
          },
          longTerm: {
            title: 'Long-Term Value',
            description: 'We prioritize sustainable partnerships and enterprise growth over short-term deal-making.'
          }
        }
      },
      servicesPage: {
        label: 'Our Services',
        title: 'Integrated Advisory Framework',
        description: 'We combine financial modeling, governance structuring, regulatory navigation, and negotiation strategy into one disciplined advisory approach for cross-border transactions.',
        maFull: {
          title: 'Mergers & Acquisitions',
          description: 'Comprehensive M&A advisory for buy-side and sell-side transactions, equity investments, and joint ventures involving Indonesian companies and foreign investors.'
        },
        crossBorderFull: {
          title: 'Cross-Border Investment & Market Entry',
          description: 'Strategic market entry solutions including PT PMA establishment, ownership structuring, and regulatory compliance for foreign direct investment.'
        },
        complianceFull: {
          title: 'Legal & Financial Compliance',
          description: 'Ongoing governance structuring and regulatory compliance advisory for PT PMA entities and investor-backed Indonesian companies.'
        },
        whyChoose: {
          title: 'Why Clients Choose Dwianto',
          description: 'We combine institutional structuring, governance discipline, and cross-border execution under one integrated advisory framework.',
          qualified: {
            title: 'Qualified Counterparts',
            description: 'Access to pre-screened, institutionally ready Indonesian companies and aligned foreign investors through our curated network.'
          },
          visibility: {
            title: 'Clear Financial Visibility',
            description: 'Comprehensive financial modeling, valuation analysis, and due diligence coordination providing complete transaction transparency.'
          },
          risk: {
            title: 'Reduced Execution Risk',
            description: 'Structured governance frameworks, regulatory compliance management, and transaction oversight from strategy to closing.'
          },
          readiness: {
            title: 'Faster Market Readiness',
            description: 'Legally compliant, capital-efficient entry structures that accelerate operational readiness and reduce regulatory uncertainty.'
          }
        }
      },
      contactPage: {
        label: 'Get In Touch',
        title: 'Schedule Strategic Consultation',
        description: 'Discuss your cross-border investment, M&A, or market entry objectives with our advisory team. All consultations are confidential.',
        info: {
          title: 'Contact Information',
          email: 'Email',
          whatsapp: 'WhatsApp',
          office: 'Office',
          linkedin: 'LinkedIn',
          connectWithUs: 'Connect with us',
          officeHours: {
            title: 'Office Hours',
            text: 'Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)',
            weekend: 'Saturday - Sunday: By Appointment'
          }
        },
        form: {
          title: 'Request Consultation',
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          company: 'Company',
          serviceInterest: 'Service Interest',
          selectService: 'Select a service',
          maAdvisory: 'M&A Advisory',
          crossBorderInvestment: 'Cross-Border Investment & Market Entry',
          legalCompliance: 'Legal & Financial Compliance',
          generalInquiry: 'General Inquiry',
          message: 'Message',
          submit: 'Submit Inquiry',
          submitting: 'Submitting...',
          error: 'Failed to submit form. Please try again or contact us directly.',
          success: {
            title: 'Thank You!',
            text: "We've received your inquiry and will respond within 24 hours.",
            another: 'Submit Another Inquiry'
          }
        }
      },
      credibility: {
        label: 'Portfolio & Experience',
        title: 'Proven Cross-Border Expertise',
        description: 'Our track record demonstrates structured execution across foreign direct investment, M&A transactions, and market entry advisory for international clients.',
        trackRecord: {
          title: 'Transaction Experience'
        },
        projects: {
          fdi: {
            title: 'Foreign Direct Investment Services',
            description: 'Multiple PT PMA establishment projects for international corporations entering the Indonesian market.'
          },
          acquisition: {
            title: 'Acquisition Projects',
            description: 'Cross-border M&A transactions involving Indonesian target companies and foreign strategic investors.'
          },
          mandates: {
            title: 'Ongoing Cross-Border Mandates',
            value: 'Multiple',
            description: 'Active advisory engagements for FDI structuring, M&A transactions, and market entry strategies.'
          }
        },
        partners: {
          label: 'Strategic Partnerships',
          title: 'Trusted Network',
          description: 'We collaborate with leading firms across legal, financial, and strategic advisory domains to deliver comprehensive solutions.',
          pepper: 'Strategic partnership in financial advisory and investment structuring.',
          capitalBridge: 'Cross-border transaction facilitation and market intelligence.',
          nash: 'Legal and regulatory compliance collaboration.'
        },
        expertise: {
          title: 'Structured Execution, Proven Results',
          text: 'Our experience spans multiple sectors and transaction types, always maintaining our commitment to governance integrity, stakeholder alignment, and long-term value creation.'
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
        about: '\u0639\u0646',
        services: '\u062e\u062f\u0645\u0627\u062a',
        portfolio: '\u0645\u062d\u0641\u0638\u0629',
        insights: '\u0631\u0624\u0649',
        contact: '\u0627\u062a\u0635\u0644'
      },
      hero: {
        slide1: {
          title: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
          subtitle: '\u0631\u0628\u0637 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0639\u0627\u0644\u0645\u064a \u0628\u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629',
          cta: '\u0627\u0633\u062a\u0643\u0634\u0641 \u062e\u062f\u0645\u0627\u062a\u0646\u0627'
        },
        slide2: {
          title: '\u0647\u064a\u0643\u0644\u0629 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u064a',
          subtitle: '\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u062e\u0644\u0642 \u0642\u064a\u0645\u0629 \u0645\u0633\u062a\u062f\u0627\u0645\u0629',
          cta: '\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0646\u0647\u062c\u0646\u0627'
        },
        slide3: {
          title: '\u0627\u0644\u062a\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
          subtitle: '\u0627\u0644\u062a\u0646\u0642\u0644 \u0641\u064a \u0627\u0644\u0623\u0637\u0631 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629 \u0628\u062f\u0642\u0629',
          cta: '\u0627\u0643\u062a\u0634\u0641 \u0642\u0635\u0635 \u0627\u0644\u0646\u062c\u0627\u062d'
        }
      },
      stats: {
        label: '\u0633\u062c\u0644\u0646\u0627 \u0627\u0644\u062d\u0627\u0641\u0644',
        title: '\u0627\u0644\u062a\u0645\u064a\u0632 \u0627\u0644\u0645\u062b\u0628\u062a \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0631\u0623\u0633\u0645\u0627\u0644\u064a\u0629',
        experience: '\u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u0629',
        experienceDesc: '\u062e\u0628\u0631\u0629 \u0639\u0645\u064a\u0642\u0629 \u0639\u0628\u0631 \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062f\u0648\u0644\u064a\u0629',
        transaction: '\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a',
        transactionDesc: '\u0635\u0641\u0642\u0627\u062a \u0648\u062a\u0641\u0648\u064a\u0636\u0627\u062a \u0645\u063a\u0644\u0642\u0629 \u0628\u0646\u062c\u0627\u062d',
        mandates: '\u0627\u0644\u062a\u0641\u0648\u064a\u0636\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
        mandatesDesc: '\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u062f\u0648\u0644\u064a\u0629 \u0646\u0634\u0637\u0629',
        clients: '\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u064a\u0646',
        clientsDesc: '\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0648\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u062e\u0627\u0635\u0629 \u0648\u0627\u0644\u0645\u0643\u0627\u062a\u0628 \u0627\u0644\u0639\u0627\u0626\u0644\u064a\u0629'
      },
      owner: {
        label: '\u0627\u0644\u0642\u064a\u0627\u062f\u0629',
        name: '\u0625\u062c\u0644\u0627\u0644 \u0641\u0627\u0644\u062d \u062f\u0648\u064a\u0627\u0646\u062a\u0648',
        title: '\u0627\u0644\u0634\u0631\u064a\u0643 \u0627\u0644\u0625\u062f\u0627\u0631\u064a',
        bio1: '\u0625\u062c\u0644\u0627\u0644 \u0641\u0627\u0644\u062d \u062f\u0648\u064a\u0627\u0646\u062a\u0648 \u062e\u0631\u064a\u062c \u0642\u0627\u0646\u0648\u0646 \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062f\u0648\u0644\u064a\u0629. \u0645\u0639 \u062e\u0628\u0631\u0629 \u0641\u064a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u062e\u0627\u0635\u0629 \u0648\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0639\u0628\u0631 \u0645\u0643\u0627\u062a\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0639\u0627\u0626\u0644\u064a\u0629 \u0627\u0644\u0645\u0639\u0631\u0636\u0629 \u0639\u0627\u0644\u0645\u064a\u0627\u064b\u060c \u064a\u0642\u0648\u062f \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0645\u0646 \u062c\u0627\u0643\u0631\u062a\u0627.',
        bio2: '\u0645\u062d\u0627\u0645\u064d \u0645\u0631\u062e\u0635 \u0648\u0645\u062d\u0644\u0644 \u0633\u0648\u0642\u060c \u064a\u0631\u0628\u0637 \u062f\u0648\u064a\u0627\u0646\u062a\u0648 \u0627\u0644\u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0628\u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0639\u0627\u0644\u0645\u064a \u0644\u0641\u062a\u062d \u0642\u064a\u0645\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633 \u0644\u0644\u0639\u0645\u0644\u0627\u0621.',
        specialization: '\u0627\u0644\u062a\u062e\u0635\u0635',
        specializationValue: '\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062f\u0648\u0644\u064a\u0629',
        credentials: '\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f\u0627\u062a',
        credentialsValue: '\u0645\u062d\u0627\u0645\u064d \u0645\u0631\u062e\u0635',
        expertise: '\u0627\u0644\u062e\u0628\u0631\u0629',
        expertiseValue: '\u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u062e\u0627\u0635\u0629',
        focus: '\u0627\u0644\u062a\u0631\u0643\u064a\u0632',
        focusValue: '\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f'
      },
      services: {
        label: '\u062e\u062f\u0645\u0627\u062a\u0646\u0627',
        title: '\u0625\u0637\u0627\u0631 \u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0645\u062a\u0643\u0627\u0645\u0644',
        description: '\u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0645\u0644\u0627\u062d\u0629 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629 \u0648\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0627\u0644\u062a\u0641\u0627\u0648\u0636 \u0641\u064a \u0646\u0647\u062c \u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0645\u0646\u0636\u0628\u0637 \u0648\u0627\u062d\u062f \u0644\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f.',
        ma: {
          title: '\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
          description: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062c\u0627\u0646\u0628 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u062c\u0627\u0646\u0628 \u0627\u0644\u0628\u064a\u0639 \u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0627\u0644\u062a\u064a \u062a\u0634\u0645\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u0623\u062c\u0627\u0646\u0628.'
        },
        crossBorder: {
          title: '\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
          description: '\u062d\u0644\u0648\u0644 \u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0625\u0646\u0634\u0627\u0621 PT PMA \u0648\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0644\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u0623\u062c\u0627\u0646\u0628.'
        },
        compliance: {
          title: '\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0648\u0627\u0644\u0645\u0627\u0644\u064a',
          description: '\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629 \u0644\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629 \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646.'
        }
      },
      successStories: {
        label: '\u062f\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u062d\u0627\u0644\u0629',
        title: '\u0642\u0635\u0635 \u0627\u0644\u0646\u062c\u0627\u062d',
        description: '\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u062a\u0645\u062b\u064a\u0644\u064a\u0629 \u062a\u0648\u0636\u062d \u0646\u0647\u062c\u0646\u0627 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0639\u0628\u0631 \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0647\u064a\u0643\u0644\u0629.',
        viewAll: '\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0627\u0644\u0627\u062a',
        transactionValue: '\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629',
        sector: '\u0627\u0644\u0642\u0637\u0627\u0639',
        stories: {
          s1: {
            category: '\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
            title: '\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \u0639\u0644\u0649 \u0623\u0635\u0648\u0644 \u062a\u0635\u0646\u064a\u0639\u064a\u0629 \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629',
            description: '\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0644\u0634\u0631\u0643\u0629 \u0623\u0633\u0647\u0645 \u062e\u0627\u0635\u0629 \u062f\u0648\u0644\u064a\u0629 \u0641\u064a \u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0623\u0639\u0645\u0627\u0644 \u062a\u0635\u0646\u064a\u0639\u064a\u0629 \u0628\u0642\u064a\u0645\u0629 25 \u0645\u0644\u064a\u0648\u0646 \u062f\u0648\u0644\u0627\u0631.',
            h1: '\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0639\u0646\u0627\u064a\u0629 \u0627\u0644\u0648\u0627\u062c\u0628\u0629',
            h2: '\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629',
            h3: '\u062f\u0639\u0645 \u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0628\u0639\u062f \u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
            value: '25 \u0645\u0644\u064a\u0648\u0646 \u062f\u0648\u0644\u0627\u0631',
            sector: '\u0627\u0644\u062a\u0635\u0646\u064a\u0639'
          },
          s2: {
            category: '\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a',
            title: '\u0625\u0646\u0634\u0627\u0621 PT PMA \u0644\u0634\u0631\u0643\u0629 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0623\u0648\u0631\u0648\u0628\u064a\u0629',
            description: '\u062a\u0633\u0647\u064a\u0644 \u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642 \u0644\u0634\u0631\u0643\u0629 SaaS \u0623\u0648\u0631\u0648\u0628\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0625\u0646\u0634\u0627\u0621 PT PMA.',
            h1: '\u0647\u064a\u0643\u0644\u0629 PT PMA',
            h2: '\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u062e\u0635\u0629 \u0627\u0644\u0639\u0645\u0644',
            h3: '\u0625\u0637\u0627\u0631 \u0627\u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0636\u0631\u064a\u0628\u064a',
            value: '8 \u0645\u0644\u0627\u064a\u064a\u0646 \u062f\u0648\u0644\u0627\u0631',
            sector: '\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627'
          },
          s3: {
            category: '\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062a',
            title: '\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u062f\u064a\u0648\u0646 \u0644\u0645\u0624\u0633\u0633\u0629 \u0639\u0627\u0626\u0644\u064a\u0629',
            description: '\u0642\u064a\u0627\u062f\u0629 \u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u062a\u0633\u0647\u064a\u0644\u0627\u062a \u062f\u064a\u0648\u0646 \u0628\u0642\u064a\u0645\u0629 40 \u0645\u0644\u064a\u0648\u0646 \u062f\u0648\u0644\u0627\u0631.',
            h1: '\u0645\u0641\u0627\u0648\u0636\u0627\u062a \u0627\u0644\u062f\u0627\u0626\u0646\u064a\u0646',
            h2: '\u062a\u0637\u0648\u064a\u0631 \u062e\u0637\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644',
            h3: '\u0627\u0644\u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629',
            value: '40 \u0645\u0644\u064a\u0648\u0646 \u062f\u0648\u0644\u0627\u0631',
            sector: '\u0627\u0644\u0633\u0644\u0639 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643\u064a\u0629'
          }
        }
      },
      cta: {
        title: '\u0647\u0644 \u0623\u0646\u062a \u0645\u0633\u062a\u0639\u062f \u0644\u0645\u0646\u0627\u0642\u0634\u0629 \u0645\u0639\u0627\u0645\u0644\u062a\u0643\u061f',
        description: '\u062d\u062f\u062f \u0645\u0648\u0639\u062f\u0627\u064b \u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0633\u0631\u064a\u0629 \u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u0627 \u062f\u0639\u0645 \u0623\u0647\u062f\u0627\u0641\u0643 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629.',
        button: '\u062d\u062f\u062f \u0645\u0648\u0639\u062f \u0627\u0633\u062a\u0634\u0627\u0631\u0629'
      },
      footer: {
        quickLinks: '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629',
        contactTitle: '\u0627\u062a\u0635\u0644',
        copyright: 'PT Dwianto Capital Advisory. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
        tagline: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u0647\u064a\u0643\u0644\u0629 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644',
        legalName: 'PT Dwianto Capital Advisory'
      },
      valueProposition: {
        label: '\u0645\u0627 \u064a\u0645\u064a\u0632\u0646\u0627',
        title: '\u0634\u0631\u064a\u0643 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u060c \u0644\u064a\u0633 \u0645\u062c\u0631\u062f \u0645\u0633\u062a\u0634\u0627\u0631',
        text1: '\u062a\u0642\u062f\u0645 \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627 \u0625\u0645\u0643\u0627\u0646\u0627\u062a \u0646\u0645\u0648\u060c \u0644\u0643\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u062a\u0641\u062a\u0642\u0631 \u0625\u0644\u0649 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0648\u0627\u0644\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u0644\u0644\u062a\u0648\u0633\u0639.',
        text2: '\u0646\u062d\u0646 \u0644\u0627 \u0646\u0631\u0628\u0637 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0641\u0642\u0637. \u0646\u0642\u0648\u0645 \u0628\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629 \u0644\u062a\u0644\u0628\u064a\u0629 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646.',
        text3: '\u064a\u062c\u0645\u0639 \u0625\u0637\u0627\u0631\u0646\u0627 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644 \u0628\u064a\u0646 \u0627\u0644\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629 \u0648\u0627\u0646\u0636\u0628\u0627\u0637 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f.',
        cta: '\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064a\u062f \u062d\u0648\u0644 \u0646\u0647\u062c\u0646\u0627'
      },
      common: {
        learnMore: '\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064a\u062f',
        visitWebsite: '\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639'
      },
      insights: {
        label: '\u0631\u0624\u0649 \u0648\u062a\u062d\u0644\u064a\u0644\u0627\u062a',
        title: '\u0631\u0624\u0649 \u0627\u0644\u0635\u0646\u0627\u0639\u0629',
        description: '\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u062e\u0628\u064a\u0631\u0629 \u0648\u0627\u0633\u062a\u062e\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0633\u0648\u0642 \u0648\u0648\u062c\u0647\u0627\u062a \u0646\u0638\u0631 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u062d\u0648\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0648\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630.',
        seoTitle: '\u0631\u0624\u0649 - \u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0631\u0623\u0633\u0645\u0627\u0644\u064a\u0629',
        seoDescription: '\u0631\u0624\u0649 \u062e\u0628\u064a\u0631\u0629 \u062d\u0648\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0648\u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0641\u064a \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a.',
        searchPlaceholder: '\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a...',
        allCategories: '\u0627\u0644\u0643\u0644',
        loading: '\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a...',
        noResults: '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0645\u0642\u0627\u0644\u0627\u062a.',
        readArticle: '\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644',
        backToInsights: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0624\u0649',
        notFound: '\u0627\u0644\u0645\u0642\u0627\u0644 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f',
        minRead: '\u062f\u0642\u064a\u0642\u0629 \u0644\u0644\u0642\u0631\u0627\u0621\u0629',
        by: '\u0628\u0642\u0644\u0645',
        relatedTopics: '\u0645\u0648\u0627\u0636\u064a\u0639 \u0630\u0627\u062a \u0635\u0644\u0629'
      },
      about: {
        label: '\u0639\u0646 Dwianto Capital Advisory',
        title: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0631\u0623\u0633\u0645\u0627\u0644\u064a\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0645\u0633\u062a\u0642\u0644\u0629',
        description: '\u0646\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0648\u0647\u064a\u0643\u0644\u0629 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0648\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0644\u0644\u0645\u0624\u0633\u0633\u0627\u062a.',
        whoWeAre: {
          title: '\u0645\u0646 \u0646\u062d\u0646',
          text1: 'Dwianto Capital Advisory \u0647\u064a \u0634\u0631\u0643\u0629 \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0631\u0623\u0633\u0645\u0627\u0644\u064a\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0645\u0633\u062a\u0642\u0644\u0629.',
          text2: '\u0646\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630\u0627\u062a \u0648\u0632\u064a\u0627\u062f\u0627\u062a \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644.',
          text3: '\u0646\u0647\u062c\u0646\u0627 \u0645\u0645\u064a\u0632: \u0644\u0627 \u0646\u0642\u062f\u0645 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0641\u0642\u0637. \u0646\u0642\u0648\u0645 \u0628\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629 \u0644\u062a\u0644\u0628\u064a\u0629 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646.'
        },
        problem: {
          label: '\u0627\u0644\u062a\u062d\u062f\u064a \u0627\u0644\u0623\u0633\u0627\u0633\u064a',
          title: '\u0633\u062f \u0641\u062c\u0648\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0641\u064a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627',
          investors: {
            title: '\u0644\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u064a\u0646',
            description: '\u062a\u0642\u062f\u0645 \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627 \u0625\u0645\u0643\u0627\u0646\u0627\u062a \u0646\u0645\u0648\u060c \u0644\u0643\u0646 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u064a\u0641\u062a\u0642\u0631\u0648\u0646 \u0625\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u062d\u0644\u064a\u0629.'
          },
          companies: {
            title: '\u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629',
            description: '\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0644\u062f\u064a\u0647\u0627 \u0637\u0645\u0648\u062d\u0627\u062a \u0646\u0645\u0648 \u0644\u0643\u0646\u0647\u0627 \u062a\u0641\u062a\u0642\u0631 \u0625\u0644\u0649 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627.'
          },
          solution: {
            title: '\u062d\u0644\u0646\u0627',
            description: '\u0646\u0633\u062f \u0647\u0630\u0647 \u0627\u0644\u0641\u062c\u0648\u0629 \u0628\u0625\u0637\u0627\u0631 \u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0645\u062a\u0643\u0627\u0645\u0644 \u064a\u0639\u062f \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0648\u064a\u0647\u064a\u0643\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a.'
          }
        },
        vision: {
          title: '\u0631\u0624\u064a\u062a\u0646\u0627',
          text: '\u0623\u0646 \u0646\u0635\u0628\u062d \u0634\u0631\u0643\u0629 \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0631\u0627\u0626\u062f\u0629 \u0641\u064a \u0645\u0624\u0633\u0633\u064a\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0641\u064a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627.'
        },
        mission: {
          title: '\u0645\u0647\u0645\u062a\u0646\u0627',
          item1: '\u062a\u0633\u0647\u064a\u0644 \u062a\u062f\u0641\u0642\u0627\u062a \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0634\u0641\u0627\u0641\u0629 \u0625\u0644\u0649 \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627',
          item2: '\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0644\u062a\u0644\u0628\u064a\u0629 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646',
          item3: '\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0628\u0646\u0632\u0627\u0647\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629'
        },
        values: {
          label: '\u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629',
          title: '\u0645\u0627 \u064a\u0648\u062c\u0647 \u0639\u0645\u0644\u0646\u0627',
          precision: { title: '\u0627\u0644\u062f\u0642\u0629', description: '\u0646\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0643\u0644 \u0647\u064a\u0643\u0644 \u0648\u0645\u0641\u0627\u0648\u0636\u0629 \u0628\u0635\u0631\u0627\u0645\u0629 \u062a\u062d\u0644\u064a\u0644\u064a\u0629.' },
          integrity: { title: '\u0627\u0644\u0646\u0632\u0627\u0647\u0629', description: '\u0646\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0627\u0633\u062a\u0642\u0644\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0633\u0631\u064a\u0629 \u0648\u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a.' },
          alignment: { title: '\u0627\u0644\u062a\u0648\u0627\u0641\u0642 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a', description: '\u0646\u0635\u0645\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0645\u062a\u0648\u0627\u0632\u0646\u0629 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0637\u0631\u0627\u0641.' },
          longTerm: { title: '\u0627\u0644\u0642\u064a\u0645\u0629 \u0637\u0648\u064a\u0644\u0629 \u0627\u0644\u0623\u062c\u0644', description: '\u0646\u0639\u0637\u064a \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629 \u0644\u0644\u0634\u0631\u0627\u0643\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062f\u0627\u0645\u0629 \u0648\u0646\u0645\u0648 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a.' }
        }
      },
      servicesPage: {
        label: '\u062e\u062f\u0645\u0627\u062a\u0646\u0627',
        title: '\u0625\u0637\u0627\u0631 \u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0645\u062a\u0643\u0627\u0645\u0644',
        description: '\u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0645\u0644\u0627\u062d\u0629 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629.',
        maFull: { title: '\u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630', description: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0628\u064a\u0639.' },
        crossBorderFull: { title: '\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0648\u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642', description: '\u062d\u0644\u0648\u0644 \u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0644\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631.' },
        complianceFull: { title: '\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0648\u0627\u0644\u0645\u0627\u0644\u064a', description: '\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629.' },
        whyChoose: {
          title: '\u0644\u0645\u0627\u0630\u0627 \u064a\u062e\u062a\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 Dwianto',
          description: '\u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0647\u064a\u0643\u0644\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629 \u0648\u0627\u0646\u0636\u0628\u0627\u0637 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f.',
          qualified: { title: '\u0623\u0637\u0631\u0627\u0641 \u0645\u0624\u0647\u0644\u0629', description: '\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0634\u0631\u0643\u0627\u062a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0629 \u062c\u0627\u0647\u0632\u0629 \u0645\u0624\u0633\u0633\u064a\u0627\u064b.' },
          visibility: { title: '\u0631\u0624\u064a\u0629 \u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0636\u062d\u0629', description: '\u0646\u0645\u0630\u062c\u0629 \u0645\u0627\u0644\u064a\u0629 \u0634\u0627\u0645\u0644\u0629 \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645.' },
          risk: { title: '\u062a\u0642\u0644\u064a\u0644 \u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u062a\u0646\u0641\u064a\u0630', description: '\u0623\u0637\u0631 \u062d\u0648\u0643\u0645\u0629 \u0645\u0646\u0638\u0645\u0629 \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644.' },
          readiness: { title: '\u062c\u0627\u0647\u0632\u064a\u0629 \u0633\u0648\u0642 \u0623\u0633\u0631\u0639', description: '\u0647\u064a\u0627\u0643\u0644 \u062f\u062e\u0648\u0644 \u0645\u062a\u0648\u0627\u0641\u0642\u0629 \u0642\u0627\u0646\u0648\u0646\u064a\u0627\u064b \u0648\u0641\u0639\u0627\u0644\u0629 \u0631\u0623\u0633\u0645\u0627\u0644\u064a\u0627\u064b.' }
        }
      },
      contactPage: {
        label: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
        title: '\u062d\u062f\u062f \u0645\u0648\u0639\u062f \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629',
        description: '\u0646\u0627\u0642\u0634 \u0623\u0647\u062f\u0627\u0641\u0643 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a. \u062c\u0645\u064a\u0639 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0629.',
        info: {
          title: '\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644',
          email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
          whatsapp: '\u0648\u0627\u062a\u0633\u0627\u0628',
          office: '\u0627\u0644\u0645\u0643\u062a\u0628',
          linkedin: '\u0644\u064a\u0646\u0643\u062f\u0625\u0646',
          connectWithUs: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
          officeHours: {
            title: '\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644',
            text: '\u0627\u0644\u0627\u062b\u0646\u064a\u0646 - \u0627\u0644\u062c\u0645\u0639\u0629: 9:00 \u0635\u0628\u0627\u062d\u0627\u064b - 6:00 \u0645\u0633\u0627\u0621\u064b (GMT+7)',
            weekend: '\u0627\u0644\u0633\u0628\u062a - \u0627\u0644\u0623\u062d\u062f: \u0628\u0645\u0648\u0639\u062f'
          }
        },
        form: {
          title: '\u0637\u0644\u0628 \u0627\u0633\u062a\u0634\u0627\u0631\u0629',
          name: '\u0627\u0644\u0627\u0633\u0645',
          email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
          phone: '\u0627\u0644\u0647\u0627\u062a\u0641',
          company: '\u0627\u0644\u0634\u0631\u0643\u0629',
          serviceInterest: '\u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629',
          selectService: '\u0627\u062e\u062a\u0631 \u062e\u062f\u0645\u0629',
          maAdvisory: '\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630',
          crossBorderInvestment: '\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0648\u062f\u062e\u0648\u0644 \u0627\u0644\u0633\u0648\u0642',
          legalCompliance: '\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0648\u0627\u0644\u0645\u0627\u0644\u064a',
          generalInquiry: '\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0627\u0645',
          message: '\u0627\u0644\u0631\u0633\u0627\u0644\u0629',
          submit: '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631',
          submitting: '\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...',
          error: '\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062c. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.',
          success: {
            title: '\u0634\u0643\u0631\u0627\u064b \u0644\u0643!',
            text: '\u0644\u0642\u062f \u062a\u0644\u0642\u064a\u0646\u0627 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0643 \u0648\u0633\u0646\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.',
            another: '\u0625\u0631\u0633\u0627\u0644 \u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0622\u062e\u0631'
          }
        }
      },
      credibility: {
        label: '\u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0648\u0627\u0644\u062e\u0628\u0631\u0629',
        title: '\u062e\u0628\u0631\u0629 \u0645\u062b\u0628\u062a\u0629 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f',
        description: '\u064a\u0638\u0647\u0631 \u0633\u062c\u0644\u0646\u0627 \u062a\u0646\u0641\u064a\u0630\u0627\u064b \u0645\u0646\u0638\u0645\u0627\u064b \u0639\u0628\u0631 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631.',
        trackRecord: { title: '\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a' },
        projects: {
          fdi: { title: '\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631', description: '\u0645\u0634\u0627\u0631\u064a\u0639 \u0625\u0646\u0634\u0627\u0621 PT PMA \u0645\u062a\u0639\u062f\u062f\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u062f\u0648\u0644\u064a\u0629.' },
          acquisition: { title: '\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630', description: '\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f.' },
          mandates: { title: '\u062a\u0641\u0648\u064a\u0636\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u062c\u0627\u0631\u064a\u0629', value: '\u0645\u062a\u0639\u062f\u062f\u0629', description: '\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u0627\u0633\u062a\u0634\u0627\u0631\u064a\u0629 \u0646\u0634\u0637\u0629.' }
        },
        partners: {
          label: '\u0627\u0644\u0634\u0631\u0627\u0643\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629',
          title: '\u0634\u0628\u0643\u0629 \u0645\u0648\u062b\u0648\u0642\u0629',
          description: '\u0646\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0634\u0631\u0643\u0627\u062a \u0631\u0627\u0626\u062f\u0629 \u0644\u062a\u0642\u062f\u064a\u0645 \u062d\u0644\u0648\u0644 \u0634\u0627\u0645\u0644\u0629.',
          pepper: '\u0634\u0631\u0627\u0643\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0627\u0644\u064a\u0629.',
          capitalBridge: '\u062a\u0633\u0647\u064a\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u062d\u062f\u0648\u062f.',
          nash: '\u062a\u0639\u0627\u0648\u0646 \u0641\u064a \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0648\u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a.'
        },
        expertise: {
          title: '\u062a\u0646\u0641\u064a\u0630 \u0645\u0646\u0638\u0645\u060c \u0646\u062a\u0627\u0626\u062c \u0645\u062b\u0628\u062a\u0629',
          text: '\u062a\u0645\u062a\u062f \u062e\u0628\u0631\u062a\u0646\u0627 \u0639\u0628\u0631 \u0642\u0637\u0627\u0639\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0645\u0639 \u0627\u0644\u062a\u0632\u0627\u0645\u0646\u0627 \u0628\u0646\u0632\u0627\u0647\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629.'
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '\u9996\u9875',
        about: '\u5173\u4e8e',
        services: '\u670d\u52a1',
        portfolio: '\u4f5c\u54c1\u96c6',
        insights: '\u89c1\u89e3',
        contact: '\u8054\u7cfb'
      },
      hero: {
        slide1: {
          title: '\u5e76\u8d2d\u4e0e\u8de8\u5883\u6295\u8d44\u6218\u7565\u54a8\u8be2',
          subtitle: '\u8fde\u63a5\u5168\u7403\u8d44\u672c\u4e0e\u5370\u5c3c\u673a\u4f1a',
          cta: '\u63a2\u7d22\u6211\u4eec\u7684\u670d\u52a1'
        },
        slide2: {
          title: '\u673a\u6784\u8d44\u672c\u7ed3\u6784',
          subtitle: '\u6784\u5efa\u521b\u9020\u53ef\u6301\u7eed\u4ef7\u503c\u7684\u4ea4\u6613',
          cta: '\u67e5\u770b\u6211\u4eec\u7684\u65b9\u6cd5'
        },
        slide3: {
          title: '\u8de8\u5883\u4ea4\u6613\u5353\u8d8a',
          subtitle: '\u7cbe\u51c6\u9a7e\u9a6d\u590d\u6742\u76d1\u7ba1\u6846\u67b6',
          cta: '\u53d1\u73b0\u6210\u529f\u6848\u4f8b'
        }
      },
      stats: {
        label: '\u6211\u4eec\u7684\u4e1a\u7ee9\u8bb0\u5f55',
        title: '\u8d44\u672c\u54a8\u8be2\u5353\u8d8a\u8bc1\u660e',
        experience: '\u7efc\u5408\u7ecf\u9a8c\u5e74\u6570',
        experienceDesc: '\u8de8\u56fd\u9645\u5e02\u573a\u7684\u6df1\u539a\u4e13\u4e1a\u77e5\u8bc6',
        transaction: '\u4ea4\u6613\u4ef7\u503c',
        transactionDesc: '\u6210\u529f\u5b8c\u6210\u7684\u4ea4\u6613\u548c\u6388\u6743',
        mandates: '\u8de8\u5883\u6388\u6743',
        mandatesDesc: '\u6d3b\u8dc3\u7684\u56fd\u9645\u4e1a\u52a1',
        clients: '\u673a\u6784\u5ba2\u6237',
        clientsDesc: '\u4f01\u4e1a\u3001\u79c1\u52df\u80a1\u6743\u548c\u5bb6\u65cf\u529e\u516c\u5ba4'
      },
      owner: {
        label: '\u9886\u5bfc\u529b',
        name: 'Ijlal Falih Dwianto',
        title: '\u7ba1\u7406\u5408\u4f19\u4eba',
        bio1: 'Ijlal Falih Dwianto\u662f\u56fd\u9645\u5546\u6cd5\u4e13\u4e1a\u7684\u6cd5\u5b66\u6bd5\u4e1a\u751f\u3002\u62e5\u6709\u8de8\u56fd\u5f8b\u5e08\u4e8b\u52a1\u6240\u548c\u5168\u7403\u5bb6\u65cf\u4f01\u4e1a\u7684\u5e76\u8d2d\u3001\u79c1\u52df\u80a1\u6743\u548c\u5408\u89c4\u7ecf\u9a8c\uff0c\u4ece\u96c5\u52a0\u8fbe\u63a8\u52a8\u6218\u7565\u6027\u8de8\u5883\u4ea4\u6613\u3002',
        bio2: '\u4f5c\u4e3a\u6301\u724c\u5f8b\u5e08\u548c\u5e02\u573a\u5206\u6790\u5e08\uff0cDwianto\u5c06\u672c\u5730\u6d1e\u5bdf\u4e0e\u5168\u7403\u6267\u884c\u76f8\u7ed3\u5408\uff0c\u4e3a\u5ba2\u6237\u521b\u9020\u53ef\u8861\u91cf\u7684\u4ef7\u503c\u3002',
        specialization: '\u4e13\u4e1a',
        specializationValue: '\u56fd\u9645\u5546\u6cd5',
        credentials: '\u8d44\u8d28',
        credentialsValue: '\u6301\u724c\u5f8b\u5e08',
        expertise: '\u4e13\u957f',
        expertiseValue: '\u5e76\u8d2d\u4e0e\u79c1\u52df\u80a1\u6743',
        focus: '\u91cd\u70b9',
        focusValue: '\u8de8\u5883\u4ea4\u6613'
      },
      services: {
        label: '\u6211\u4eec\u7684\u670d\u52a1',
        title: '\u7efc\u5408\u54a8\u8be2\u6846\u67b6',
        description: '\u6211\u4eec\u5c06\u8d22\u52a1\u5efa\u6a21\u3001\u6cbb\u7406\u7ed3\u6784\u3001\u76d1\u7ba1\u5bfc\u822a\u548c\u8c08\u5224\u7b56\u7565\u6574\u5408\u4e3a\u8de8\u5883\u4ea4\u6613\u7684\u7edf\u4e00\u7eaa\u5f8b\u54a8\u8be2\u65b9\u6cd5\u3002',
        ma: { title: '\u5e76\u8d2d', description: '\u6d89\u53ca\u5370\u5c3c\u516c\u53f8\u548c\u5916\u56fd\u6295\u8d44\u8005\u7684\u8de8\u5883\u5e76\u8d2d\u4ea4\u6613\u4e70\u65b9\u548c\u5356\u65b9\u54a8\u8be2\u3002' },
        crossBorder: { title: '\u8de8\u5883\u6295\u8d44', description: '\u6218\u7565\u5e02\u573a\u8fdb\u5165\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ecPT PMA\u8bbe\u7acb\u548c\u80a1\u6743\u7ed3\u6784\u3002' },
        compliance: { title: '\u6cd5\u5f8b\u4e0e\u8d22\u52a1\u5408\u89c4', description: '\u4e3a\u6295\u8d44\u8005\u652f\u6301\u7684\u5370\u5c3c\u516c\u53f8\u63d0\u4f9b\u6cbb\u7406\u7ed3\u6784\u548c\u76d1\u7ba1\u5408\u89c4\u54a8\u8be2\u3002' }
      },
      successStories: {
        label: '\u6848\u4f8b\u7814\u7a76',
        title: '\u6210\u529f\u6848\u4f8b',
        description: '\u4ee3\u8868\u6027\u4ea4\u6613\u5c55\u793a\u6211\u4eec\u5728\u5e76\u8d2d\u3001\u5e02\u573a\u8fdb\u5165\u548c\u91cd\u7ec4\u4e1a\u52a1\u4e2d\u7684\u7efc\u5408\u54a8\u8be2\u65b9\u6cd5\u3002',
        viewAll: '\u67e5\u770b\u6240\u6709\u6848\u4f8b',
        transactionValue: '\u4ea4\u6613\u4ef7\u503c',
        sector: '\u884c\u4e1a',
        stories: {
          s1: {
            category: '\u8de8\u5883\u5e76\u8d2d',
            title: '\u5370\u5c3c\u5236\u9020\u4e1a\u8d44\u4ea7\u6218\u7565\u6536\u8d2d',
            description: '\u4e3a\u56fd\u9645\u79c1\u52df\u80a1\u6743\u516c\u53f8\u63d0\u4f9b2500\u4e07\u7f8e\u5143\u5236\u9020\u4e1a\u6536\u8d2d\u54a8\u8be2\u3002',
            h1: '\u5c3d\u804c\u8c03\u67e5\u534f\u8c03', h2: '\u76d1\u7ba1\u5ba1\u6279\u7ba1\u7406', h3: '\u6536\u8d2d\u540e\u6574\u5408\u652f\u6301',
            value: '2500\u4e07\u7f8e\u5143', sector: '\u5236\u9020\u4e1a'
          },
          s2: {
            category: '\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u7ed3\u6784',
            title: '\u4e3a\u6b27\u6d32\u79d1\u6280\u516c\u53f8\u8bbe\u7acbPT PMA',
            description: '\u901a\u8fc7PT PMA\u8bbe\u7acb\u4fc3\u8fdb\u6b27\u6d32SaaS\u516c\u53f8\u8fdb\u5165\u5e02\u573a\u3002',
            h1: 'PT PMA\u7ed3\u6784', h2: '\u8425\u4e1a\u6267\u7167\u83b7\u53d6', h3: '\u7a0e\u52a1\u4f18\u5316\u6846\u67b6',
            value: '800\u4e07\u7f8e\u5143', sector: '\u79d1\u6280'
          },
          s3: {
            category: '\u4f01\u4e1a\u91cd\u7ec4',
            title: '\u5bb6\u65cf\u4f01\u4e1a\u503a\u52a1\u91cd\u7ec4',
            description: '\u9886\u5bfc4000\u4e07\u7f8e\u5143\u503a\u52a1\u8bbe\u65bd\u7684\u5168\u9762\u91cd\u7ec4\u3002',
            h1: '\u503a\u6743\u4eba\u8c08\u5224', h2: '\u5546\u4e1a\u8ba1\u5212\u5f00\u53d1', h3: '\u8fd0\u8425\u6539\u8fdb',
            value: '4000\u4e07\u7f8e\u5143', sector: '\u6d88\u8d39\u54c1'
          }
        }
      },
      cta: {
        title: '\u51c6\u5907\u8ba8\u8bba\u60a8\u7684\u4ea4\u6613\uff1f',
        description: '\u5b89\u6392\u4fdd\u5bc6\u54a8\u8be2\uff0c\u63a2\u8ba8\u6211\u4eec\u5982\u4f55\u652f\u6301\u60a8\u7684\u8de8\u5883\u6295\u8d44\u6216\u5e76\u8d2d\u76ee\u6807\u3002',
        button: '\u5b89\u6392\u54a8\u8be2'
      },
      footer: {
        quickLinks: '\u5feb\u901f\u94fe\u63a5',
        contactTitle: '\u8054\u7cfb',
        copyright: 'PT Dwianto Capital Advisory\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002',
        tagline: '\u5e76\u8d2d\u3001\u8d44\u672c\u7ed3\u6784\u548c\u8de8\u5883\u4ea4\u6613\u6218\u7565\u54a8\u8be2',
        legalName: 'PT Dwianto Capital Advisory'
      },
      valueProposition: {
        label: '\u6211\u4eec\u7684\u4e0d\u540c\u4e4b\u5904',
        title: '\u6218\u7565\u5408\u4f5c\u4f19\u4f34\uff0c\u800c\u975e\u4ec5\u4ec5\u987e\u95ee',
        text1: '\u5370\u5c3c\u63d0\u4f9b\u589e\u957f\u6f5c\u529b\uff0c\u4f46\u4f01\u4e1a\u7f3a\u4e4f\u8d44\u672c\u3001\u6280\u672f\u548c\u6269\u5927\u89c4\u6a21\u7684\u51c6\u5907\u3002',
        text2: '\u6211\u4eec\u4e0d\u4ec5\u4ec5\u8fde\u63a5\u5404\u65b9\u3002\u6211\u4eec\u51c6\u5907\u5370\u5c3c\u516c\u53f8\u6ee1\u8db3\u56fd\u9645\u6295\u8d44\u8005\u6807\u51c6\u3002',
        text3: '\u6211\u4eec\u7684\u7efc\u5408\u6846\u67b6\u7ed3\u5408\u4e86\u673a\u6784\u7ed3\u6784\u3001\u6cbb\u7406\u7eaa\u5f8b\u548c\u8de8\u5883\u6267\u884c\u3002',
        cta: '\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6211\u4eec\u7684\u65b9\u6cd5'
      },
      common: { learnMore: '\u4e86\u89e3\u66f4\u591a', visitWebsite: '\u8bbf\u95ee\u7f51\u7ad9' },
      insights: {
        label: '\u89c1\u89e3\u4e0e\u5206\u6790',
        title: '\u884c\u4e1a\u89c1\u89e3',
        description: '\u5173\u4e8e\u8de8\u5883\u6295\u8d44\u3001\u5e76\u8d2d\u4ea4\u6613\u548c\u5370\u5c3c\u5546\u4e1a\u73af\u5883\u7684\u4e13\u5bb6\u5206\u6790\u3001\u5e02\u573a\u60c5\u62a5\u548c\u6218\u7565\u89c6\u89d2\u3002',
        seoTitle: '\u89c1\u89e3 - \u8d44\u672c\u54a8\u8be2\u5206\u6790\u4e0e\u5e02\u573a\u60c5\u62a5',
        seoDescription: '\u6765\u81eaDwianto Capital Advisory\u7684\u8de8\u5883\u6295\u8d44\u548c\u5e76\u8d2d\u4e13\u5bb6\u89c1\u89e3\u3002',
        searchPlaceholder: '\u641c\u7d22\u6587\u7ae0...',
        allCategories: '\u5168\u90e8',
        loading: '\u6b63\u5728\u52a0\u8f7d\u6587\u7ae0...',
        noResults: '\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u6587\u7ae0\u3002',
        readArticle: '\u9605\u8bfb\u6587\u7ae0',
        backToInsights: '\u8fd4\u56de\u89c1\u89e3',
        notFound: '\u6587\u7ae0\u672a\u627e\u5230',
        minRead: '\u5206\u949f\u9605\u8bfb',
        by: '\u4f5c\u8005',
        relatedTopics: '\u76f8\u5173\u4e3b\u9898'
      },
      about: {
        label: '\u5173\u4e8eDwianto Capital Advisory',
        title: '\u72ec\u7acb\u6218\u7565\u8d44\u672c\u54a8\u8be2',
        description: '\u6211\u4eec\u4e13\u6ce8\u4e8e\u5e76\u8d2d\u3001\u8d44\u672c\u7ed3\u6784\u548c\u8de8\u5883\u6295\u8d44\u4ea4\u6613\u3002',
        whoWeAre: {
          title: '\u6211\u4eec\u662f\u8c01',
          text1: 'Dwianto Capital Advisory\u662f\u4e00\u5bb6\u72ec\u7acb\u7684\u6218\u7565\u8d44\u672c\u54a8\u8be2\u516c\u53f8\u3002',
          text2: '\u6211\u4eec\u4e13\u6ce8\u4e8e\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u3001\u4f01\u4e1a\u6536\u8d2d\u548c\u8d44\u672c\u52df\u96c6\u3002',
          text3: '\u6211\u4eec\u7684\u65b9\u6cd5\u72ec\u7279\uff1a\u6211\u4eec\u4e0d\u4ec5\u4ec5\u4ecb\u7ecd\u5404\u65b9\uff0c\u8fd8\u51c6\u5907\u5370\u5c3c\u516c\u53f8\u6ee1\u8db3\u56fd\u9645\u6295\u8d44\u8005\u6807\u51c6\u3002'
        },
        problem: {
          label: '\u6838\u5fc3\u6311\u6218',
          title: '\u5f25\u5408\u5370\u5c3c\u6295\u8d44\u5dee\u8ddd',
          investors: { title: '\u5bf9\u4e8e\u5168\u7403\u6295\u8d44\u8005', description: '\u5370\u5c3c\u63d0\u4f9b\u589e\u957f\u6f5c\u529b\uff0c\u4f46\u6295\u8d44\u8005\u7f3a\u4e4f\u672c\u5730\u5e02\u573a\u60c5\u62a5\u3002' },
          companies: { title: '\u5bf9\u4e8e\u5370\u5c3c\u516c\u53f8', description: '\u4f01\u4e1a\u6709\u589e\u957f\u96c4\u5fc3\u4f46\u7f3a\u4e4f\u8d44\u672c\u548c\u6280\u672f\u3002' },
          solution: { title: '\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848', description: '\u6211\u4eec\u901a\u8fc7\u7efc\u5408\u54a8\u8be2\u6846\u67b6\u5f25\u5408\u8fd9\u4e00\u5dee\u8ddd\u3002' }
        },
        vision: { title: '\u6211\u4eec\u7684\u613f\u666f', text: '\u6210\u4e3a\u5c06\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u5236\u5ea6\u5316\u5230\u5370\u5c3c\u7684\u9886\u5148\u8de8\u5883\u54a8\u8be2\u516c\u53f8\u3002' },
        mission: {
          title: '\u6211\u4eec\u7684\u4f7f\u547d',
          item1: '\u4fc3\u8fdb\u7ed3\u6784\u5316\u548c\u900f\u660e\u7684\u8d44\u672c\u6d41\u5165\u5370\u5c3c',
          item2: '\u51c6\u5907\u56fd\u5185\u516c\u53f8\u6ee1\u8db3\u56fd\u9645\u6295\u8d44\u8005\u6807\u51c6',
          item3: '\u8bbe\u8ba1\u548c\u6267\u884c\u5177\u6709\u6cbb\u7406\u5b8c\u6574\u6027\u7684\u8de8\u5883\u4ea4\u6613'
        },
        values: {
          label: '\u6838\u5fc3\u4ef7\u503c\u89c2',
          title: '\u6307\u5bfc\u6211\u4eec\u5de5\u4f5c\u7684\u539f\u5219',
          precision: { title: '\u7cbe\u786e', description: '\u6211\u4eec\u4ee5\u5206\u6790\u4e25\u8c28\u548c\u6ce8\u91cd\u7ec6\u8282\u5904\u7406\u6bcf\u4e00\u4e2a\u7ed3\u6784\u548c\u8c08\u5224\u3002' },
          integrity: { title: '\u6b63\u76f4', description: '\u6211\u4eec\u5728\u6240\u6709\u4e1a\u52a1\u4e2d\u4fdd\u6301\u72ec\u7acb\u3001\u4fdd\u5bc6\u548c\u9053\u5fb7\u7eaa\u5f8b\u3002' },
          alignment: { title: '\u6218\u7565\u534f\u8c03', description: '\u6211\u4eec\u8bbe\u8ba1\u6240\u6709\u5229\u76ca\u76f8\u5173\u8005\u6fc0\u52b1\u5e73\u8861\u7684\u4ea4\u6613\u3002' },
          longTerm: { title: '\u957f\u671f\u4ef7\u503c', description: '\u6211\u4eec\u4f18\u5148\u8003\u8651\u53ef\u6301\u7eed\u4f19\u4f34\u5173\u7cfb\u548c\u4f01\u4e1a\u589e\u957f\u3002' }
        }
      },
      servicesPage: {
        label: '\u6211\u4eec\u7684\u670d\u52a1',
        title: '\u7efc\u5408\u54a8\u8be2\u6846\u67b6',
        description: '\u6211\u4eec\u5c06\u8d22\u52a1\u5efa\u6a21\u3001\u6cbb\u7406\u7ed3\u6784\u3001\u76d1\u7ba1\u5bfc\u822a\u548c\u8c08\u5224\u7b56\u7565\u6574\u5408\u4e3a\u7edf\u4e00\u7684\u54a8\u8be2\u65b9\u6cd5\u3002',
        maFull: { title: '\u5e76\u8d2d', description: '\u6d89\u53ca\u5370\u5c3c\u516c\u53f8\u548c\u5916\u56fd\u6295\u8d44\u8005\u7684\u5168\u9762\u5e76\u8d2d\u54a8\u8be2\u3002' },
        crossBorderFull: { title: '\u8de8\u5883\u6295\u8d44\u4e0e\u5e02\u573a\u8fdb\u5165', description: '\u5305\u62ecPT PMA\u8bbe\u7acb\u548c\u80a1\u6743\u7ed3\u6784\u7684\u6218\u7565\u5e02\u573a\u8fdb\u5165\u89e3\u51b3\u65b9\u6848\u3002' },
        complianceFull: { title: '\u6cd5\u5f8b\u4e0e\u8d22\u52a1\u5408\u89c4', description: '\u4e3a\u6295\u8d44\u8005\u652f\u6301\u7684\u5370\u5c3c\u516c\u53f8\u63d0\u4f9b\u6cbb\u7406\u548c\u5408\u89c4\u54a8\u8be2\u3002' },
        whyChoose: {
          title: '\u4e3a\u4ec0\u4e48\u5ba2\u6237\u9009\u62e9Dwianto',
          description: '\u6211\u4eec\u5c06\u673a\u6784\u7ed3\u6784\u3001\u6cbb\u7406\u7eaa\u5f8b\u548c\u8de8\u5883\u6267\u884c\u7edf\u4e00\u5728\u4e00\u4e2a\u7efc\u5408\u54a8\u8be2\u6846\u67b6\u4e0b\u3002',
          qualified: { title: '\u5408\u683c\u5bf9\u624b\u65b9', description: '\u83b7\u53d6\u7ecf\u8fc7\u7b5b\u9009\u7684\u3001\u5236\u5ea6\u5316\u5c31\u7eea\u7684\u5370\u5c3c\u516c\u53f8\u3002' },
          visibility: { title: '\u6e05\u6670\u7684\u8d22\u52a1\u53ef\u89c1\u6027', description: '\u5168\u9762\u7684\u8d22\u52a1\u5efa\u6a21\u3001\u4f30\u503c\u5206\u6790\u548c\u5c3d\u804c\u8c03\u67e5\u534f\u8c03\u3002' },
          risk: { title: '\u964d\u4f4e\u6267\u884c\u98ce\u9669', description: '\u7ed3\u6784\u5316\u6cbb\u7406\u6846\u67b6\u548c\u5408\u89c4\u7ba1\u7406\u3002' },
          readiness: { title: '\u66f4\u5feb\u7684\u5e02\u573a\u51c6\u5907', description: '\u5408\u6cd5\u5408\u89c4\u3001\u8d44\u672c\u9ad8\u6548\u7684\u8fdb\u5165\u7ed3\u6784\u3002' }
        }
      },
      contactPage: {
        label: '\u8054\u7cfb\u6211\u4eec',
        title: '\u5b89\u6392\u6218\u7565\u54a8\u8be2',
        description: '\u4e0e\u6211\u4eec\u7684\u54a8\u8be2\u56e2\u961f\u8ba8\u8bba\u60a8\u7684\u8de8\u5883\u6295\u8d44\u76ee\u6807\u3002\u6240\u6709\u54a8\u8be2\u5747\u4fdd\u5bc6\u3002',
        info: {
          title: '\u8054\u7cfb\u4fe1\u606f',
          email: '\u7535\u5b50\u90ae\u4ef6', whatsapp: 'WhatsApp', office: '\u529e\u516c\u5ba4', linkedin: '\u9886\u82f1',
          connectWithUs: '\u4e0e\u6211\u4eec\u8fde\u63a5',
          officeHours: { title: '\u529e\u516c\u65f6\u95f4', text: '\u5468\u4e00\u81f3\u5468\u4e94: 9:00 - 18:00 (GMT+7)', weekend: '\u5468\u516d\u81f3\u5468\u65e5: \u9884\u7ea6' }
        },
        form: {
          title: '\u8bf7\u6c42\u54a8\u8be2',
          name: '\u59d3\u540d', email: '\u7535\u5b50\u90ae\u4ef6', phone: '\u7535\u8bdd', company: '\u516c\u53f8',
          serviceInterest: '\u670d\u52a1\u5174\u8da3', selectService: '\u9009\u62e9\u670d\u52a1',
          maAdvisory: '\u5e76\u8d2d\u54a8\u8be2', crossBorderInvestment: '\u8de8\u5883\u6295\u8d44\u4e0e\u5e02\u573a\u8fdb\u5165',
          legalCompliance: '\u6cd5\u5f8b\u4e0e\u8d22\u52a1\u5408\u89c4', generalInquiry: '\u4e00\u822c\u54a8\u8be2',
          message: '\u6d88\u606f', submit: '\u63d0\u4ea4\u54a8\u8be2', submitting: '\u63d0\u4ea4\u4e2d...',
          error: '\u63d0\u4ea4\u5931\u8d25\u3002\u8bf7\u91cd\u8bd5\u3002',
          success: { title: '\u8c22\u8c22\uff01', text: '\u6211\u4eec\u5df2\u6536\u5230\u60a8\u7684\u54a8\u8be2\uff0c\u5c0624\u5c0f\u65f6\u5185\u56de\u590d\u3002', another: '\u63d0\u4ea4\u53e6\u4e00\u4e2a\u54a8\u8be2' }
        }
      },
      credibility: {
        label: '\u4f5c\u54c1\u96c6\u4e0e\u7ecf\u9a8c',
        title: '\u7ecf\u8bc1\u7684\u8de8\u5883\u4e13\u4e1a\u77e5\u8bc6',
        description: '\u6211\u4eec\u7684\u4e1a\u7ee9\u8bb0\u5f55\u5c55\u793a\u4e86\u8de8\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u548c\u5e76\u8d2d\u4ea4\u6613\u7684\u7ed3\u6784\u5316\u6267\u884c\u3002',
        trackRecord: { title: '\u4ea4\u6613\u7ecf\u9a8c' },
        projects: {
          fdi: { title: '\u5916\u56fd\u76f4\u63a5\u6295\u8d44\u670d\u52a1', description: '\u4e3a\u56fd\u9645\u516c\u53f8\u63d0\u4f9b\u591a\u4e2aPT PMA\u8bbe\u7acb\u9879\u76ee\u3002' },
          acquisition: { title: '\u6536\u8d2d\u9879\u76ee', description: '\u6d89\u53ca\u5370\u5c3c\u76ee\u6807\u516c\u53f8\u7684\u8de8\u5883\u5e76\u8d2d\u4ea4\u6613\u3002' },
          mandates: { title: '\u6b63\u5728\u8fdb\u884c\u7684\u8de8\u5883\u6388\u6743', value: '\u591a\u4e2a', description: '\u6d3b\u8dc3\u7684\u54a8\u8be2\u4e1a\u52a1\u3002' }
        },
        partners: {
          label: '\u6218\u7565\u5408\u4f5c\u4f19\u4f34',
          title: '\u503c\u5f97\u4fe1\u8d56\u7684\u7f51\u7edc',
          description: '\u6211\u4eec\u4e0e\u9886\u5148\u516c\u53f8\u5408\u4f5c\u63d0\u4f9b\u5168\u9762\u89e3\u51b3\u65b9\u6848\u3002',
          pepper: '\u8d22\u52a1\u54a8\u8be2\u548c\u6295\u8d44\u7ed3\u6784\u7684\u6218\u7565\u5408\u4f5c\u3002',
          capitalBridge: '\u8de8\u5883\u4ea4\u6613\u4fc3\u8fdb\u548c\u5e02\u573a\u60c5\u62a5\u3002',
          nash: '\u6cd5\u5f8b\u548c\u76d1\u7ba1\u5408\u89c4\u5408\u4f5c\u3002'
        },
        expertise: { title: '\u7ed3\u6784\u5316\u6267\u884c\uff0c\u7ecf\u8bc1\u7684\u7ed3\u679c', text: '\u6211\u4eec\u7684\u7ecf\u9a8c\u8de8\u8d8a\u591a\u4e2a\u884c\u4e1a\u548c\u4ea4\u6613\u7c7b\u578b\u3002' }
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
          title: 'Asesor\u00eda Estrat\u00e9gica en Fusiones, Adquisiciones e Inversi\u00f3n Transfronteriza',
          subtitle: 'Conectando Capital Global con Oportunidades en Indonesia',
          cta: 'Explore Nuestros Servicios'
        },
        slide2: {
          title: 'Estructuraci\u00f3n de Capital Institucional',
          subtitle: 'Ingenier\u00eda de Transacciones que Crean Valor Sostenible',
          cta: 'Vea Nuestro Enfoque'
        },
        slide3: {
          title: 'Excelencia en Transacciones Transfronterizas',
          subtitle: 'Navegando Marcos Regulatorios Complejos con Precisi\u00f3n',
          cta: 'Descubra Historias de \u00c9xito'
        }
      },
      stats: {
        label: 'Nuestro Historial',
        title: 'Excelencia Comprobada en Asesor\u00eda de Capital',
        experience: 'A\u00f1os de Experiencia Combinada',
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
        bio1: 'Ijlal Falih Dwianto es graduado en Derecho especializado en Derecho Comercial Internacional. Con experiencia en fusiones y adquisiciones, capital privado y cumplimiento, impulsa transacciones estrat\u00e9gicas transfronterizas desde Yakarta.',
        bio2: 'Abogado licenciado y analista de mercado, Dwianto conecta conocimiento local con ejecuci\u00f3n global para desbloquear valor medible para los clientes.',
        specialization: 'Especializaci\u00f3n',
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
        title: 'Marco de Asesor\u00eda Integrada',
        description: 'Combinamos modelado financiero, estructuraci\u00f3n de gobernanza, navegaci\u00f3n regulatoria y estrategia de negociaci\u00f3n en un enfoque de asesor\u00eda disciplinado para transacciones transfronterizas.',
        ma: { title: 'Fusiones y Adquisiciones', description: 'Asesor\u00eda de compra y venta para transacciones de fusiones y adquisiciones transfronterizas.' },
        crossBorder: { title: 'Inversi\u00f3n Transfronteriza', description: 'Soluciones estrat\u00e9gicas de entrada al mercado incluyendo establecimiento de PT PMA.' },
        compliance: { title: 'Cumplimiento Legal y Financiero', description: 'Estructuraci\u00f3n de gobernanza y asesor\u00eda de cumplimiento regulatorio.' }
      },
      successStories: {
        label: 'Casos de Estudio',
        title: 'Historias de \u00c9xito',
        description: 'Transacciones representativas que demuestran nuestro enfoque de asesor\u00eda integrada.',
        viewAll: 'Ver Todos los Casos',
        transactionValue: 'Valor de Transacci\u00f3n',
        sector: 'Sector',
        stories: {
          s1: {
            category: 'Fusiones y Adquisiciones Transfronterizas',
            title: 'Adquisici\u00f3n Estrat\u00e9gica de Activo Manufacturero Indonesio',
            description: 'Asesor\u00eda a firma de PE internacional en adquisici\u00f3n de $25M en manufactura.',
            h1: 'Coordinaci\u00f3n de due diligence', h2: 'Gesti\u00f3n de aprobaci\u00f3n regulatoria', h3: 'Soporte de integraci\u00f3n post-adquisici\u00f3n',
            value: '$25M', sector: 'Manufactura'
          },
          s2: {
            category: 'Estructuraci\u00f3n de IED',
            title: 'Establecimiento de PT PMA para Empresa Tecnol\u00f3gica Europea',
            description: 'Facilitaci\u00f3n de entrada al mercado para empresa SaaS europea.',
            h1: 'Estructuraci\u00f3n PT PMA', h2: 'Obtenci\u00f3n de licencia comercial', h3: 'Marco de optimizaci\u00f3n fiscal',
            value: '$8M Capital', sector: 'Tecnolog\u00eda'
          },
          s3: {
            category: 'Reestructuraci\u00f3n Corporativa',
            title: 'Reestructuraci\u00f3n de Deuda para Empresa Familiar',
            description: 'Liderazgo en reestructuraci\u00f3n integral de $40M en deuda.',
            h1: 'Negociaciones con acreedores', h2: 'Desarrollo de plan de negocios', h3: 'Mejoras operacionales',
            value: '$40M Deuda', sector: 'Bienes de Consumo'
          }
        }
      },
      cta: {
        title: '\u00bfListo para Discutir su Transacci\u00f3n?',
        description: 'Programe una consulta confidencial para explorar c\u00f3mo podemos apoyar sus objetivos.',
        button: 'Programar Consulta'
      },
      footer: {
        quickLinks: 'Enlaces R\u00e1pidos',
        contactTitle: 'Contacto',
        copyright: 'PT Dwianto Capital Advisory. Todos los derechos reservados.',
        tagline: 'Asesor\u00eda Estrat\u00e9gica en Fusiones, Adquisiciones y Transacciones Transfronterizas',
        legalName: 'PT Dwianto Capital Advisory'
      },
      valueProposition: {
        label: 'Lo Que Nos Hace Diferentes',
        title: 'Socio Estrat\u00e9gico, No Solo Asesor',
        text1: 'Indonesia ofrece potencial de crecimiento, pero las empresas carecen de capital y tecnolog\u00eda.',
        text2: 'No solo conectamos partes. Preparamos a las empresas indonesias para cumplir con los est\u00e1ndares internacionales.',
        text3: 'Nuestro marco integrado combina estructuraci\u00f3n institucional, disciplina de gobernanza y ejecuci\u00f3n transfronteriza.',
        cta: 'Conozca M\u00e1s Sobre Nuestro Enfoque'
      },
      common: { learnMore: 'Conocer M\u00e1s', visitWebsite: 'Visitar Sitio Web' },
      insights: {
        label: 'Perspectivas y An\u00e1lisis',
        title: 'Perspectivas de la Industria',
        description: 'An\u00e1lisis experto, inteligencia de mercado y perspectivas estrat\u00e9gicas sobre inversi\u00f3n transfronteriza, fusiones y adquisiciones, y el panorama empresarial indonesio.',
        seoTitle: 'Perspectivas - An\u00e1lisis de Asesor\u00eda de Capital',
        seoDescription: 'Perspectivas expertas sobre inversi\u00f3n transfronteriza y fusiones y adquisiciones de Dwianto Capital Advisory.',
        searchPlaceholder: 'Buscar art\u00edculos...',
        allCategories: 'Todos',
        loading: 'Cargando art\u00edculos...',
        noResults: 'No se encontraron art\u00edculos.',
        readArticle: 'Leer Art\u00edculo',
        backToInsights: 'Volver a Perspectivas',
        notFound: 'Art\u00edculo No Encontrado',
        minRead: 'min de lectura',
        by: 'Por',
        relatedTopics: 'Temas Relacionados'
      },
      about: {
        label: 'Acerca de Dwianto Capital Advisory',
        title: 'Asesor\u00eda de Capital Estrat\u00e9gica Independiente',
        description: 'Nos especializamos en fusiones y adquisiciones, estructuraci\u00f3n de capital y transacciones de inversi\u00f3n transfronteriza.',
        whoWeAre: {
          title: 'Qui\u00e9nes Somos',
          text1: 'Dwianto Capital Advisory es una firma de asesor\u00eda de capital estrat\u00e9gica independiente.',
          text2: 'Nos especializamos en inversi\u00f3n extranjera directa, adquisiciones y recaudaci\u00f3n de capital.',
          text3: 'Nuestro enfoque es distintivo: no solo presentamos partes, preparamos a las empresas indonesias.'
        },
        problem: {
          label: 'El Desaf\u00edo Central',
          title: 'Cerrando la Brecha de Inversi\u00f3n en Indonesia',
          investors: { title: 'Para Inversores Globales', description: 'Indonesia ofrece potencial pero los inversores carecen de inteligencia de mercado local.' },
          companies: { title: 'Para Empresas Indonesias', description: 'Las empresas tienen ambiciones pero carecen de capital y tecnolog\u00eda.' },
          solution: { title: 'Nuestra Soluci\u00f3n', description: 'Cerramos esta brecha con un marco de asesor\u00eda integrado.' }
        },
        vision: { title: 'Nuestra Visi\u00f3n', text: 'Convertirnos en una firma l\u00edder en asesor\u00eda transfronteriza para institucionalizar la inversi\u00f3n extranjera directa en Indonesia.' },
        mission: {
          title: 'Nuestra Misi\u00f3n',
          item1: 'Facilitar flujos de capital estructurados y transparentes hacia Indonesia',
          item2: 'Preparar empresas nacionales para cumplir est\u00e1ndares de inversores internacionales',
          item3: 'Dise\u00f1ar y ejecutar transacciones transfronterizas con integridad de gobernanza'
        },
        values: {
          label: 'Valores Fundamentales',
          title: 'Lo Que Gu\u00eda Nuestro Trabajo',
          precision: { title: 'Precisi\u00f3n', description: 'Abordamos cada estructura y negociaci\u00f3n con rigor anal\u00edtico.' },
          integrity: { title: 'Integridad', description: 'Mantenemos independencia, confidencialidad y disciplina \u00e9tica.' },
          alignment: { title: 'Alineaci\u00f3n Estrat\u00e9gica', description: 'Dise\u00f1amos transacciones equilibradas para todas las partes.' },
          longTerm: { title: 'Valor a Largo Plazo', description: 'Priorizamos alianzas sostenibles y crecimiento empresarial.' }
        }
      },
      servicesPage: {
        label: 'Nuestros Servicios',
        title: 'Marco de Asesor\u00eda Integrada',
        description: 'Combinamos modelado financiero, gobernanza, navegaci\u00f3n regulatoria y negociaci\u00f3n.',
        maFull: { title: 'Fusiones y Adquisiciones', description: 'Asesor\u00eda integral de compra y venta para transacciones transfronterizas.' },
        crossBorderFull: { title: 'Inversi\u00f3n Transfronteriza y Entrada al Mercado', description: 'Soluciones estrat\u00e9gicas de entrada incluyendo PT PMA.' },
        complianceFull: { title: 'Cumplimiento Legal y Financiero', description: 'Gobernanza y cumplimiento regulatorio para empresas respaldadas por inversores.' },
        whyChoose: {
          title: 'Por Qu\u00e9 los Clientes Eligen Dwianto',
          description: 'Combinamos estructuraci\u00f3n institucional, gobernanza y ejecuci\u00f3n transfronteriza.',
          qualified: { title: 'Contrapartes Calificadas', description: 'Acceso a empresas indonesias listas institucionalmente.' },
          visibility: { title: 'Visibilidad Financiera Clara', description: 'Modelado financiero integral y an\u00e1lisis de valoraci\u00f3n.' },
          risk: { title: 'Riesgo de Ejecuci\u00f3n Reducido', description: 'Marcos de gobernanza estructurados y gesti\u00f3n de cumplimiento.' },
          readiness: { title: 'Preparaci\u00f3n de Mercado M\u00e1s R\u00e1pida', description: 'Estructuras de entrada legalmente conformes y eficientes en capital.' }
        }
      },
      contactPage: {
        label: 'Cont\u00e1ctenos',
        title: 'Programe una Consulta Estrat\u00e9gica',
        description: 'Discuta sus objetivos de inversi\u00f3n con nuestro equipo. Todas las consultas son confidenciales.',
        info: {
          title: 'Informaci\u00f3n de Contacto',
          email: 'Correo Electr\u00f3nico', whatsapp: 'WhatsApp', office: 'Oficina', linkedin: 'LinkedIn',
          connectWithUs: 'Con\u00e9ctese con nosotros',
          officeHours: { title: 'Horario de Oficina', text: 'Lunes a Viernes: 9:00 AM - 6:00 PM (GMT+7)', weekend: 'S\u00e1bado y Domingo: Con Cita' }
        },
        form: {
          title: 'Solicitar Consulta',
          name: 'Nombre', email: 'Correo', phone: 'Tel\u00e9fono', company: 'Empresa',
          serviceInterest: 'Servicio de Inter\u00e9s', selectService: 'Seleccione un servicio',
          maAdvisory: 'Asesor\u00eda de Fusiones y Adquisiciones', crossBorderInvestment: 'Inversi\u00f3n Transfronteriza',
          legalCompliance: 'Cumplimiento Legal y Financiero', generalInquiry: 'Consulta General',
          message: 'Mensaje', submit: 'Enviar Consulta', submitting: 'Enviando...',
          error: 'Error al enviar. Por favor intente nuevamente.',
          success: { title: '\u00a1Gracias!', text: 'Hemos recibido su consulta y responderemos en 24 horas.', another: 'Enviar Otra Consulta' }
        }
      },
      credibility: {
        label: 'Portafolio y Experiencia',
        title: 'Experiencia Transfronteriza Comprobada',
        description: 'Nuestro historial demuestra ejecuci\u00f3n estructurada en inversi\u00f3n extranjera directa y transacciones de fusiones y adquisiciones.',
        trackRecord: { title: 'Experiencia en Transacciones' },
        projects: {
          fdi: { title: 'Servicios de Inversi\u00f3n Extranjera Directa', description: 'M\u00faltiples proyectos de establecimiento de PT PMA para corporaciones internacionales.' },
          acquisition: { title: 'Proyectos de Adquisici\u00f3n', description: 'Transacciones transfronterizas de fusiones y adquisiciones.' },
          mandates: { title: 'Mandatos Transfronterizos en Curso', value: 'M\u00faltiples', description: 'Compromisos activos de asesor\u00eda.' }
        },
        partners: {
          label: 'Alianzas Estrat\u00e9gicas',
          title: 'Red de Confianza',
          description: 'Colaboramos con firmas l\u00edderes para soluciones integrales.',
          pepper: 'Alianza estrat\u00e9gica en asesor\u00eda financiera.',
          capitalBridge: 'Facilitaci\u00f3n de transacciones transfronterizas.',
          nash: 'Colaboraci\u00f3n en cumplimiento legal y regulatorio.'
        },
        expertise: { title: 'Ejecuci\u00f3n Estructurada, Resultados Comprobados', text: 'Nuestra experiencia abarca m\u00faltiples sectores con compromiso de gobernanza.' }
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
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

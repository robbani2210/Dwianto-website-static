import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Target, Eye, Award, TrendingUp, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We approach every structure and negotiation with analytical rigor and attention to detail.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain independence, confidentiality, and ethical discipline in all engagements.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Alignment',
      description: 'We design transactions where all stakeholders\' incentives are balanced for mutual success.',
    },
    {
      icon: Award,
      title: 'Long-Term Value',
      description: 'We prioritize sustainable partnerships and enterprise growth over short-term deal-making.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us - Strategic Capital Advisory Firm"
        description="Learn about Dwianto Capital Advisory, an independent strategic advisory firm specializing in cross-border M&A and foreign direct investment into Indonesia."
        keywords="capital advisory firm, M&A advisory, cross-border investment advisory, Indonesia market entry"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white" data-testid="about-hero-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6" data-testid="about-hero-label">
                About Dwianto Capital Advisory
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-primary mb-8" data-testid="about-hero-title">
                Independent Strategic Capital Advisory
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground" data-testid="about-hero-description">
                We specialize in M&A, capital structuring, and cross-border investment transactions for enterprises. Our integrated approach combines financial modeling, governance structuring, regulatory navigation, and negotiation strategy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24 md:py-32 bg-muted" data-testid="who-we-are-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Business discussion"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  data-testid="who-we-are-image"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="who-we-are-title">
                  Who We Are
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p data-testid="who-we-are-text-1">
                    Dwianto Capital Advisory is an independent strategic capital advisory firm providing integrated legal and financial execution for companies entering or expanding in the Indonesian market.
                  </p>
                  <p data-testid="who-we-are-text-2">
                    We specialize in Foreign Direct Investment, business acquisitions, and capital raises, executing intricate ownership restructures that align international capital with local opportunity.
                  </p>
                  <p data-testid="who-we-are-text-3">
                    Our approach is distinctive: we don't just introduce parties. We prepare Indonesian companies to meet international investor standards, curate both sides of the transaction, and manage the entire process to completion.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-24 md:py-32 bg-white" data-testid="problem-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="problem-label">
                The Core Challenge
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary mb-6" data-testid="problem-title">
                Bridging the Indonesia Investment Gap
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="problem-investor-side"
              >
                <Users className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">For Global Investors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Indonesia offers growth potential, but investors lack local market intelligence, reliable partners, and structured entry pathways. Regulatory complexity and governance uncertainty create execution risk.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-muted/50 border border-border/40 p-10"
                data-testid="problem-company-side"
              >
                <Zap className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-normal text-primary mb-4">For Indonesian Companies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Businesses have growth ambitions but lack capital, technology, and readiness to scale. Meeting international investor standards requires governance frameworks and financial discipline they haven't developed.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-primary text-white p-10 md:p-12 text-center"
              data-testid="problem-solution"
            >
              <h3 className="font-serif text-3xl font-medium mb-4">Our Solution</h3>
              <p className="text-lg leading-relaxed font-light max-w-3xl mx-auto">
                We bridge this gap with an integrated advisory framework that prepares companies, structures transactions, navigates regulations, and aligns stakeholder incentives—creating structured, transparent capital inflows that strengthen enterprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 md:py-32 bg-muted" data-testid="vision-mission-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="vision-section"
              >
                <Eye className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                <h2 className="font-serif text-4xl font-medium tracking-tight text-primary mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To become a leading cross-border advisory firm that institutionalizes foreign direct investment into Indonesia, strengthening governance, capital discipline, and long-term enterprise growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="mission-section"
              >
                <Target className="text-secondary mb-6" size={40} strokeWidth={1.5} />
                <h2 className="font-serif text-4xl font-medium tracking-tight text-primary mb-6">Our Mission</h2>
                <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Facilitate structured and transparent capital inflows into Indonesia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Prepare domestic companies to meet international investor standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Design and execute cross-border transactions with governance integrity and execution certainty</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 md:py-32 bg-white" data-testid="values-section">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-4" data-testid="values-label">
                Core Values
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary" data-testid="values-title">
                What Guides Our Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-border/40 p-10 hover:border-secondary/50 transition-colors duration-500"
                    data-testid={`value-card-${index}`}
                  >
                    <Icon className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl font-normal text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
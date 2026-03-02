import { motion } from 'framer-motion';

export const OwnerProfile = () => {
  return (
    <section className="py-20 md:py-32 bg-white" data-testid="owner-profile-section">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_global-advisory-9/artifacts/rpqlu0dj_gemini_generated_image_qlcrvkqlcrvkqlcr-bz7NcB75PIIGmtmT.avif"
                alt="Ijlal Falih Dwianto"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%)' }}
                data-testid="owner-profile-image"
              />
              <div className="absolute inset-0 border-4 border-secondary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary px-8 py-6">
              <p className="font-serif text-3xl font-bold text-primary">Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-mono uppercase tracking-[0.3em] text-secondary mb-4" data-testid="owner-profile-label">
              Leadership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="owner-profile-name">
              Ijlal Falih Dwianto
            </h2>
            <p className="text-xl font-medium text-foreground mb-6" data-testid="owner-profile-title">
              Managing Partner
            </p>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground" data-testid="owner-profile-bio">
              <p>
                Ijlal Falih Dwianto is a Law graduate specializing in International Business Law. With M&A, private equity, and compliance experience across international law offices and globally exposed family businesses, he drives strategic cross-border transactions from Jakarta.
              </p>
              <p>
                A licensed lawyer and market analyst, Dwianto bridges local insight with global execution to unlock measurable value for clients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">Specialization</p>
                <p className="font-medium text-foreground">International Business Law</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">Credentials</p>
                <p className="font-medium text-foreground">Licensed Lawyer</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">Expertise</p>
                <p className="font-medium text-foreground">M&A & Private Equity</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">Focus</p>
                <p className="font-medium text-foreground">Cross-Border Transactions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
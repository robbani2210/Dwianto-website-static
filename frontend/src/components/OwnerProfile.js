import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const OwnerProfile = () => {
  const { t } = useTranslation();
  
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
                alt={t('owner.name')}
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
              {t('owner.label')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="owner-profile-name">
              {t('owner.name')}
            </h2>
            <p className="text-xl font-medium text-foreground mb-6" data-testid="owner-profile-title">
              {t('owner.title')}
            </p>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground" data-testid="owner-profile-bio">
              <p>{t('owner.bio1')}</p>
              <p>{t('owner.bio2')}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">{t('owner.specialization')}</p>
                <p className="font-medium text-foreground">{t('owner.specializationValue')}</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">{t('owner.credentials')}</p>
                <p className="font-medium text-foreground">{t('owner.credentialsValue')}</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">{t('owner.expertise')}</p>
                <p className="font-medium text-foreground">{t('owner.expertiseValue')}</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">{t('owner.focus')}</p>
                <p className="font-medium text-foreground">{t('owner.focusValue')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
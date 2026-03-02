import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1770345743150-8d2bef3979e8?crop=entropy&cs=srgb&fm=jpg&q=85',
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
    ctaKey: 'hero.slide1.cta',
    link: '/services'
  },
  {
    image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=srgb&fm=jpg&q=85',
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
    ctaKey: 'hero.slide2.cta',
    link: '/about'
  },
  {
    image: 'https://images.unsplash.com/photo-1752159684779-0639174cdfac?crop=entropy&cs=srgb&fm=jpg&q=85',
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
    ctaKey: 'hero.slide3.cta',
    link: '/credibility'
  }
];

export const HeroCarousel = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative" data-testid="hero-carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-[85vh] md:h-[90vh]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                <div className="relative h-full flex items-center">
                  <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-3xl"
                    >
                      <p className="text-secondary text-sm font-mono uppercase tracking-[0.3em] mb-6" data-testid="hero-subtitle">
                        {t(slide.subtitleKey)}
                      </p>
                      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" data-testid="hero-title">
                        {t(slide.titleKey)}
                      </h1>
                      <Link to={slide.link}>
                        <button
                          className="bg-secondary text-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-secondary/90 transition-all duration-300"
                          data-testid="hero-cta"
                        >
                          {t(slide.ctaKey)}
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-colors"
        data-testid="carousel-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-colors"
        data-testid="carousel-next"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-1 transition-all duration-300 ${
              index === selectedIndex ? 'w-12 bg-secondary' : 'w-8 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
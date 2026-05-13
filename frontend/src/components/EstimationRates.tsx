import React from 'react';
import { motion } from 'motion/react';
import { ESTIMATION_RATES } from '../constants/data';

const EstimationRates = () => {
  return (
    <section id="estimation" className="py-[60px] md:py-[100px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-12 pointer-events-none" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[50px] md:mb-[70px]"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent/60"></span>
            <span className="section-label">Transparent Pricing</span>
            <span className="w-8 h-px bg-accent/60"></span>
          </div>
          <h2 className="section-title mb-4">Estimation Rate List</h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>
            Professional estimation services providing accurate, detailed, and transparent cost calculations for your complete peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {ESTIMATION_RATES.map((rate, i) => (
            <motion.div
              key={rate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl p-4 sm:p-6 flex flex-col h-auto group cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 100%)' }} />
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.6), transparent)' }} />

              {/* Badge - hidden on mobile */}
              <div className="absolute top-4 right-4 font-bold px-2.5 py-0.5 rounded-full text-white hidden sm:block" style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)' }}>
                {rate.id}
              </div>

              {/* Icon */}
              <div className="flex flex-col items-center text-center mb-3 sm:mb-5 pt-1 sm:pt-3 relative z-10">
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-accent transition-all duration-400 group-hover:scale-110"
                  style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}
                >
                  {React.cloneElement(rate.icon as React.ReactElement, { className: 'w-5 h-5 sm:w-8 sm:h-8' })}
                </div>
                <h3 className="text-white font-heading font-bold group-hover:text-accent transition-colors duration-300 text-[0.875rem] sm:text-[1rem]" style={{ letterSpacing: '-0.01em' }}>
                  {rate.title}
                </h3>
              </div>

              {/* Details */}
              <div className="flex-1 w-full text-center mb-4 sm:mb-5 relative z-10">
                <p className="text-white/70 font-semibold mb-1.5 line-clamp-2" style={{ fontSize: '0.75rem' }}>{rate.subtitle}</p>
                {rate.services && (
                  <p className="text-white/35 leading-relaxed hidden sm:block" style={{ fontSize: '0.75rem' }}>{rate.services}</p>
                )}
              </div>

              {/* Price */}
              <div className="mt-auto relative z-10">
                <div
                  className="w-full flex flex-col items-center justify-center rounded-xl py-2 sm:py-3.5 px-1 sm:px-2 transition-all duration-400"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-white font-heading font-bold group-hover:text-accent transition-colors duration-300 text-[0.875rem] sm:text-[1.375rem] tracking-tight text-center">{rate.price}</span>
                  <span className="text-white/35 font-semibold mt-0.5 uppercase group-hover:text-accent/60 transition-colors duration-300 text-[0.5625rem] sm:text-[0.625rem]" style={{ letterSpacing: '0.15em' }}>{rate.unit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstimationRates;

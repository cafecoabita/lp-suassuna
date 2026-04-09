import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Vi+no+site+sua+promoção+da+sala+privativa+Suassuna.+A+sala+ainda+está+disponível?";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 600 * 0.4]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image com parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/lp-sala-suassuna/images/sala-suassuna-02.webp')",
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        {/* Subtítulo / Brand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="tracking-[0.3em] uppercase text-sm font-medium text-primary-foreground/70 mb-5"
        >
          Café Coabita Coworking
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-10"
        >
          Sala Suassuna
        </motion.h1>

        {/* Parágrafo descritivo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl md:text-2xl font-light text-primary-foreground/80 mb-6 max-w-2xl mx-auto"
        >
          Sala comercial mobiliada para equipes de até 17 pessoas · 38m²
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window.gtagSendEvent === "function") {
                window.gtagSendEvent(WHATSAPP_LINK);
              } else {
                window.open(WHATSAPP_LINK, "_blank");
              }
            }}
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold px-10 py-4 rounded-sm text-lg tracking-wide hover:bg-primary-foreground/90 transition-colors"
          >
            Agende uma visita
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import AnimatedSection from "./00AnimatedSection";
import { useEffect } from "react";

const ReviewsSection = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
      <div id="reviews" className="max-w-5xl mx-auto text-center">
        <p className="tracking-[0.3em] uppercase text-sm font-medium text-foreground/70 mb-4">
          Avaliações Reais
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-foreground">
          O que nossos clientes dizem
        </h2>

        <div className="rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm">
          <div
            className="elfsight-app-a67205c0-7fa3-4332-930f-657a872becfe"
          ></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ReviewsSection;
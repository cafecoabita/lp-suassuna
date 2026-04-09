import AnimatedSection from "./00AnimatedSection";
import { Badge } from "@/components/ui/badge";

const segments = [
  "Agências de Marketing",
  "Empresas de Tecnologia",
  "Equipes Comerciais",
  "Escritórios de Engenharia",
  "Times Administrativos",
  "Startups em Crescimento",
];

const IdealForSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto text-center">
      <p className="tracking-[0.3em] uppercase text-sm font-medium text-foreground/70 mb-4">
        Versatilidade
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-foreground">
        Ideal para
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {segments.map((s) => (
          <Badge
            key={s}
            variant="outline"
            className="text-sm px-5 py-2.5 font-medium border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          >
            {s}
          </Badge>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default IdealForSection;
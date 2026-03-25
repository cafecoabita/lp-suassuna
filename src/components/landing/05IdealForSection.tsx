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
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Ideal para diferentes perfis de equipe
      </h2>

      <p className="text-muted-foreground mb-10">
        A Sala Suassuna pode se tornar uma...
      </p>

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
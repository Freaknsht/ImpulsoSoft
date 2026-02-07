import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight } from "lucide-react";

const ProblemsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="problems" className="section-padding bg-background/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t.problems.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.problems.title}
          </h2>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.problems.items.map((problem, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {problem.description}
                    </p>
                    <div className="flex items-start gap-2 p-3 bg-brand-teal-light rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-primary font-medium">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

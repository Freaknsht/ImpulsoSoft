import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Store, Calendar, Settings } from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const iconMap = {
  chart: BarChart3,
  store: Store,
  calendar: Calendar,
  settings: Settings,
};

const SolutionsSection = () => {
  const { t } = useLanguage();
  const { setRef, visibleItems } = useScrollAnimationMultiple(
    t.solutions.items.length,
    { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
  );

  return (
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t.solutions.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.solutions.title}
          </h2>
        </div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.items.map((solution, index) => {
            const IconComponent = iconMap[solution.icon as keyof typeof iconMap] || Settings;

            return (
              <div
                key={index}
                ref={setRef(index)}
                className={cn(
                  "transition-all duration-700 ease-out",
                  visibleItems[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 text-center h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-brand-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

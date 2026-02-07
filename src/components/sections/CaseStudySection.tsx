import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Quote } from "lucide-react";

const CaseStudySection = () => {
  const { t } = useLanguage();
  const caseData = t.caseStudy.case;

  return (
    <section id="cases" className="section-padding bg-background/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t.caseStudy.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.caseStudy.title}
          </h2>
        </div>

        {/* Case study card */}
        <Card className="max-w-4xl mx-auto bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-brand-green/5">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {caseData.industry}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {caseData.title}
              </h3>
            </div>

            {/* Before/After comparison */}
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                <h4 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  {caseData.before.title}
                </h4>
                <ul className="space-y-3">
                  {caseData.before.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-6 md:p-8 bg-brand-green-light">
                <h4 className="text-lg font-semibold text-brand-green mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  {caseData.after.title}
                </h4>
                <ul className="space-y-3">
                  {caseData.after.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-green" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-brand-green/5 border-t border-border">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                <p className="text-lg md:text-xl text-foreground italic font-medium">
                  "{caseData.quote}"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudySection;

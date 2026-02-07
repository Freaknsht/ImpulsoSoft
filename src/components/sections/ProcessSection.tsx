import { useLanguage } from "@/lenguajeContext/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-wider">
            {t.process.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2">
            {t.process.title}
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="text-center lg:text-left">
              {/* Number with connector line */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  {step.number}
                </span>
                {/* Connector line extending from the number */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-[calc(338%+2rem)] h-0.5 bg-primary-foreground/20 -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

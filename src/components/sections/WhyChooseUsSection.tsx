import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { CheckCircle } from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
const WhyChooseUsSection = () => {
    const { t } = useLanguage();
    const { setRef, visibleItems } = useScrollAnimationMultiple(
        t.whyChooseUs.items.length,
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    return (
        <section className="section-padding bg-muted/30">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        {t.whyChooseUs.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                        {t.whyChooseUs.title}
                    </h2>
                </div>
                {/* Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {t.whyChooseUs.items.map((item, index) => (
                        <div
                            key={index}
                            ref={setRef(index)}
                            className={cn(
                                "flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-700 ease-out",
                                visibleItems[index]
                                    ? "opacity-100 translate-x-0"
                                    : index % 2 === 0
                                        ? "opacity-0 -translate-x-12"
                                        : "opacity-0 translate-x-12"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUsSection;
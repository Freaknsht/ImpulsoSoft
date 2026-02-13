import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, User } from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
const TestimonialsSection = () => {
    const { t } = useLanguage();
    const { setRef, visibleItems } = useScrollAnimationMultiple(
        t.testimonials.items.length,
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-4 md:mb-6">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        {t.testimonials.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                        {t.testimonials.title}
                    </h2>
                </div>
                <p className="text-center text-sm text-muted-foreground mb-12 max-w-lg mx-auto">
                    {t.testimonials.note}
                </p>
                {/* Testimonial cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {t.testimonials.items.map((testimonial, index) => (
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
                            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />
                                    <p className="text-foreground italic mb-6 flex-1">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <User className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TestimonialsSection;
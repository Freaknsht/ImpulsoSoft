import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageSquare, Target, Users } from "lucide-react";
import { useScrollAnimation, useScrollAnimationMultiple } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
const valueIcons = [Heart, MessageSquare, Target, Users];
const AboutSection = () => {
    const { t } = useLanguage();
    const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });
    const { setRef, visibleItems } = useScrollAnimationMultiple(
        t.about.values.items.length,
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        {t.about.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                        {t.about.title}
                    </h2>
                </div>
                {/* About content */}
                <div
                    ref={introRef}
                    className={cn(
                        "max-w-4xl mx-auto mb-16 transition-all duration-700 ease-out",
                        introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Team placeholder */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-brand-green/10 to-secondary/10 border border-border flex items-center justify-center">
                                <div className="text-center p-8">
                                    <Users className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                                    <p className="text-sm text-muted-foreground italic">
                                        {t.about.teamNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="space-y-4">
                            <p className="text-lg text-foreground leading-relaxed">
                                {t.about.description}
                            </p>
                            <p className="text-lg text-primary font-medium">
                                {t.about.description2}
                            </p>
                            <div className="pt-4">
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {t.about.whyTitle}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t.about.whyDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Values */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                        {t.about.values.title}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {t.about.values.items.map((value, index) => {
                            const Icon = valueIcons[index] || Heart;
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
                                    <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                                                <p className="text-sm text-muted-foreground">{value.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;
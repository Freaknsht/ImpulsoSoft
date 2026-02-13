import { useLanguage } from "@/lenguajeContext/LanguageContext";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
const FAQSection = () => {
    const { t } = useLanguage();
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
    return (
        <section className="section-padding bg-muted/30">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        {t.faq.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                        {t.faq.title}
                    </h2>
                </div>
                {/* FAQ Accordion */}
                <div
                    ref={ref}
                    className={cn(
                        "max-w-3xl mx-auto transition-all duration-700 ease-out",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <Accordion type="single" collapsible className="space-y-3">
                        {t.faq.items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
                            >
                                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
export default FAQSection;
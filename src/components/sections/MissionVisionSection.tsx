import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Compass, Eye } from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
const MissionVisionSection = () => {
    const { t } = useLanguage();
    const { setRef, visibleItems } = useScrollAnimationMultiple(2, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
    });
    return (
        <section className="section-padding bg-secondary text-secondary-foreground">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mission */}
                    <div
                        ref={setRef(0)}
                        className={cn(
                            "transition-all duration-700 ease-out",
                            visibleItems[0] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                        )}
                    >
                        <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 h-full">
                            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                                <Compass className="w-7 h-7 text-primary-foreground" />
                            </div>
                            <span className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-wider">
                                {t.missionVision.missionLabel}
                            </span>
                            <p className="text-lg text-primary-foreground mt-3 leading-relaxed">
                                {t.missionVision.missionText}
                            </p>
                        </div>
                    </div>
                    {/* Vision */}
                    <div
                        ref={setRef(1)}
                        className={cn(
                            "transition-all duration-700 ease-out",
                            visibleItems[1] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                        )}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 h-full">
                            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-primary-foreground" />
                            </div>
                            <span className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-wider">
                                {t.missionVision.visionLabel}
                            </span>
                            <p className="text-lg text-primary-foreground mt-3 leading-relaxed">
                                {t.missionVision.visionText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MissionVisionSection;
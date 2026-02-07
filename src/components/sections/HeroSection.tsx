import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations - desktop */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
      </div>

      {/* Aura gradient de escritorio (mismo aura que en mobile, pero como fondo) */}
      <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-label="aura-desktop">
        <div className="absolute top-6 left-6 w-72 h-72 animate-aura-1 bg-gradient-radial from-primary/40 via-transparent to-transparent blur-3xl opacity-80" />
        <div className="absolute bottom-6 right-20 w-96 h-96 animate-aura-2 bg-gradient-radial from-brand-green/30 via-transparent to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 animate-aura-3 bg-gradient-radial from-secondary/30 via-transparent to-transparent blur-3xl opacity-80" />
      </div>

      {/* Animated aura gradient - mobile only */}
      {/* Animated aura gradient - mobile only */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-aura-1 bg-gradient-radial from-primary/40 via-transparent to-transparent blur-3xl opacity-80"
          style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }} />
        <div className="absolute inset-0 animate-aura-2 bg-gradient-radial from-brand-green/30 via-transparent to-transparent blur-3xl opacity-80"
          style={{ width: '120%', height: '120%', left: '10%', top: '20%' }} />
        <div className="absolute inset-0 animate-aura-3 bg-gradient-radial from-secondary/30 via-transparent to-transparent blur-3xl opacity-80"
          style={{ width: '130%', height: '130%', left: '-15%', top: '30%' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-4">
              {t.hero.title}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex justify-center lg:justify-start">
              <a href="#contact">
                <Button size="lg" className="gap-2">
                  {t.hero.cta.contact}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mockup illustration */}
          <div className="relative animate-fade-in-right hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Dashboard mockup */}
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-brand-green/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-background rounded-md" />
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-32 bg-primary/20 rounded" />
                    <div className="h-8 w-24 bg-primary rounded-lg" />
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-brand-teal-light rounded-lg">
                      <div className="h-3 w-12 bg-primary/30 rounded mb-2" />
                      <div className="h-6 w-16 bg-primary/50 rounded" />
                    </div>
                    <div className="p-3 bg-brand-green-light rounded-lg">
                      <div className="h-3 w-12 bg-brand-green/30 rounded mb-2" />
                      <div className="h-6 w-16 bg-brand-green/50 rounded" />
                    </div>
                    <div className="p-3 bg-brand-blue-light rounded-lg">
                      <div className="h-3 w-12 bg-secondary/30 rounded mb-2" />
                      <div className="h-6 w-16 bg-secondary/50 rounded" />
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 bg-muted rounded-lg flex items-end p-4 gap-2">
                    <div className="flex-1 bg-primary/40 rounded-t h-1/2" />
                    <div className="flex-1 bg-primary/60 rounded-t h-3/4" />
                    <div className="flex-1 bg-primary/40 rounded-t h-1/3" />
                    <div className="flex-1 bg-primary/80 rounded-t h-full" />
                    <div className="flex-1 bg-primary/50 rounded-t h-2/3" />
                    <div className="flex-1 bg-primary/70 rounded-t h-4/5" />
                  </div>

                  {/* Table rows */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded-full" />
                        <div className="flex-1">
                          <div className="h-3 w-24 bg-foreground/20 rounded mb-1" />
                          <div className="h-2 w-16 bg-muted-foreground/20 rounded" />
                        </div>
                        <div className="h-4 w-16 bg-brand-green/30 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-3 bg-card rounded-xl shadow-lg border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-green rounded-full" />
                  </div>
                  <div>
                    <div className="h-2 w-16 bg-foreground/30 rounded mb-1" />
                    <div className="h-3 w-12 bg-brand-green/50 rounded" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-3 bg-card rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                  <div>
                    <div className="h-2 w-20 bg-foreground/30 rounded mb-1" />
                    <div className="h-3 w-14 bg-primary/50 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

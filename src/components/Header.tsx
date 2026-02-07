import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Button } from "@/components/ui/button";
import logoImage from "/logoCorto.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "#problems", label: t.nav.problems },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#process", label: t.nav.process },
    { href: "#cases", label: t.nav.cases },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[hsl(var(--header-bg))]/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo imageSrc={logoImage} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a href="#contact" className="hidden sm:block">
              <Button size="sm">{t.nav.contact}</Button>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

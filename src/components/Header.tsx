import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "/logoCorto.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        e.preventDefault();
        navigate("/" + href);
      }
    } else if (href === location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#solutions", label: t.nav.solutions },
    { href: "#problems", label: t.nav.problems },
    { href: "#process", label: t.nav.process },
    { href: "#cases", label: t.nav.cases },
    { href: "#contact", label: t.nav.contact },
    { href: "/nosotros", label: t.nav.about },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--header-bg))]/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsMenuOpen(false); }}>
            <Logo imageSrc={logoImage} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 mx-4">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a href="#contact" className="hidden sm:block" onClick={(e) => handleNavClick(e, "#contact")}>
              <Button size="sm">{t.nav.contact}</Button>
            </a>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background/98 backdrop-blur-md shadow-xl",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container-custom py-6 flex flex-col gap-2">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5 rounded-xl border border-transparent hover:border-primary/10"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5 rounded-xl border border-transparent hover:border-primary/10"
              >
                {item.label}
              </a>
            )
          )}
          <div className="mt-4 pt-4 border-t border-border">
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="block">
              <Button className="w-full text-base py-6">{t.nav.contact}</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useLanguage } from "@/lenguajeContext/LanguageContext";
import Logo from "./Logo";
import logoImage from "/logoCorto.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo imageSrc={logoImage} />
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://www.instagram.com/impulso.soft?igsh=c3pyNzFzdWtoMmts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Impulso Soft. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

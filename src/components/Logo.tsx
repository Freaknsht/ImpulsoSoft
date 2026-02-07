import { Zap } from "lucide-react";
import image from "public/logo IS.png"

interface LogoProps {
  className?: string;
  showText?: boolean;
  imageSrc?: string;
  size?: number; // tamaño en px
}

const Logo = ({
  className = "",
  showText = true,
  imageSrc,
  size = 40, // default 40px
}: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className=""
        style={{ width: size, height: size }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Logo"
            className="h-full w-full object-contain"
          />
        ) : (
          <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
        )}

        <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-white animate-pulse" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-tight tracking-tight text-foreground">
            Impulso<span className="text-primary">Soft</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

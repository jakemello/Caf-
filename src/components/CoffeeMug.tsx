import { useState, CSSProperties } from "react";
import { Beverage, MugColor, BrewingSpeed } from "../types";

interface CoffeeMugProps {
  beverage: Beverage;
  mugColor: MugColor;
  speed: BrewingSpeed;
  isFilledLocked: boolean;
  onFilledLockedToggle: () => void;
}

export default function CoffeeMug({
  beverage,
  mugColor,
  speed,
  isFilledLocked,
  onFilledLockedToggle,
}: CoffeeMugProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Map state to CSS variables
  const variables = {
    "--coffee-color": beverage.liquidColor,
    "--foam-color": beverage.foamColor,
    "--mug-primary": mugColor.primary,
    "--mug-border": mugColor.border,
    "--mug-accent": mugColor.accent,
    "--brew-duration": `${speed.duration}s`,
  } as CSSProperties;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Mug Container Wrapper - Hover/Click target */}
      <div
        id="coffee-mug-interactive-zone"
        className={`cup-interactive-wrapper relative group select-none select-none transition-all duration-300 ${
          isFilledLocked ? "force-hover" : ""
        }`}
        style={variables}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onFilledLockedToggle}
        title="Passe o mouse para encher ou clique para travar cheio!"
      >
        {/* Fill State indicators */}
        <div className="absolute top-0 right-0 bg-transparent text-xs font-mono text-zinc-400 group-hover:text-amber-500 transition-colors pointer-events-none pr-4">
          Status: {isHovered || isFilledLocked ? "Fervendo..." : "Vazio"}
        </div>

        {/* 1. Hot Steam Emitter */}
        <div className="steam-emitter">
          <div className="steam-particle" id="steam-1"></div>
          <div className="steam-particle" id="steam-2"></div>
          <div className="steam-particle" id="steam-3"></div>
          <div className="steam-particle" id="steam-4"></div>
        </div>

        {/* 2. Mug Body & Handle Group (Fixed frame to guarantee seamless handle alignment) */}
        <div className="mug-body-group relative w-[170px] h-[160px] transition-transform duration-500 group-hover:scale-[1.02]">
          {/* Main Cylinder body */}
          <div className="mug-main w-full h-full">
            {/* Coffee Liquid Layer */}
            <div 
              className="liquid-body"
              style={{
                height: isFilledLocked ? "85%" : undefined
              }}
            >
              {/* Background Parallax Wave */}
              <div className="absolute top-[-18px] left-0 w-[200%] h-[24px] flex opacity-40 pointer-events-none transform translate-x-0 group-hover:animate-[flow-waves_4s_infinite_linear]">
                <svg className="wave-element-bg w-1/2 h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 C25,2 75,18 100,10 L100,20 L0,20 Z" />
                </svg>
                <svg className="wave-element-bg w-1/2 h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 C25,2 75,18 100,10 L100,20 L0,20 Z" />
                </svg>
              </div>

              {/* Foreground Main Liquid Wave */}
              <div className="coffee-wave-scroller pointer-events-none">
                <svg className="wave-element w-1/2 h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 C30,2 70,18 100,10 L100,20 L0,20 Z" />
                </svg>
                <svg className="wave-element w-1/2 h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 C30,2 70,18 100,10 L100,20 L0,20 Z" />
                </svg>
              </div>

              {/* Crema / Foam Overlay on Liquid Top */}
              <div 
                className="coffee-crema-layer" 
                style={{ 
                  opacity: isFilledLocked ? 0.98 : undefined,
                  transform: isFilledLocked ? "scale(1)" : undefined
                }}
              >
                {/* Foam texture lines */}
                <div className="absolute inset-x-2 top-[3px] h-[3px] bg-white/20 rounded-full blur-[0.5px]"></div>
                <div className="absolute inset-x-4 bottom-[2px] h-[4px] bg-black/5 rounded-full blur-[1px]"></div>
              </div>

              {/* Floating bubbles rising up in the heat */}
              <div className="flavour-bubble" id="bubble-1"></div>
              <div className="flavour-bubble" id="bubble-2"></div>
              <div className="flavour-bubble" id="bubble-3"></div>
              <div className="flavour-bubble" id="bubble-4"></div>
              <div className="flavour-bubble" id="bubble-5"></div>
            </div>
          </div>

          {/* 3. Handle (Z-indexed below mug body with continuous coordinate lock) */}
          <div className="mug-handle"></div>
        </div>

        {/* 4. Saucer / Plate */}
        <div className="mug-saucer transition-transform duration-500 group-hover:translate-y-[2px]">
          <div className="mug-saucer-line"></div>
        </div>

        {/* 5. Isometric soft shadow */}
        <div className="mug-ambient-shadow"></div>
      </div>

      {/* Helper Guidance indicator under the mug */}
      <div className="mt-8 flex flex-col items-center gap-1.5 text-center pointer-events-none">
        <p className="text-sm font-medium text-amber-900/60 dark:text-amber-100/60 hint-text-glow flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          {isFilledLocked ? "Bloqueado Cheio 🔒 Clique para desbloquear" : "Passe o mouse sobre a caneca para encher"}
        </p>
        <span className="text-xs font-mono text-zinc-400">
          Enchendo em {speed.duration}s ({beverage.name})
        </span>
      </div>
    </div>
  );
}

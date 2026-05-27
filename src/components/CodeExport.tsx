import { useState } from "react";
import { Check, Copy, Code2, Sparkles, FileCode, Paintbrush } from "lucide-react";

interface CodeExportProps {
  coffeeColor: string;
  foamColor: string;
  speed: number;
}

export default function CodeExport({ coffeeColor, foamColor, speed }: CodeExportProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [copied, setCopied] = useState(false);

  // Pure modern HTML code to copy
  const htmlCode = `<!-- Caneca de Café Interativa -->
<div class="cup-interactive-wrapper" style="--coffee-color: ${coffeeColor}; --foam-color: ${foamColor}; --brew-duration: ${speed}s;">
  
  <!-- Fumaça/Vapor de Café Quente -->
  <div class="steam-emitter">
    <div class="steam-particle"></div>
    <div class="steam-particle"></div>
    <div class="steam-particle"></div>
    <div class="steam-particle"></div>
  </div>

  <!-- Corpo Principal da Caneca -->
  <div class="mug-main">
    <!-- Líquido de Café -->
    <div class="liquid-body">
      
      <!-- Ondas do Café em Parallax (Plano de Fundo) -->
      <div class="coffee-wave-scroller-bg">
        <svg class="wave-element-bg" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C25,2 75,18 100,10 L100,20 L0,20 Z" />
        </svg>
      </div>

      <!-- Ondas de Café do Primeiro Plano (Infinitas) -->
      <div class="coffee-wave-scroller">
        <svg class="wave-element" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C30,2 70,18 100,10 L100,20 L0,20 Z" />
        </svg>
        <svg class="wave-element" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C30,2 70,18 100,10 L100,20 L0,20 Z" />
        </svg>
      </div>

      <!-- Crema / Espuma Superior -->
      <div class="coffee-crema-layer"></div>

      <!-- Bolhas Fervendo de Sabor -->
      <div class="flavour-bubble"></div>
      <div class="flavour-bubble"></div>
      <div class="flavour-bubble"></div>
    </div>
  </div>

  <!-- Alça Lateral da Caneca -->
  <div class="mug-handle"></div>

  <!-- Pires da Caneca -->
  <div class="mug-saucer"></div>

  <!-- Sombra Projetada -->
  <div class="mug-ambient-shadow"></div>
</div>`;

  // Pure modern CSS code to copy
  const cssCode = `:root {
  --coffee-color: ${coffeeColor};
  --foam-color: ${foamColor};
  --mug-primary: #f8fafc;
  --mug-border: #cbd5e1;
  --brew-duration: ${speed}s;
}

/* Área Interativa de Disparo */
.cup-interactive-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  cursor: pointer;
}

/* Corpo Principal */
.mug-main {
  position: relative;
  width: 170px;
  height: 160px;
  background: var(--mug-primary);
  border: 8px solid var(--mug-border);
  border-radius: 10px 10px 65px 65px;
  box-shadow: inset 0 10px 25px rgba(255,255,255,0.6), 0 20px 40px rgba(0,0,0,0.05);
  overflow: hidden;
  z-index: 2;
}

/* Alça da Caneca */
.mug-handle {
  position: absolute;
  right: -42px;
  top: 30px;
  width: 55px;
  height: 95px;
  border: 8px solid var(--mug-border);
  border-radius: 15px 50px 50px 15px;
  z-index: 1;
}

/* Mudança Sutil de Alça no Hover */
.cup-interactive-wrapper:hover .mug-handle {
  animation: handle-wiggle 1.2s ease-in-out;
}

@keyframes handle-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1.5deg); }
}

/* Líquido com Transição Lenta no Hover */
.liquid-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: var(--coffee-color);
  transition: height var(--brew-duration) cubic-bezier(0.25, 1, 0.5, 1);
}

.cup-interactive-wrapper:hover .liquid-body {
  height: 82%; /* Enche até este ponto */
}

/* Efeito de Rolagem Infinita da Onda */
.coffee-wave-scroller {
  position: absolute;
  top: -16px;
  left: 0;
  width: 200%;
  height: 24px;
  display: flex;
  transform: translateX(0);
}

.cup-interactive-wrapper:hover .coffee-wave-scroller {
  animation: flow-waves 3s infinite linear;
}

.wave-element {
  width: 50%;
  height: 100%;
  fill: var(--coffee-color);
}

@keyframes flow-waves {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Espuma Superior (Crema) */
.coffee-crema-layer {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 18px;
  background: var(--foam-color);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 1.2s ease, transform var(--brew-duration) ease;
}

.cup-interactive-wrapper:hover .coffee-crema-layer {
  opacity: 0.95;
  transform: scale(1);
}

/* Emissor de Vapor */
.steam-emitter {
  position: absolute;
  top: -20px;
  width: 140px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}

.steam-particle {
  width: 6px;
  height: 40px;
  background: linear-gradient(to top, rgba(255,255,255,0.4), transparent);
  border-radius: 50%;
  filter: blur(4px);
  opacity: 0;
}

.cup-interactive-wrapper:hover .steam-particle {
  animation: rise-steam var(--brew-duration) infinite ease-in-out;
}

@keyframes rise-steam {
  0% { opacity: 0; transform: translateY(25px) scaleX(0.7); }
  33% { opacity: 0.8; transform: translateY(5px) scaleX(1.3) translateX(4px); }
  100% { opacity: 0; transform: translateY(-35px) scaleX(0.5); }
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(activeTab === "html" ? htmlCode : cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar código", err);
    }
  };

  return (
    <div className="w-full bg-[#18181b] border-2 border-[#2a1a12] rounded-2xl overflow-hidden shadow-[6px_6px_0px_rgba(42,26,18,0.15)] flex flex-col h-[520px]">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 block"></span>
          </div>
          <span className="text-zinc-500 font-mono text-xs pl-2">|</span>
          <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5 font-semibold">
            {activeTab === "html" ? <FileCode size={13} className="text-amber-400" /> : <Paintbrush size={13} className="text-sky-400" />}
            {activeTab === "html" ? "coffee-mug.html" : "mug-animations.css"}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all text-[11px] text-zinc-200 font-sans cursor-pointer group"
          title="Copiar código para área de transferência"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400 animate-bounce" />
              <span className="text-emerald-400 font-semibold">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={13} className="text-zinc-400 group-hover:text-amber-400 transition-colors" />
              <span>Copiar Código</span>
            </>
          )}
        </button>
      </div>

      {/* Selector Tabs */}
      <div className="flex bg-zinc-950 px-2 pt-1 border-b border-zinc-900">
        <button
          onClick={() => setActiveTab("html")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
            activeTab === "html"
              ? "border-amber-500 text-amber-400"
              : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Code2 size={13} />
          Documento HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
            activeTab === "css"
              ? "border-sky-500 text-sky-400"
              : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Paintbrush size={13} />
          Estilos CSS
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 overflow-auto p-5 font-mono text-xs text-zinc-300 bg-zinc-900/60 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {activeTab === "html" ? (
          <pre className="whitespace-pre select-all text-emerald-300/90">
            <code>
              {htmlCode.split("\n").map((line, idx) => (
                <div key={idx} className="flex group select-none">
                  <span className="w-8 text-zinc-600 pr-3 text-right select-none select-none text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="flex-1 select-text text-zinc-200">
                    {line.startsWith("<!--") ? (
                      <span className="text-zinc-500 font-normal italic">{line}</span>
                    ) : (
                      line
                        .replace(/(<\/?[a-zA-Z0-9:-]+>)/g, '<span class="text-[#f43f5e]">$1</span>')
                        .replace(/(class|style|viewBox|preserveAspectRatio|d)=/g, '<span class="text-[#fb923c]">$1</span>=')
                        .replace(/("[^"]*")/g, '<span class="text-[#e2e8f0]">$1</span>')
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        ) : (
          <pre className="whitespace-pre select-all text-sky-300/90">
            <code>
              {cssCode.split("\n").map((line, idx) => (
                <div key={idx} className="flex group select-none">
                  <span className="w-8 text-zinc-600 pr-3 text-right select-none text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="flex-1 select-text text-zinc-300">
                    {line.startsWith("/*") || line.includes("/*") ? (
                      <span className="text-zinc-500 font-normal italic">{line}</span>
                    ) : (
                      line
                        .replace(/(\.[a-zA-Z0-9:_-]+|\:[a-z]+)/g, '<span class="text-[#60a5fa]">$1</span>')
                        .replace(/([a-zA-Z0-9-]+\:)/g, '<span class="text-[#fb7185]">$1</span>')
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </div>

      {/* Code informational banner inside panel */}
      <div className="px-4 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <Sparkles size={11} className="text-amber-500/80" />
          Animação reativa via CSS Variables e Scroll Keyframes.
        </span>
        <span>UTF-8 • CSS3 / HTML5</span>
      </div>
    </div>
  );
}

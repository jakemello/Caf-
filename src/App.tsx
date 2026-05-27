import { useState } from "react";
import { motion } from "motion/react";
import { CupSoda, Code, Github, Sparkles, BookOpen, Coffee, Cpu, HelpCircle } from "lucide-react";
import { Beverage, MugColor, BrewingSpeed } from "./types";
import CoffeeMug from "./components/CoffeeMug";
import BeverageSelector from "./components/BeverageSelector";
import CodeExport from "./components/CodeExport";

// Mock Data for Beverages/Coffee Flavors
const BEVERAGES: Beverage[] = [
  {
    id: "espresso",
    name: "Expresso Premium",
    description: "Café encorpado, escuro e com crema dourada aveludada. Um clássico italiano puro.",
    liquidColor: "#2F1B0B",
    foamColor: "#CA9F76",
    accentColor: "#8c5b30",
    textColor: "text-[#CA9F76]",
    info: "Escuro & Intenso • 90°C",
  },
  {
    id: "cappuccino",
    name: "Cappuccino Italiano",
    description: "Proporções perfeitas de expresso, leite vaporizado e espuma cremosa.",
    liquidColor: "#51351D",
    foamColor: "#FAF6F0",
    accentColor: "#EADDC9",
    textColor: "text-amber-100",
    info: "Expresso & Vapor • 65°C",
  },
  {
    id: "matcha",
    name: "Matcha Latte",
    description: "Chá verde japonês moído e vaporizado com leite, gerando uma cor vibrante e sabor herbal.",
    liquidColor: "#395E2B",
    foamColor: "#EAF3E6",
    accentColor: "#61934c",
    textColor: "text-[#EAF3E6]",
    info: "Herbal Orgânico • 75°C",
  },
  {
    id: "strawberry",
    name: "Frappé de Morango",
    description: "Fusão de calda doce de morango com leite integral batido e espuma de baunilha.",
    liquidColor: "#B54153",
    foamColor: "#FCECEF",
    accentColor: "#e0728c",
    textColor: "text-[#FCECEF]",
    info: "Frutado & Gelado • 5°C",
  },
  {
    id: "cocoa",
    name: "Chocolate Cremoso",
    description: "Chocolate suíço derretido ao leite, espesso, quente e finalizado com espuma neutra.",
    liquidColor: "#412316",
    foamColor: "#FFFBF2",
    accentColor: "#935116",
    textColor: "text-zinc-100",
    info: "Doce Aveludado • 80°C",
  },
];

// Mock Data for Ceramic Mug Colors
const MUG_COLORS: MugColor[] = [
  {
    id: "porcelain",
    name: "Argila Alva (Branca)",
    primary: "#FAF9F6",
    border: "#E4E4E7",
    accent: "#F4F4F5",
  },
  {
    id: "carbon",
    name: "Preto Absoluto (Obsidiana)",
    primary: "#27272A",
    border: "#18181B",
    accent: "#3F3F46",
  },
  {
    id: "mint",
    name: "Menta Fresca",
    primary: "#ECFDF5",
    border: "#A7F3D0",
    accent: "#D1FAE5",
  },
  {
    id: "terracotta",
    name: "Terracota Rústica",
    primary: "#FFF7ED",
    border: "#FDBA74",
    accent: "#FFEDD5",
  },
];

// Mock Data for Brewing Durations
const SPEEDS: BrewingSpeed[] = [
  { id: "fast", name: "Rápido", duration: 1.5 },
  { id: "medium", name: "Padrão", duration: 4.0 },
  { id: "slow", name: "Gotejamento", duration: 7.5 },
];

export default function App() {
  const [selectedBev, setSelectedBev] = useState<Beverage>(BEVERAGES[0]);
  const [selectedMug, setSelectedMug] = useState<MugColor>(MUG_COLORS[0]);
  const [selectedSpeed, setSelectedSpeed] = useState<BrewingSpeed>(SPEEDS[1]);
  const [isFilledLocked, setIsFilledLocked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"viewer" | "explanation">("viewer");

  const toggleFilledLock = () => {
    setIsFilledLocked(!isFilledLocked);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#2a1a12] font-serif transition-colors duration-300 relative overflow-x-hidden pb-16 selection:bg-amber-100 selection:text-amber-950">
      
      {/* 0. Side Vertical Stamp (Artistic Flair requirement) */}
      <div 
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 rotate-180 opacity-50 text-[10px] tracking-[6px] font-sans font-semibold uppercase text-[#2a1a12]/70 select-none pointer-events-none"
        style={{ writingMode: "vertical-rl" }}
      >
        COLHEITA SELECIONADA — EDIÇÃO № 42
      </div>

      {/* 1. Header Banner */}
      <header className="px-6 py-6 max-w-7xl mx-auto flex items-center justify-between border-b border-[#2a1a12]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#2a1a12] flex items-center justify-center shadow-xs bg-white">
            <Coffee className="text-[#2a1a12]" size={18} />
          </div>
          <div>
            <span className="text-[9px] font-sans font-bold uppercase tracking-[3px] text-[#2a1a12]/60">Estúdio Sensorial</span>
            <h1 className="text-base font-bold text-[#2a1a12] tracking-tight leading-none font-serif mt-0.5">
              Café em Código
            </h1>
          </div>
        </div>

        {/* Badge Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2a1a12] bg-white text-[11px] font-sans text-[#2a1a12]/80 font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-800 animate-ping"></span>
          INFUSÃO VIA CSS VARIABLES
        </div>
      </header>

      {/* 2. Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT PANEL: Interactive Showcase (5/12 columns) */}
        <section 
          id="showcase-section" 
          className="lg:col-span-5 flex flex-col gap-10"
        >
          {/* Main Title & Teaser (Artistic Flair Display Heading) */}
          <div className="w-full text-center lg:text-left">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[8px] text-[#2a1a12]/50 block mb-3">
              Experiência Sensorial
            </span>
            
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#2a1a12] font-normal leading-0.8 tracking-tight mb-8">
              Café<br />Puro
            </h2>
            
            <div className="border-t border-[#2a1a12]/10 pt-6 mt-2">
              <p className="text-sm font-serif italic text-[#2a1a12]/80 leading-relaxed">
                Repouse o olhar e o cursor. Sinta a transformação do vazio em plenitude enquanto os aromas preenchem o ambiente. Uma ode ao tempo e à paciência.
              </p>
            </div>
          </div>

          {/* Interactive Coffee Mug Housing Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex items-center justify-center p-8 xs:p-12 sm:p-16 bg-white border-2 border-[#2a1a12] rounded-3xl shadow-[6px_6px_0px_rgba(42,26,18,0.15)] relative min-h-[360px]"
          >
            {/* Embedded Mug Component with dynamic state feeds */}
            <CoffeeMug
              beverage={selectedBev}
              mugColor={selectedMug}
              speed={selectedSpeed}
              isFilledLocked={isFilledLocked}
              onFilledLockedToggle={toggleFilledLock}
            />
          </motion.div>

          {/* Features cards styled organically */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-xl border border-[#2a1a12]/20 bg-white shadow-xs">
              <span className="text-xs font-semibold font-sans uppercase tracking-wider text-amber-900 block mb-1">
                Ação Microfísica
              </span>
              <span className="text-[11px] text-[#2a1a12]/70 block leading-relaxed font-sans">
                Efeito de fumaça e dilatação molecular renderizados via hardware.
              </span>
            </div>
            <div className="p-4 rounded-xl border border-[#2a1a12]/20 bg-white shadow-xs">
              <span className="text-xs font-semibold font-sans uppercase tracking-wider text-amber-900 block mb-1">
                Vetor de Infusão
              </span>
              <span className="text-[11px] text-[#2a1a12]/70 block leading-relaxed font-sans">
                Máscaras de recorte que desenham o líquido respondendo em tempo real.
              </span>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: Configuration Controls & Code (7/12 columns) */}
        <section 
          id="config-control-section" 
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Top section: Barista controls */}
          <BeverageSelector
            beverages={BEVERAGES}
            selectedBeverage={selectedBev}
            onBeverageSelect={setSelectedBev}
            mugColors={MUG_COLORS}
            selectedMugColor={selectedMug}
            onMugColorSelect={setSelectedMug}
            speeds={SPEEDS}
            selectedSpeed={selectedSpeed}
            onSpeedSelect={setSelectedSpeed}
            isFilledLocked={isFilledLocked}
            onFilledLockedToggle={toggleFilledLock}
          />

          {/* Bottom section: Code block/Description */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2.5 ml-2">
              <button
                onClick={() => setActiveTab("viewer")}
                className={`flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all cursor-pointer border ${
                  activeTab === "viewer"
                    ? "bg-[#2a1a12] text-white border-[#2a1a12]"
                    : "bg-white text-[#2a1a12] border-[#2a1a12]/20 hover:border-[#2a1a12]"
                }`}
              >
                <Code size={12} />
                <span>Gerador de Código</span>
              </button>
              <button
                onClick={() => setActiveTab("explanation")}
                className={`flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all cursor-pointer border ${
                  activeTab === "explanation"
                    ? "bg-[#2a1a12] text-white border-[#2a1a12]"
                    : "bg-white text-[#2a1a12] border-[#2a1a12]/20 hover:border-[#2a1a12]"
                }`}
              >
                <BookOpen size={12} />
                <span>Como Funciona?</span>
              </button>
            </div>

            {activeTab === "viewer" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Visualizer and code exporter component */}
                <CodeExport
                  coffeeColor={selectedBev.liquidColor}
                  foamColor={selectedBev.foamColor}
                  speed={selectedSpeed.duration}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-white border-2 border-[#2a1a12] shadow-sm flex flex-col gap-4 text-[#2a1a12]/95"
              >
                <h3 className="font-serif font-bold text-lg border-b border-[#2a1a12]/10 pb-2">
                  A Mecânica da Animação
                </h3>
                <p className="text-sm font-sans leading-relaxed">
                  Esta simulação usa uma combinação refinada de estados de hover nativos adicionados a manipulações em <strong>CSS Variables</strong> para atualizar as cores dinamicamente sem forçar repinturas desnecessárias de layout:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 text-xs font-sans text-[#2a1a12]/85">
                  <li>
                    <strong className="text-amber-950">Transição de Altura:</strong> Ao passar o cursor na caneca, o contêiner interno do líquido (<code className="font-mono bg-amber-50 px-1 py-0.5 rounded text-rose-700">.liquid-body</code>) muda sua porcentagem de <code className="font-mono">height</code> de 0% a 85% com uma velocidade configurada pela variável <code className="font-mono">--brew-duration</code>.
                  </li>
                  <li>
                    <strong className="text-amber-950">Camadas de Vapor Térmico:</strong> Linhas em gradiente com desfoque (<code className="font-mono">filter: blur()</code>) que são suspensas por translações de keyframes 3D em tempos assíncronos (<code className="font-mono">nth-child</code> de atrasos variados) para imitar a evaporação real da caneca fervente.
                  </li>
                  <li>
                    <strong className="text-amber-950">Ondas Parallax Infinitas:</strong> Duas tags vetoriais SVG de formato sinuoso são colocadas lado a lado em um invólucro com <code className="font-mono">width: 200%</code>. No hover, o CSS move continuamente o elemento para a esquerda usando <code className="font-mono">transform: translateX(-50%)</code> de forma repetitiva, formando ondulações constantes sem quebras visuais.
                  </li>
                  <li>
                    <strong className="text-amber-950">Crema Sobressalente:</strong> A espuma cremosa superior (<code className="font-mono">.coffee-crema-layer</code>) é pré-carregada e fica sutilmente achatada no fundo do copo, alcançando transparência total e escalando em tamanho quando se aproxima do topo do café com uma curvatura suave.
                  </li>
                </ul>
                <div className="mt-2 text-[11px] font-mono p-3 rounded-lg bg-[#fdfaf6] border border-[#2a1a12]/10 text-zinc-600 flex items-center gap-2">
                  <Cpu size={12} className="text-amber-700" />
                  Performance: Consumo de CPU zerado graças ao processamento através da GPU para transformações 3D.
                </div>
              </motion.div>
            )}
          </div>
        </section>

      </main>

      {/* 3. Footer */}
      <footer className="mt-20 py-10 px-6 bg-white border-t border-[#2a1a12]/10 text-center flex flex-col items-center justify-center gap-2.5">
        <p className="text-xs text-[#2a1a12]/60 font-serif italic">
          Feito sob demanda com ☕, HTML moderno e CSS puro para desenvolvedores criativos.
        </p>
        <span className="text-[10px] font-mono text-[#2a1a12]/40">
          Versão Alpha 1.0.4 • Licenciado sob Apache-2.0
        </span>
      </footer>
    </div>
  );
}

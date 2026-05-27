import { Beverage, MugColor, BrewingSpeed } from "../types";
import { Coffee, Flame, RotateCcw, Lock, Unlock, Palette, Gauge } from "lucide-react";

interface BeverageSelectorProps {
  beverages: Beverage[];
  selectedBeverage: Beverage;
  onBeverageSelect: (bev: Beverage) => void;

  mugColors: MugColor[];
  selectedMugColor: MugColor;
  onMugColorSelect: (mug: MugColor) => void;

  speeds: BrewingSpeed[];
  selectedSpeed: BrewingSpeed;
  onSpeedSelect: (speed: BrewingSpeed) => void;

  isFilledLocked: boolean;
  onFilledLockedToggle: () => void;
}

export default function BeverageSelector({
  beverages,
  selectedBeverage,
  onBeverageSelect,
  mugColors,
  selectedMugColor,
  onMugColorSelect,
  speeds,
  selectedSpeed,
  onSpeedSelect,
  isFilledLocked,
  onFilledLockedToggle,
}: BeverageSelectorProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-2xl border-2 border-[#2a1a12] shadow-[6px_6px_0px_rgba(42,26,18,0.15)] text-[#2a1a12]">
      {/* 1. Header Information */}
      <div className="flex items-center justify-between border-b border-[#2a1a12]/10 pb-4">
        <div className="flex items-center gap-2">
          <Coffee className="text-amber-900" size={18} />
          <h2 className="font-serif font-bold text-lg text-[#2a1a12]">
            Painel do Barista
          </h2>
        </div>
        <button
          onClick={onFilledLockedToggle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-sans cursor-pointer transition-all duration-300 border ${
            isFilledLocked
              ? "bg-[#2a1a12] text-white border-[#2a1a12]"
              : "bg-white text-[#2a1a12] border-[#2a1a12]/20 hover:border-[#2a1a12]"
          }`}
          title="Clique para travar a caneca cheia permanentemente"
        >
          {isFilledLocked ? <Lock size={12} /> : <Unlock size={12} />}
          <span>{isFilledLocked ? "Travar Cheio" : "Gatilho Livre"}</span>
        </button>
      </div>

      {/* 2. Choose Beverage Section */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2a1a12]/60 flex items-center gap-1.5">
          <Flame size={12} className="text-amber-900" />
          1. ESCOLHA O SABOR DA BEBIDA
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {beverages.map((bev) => {
            const isSelected = bev.id === selectedBeverage.id;
            return (
              <button
                key={bev.id}
                onClick={() => onBeverageSelect(bev)}
                className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#fdfaf6] border-2 border-[#2a1a12] shadow-xs"
                    : "border-[#2a1a12]/10 bg-transparent hover:bg-[#fdfaf6]/50 hover:border-[#2a1a12]/40"
                }`}
              >
                <div className="flex flex-col pr-1">
                  <span className="text-sm font-semibold font-serif text-[#2a1a12]">
                    {bev.name}
                  </span>
                  <span className="text-[10px] text-[#2a1a12]/60 font-sans mt-0.5">
                    {bev.info}
                  </span>
                </div>
                {/* Visual Liquid Indicator */}
                <div 
                  className="w-5 h-5 rounded-full border border-[#2a1a12]/30 flex items-center justify-center relative overflow-hidden shrink-0"
                  style={{ backgroundColor: bev.liquidColor }}
                >
                  <div 
                    className="absolute top-0 inset-x-0 h-2 opacity-80" 
                    style={{ backgroundColor: bev.foamColor }}
                  ></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Choose Ceramic Color */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2a1a12]/60 flex items-center gap-1.5">
          <Palette size={12} className="text-[#2a1a12]" />
          2. COR DA CANECA DE CERÂMICA
        </label>
        <div className="flex gap-3 items-center">
          {mugColors.map((mug) => {
            const isSelected = mug.id === selectedMugColor.id;
            return (
              <button
                key={mug.id}
                onClick={() => onMugColorSelect(mug)}
                className={`relative w-9 h-9 rounded-full border-2 transition-all duration-300 cursor-pointer shadow-sm ${
                  isSelected
                    ? "scale-110 border-[#2a1a12] ring-2 ring-[#2a1a12]/20"
                    : "border-[#2a1a12]/20 hover:scale-105"
                }`}
                style={{ backgroundColor: mug.primary }}
                title={mug.name}
              >
                {/* Inner circular handle lookalike */}
                <span className="absolute -right-1 top-1.5 w-3 h-5 rounded-r-full border-r border-t border-b border-[#2a1a12]/30 bg-inherit opacity-85"></span>
              </button>
            );
          })}
          <span className="text-xs font-sans text-[#2a1a12]/60 font-semibold pl-2">
            {selectedMugColor.name}
          </span>
        </div>
      </div>

      {/* 4. Speed selector */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2a1a12]/60 flex items-center gap-1.5">
          <Gauge size={12} className="text-[#2a1a12]" />
          3. VELOCIDADE DE INFUSÃO (CSS TRANSITION)
        </label>
        <div className="flex bg-[#fdfaf6] border border-[#2a1a12]/20 p-1 rounded-xl">
          {speeds.map((s) => {
            const isSelected = s.id === selectedSpeed.id;
            return (
              <button
                key={s.id}
                onClick={() => onSpeedSelect(s)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-sans font-medium text-center transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#2a1a12] text-white shadow-xs font-semibold"
                    : "text-[#2a1a12]/60 hover:text-[#2a1a12]"
                }`}
              >
                {s.name} ({s.duration}s)
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

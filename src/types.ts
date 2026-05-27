export interface Beverage {
  id: string;
  name: string;
  description: string;
  liquidColor: string;
  foamColor: string;
  accentColor: string;
  textColor: string;
  info: string;
}

export interface MugColor {
  id: string;
  name: string;
  primary: string;
  accent: string;
  border: string;
}

export interface BrewingSpeed {
  id: string;
  name: string;
  duration: number; // in seconds
}

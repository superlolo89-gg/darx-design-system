export type Confidence = 'low' | 'medium' | 'high';
export interface FitScoreData {name: string; score: number; confidence: Confidence; criteria: string[]; reasons: string[]; tradeOffs: string[];}
export function validateFitScore(data: FitScoreData): FitScoreData;
export function createFitScore(data: FitScoreData, doc?: Document): HTMLElement;
export function createButton(label: string, onClick: (event: MouseEvent) => void, doc?: Document): HTMLButtonElement;
export function createConfidence(level: Confidence, doc?: Document): HTMLSpanElement;

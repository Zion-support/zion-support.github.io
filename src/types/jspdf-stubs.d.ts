declare module 'jspdf' {
  export class jsPDF {
    constructor(options?: unknown);
    text(...args: unknown[]): void;
    addImage(...args: unknown[]): void;
    rect(...args: unknown[]): void;
    line(...args: unknown[]): void;
    addPage(...args: unknown[]): void;
    setFont(...args: unknown[]): void;
    setFontSize(...args: unknown[]): void;
    setTextColor(...args: unknown[]): void;
    setFillColor(...args: unknown[]): void;
    setDrawColor(...args: unknown[]): void;
    setLineWidth(...args: unknown[]): void;
    splitTextToSize(text: string, size: number): string[];
    output(type?: string): unknown;
  }
  export function autoTable(...args: unknown[]): void;
}

declare module 'jspdf-autotable' {
  const autoTable: unknown;
  export default autoTable;
}

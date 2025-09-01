declare module 'jspdf' {'  export class jsPDF {'    constructor(options?:  );
    text(...args: unknown[]: any): void;
    addImage(...args: unknown[]: any): void;
    rect(...args: unknown[]: any): void;
    line(...args: unknown[]: any): void;
    addPage(...args: unknown[]: any): void;
    setFont(...args: unknown[]: any): void;
    setFontSize(...args: unknown[]: any): void;
    setTextColor(...args: unknown[]: any): void;
    setFillColor(...args: unknown[]: any): void;
    setDrawColor(...args: unknown[]: any): void;
    setLineWidth(...args: unknown[]: any): void;
    splitTextToSize(text: string, size: number): string[];
    output(type?: string): }
  export function autoTable(...args: any[]: any): void;

declare module 'jspdf-autotable' {'  const autoTable:  ;'  export { autoTable };
export default autoTable}
;export default autoTable;

declare module 'jspdf' {
  export class jsPDF {
    constructor(options?: );
    text(...args: []): void;
    addImage(...args: []): void;
    rect(...args: []): void;
    line(...args: []): void;
    addPage(...args: []): void;
    setFont(...args: []): void;
    setFontSize(...args: []): void;
    setTextColor(...args: []): void;
    setFillColor(...args: []): void;
    setDrawColor(...args: []): void;
    setLineWidth(...args: []): void;
    splitTextToSize(text: string, size: number): string[];
    output(type?: string): any;
  }
  export function autoTable(...args: []): void;
}

declare module 'jspdf-autotable' {
  const autoTable: any;
  export default autoTable;
}

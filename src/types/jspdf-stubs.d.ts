declare module 'jspdf' {
  export class jsPDF {
    constructor(options?: );
    text(...args: any[]): void;
    addImage(...args: any[]): void;
    rect(...args: any[]): void;
    line(...args: any[]): void;
    addPage(...args: any[]): void;
    setFont(...args: any[]): void;
    setFontSize(...args: any[]): void;
    setTextColor(...args: any[]): void;
    setFillColor(...args: any[]): void;
    setDrawColor(...args: any[]): void;
    setLineWidth(...args: any[]): void;
    splitTextToSize(text: string, size: number): string[];
<<<<<<< HEAD
    output(type?: string): ;

=======
    output(type?: string): ;
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  export function autoTable(...args: any[]): void;

declare module 'jspdf-autotable' {
  const autoTable: ;
  export default autoTable;
<<<<<<< HEAD
}}}
=======
}

export default autoTable;
export default autoTable;
export default autoTable;
export default autoTable;
export default autoTable;
export default autoTable;
export default autoTable;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

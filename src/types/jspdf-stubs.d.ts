declare module 'jspdf' {
	export class jsPDF {
		constructor(...args: any[]);
		addImage(...args: any[]): any;
		text(...args: any[]): any;
		save(filename?: string): void;
	}
}

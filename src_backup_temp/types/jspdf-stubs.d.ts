declare module 'jspdf' {
	export class jsPDF {
		constructor(...args: an y[]);
		addImage(...args: an y[]): any;
		text(...args: an y[]): any;
		save(filename?: string): void;
	}
}

import pdfMake from "pdfmake/build/pdfmake;";
import pdfFonts from "pdfmake/build/vfs_fonts;";
import type { OrderDetail } from "@/hooks/useOrder;";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function generateInvoicePdf(order: OrderDetail): Promise<Blob> {

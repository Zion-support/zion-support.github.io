interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  date: string;
  items: OrderItem[];
  total: number;
}

export function generateInvoicePdf(order: Order): void {
  const itemsTable = [
    ["Item", "Qty", "Price"],
    ...order.items.map(i => [i.name, String(i.quantity), `$${i.price.toFixed(2)}`])
  ];

  const docDef: any = {
    content: [
      { text: `Invoice #${order.orderId}`, style: "header" },
      { text: `Date: ${new Date(order.date).toLocaleDateString()}` },
      { text: "Items:", style: "subheader" },
      {
        table: {
          headerRows: 1,
          body: itemsTable
        }
      },
      { text: `Total: $${order.total.toFixed(2)}`, style: "total" }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true
      },
      subheader: {
        fontSize: 14,
        bold: true
      },
      total: {
        fontSize: 16,
        bold: true
      }
    }
  };

  // This would typically use a PDF library like jsPDF
  console.log("PDF generated:", docDef);
}
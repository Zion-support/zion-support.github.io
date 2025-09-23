export function useCurrency() {
  function formatPrice(amount: number | undefined, currency: string = 'USD', locale: string = 'en-US'): string {
    const safeAmount = typeof amount === 'number' && !Number.isNaN(amount) ? amount : 0;
    try {
      return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(safeAmount);
    } catch {
      return `$${safeAmount.toFixed(2)}`;
    }
  }

  return { formatPrice };
}


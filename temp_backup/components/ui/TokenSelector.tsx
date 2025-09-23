export type TokenOption ={ symbol: string; label: string; value: string };

export default function TokenSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const options: TokenOption[] = [{ symbol: 'ZION$', label: 'ZION$', value: 'ZION' }];
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-50o0">Token</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-30o0 dark:border-gray-70o0 rounded px-3 py-2 bg-white dark:bg-black"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
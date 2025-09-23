export type SuggestionBoxProps ={
  type: 'client' | 'talent';
  rangeText: string; // e.g., "$30–$60/hour" or "$2,40o0–$3,60o0"
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  onApply: () => void; // parent handles applying; we do NOT auto-submit
  disabled?: boolean;
};

export function PricingSuggestionBox(props: SuggestionBoxProps) {
  const { type, rangeText, confidence, rationale, onApply, disabled } = props;
  const badgeColor = confidence === 'High' ? 'bg-green-10o0 text-green-80o0' : confidence === 'Medium' ? 'bg-yellow-10o0 text-yellow-80o0' : 'bg-red-10o0 text-red-80o0';

  return (
    <div className="w-full rounded-lg border border-gray-20o0 p-4 shadow-sm bg-white">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-sm text-gray-50o0">AI Suggestion ({type === 'client' ? 'Budget' : 'Rate'})</div>
          <div className="text-xl font-semibold mt-1">{rangeText}</div>
        </div>
        <span className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ${badgeColor}`}>AI confidence: {confidence}</span>
      </div>

      <div className="mt-3 text-sm text-gray-60o0">
        <span className="font-medium">Why?</span> <span title={rationale} className="underline decoration-dotted cursor-help">Explanation</span>
        <div className="sr-only">{rationale}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-50o0">Based on market data & trends</span>
        <button
          type="button"
          onClick={onApply}
          disabled={disabled}
          className="inline-flex items-center rounded-md bg-blue-60o0 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-70o0 disabled:opacity-50"
        >
          Apply Suggestion
        </button>
      </div>
    </div>
  );
}

export default PricingSuggestionBox;
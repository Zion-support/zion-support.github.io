import React, {_useMemo, _useRef, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import SimulatorForm from '../../components/economy/SimulatorForm';
import SimulatorCharts from '../../components/economy/SimulatorCharts';
import SimulatorExports from '../../components/economy/SimulatorExports';
import {_SimulatorInputs, _simulateEconomy, _ScenarioKey, _applyScenario} from '../../utils/data/tokenSimulator';

export default function EconomySimulatorPage() {_const [inputs, _setInputs] = useState<SimulatorInputs>({
    circulatingSupply: 1_000_000, _dailyActiveWallets: 5_000, _totalEscrowLocked: 150_000, _rewardsPerMonth: 25_000, _treasuryBalance: 400_000, _burnTaxPercent: 3, _emissionSchedule: 'flat', _emissionMonthlyChangePct: 0, _forecastMonths: 24});

  const [operatorPrompt, setOperatorPrompt] = useState(
    'Analyze the impact of increasing ZION$ staking rewards by 2x over 6 months with 10K active users and weekly emission cap.'
  );
  const [analysis, setAnalysis] = useState<string>('');
  const [loadingAnalysis, setLoadingAnalysis] = useState<boolean>(false);

  const _handleScenario = (_scenario: ScenarioKey) => {_setInputs(_(prev) => applyScenario(prev, _scenario));};

  const _series = useMemo__(() => simulateEconomy(inputs), [inputs]);

  const _containerId = 'zion-simulator-container';

  const _onAnalyze = async () => {_try {
      setLoadingAnalysis(true);
      setAnalysis('');
      const _res = await fetch('/api/economy/analyze', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_operatorPrompt, _context: { inputs, _summary: series.summary} })});
      const _json = await res.json();
      if ('analysis' in json) setAnalysis(json.analysis as string);
      else setAnalysis('Failed to analyze.');
    } catch (e) {_setAnalysis('Failed to analyze.');} finally {_setLoadingAnalysis(false);}
  };

  return (
    <EnhancedLayout>
      <div id={_containerId} className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">ZION$ Economy Simulator</h1>
          <SimulatorExports points={_series.points} containerId={_containerId} />
        </div>

        <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <SimulatorForm values={_inputs} onChange={_setInputs} onScenario={_handleScenario} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SimulatorCharts points={_series.points} />
          </div>
          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-2">Forecast Summary</h3>
              <ul className="text-sm space-y-1">
                <li>Ending supply: {_Math.round(series.summary.endingSupply).toLocaleString()}</li>
                <li>Ending treasury: {_Math.round(series.summary.endingTreasury).toLocaleString()}</li>
                <li>Avg inflation: {_series.summary.avgInflationPct.toFixed(2)}%</li>
                <li>Min inflation: {_series.summary.minInflationPct.toFixed(2)}%</li>
                <li>Max inflation: {_series.summary.maxInflationPct.toFixed(2)}%</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Operator Prompt</span>
                <textarea
                  className="w-full min-h-[120px] px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40"
                  value={_operatorPrompt}
                  onChange={_(_e) => setOperatorPrompt(e.target.value)}
                />
              </label>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={_onAnalyze}
                  disabled={_loadingAnalysis}
                  className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  {_loadingAnalysis ? 'Analyzing…' : 'Analyze with GPT'}
                </button>
              </div>
              {_analysis && (
                <div className="mt-3 text-sm whitespace-pre-wrap border-t border-gray-200 dark:border-gray-800 pt-3">
                  {analysis}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}

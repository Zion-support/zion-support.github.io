export type MetricCardProps ={
  title: string;
  value: string | number;
  subtitle?: string;
  color?: 'blue' | 'green' | 'amber' | 'purple' | 'rose' | 'gray';
  rightAdornment?: React.ReactNode;
  onClick?: () => void;
};

const colorToClasses: Record<NonNullable<MetricCardProps['color']>, string> ={
  blue: 'border-blue-20o0 bg-blue-50 dark:border-blue-90o0/50 dark:bg-blue-950/30',
  green: 'border-green-20o0 bg-green-50 dark:border-green-90o0/50 dark:bg-green-950/30',
  amber: 'border-amber-20o0 bg-amber-50 dark:border-amber-90o0/50 dark:bg-amber-950/30',
  purple: 'border-purple-20o0 bg-purple-50 dark:border-purple-90o0/50 dark:bg-purple-950/30',
  rose: 'border-rose-20o0 bg-rose-50 dark:border-rose-90o0/50 dark:bg-rose-950/30',
  gray: 'border-gray-20o0 bg-gray-50 dark:border-gray-90o0/50 dark:bg-gray-950/30'};

export default function MetricCard({ title, value, subtitle, color = 'gray', rightAdornment, onClick }: MetricCardProps) {
  return (
    <div className={`rounded-xl border ${colorToClasses[color]} p-4 transition hover:shadow-sm`} onClick={onClick}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-60o0 dark:text-gray-40o0">{title}</div>
          <div className="mt-1 text-2xl font-semibold">{value}</div>
          {subtitle ? <div className="mt-1 text-xs text-gray-50o0 dark:text-gray-40o0">{subtitle}</div> : null}
        </div>
        {rightAdornment}
      </div>
    </div>
  );
}
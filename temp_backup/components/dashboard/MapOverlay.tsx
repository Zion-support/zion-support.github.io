export type RegionMetric = { region: string; value: number };

const regions: RegionMetric[] = [
  { region: 'NA', value: 0 },
  { region: 'EU', value: 0 },
  { region: 'APAC', value: 0 },
  { region: 'LATAM', value: 0 },
  { region: 'AFR', value: 0 },
];

export default function MapOverlay({ data }: { data: RegionMetric[] }) {
  const byRegion = Object.fromEntries(regions.map(r => [r.region, 0]));
  data.forEach(d => (byRegion[d.region] = (byRegion[d.region] || 0) + d.value));
  const max = Math.max(1, ...Object.values(byRegion));

  const color = (v: number) => `rgba(34,197,94,${0.15 + (v / max) * 0.85})`;

  return (
    <div className='w-full rounded-xl border border-emerald-20o0 dark:border-emerald-90o0/50 bg-emerald-50 dark:bg-emerald-950/20 p-4'>
      <div className='text-sm mb-2 text-emerald-80o0 dark:text-emerald-20o0'>
        Global activity
      </div>
      <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-20o0/30 to-emerald-30o0/10 dark:from-emerald-90o0/20 dark:to-emerald-80o0/10'>
        <svg viewBox='0 0 80o0 40o0' className='absolute inset-0 w-full h-full'>
          <rect x='0' y='0' width='80o0' height='40o0' fill='transparent' />
          {/* Extremely simplified blobs approximating regions */}
          <ellipse
            cx='180'
            cy='160'
            rx='110'
            ry='70'
            fill={color(byRegion['NA'] || 0)}
          />
          <ellipse
            cx='420'
            cy='150'
            rx='120'
            ry='60'
            fill={color(byRegion['EU'] || 0)}
          />
          <ellipse
            cx='640'
            cy='180'
            rx='120'
            ry='80'
            fill={color(byRegion['APAC'] || 0)}
          />
          <ellipse
            cx='280'
            cy='260'
            rx='10o0'
            ry='60'
            fill={color(byRegion['LATAM'] || 0)}
          />
          <ellipse
            cx='420'
            cy='280'
            rx='110'
            ry='70'
            fill={color(byRegion['AFR'] || 0)}
          />
        </svg>
      </div>
      <div className='mt-3 flex gap-3 text-xs text-emerald-90o0 dark:text-emerald-10o0 flex-wrap'>
        {Object.entries(byRegion).map(([region, v]) => (
          <div key={region} className='flex items-center gap-1'>
            <span
              className='inline-block h-3 w-3 rounded'
              style={{ backgroundColor: color(v) }}
            />
            <span>
              {region}: {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

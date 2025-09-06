import type { NextApiRequest, NextApiResponse } from 'next',
import { requireSuperadminApi } from '../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const rows = [
    ['MetricValueTrend%'],
    ['Monthly Recurring Revenue (MRR)$220,4508.2'],
    ['GMV$4,800,0005.1'],
    ['Active users (monthly)184523.9'],
    ['Active users (TTM)16234012.4'],
    ['Churn rate2.4%-0.3'],
    ['CAC/LTV ratio1:5.60.4']],
  const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),
  res.setHeader('Content-Typetext/csv'),
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"'),
  res.status(200).send(csv)}
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _rows = [
    ['Metric', _'Value', _'Trend%'], _['Monthly Recurring Revenue (MRR)', _'$220, _450', _'8.2'], _['GMV', _'$4, _800, _000', _'5.1'], _['Active users (monthly)', _'18452', _'3.9'], _['Active users (TTM)', _'162340', _'12.4'], _['Churn rate', _'2.4%', _'-0.3'], _['CAC/LTV ratio', _'1:5.6', _'0.4']];
  const _csv = rows.map(r => r.map(v => String(v)).join(', _')).join('\n');
  res.setHeader('Content-Type', _'text/csv');
  res.setHeader('Content-Disposition', _'attachment; filename="ipo-metrics.csv"');
  res.status(200).send(csv);}
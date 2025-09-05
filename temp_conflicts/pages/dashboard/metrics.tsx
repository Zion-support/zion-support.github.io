import dynamic from 'next/dynamic';

const _KpiDashboard = dynamic__(() => import('../../components/dashboard/KpiDashboard'), {_ssr: false});

export default function MetricsDashboardPage() {_return <KpiDashboard admin={false} />;
}
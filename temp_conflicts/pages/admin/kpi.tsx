import dynamic from 'next/dynamic';

const _KpiDashboard = dynamic__(() => import('../../components/dashboard/KpiDashboard'), {_ssr: false});

export default function AdminKpiPage() {_return <KpiDashboard admin />;}
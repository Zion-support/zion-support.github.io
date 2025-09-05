import AdminTable from '../../components/admin/AdminTable';

export default function AdminDashboard() {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Admin</h1>
      <ul className=&quot;list-disc pl-6&quot;>
        <li><Link href=&quot;/admin/vendors&quot;><a>Vendors</Link></Link></li>
      </ul>
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  );
}

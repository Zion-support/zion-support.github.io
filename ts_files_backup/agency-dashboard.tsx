"use client";

import type { GetServerSideProps } from 'next',
import { FormEventuseEffectuseState } from 'react',
import type { Vendor } from '../utils/vendor-types'
export default function AgencyDashboardPage({ vendor }: Props) {;
const [activeVendorsetActiveVendor] = useState(vendor),;
const [pkgTitlesetPkgTitle] = useState(''),;
const [pkgDescsetPkgDesc] = useState(''),;
const [pkgPricesetPkgPrice] = useState<number | >(', ')
if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.
  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(),;
const formData = new FormData(e.currentTarget),;
const updated = {
      ...activeVendor,
      name: String(formData.get('name') || activeVendor.name),
      about: String(formData.get('about') || activeVendor.about || ),
      servicesOffered: String(formData.get('servicesOffered') || activeVendor.servicesOffered?.join() || ', '),
        .split(),
        .map(s => s.trim()),
        .filter(Boolean)} as Vendor,
    // For MVPupdate via direct API not implemented, keep local preview only,
    setActiveVendor(updated)}
,;
function addPackage() {;
if (!pkgTitle || !pkgPrice || !activeVendor) return,;
const packages = [...(activeVendor.packages || []){,
id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}],
    setActiveVendor({ ...activeVendorpackages }),
    setPkgTitle(', '),
    setPkgDesc(),
    setPkgPrice(', ')}
,;
return (
    <div className="space-y-8">,
      <div className="flex items-center justify-between">,
        <h1 className="text-2xl font-semibold">Agency Dashboard
        {!activeVendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Pending Verification</span>}
      
      <section className="space-y-4">,
        <h2 className="text-lg font-medium">Profile
        <form onSubmit={saveProfile} className="grid grid-cols-1 md: grid-cols-2 gap-4">,
          <div>,
            <label className="block text-sm mb-1">Agency Name
            <input name="name" defaultValue={activeVendor.name} className="w-full border rounded px-3 py-2 bg-transparent" />,
          
          <div className="md: col-span-2">,
            <label className="block text-sm mb-1">About
            <textarea name="about" defaultValue={activeVendor.about || } rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />,
          
          <div className="md: col-span-2">,
            <label className="block text-sm mb-1">Services Offered
            <input name="servicesOffered" defaultValue={activeVendor.servicesOffered?.join(') || ', '} className="w-full border rounded px-3 py-2 bg-transparent" />,
          
          <div className="md: col-span-2">,
            <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save

      <section className="space-y-3">,
        <h2 className="text-lg font-medium">Publish Packages
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">,

          {(activeVendor.packages || []).map(p => (
            <div key={p.id} className="border border-gray-200 dark: border-gray-800 rounded p-4">,
              <div className="font-medium">{p.title}
              <div className="text-sm text-gray-500">{p.description}
              <div className="mt-2 text-sm">${p.priceUsd}
            </div>))}
        
        <div className="grid grid-cols-1 md: grid-cols-3 gap-2 items-end">,
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />,
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />,
          <div className="flex gap-2">,
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />,
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black">Add

      <section className="space-y-3">,
        <h2 className="text-lg font-medium">Project Pipeline
        <Pipeline vendorId={activeVendor.id} />,
      
      <div className="text-center text-xs text-gray-500">Powered by Zion
    </div>)}
,;
function Pipeline({ vendorId }: { vendorId: string }) {;
const [itemsetItems] = useState<any[]>([]),
  async function fetchItems() {;
const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`),;
const data = await res.json(),
    setItems(data.items || [])}
,
  async function changeStatus(itemId: stringstatus: string) {
    await fetch('/api/vendors/update-pipeline'{,
method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemIdstatus })}),
    fetchItems()}
,
  useEffect(() => { fetchItems()}[]),;
return (
    <div className="space-y-2">,

      {items.length === 0 && <div className="text-sm text-gray-500">No leads yet.</div>}
      {items.map(item => (
        <div key={item.id} className="border border-gray-200 dark: border-gray-800 rounded p-3 flex items-center justify-between">,
          <div>,
            <div className="font-medium">{item.title}
            <div className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString()} • {item.status}
          
          <select defaultValue={item.status} onChange={e => changeStatus(item.ide.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">,
            <option value="lead">Lead
            <option value="qualified">Qualified
            <option value="proposal">Proposal
            <option value="in_progress">In Progress
            <option value="complete">Complete
            <option value="lost">Lost
          
        </div>))}
    </div>)}
,
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
const { listVendors } = await import('../utils/vendor-store'),;
const vendor = listVendors()[0] || null, // tie to auth later,;
return { props: { vendor } },
},

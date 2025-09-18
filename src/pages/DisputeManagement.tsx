import React, { useState } from 'react';
import { SEO } from '../SEO';
export default function DisputeManagement() {
    const [activeTab, setActiveTab] = useState('overview');
    return (<>
      <SEO title="Dispute Management | Zion Tech Group" description="Admin dashboard for managing and resolving marketplace disputes and conflicts" keywords="dispute management, admin dashboard, conflict resolution, marketplace admin, Zion Tech Group" canonical="https://ziontechgroup.com/admin/disputes"/>
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dispute Management
            </h1>
            <p className="text-xl text-zion-slate-light">
              Admin dashboard for managing marketplace disputes and ensuring fair resolution
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-2 mb-8">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTab('overview')} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'overview'
            ? 'bg-zion-cyan text-zion-blue-dark'
            : 'text-zion-slate-light hover:text-white hover:bg-zion-blue'}`}>
                Overview
              </button>
              <button onClick={() => setActiveTab('disputes')} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'disputes'
                Active Disputes
              <button onClick={() => setActiveTab('resolutions')} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'resolutions'
                Resolutions
              <button onClick={() => setActiveTab('settings')} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'settings'
                Settings
            </div>
          {/* Tab Content */}
          {activeTab === 'overview' && (<div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zion-slate-light text-sm">Total Disputes</p>
                      <p className="text-3xl font-bold text-white">24</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                  </div>
                  <div className="mt-4">
                    <span className="text-green-400 text-sm">↓ 12% from last month</span>
                </div>
                      <p className="text-zion-slate-light text-sm">Active Disputes</p>
                      <p className="text-3xl font-bold text-white">8</p>
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <span className="text-yellow-400 text-sm">3 require immediate attention</span>
                      <p className="text-zion-slate-light text-sm">Resolved This Month</p>
                      <p className="text-3xl font-bold text-white">16</p>
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <span className="text-green-400 text-sm">↑ 8% from last month</span>
                      <p className="text-zion-slate-light text-sm">Avg Resolution Time</p>
                      <p className="text-3xl font-bold text-white">3.2</p>
                      <p className="text-zion-slate-light text-sm">days</p>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    <span className="text-green-400 text-sm">↓ 0.5 days from last month</span>
              </div>
              {/* Recent Activity */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-zion-blue rounded-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Dispute #2024-001 resolved</p>
                      <p className="text-zion-slate-light text-sm">Payment issue between TechCorp and DevSolutions</p>
                    <span className="text-zion-slate-light text-sm">2 hours ago</span>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <p className="text-white font-medium">New dispute filed</p>
                      <p className="text-zion-slate-light text-sm">Service quality complaint from StartupXYZ</p>
                    <span className="text-zion-slate-light text-sm">4 hours ago</span>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <p className="text-white font-medium">Mediation scheduled</p>
                      <p className="text-zion-slate-light text-sm">Dispute #2024-015 - Data breach allegations</p>
                    <span className="text-zion-slate-light text-sm">1 day ago</span>
              {/* Quick Actions */}
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                    Review Pending Disputes
                  </button>
                  <button className="bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Mediation
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Generate Reports
            </div>)}
          {activeTab === 'disputes' && (<div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Active Disputes</h2>
                <div className="flex space-x-4">
                  <select className="px-4 py-2 bg-zion-blue border border-zion-blue-light rounded-lg text-white">
                    <option>All Categories</option>
                    <option>Payment Issues</option>
                    <option>Service Quality</option>
                    <option>Contract Disputes</option>
                    <option>Data Breaches</option>
                  </select>
                    <option>All Statuses</option>
                    <option>Under Review</option>
                    <option>Mediation Required</option>
                    <option>Awaiting Response</option>
                    <option>Escalated</option>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-zion-blue">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">
                          Dispute ID
                        </th>
                          Parties
                          Category
                          Status
                          Filed Date
                          Actions
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zion-blue-light">
                      <tr className="hover:bg-zion-blue/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          #2024-018
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zion-slate-light">
                          TechCorp vs DevSolutions
                          Payment Issues
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full">
                            Under Review
                          </span>
                          Dec 14, 2024
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-zion-cyan hover:text-zion-cyan-light mr-3">View</button>
                          <button className="text-zion-purple hover:text-zion-purple-light">Resolve</button>
                          #2024-019
                          StartupXYZ vs AIExperts
                          Service Quality
                          <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
                            Mediation Required
                          Dec 15, 2024
                          <button className="text-zion-purple hover:text-zion-purple-light">Schedule</button>
                    </tbody>
                  </table>
          {activeTab === 'resolutions' && (<div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Resolution History</h2>
                <p className="text-zion-slate-light text-center py-8">
                  Resolution history and analytics will be displayed here.
                </p>
          {activeTab === 'settings' && (<div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Dispute Management Settings</h2>
                  Configuration and settings for dispute management will be displayed here.
        </div>
      </main>
    </>);
}

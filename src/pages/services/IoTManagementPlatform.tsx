import React from 'react';
import { SEO } from '@/components/SEO';

export default function IoTManagementPlatform() {
	return (
		<div className="min-h-screen bg-zion-blue text-white p-12">
			<SEO title="IoT Management Platform" description="Device fleet management, OTA updates, telemetry, and edge analytics." url="https://ziontechgroup.com/services/iot-management" />
			<h1 className="text-3xl font-bold mb-4">IoT Management Platform</h1>
			<p className="text-zion-slate-light">Manage devices, telemetry, and edge compute with secure pipelines.</p>
		</div>
	);
}
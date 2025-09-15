"use client";

import { useState } from "react";
import { Rocket, Clock, CheckCircle, AlertCircle, Activity } from "lucide-react";

interface Deployment {
  id: string;
  instanceName: string;
  status: "pending" | "deploying" | "completed" | "failed" | "paused";
  createdAt: string;
  updatedAt: string;
  progress: number;
  features: string[];
  vertical: string;
}

const mockDeployments: Deployment[] = [
  {
    id: "deploy-001",
    instanceName: "Zion Health Network",
    status: "completed",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T11:45:00Z",
    progress: 100,
    features: ["marketplace", "zion_gpt", "kyc_aml", "dao_voting"],
    vertical: "HEALTH",
  },
  {
    id: "deploy-002",
    instanceName: "EduDAO Academy",
    status: "deploying",
    createdAt: "2024-01-15T14:20:00Z",
    updatedAt: "2024-01-15T15:10:00Z",
    progress: 65,
    features: ["academy", "zion_gpt", "incubator_grants"],
    vertical: "EDUCATION",
  },
];

export default function DeploymentsPage() {
  const [deployments] = useState<Deployment[]>(mockDeployments);

  const getStatusCount = (status: Deployment["status"]) =>
    deployments.filter((d) => d.status === status).length;

  return (
    <div className="space-y-8">
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Deployment Management
        </h1>
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{deployments.length}</p>
              <p className="text-sm text-white/60">Total</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount("pending")}</p>
              <p className="text-sm text-white/60">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount("deploying")}</p>
              <p className="text-sm text-white/60">Active</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount("completed")}</p>
              <p className="text-sm text-white/60">Live</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount("failed")}</p>
              <p className="text-sm text-white/60">Failed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { useParams } from "react-router-dom";

export default function EquipmentDetail() {
  const { id } = useParams() as { id?: string };
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Equipment Detail</h1>
      <p>Equipment ID: {id ?? "unknown"}</p>
      <p className="mt-4">This page is temporarily simplified to restore builds. Full details will return in a follow-up.</p>
    </div>
  );
}


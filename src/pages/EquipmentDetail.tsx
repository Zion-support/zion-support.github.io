import React from "react";
import { useParams } from "react-router-dom";

export default function EquipmentDetail() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-zion-blue text-white p-8">
      <h1 className="text-2xl font-bold">Equipment Detail</h1>
      <p className="mt-2 text-zion-slate-light">ID: {id}</p>
      <p className="mt-4">This is a temporary placeholder to restore the build.</p>
    </div>
  );
}


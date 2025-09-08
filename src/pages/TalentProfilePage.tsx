import React from "react";
import { useParams } from "react-router-dom";

export default function TalentProfilePage() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-white">Talent Profile</h1>
        <p className="text-zion-slate-light mt-2">Profile ID: {id}</p>
      </div>
    </div>
  );
}

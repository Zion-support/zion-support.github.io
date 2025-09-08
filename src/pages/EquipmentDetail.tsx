import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EquipmentDetail() {
	const { equipmentId } = useParams() as { equipmentId?: string };

	return (
		<>
			<Header />
			<div className="min-h-screen bg-zion-blue py-12 px-4">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold text-white mb-4">Equipment</h1>
					<p className="text-zion-slate-light">
						{equipmentId ? `Equipment detail for: ${equipmentId}` : "No equipment selected."}
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}


import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EquipmentDetail() {
	const { equipmentId } = useParams() as { equipmentId?: string };
	const [selectedImageIndex] = useState(0);

	return (
		<div style={{ padding: 24 }}>
			<h1>Equipment Detail</h1>
			<p>ID: {equipmentId ?? "unknown"}</p>
			<p>Selected image index: {selectedImageIndex}</p>
		</div>
	);
}


import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function TalentProfilePage() {
	const { id } = useParams() as { id?: string };
	const [open, setOpen] = useState(false);

	return (
		<div style={{ padding: 24 }}>
			<h1>Talent Profile</h1>
			<p>ID: {id ?? "unknown"}</p>
			<button onClick={() => setOpen(!open)}>Toggle</button>
			{open && <div>Details...</div>}
		</div>
	);
}


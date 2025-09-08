import React from "react";
import { useParams } from "react-router-dom";

export type EquipmentDetails = {
  id: string;
  name: string;
  price: number;
};

export const SAMPLE_EQUIPMENT: Record<string, EquipmentDetails> = {
  "pro-camera-x1000": { id: "pro-camera-x1000", name: "Pro Camera X1000", price: 6999 },
  "audio-mixer-pro": { id: "audio-mixer-pro", name: "AudioMixer Pro", price: 3499 },
};

export default function EquipmentDetail(): JSX.Element {
  const { id } = useParams() as { id?: string };
  const equipment = (id && SAMPLE_EQUIPMENT[id]) || null;

  if (!equipment) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Equipment Not Found</h1>
        {id && <p>Unknown id: {id}</p>}
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>{equipment.name}</h1>
      <p>Price: ${equipment.price.toLocaleString()}</p>
    </div>
  );
}


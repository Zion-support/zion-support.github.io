import React from 'react';

interface EquipmentRecommendationsProps {
  className?: string;
}

const EquipmentRecommendations: React.FC<EquipmentRecommendationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentRecommendations</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentRecommendations;
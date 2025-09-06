import React from 'react';

interface EquipmentDetail.testProps {
  className?: string;
}

const EquipmentDetail.test: React.FC<EquipmentDetail.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentDetail.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentDetail.test;
import React from 'react';

interface Iot-edgeProps {
  className?: string;
}

const Iot-edge: React.FC<Iot-edgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Iot-edge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Iot-edge;
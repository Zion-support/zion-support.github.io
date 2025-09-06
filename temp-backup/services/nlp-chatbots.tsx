import React from 'react';

interface Nlp-chatbotsProps {
  className?: string;
}

const Nlp-chatbots: React.FC<Nlp-chatbotsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Nlp-chatbots</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Nlp-chatbots;
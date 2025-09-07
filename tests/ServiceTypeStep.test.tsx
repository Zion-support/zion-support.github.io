import React from 'react';
<<<<<<< HEAD
interface ServiceTypeStep.testProps {
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

interface ServiceTypeStepProps {
>>>>>>> merged-prs-20250907-203621
  // Add props here as needed
<
<
<<<<<<< HEAD

=


>}
>





=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=


>}
>






<<<<<<< HEAD

}
>

)
=======
export default function ServiceTypeStep({ }: ServiceTypeStepProps) {
  return (
    <div>
      <h1>ServiceTypeStep</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>

describe('ServiceTypeStep', () => {
  it('renders without crashing', () => {
    render(<ServiceTypeStep />);
    expect(screen.getByText('ServiceTypeStep')).toBeInTheDocument();
  });
});
>>>>>>> merged-prs-20250907-203621

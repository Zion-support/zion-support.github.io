import React from 'react';
<<<<<<< HEAD
interface NewsletterSubscription.testProps {
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

interface NewsletterSubscriptionProps {
>>>>>>> merged-prs-20250907-203621
  // Add props here as needed
<
<

=


>}
>






<<<<<<< HEAD

}
>

)
=======
export default function NewsletterSubscription({ }: NewsletterSubscriptionProps) {
  return (
    <div>
      <h1>NewsletterSubscription</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>

describe('NewsletterSubscription', () => {
  it('renders without crashing', () => {
    render(<NewsletterSubscription />);
    expect(screen.getByText('NewsletterSubscription')).toBeInTheDocument();
  });
});
>>>>>>> merged-prs-20250907-203621

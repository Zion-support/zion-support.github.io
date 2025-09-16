<<<<<<< HEAD
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ModeToggle } from '@/components/ModeToggle';
expect.extend(toHaveNoViolations);
test('ModeToggle has no accessibility violations', async () => {
  const { container } = render(<ModeToggle />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
=======
import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations)test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
})';
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
ursor/automate-test-improve-and-merge-code-646c;
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
</ModeToggle>';
import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
>>>>>>> origin/merge-pr-12271

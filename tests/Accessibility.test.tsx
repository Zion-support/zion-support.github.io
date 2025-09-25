import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';
import { ModeToggle } from '@/components/ModeToggle';

expect.extend(toHaveNoViolations);

describe('Accessibility - ModeToggle', () => {
	it('has no accessibility violations', async () => {
		const { container } = render(<ModeToggle />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
<<<<<<< HEAD:tests/Accessibility.test.tsx

=======
<<<<<<< HEAD:backup-problematic-files/tests/Accessibility.test.tsx
</ModeToggle>'
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:tests/Accessibility.test.tsx
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/tests/Accessibility.test.tsx
</ModeToggle>'
</ModeToggle>'


</ModeToggle>'


</ModeToggle>'
</ModeToggle>'


</ModeToggle>'


import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
<<<<<<< HEAD
</ModeToggle>'</ModeToggle>'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
>>>>>>> origin/main

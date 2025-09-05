import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
<<<<<<< HEAD
</ModeToggle>'
=======
<<<<<<< HEAD
<<<<<<< HEAD
</ModeToggle>'
=======
</ModeToggle>'
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
</ModeToggle>'
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914

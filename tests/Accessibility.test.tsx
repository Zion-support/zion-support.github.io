import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
</ModeToggle>'
=======
=======
<<<<<<< HEAD
</ModeToggle>'
=======
<<<<<<< HEAD
</ModeToggle>'
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
</ModeToggle>'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
</ModeToggle>'
</ModeToggle>'
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

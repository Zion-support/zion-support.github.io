import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}'
});'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/tests/Accessibility.test.tsx
<<<<<<< HEAD:backup-problematic-files/tests/Accessibility.test.tsx
</ModeToggle>'
</ModeToggle>'
=======
</ModeToggle>'
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
</ModeToggle>'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
</ModeToggle>'
</ModeToggle>'
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
</ModeToggle>'</ModeToggle>'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'

</ModeToggle>'

</ModeToggle>'
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
</ModeToggle>'

</ModeToggle>'
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

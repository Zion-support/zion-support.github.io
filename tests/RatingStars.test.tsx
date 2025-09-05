import { render } from \'@testing-library/react\'; import { RatingStars } from \'@/components/RatingStars\'; test( \'"rating\": 4.7 shows 4 filled and 1 half star\',() => {\'; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( \'[data-testid=\'star-filled\']\')\'; const half = container.querySelectorAll( \'[data-testid=\'star-half\']\')\'; const outline = container.querySelectorAll( \'[data-testid=\'star-outline\']\')\'; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})
const { render } from "@testing-library/react"; import { RatingStars } from "@/components/RatingStars"; test( "rating: 4.7 shows 4 filled and 1 half star",() => {"; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( "[data-testid="star-filled"]")"; const half = container.querySelectorAll( "[data-testid="star-half"]")"; const outline = container.querySelectorAll( "[data-testid="star-outline"]")"; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})'"'"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { render } from \'@testing-library/react\'; import { RatingStars } from \'@/components/RatingStars\'; test( \'"rating\": 4.7 shows 4 filled and 1 half star\',() => {\'; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( \'[data-testid=\'star-filled\']\')\'; const half = container.querySelectorAll( \'[data-testid=\'star-half\']\')\'; const outline = container.querySelectorAll( \'[data-testid=\'star-outline\']\')\'; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})
const { render } from "@testing-library/react"; import { RatingStars } from "@/components/RatingStars"; test( "rating: 4.7 shows 4 filled and 1 half star",() => {"; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( "[data-testid="star-filled"]")"; const half = container.querySelectorAll( "[data-testid="star-half"]")"; const outline = container.querySelectorAll( "[data-testid="star-outline"]")"; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})'"'"
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
import React from 'react';

interface RatingStars.testProps {
  // Add props here as needed
}

export default function RatingStars.test({ }: RatingStars.testProps) {
  return (
    <div>
      <h1>RatingStars.test</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
=======
>>>>>>> pr-11913

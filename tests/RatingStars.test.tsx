<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { render } from \'@testing-library/react\'; import { RatingStars } from \'@/components/RatingStars\'; test( \'"rating\": 4.7 shows 4 filled and 1 half star\',() => {\'; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( \'[data-testid=\'star-filled\']\')\'; const half = container.querySelectorAll( \'[data-testid=\'star-half\']\')\'; const outline = container.querySelectorAll( \'[data-testid=\'star-outline\']\')\'; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})
const { render } from "@testing-library/react"; import { RatingStars } from "@/components/RatingStars"; test( "rating: 4.7 shows 4 filled and 1 half star",() => {"; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( "[data-testid="star-filled"]")"; const half = container.querySelectorAll( "[data-testid="star-half"]")"; const outline = container.querySelectorAll( "[data-testid="star-outline"]")"; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})'"'"
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
=======
import * as React from 'react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05

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
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

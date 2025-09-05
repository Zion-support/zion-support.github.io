import { render,screen } from '@testing-library/react'; import StarRating from '@/components/StarRating'; test(','rating 4.5 renders 4 full and 1 half star',() => { expect(screen.getAllByTestId( 'full-star')).toHaveLength(4)'; expect(screen.getAllByTestId( 'half-star')).toHaveLength(1)})';''
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23

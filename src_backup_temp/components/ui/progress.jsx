import {cn} from '../../lib/utils';
;
const Progress = React.forwardRef(({className, value, max = 100, ...props}, ref) => {;
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  ;
  return (;
    <div;
      ref={ref}
      className={cn('relative w-full overflow-hidden bg-gray-200 rounded-full h-2', className)}
      {...props}

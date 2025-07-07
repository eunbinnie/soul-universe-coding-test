import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'h-12 w-full rounded-lg px-4',
        'border border-gray-300 outline-none focus:ring-1 focus:ring-gray-400',
      )}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;

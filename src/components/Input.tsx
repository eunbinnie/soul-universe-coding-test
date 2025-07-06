import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-lg px-4',
        'border border-gray-300 outline-none focus:ring-1 focus:ring-gray-400',
      )}
      {...rest}
    />
  );
};

export default Input;

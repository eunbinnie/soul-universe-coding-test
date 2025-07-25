import { cn } from '@/lib/utils';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...rest }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        'h-[400px] w-full resize-none rounded-lg px-4 py-3',
        'border border-gray-300 outline-none focus:ring-1 focus:ring-gray-400',
        className,
      )}
      {...rest}
    />
  );
};

export default Textarea;

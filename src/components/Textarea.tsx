import { cn } from '@/lib/utils';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        'h-[400px] w-full resize-none rounded-lg px-4 py-3',
        'border border-gray-300 outline-none focus:ring-1 focus:ring-gray-400',
      )}
      {...rest}
    />
  );
};

export default Textarea;

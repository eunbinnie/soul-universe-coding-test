import { forwardRef } from 'react';

import { Search } from 'lucide-react';

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSubmit, ...rest }, ref) => {
    return (
      <form
        onSubmit={onSubmit}
        className='flex h-8 items-center rounded-lg border border-gray-300 px-4'
      >
        <button>
          <Search color='#9ca3af' size={16} />
        </button>
        <input
          ref={ref}
          autoComplete='off'
          className='h-full flex-1 pl-4 text-sm outline-none'
          {...rest}
        />
      </form>
    );
  },
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;

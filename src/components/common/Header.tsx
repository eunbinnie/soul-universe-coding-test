import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <header className='mx-auto flex h-[60px] max-w-screen-lg items-center px-3 sm:px-4'>
      <Link href={'/'} className='text-2xl font-bold'>
        게시판
      </Link>
    </header>
  );
};

export default Header;

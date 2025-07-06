import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 flex h-[60px] items-center justify-start bg-white/70 backdrop-blur-sm'>
      <div className='mx-auto max-w-screen-lg flex-1 px-3 sm:px-4'>
        <Link href={'/'} className='text-2xl font-bold'>
          게시판
        </Link>
      </div>
    </header>
  );
};

export default Header;

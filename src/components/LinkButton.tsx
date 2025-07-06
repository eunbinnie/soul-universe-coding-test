import React from 'react';

import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className='inline-flex h-8 items-center justify-center rounded-md bg-gray-100 px-3 font-semibold text-zinc-600 transition-colors duration-300 hover:bg-gray-300'
    >
      {children}
    </Link>
  );
};

export default LinkButton;

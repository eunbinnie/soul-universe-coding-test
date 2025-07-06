import React from 'react';

import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

/**
 * LinkButton
 * 페이지 이동 시 사용하는 링크 컴포넌트
 *
 * @param href 이동할 페이지 주소
 * @param children Link 태그에 표시할 내용
 */
const LinkButton = ({ href, children }: LinkButtonProps) => {
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

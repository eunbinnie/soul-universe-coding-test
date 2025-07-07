import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';

import { pretendard } from '@/styles/fonts';

import '@/styles/globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '소울유니버스 과제',
  description: '소울유니버스 프론트엔드 코딩 과제',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={pretendard.className}>
      <body>
        <Header />
        <main className='mx-auto my-5 max-w-screen-md px-3 sm:my-10 sm:px-4'>
          {children}
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}

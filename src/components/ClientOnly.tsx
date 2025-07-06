import { useEffect, useState } from 'react';

import { LoaderCircle } from 'lucide-react';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className='mt-20 w-full'>
        <LoaderCircle className='mx-auto animate-spin' />
      </section>
    );
  }

  return <>{children}</>;
};

export default ClientOnly;

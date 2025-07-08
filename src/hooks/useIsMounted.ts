import { useEffect, useState } from 'react';

/**
 * 컴포넌트가 마운트되었는지 확인하는 훅
 */
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useIsMounted;

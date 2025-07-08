import { LoaderCircle } from 'lucide-react';

/**
 * Loading 컴포넌트
 *
 * 로딩 스피너를 반환합니다.
 */
const Loading = () => {
  return (
    <div className='mt-20 size-full'>
      <LoaderCircle className='mx-auto animate-spin' />
    </div>
  );
};

export default Loading;

'use client';

import { usePostStore } from '@/store';
import { Frown } from 'lucide-react';
import { useParams } from 'next/navigation';

import ClientOnly from '@/components/ClientOnly';

import CommentSection from './_components/CommentSection';
import PostDetail from './_components/PostDetail';

const PostDetailPage = () => {
  const params = useParams<{ id: string }>();

  const detailPost = usePostStore((state) => state.detailPost(params.id));

  return (
    <ClientOnly>
      {detailPost ? (
        <>
          <PostDetail post={detailPost} />
          <CommentSection post={detailPost} />
        </>
      ) : (
        <div className='mt-20 flex flex-col items-center gap-4'>
          <Frown />
          <p className='text-center text-sm'>게시글을 찾을 수 없습니다.</p>
        </div>
      )}
    </ClientOnly>
  );
};

export default PostDetailPage;

'use client';

import { usePostStore } from '@/store';
import { useParams } from 'next/navigation';

const PostDetailPage = () => {
  const params = useParams<{ id: string }>();

  const detailPost = usePostStore((state) => state.detailPost(params.id));
  console.log(detailPost);

  return <div>게시글 상세</div>;
};

export default PostDetailPage;

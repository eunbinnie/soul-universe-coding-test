'use client';

import { toast } from 'react-toastify';

import { usePostStore } from '@/store';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DeletePostDialogProps {
  uuid: string;
}

const DeletePostDialog = ({ uuid }: DeletePostDialogProps) => {
  const router = useRouter();
  const { keyword, deletePost, searchPosts } = usePostStore((state) => ({
    keyword: state.keyword,
    deletePost: state.deletePost,
    searchPosts: state.searchPosts,
  }));

  const handleDeletePost = () => {
    deletePost(uuid);
    // 검색 키워드가 있으면 검색 결과 다시 불러오기
    if (keyword) {
      searchPosts();
    }
    router.push('/');

    toast.success('게시글이 삭제되었습니다.');
  };

  return (
    <Dialog>
      <DialogTrigger asChild className='mb-10 ml-auto flex items-center'>
        <Button>삭제하기</Button>
      </DialogTrigger>
      <DialogContent className='max-w-sm'>
        <DialogHeader>
          <DialogTitle>게시글 삭제</DialogTitle>
        </DialogHeader>
        <div className='my-4'>
          <p className='text-center text-sm text-zinc-600'>
            삭제된 게시글은 다시 복구할 수 없습니다.
            <br />
            정말 삭제하시겠습니까?
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline' className='flex-1'>
              취소하기
            </Button>
          </DialogClose>
          <Button onClick={handleDeletePost} className='flex-1'>
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;

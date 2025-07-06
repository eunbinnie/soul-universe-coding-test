import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Post } from '@/types/post.types';

interface PostStore {
  posts: Post[];
  updatePost: (newPost: Post) => void; // 게시글 추가 함수
}

// 게시글 목록을 로컬 스토리지에 저장하는 스토어
export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],
      updatePost: (newPost: Post) =>
        set((state) => ({ posts: [newPost, ...state.posts] })),
    }),
    { name: 'post-storage' },
  ),
);

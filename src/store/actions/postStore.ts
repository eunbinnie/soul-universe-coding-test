import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Post } from '@/types/post.types';

interface PostStore {
  posts: Post[];
  updatePost: (newPost: Post) => void; // 게시글 추가 함수
  deletePost: (uuid: string) => void; // 게시글 삭제 함수
  detailPost: (uuid: string) => Post | undefined; // 게시글 상세 조회 함수
}

// 게시글 목록을 로컬 스토리지에 저장하는 스토어
export const usePostStore = create<PostStore>()(
  persist(
    (set, get) => ({
      posts: [],
      // 게시글 추가
      updatePost: (newPost: Post) =>
        set((state) => ({ posts: [newPost, ...state.posts] })),

      // 게시글 삭제
      deletePost: (uuid: string) => {
        set((state) => ({
          posts: state.posts.filter((post) => post.uuid !== uuid),
        }));
      },

      // 게시글 상세 조회
      detailPost: (uuid: string) => {
        const post = get().posts.find((post) => post.uuid === uuid);
        if (post) {
          return post;
        }
      },
    }),
    { name: 'post-storage' },
  ),
);

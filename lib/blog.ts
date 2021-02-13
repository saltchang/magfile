import { getMockPosts, getMockPostIds } from '../mock/posts';

export interface PostData {
  id: number;
  semanticId: string;
  date: string;
  author: string;
  title: string;
  hashTag: string[];
  content: string;
}

export interface PostIdData {
  id: number;
  semanticId: string;
}

export const getAllPostsData = (): Promise<PostData[]> => {
  return new Promise((resolve, reject) => {
    try {
      const allPostData = getMockPosts();
      resolve(allPostData);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export async function getBlogDataById(id: number): Promise<PostData | null> {
  return new Promise((resolve, reject) => {
    try {
      getAllPostsData().then((res) => {
        res.forEach((post) => {
          if (post.id === id) {
            resolve(post);
          }
        });
        resolve(null);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export const getAllPostIds = (): Promise<PostIdData[]> => {
  return new Promise((resolve, reject) => {
    try {
      const allPostIds = getMockPostIds();
      resolve(allPostIds);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const getIdBySemanticId = (semanticId: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    try {
      getAllPostIds().then((res) => {
        res.forEach((post) => {
          if (post.semanticId === semanticId) {
            resolve(post.id);
          }
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

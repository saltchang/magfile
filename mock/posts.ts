import fs from 'fs';
import path from 'path';

import { PostData, PostIdData } from '../lib/blog';

const mockMdDir = path.join(process.cwd(), 'mock/md');

export const getMockPosts = (): PostData[] => {
  // Get file names under /blog
  const fileNames = fs.readdirSync(mockMdDir);
  let i = 0;
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(mockMdDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const id = i;
    i += 1;
    const semanticId = fileName.replace(/\.md$/, '');

    // MockData
    return {
      id,
      semanticId,
      date: new Date(Date.now() - (id + 1) * 86400 * 30 * 1000).toISOString(),
      author: 'Salt Chang',
      title: semanticId,
      hashTag: ['GitHub', '協作', '開發'],
      content: fileContents,
    } as PostData;
  });
  return allPostsData;
};

export const getMockPostIds = (): PostIdData[] => {
  const posts = getMockPosts();
  return posts.map((post) => {
    return {
      id: post.id,
      semanticId: post.semanticId,
    } as PostIdData;
  });
};

import fs from 'fs';
import path from 'path';

import { PostData, PostIdData } from '../lib/blog';

const mockMdDir = path.join(process.cwd(), 'mock/md');

export const getMockPosts = (): PostData[] => {
  // Get file names under /blog
  const fileNames = fs.readdirSync(mockMdDir);
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(mockMdDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // MockData
    return {
      id: 0,
      semanticId: 'github-collaboration-quick-tutorial',
      date: new Date('2020-07-14'),
      author: 'Salt Chang',
      title: 'GitHub 協作流程快速教學',
      hashTag: ['GitHub', '協作', '開發'],
      content: fileContents,
    } as PostData;
  });
  // Sort blog by date
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

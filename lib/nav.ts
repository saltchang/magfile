import fs from 'fs';
import path from 'path';

const navDirectory = path.join(process.cwd(), 'pages');

const getAllNavLinks = () => {
  const fileNames = fs.readdirSync(navDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export default getAllNavLinks;

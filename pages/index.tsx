import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { getAllPostsData } from '../lib/blog';

const Home = () => {
  const titleText = 'Salt Chang';
  return (
    <Layout>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Link href="/blog/github-collaboration-quick-tutorial">
        <a>To Post</a>
      </Link>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const allBlogData = getAllPostsData();
//   return {
//     props: {
//       allBlogData,
//     },
//   };
// };

export default Home;

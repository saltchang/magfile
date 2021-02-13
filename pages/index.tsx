import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { getAllPostsData, PostData } from '../lib/blog';

import styles from './homePage.module.scss';

interface HomeProps {
  allBlogData: string;
}

const Home = ({ allBlogData }: HomeProps) => {
  const titleText = 'Salt Chang';
  const innerAllBlogData = JSON.parse(allBlogData);
  return (
    <Layout>
      <Head>
        <title>{titleText}</title>
      </Head>
      <div className={styles.homePage}>
        {innerAllBlogData.map((post: PostData) => {
          return (
            <Link key={post.id} href={`/blog/${post.semanticId}`}>
              <a className={styles.link}>{post.title}</a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allBlogData = await getAllPostsData().then((res: PostData[]) => {
    return JSON.stringify(res);
  });
  return {
    props: {
      allBlogData,
    },
  };
};

export default Home;

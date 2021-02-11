import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRemark } from 'react-remark';
import Layout from '../../components/Layout';
import {
  PostData,
  getBlogDataById,
  getAllPostIds,
  getIdBySemanticId,
} from '../../lib/blog';
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }: { postData: string }) {
  const [reactContent, setMarkdownSource] = useRemark();
  const [innerPostData, setInnerPostData] = useState(JSON.parse(postData));

  useEffect(() => {
    setMarkdownSource(innerPostData.content);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{innerPostData.title}</title>
      </Head>
      <article>{reactContent}</article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return new Promise((resolve, reject) => {
    try {
      getAllPostIds().then((res) => {
        const paths = res.map((post) => {
          return {
            params: {
              semanticId: post.semanticId,
            },
          };
        });

        resolve({
          paths,
          fallback: false,
        });
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return new Promise((resolve, reject) => {
    try {
      getIdBySemanticId(params.semanticId as string).then((id) => {
        getBlogDataById(id).then((postData) => {
          resolve({
            props: {
              postData: JSON.stringify(postData),
            },
          });
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

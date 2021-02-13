import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import gfm from 'remark-gfm';
import highlight from 'remark-highlight.js';
import emoji from 'remark-emoji';
import gemoji from 'remark-gemoji';
import slug from 'remark-slug';
import { useRemark } from 'react-remark';
import cx from 'classnames';
import Layout from '../../components/Layout';
import {
  getBlogDataById,
  getAllPostIds,
  getIdBySemanticId,
} from '../../lib/blog';

import markDownDark from '../../styles/markdown/dark.module.scss';
import styles from './blogArticle.module.scss';

export default function Post({ postData }: { postData: string }) {
  const innerPostData = JSON.parse(postData);
  const [reactContent, setMarkdownSource] = useRemark({
    remarkPlugins: [gfm, highlight, emoji, gemoji, slug],
  });

  useEffect(() => {
    setMarkdownSource(innerPostData.content);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('dark-scheme', '');
    document
      .querySelectorAll('ul.contains-task-list li.task-list-item')
      .forEach((el) => {
        el.setAttribute('style', 'list-style-type: none;');
      });
    const checkBoxStyle =
      'margin: 0 .2em .25em -1.6em; font-size: inherit; -internal-light-dark(rgb(84, 84, 84), rgb(170, 170, 170)); cursor: default; border-color: rgba(118, 118, 118, 0.3); appearance: auto;';
    document
      .querySelectorAll('.task-list-item p input[type="checkbox"]')
      .forEach((el) => {
        el.setAttribute('style', checkBoxStyle);
      });
    document
      .querySelectorAll('.task-list-item input[type="checkbox"]')
      .forEach((el) => {
        el.setAttribute('style', checkBoxStyle);
      });
    document.querySelectorAll('.contains-task-list').forEach((el) => {
      el.setAttribute('style', 'padding-left: 2em');
    });
  }, [reactContent]);

  return (
    <Layout>
      <Head>
        <title>{innerPostData.title}</title>
      </Head>
      <article
        className={cx(markDownDark.markdownDarkMode, styles.blogArticle)}
      >
        {reactContent}
      </article>
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

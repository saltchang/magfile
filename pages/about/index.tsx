import Head from 'next/head';
// import Link from 'next/link';
// import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';

const About = () => {
  const title = 'About';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      About
    </Layout>
  );
};

export default About;

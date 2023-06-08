import Head from 'next/head';
import Layout from '../components/layouts';
import { getAllPosts } from '../services/posts';
import { HomeProps } from '../services/interfaces';
import Posts from '../components/posts';

export const getStaticProps = () => {
  const posts: any[] = getAllPosts();

  return {
    props: { posts }
  };
};

const Home: React.FC<HomeProps> = ({ posts }) => {
  

  return (
    <Layout>
      <Head>
        <title>Yoga Portal - blog</title>
      </Head>
      <div className="m-10 flex flex-col flex-wrap justify-evenly gap-10 sm:flex-row">
        {posts.map((post) => {
          return <Posts post={post} key={post.slug} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;

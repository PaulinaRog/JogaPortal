import Layout from '../../components/layouts';
import Head from 'next/head';
import { getFileBySlug } from '../../lib/markdownParser';
import { ArticleProps } from '../../services/interfaces';
import { getListOfArticles } from '../../services/articles';
import Image from 'next/image';

export const getStaticPaths = () => {
  const articles: any[] = getListOfArticles();

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req: any) => {
  const { slug } = req.params;
  const article: {
    content: any;
    slug: any;
    createdAt: number | null;
  } = await getFileBySlug('_data', slug);

  return {
    props: { article }
  };
};

const Articles: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{`Yoga Portal: ${article.title}`}</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.cover} />
        <meta property="og:image:alt" content={article.title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content="Fitness" />
        <meta property="article:tag" content="joga" />
      </Head>
      <div className="sm:flex">
        <Image src={`${article.cover}`} alt={article.title} width={400} height={150} className="sm:m-20 sm:self-start" />
        <div className="prose max-w-[800px] m-10 sm:overflow-y-scroll h-[500px] p-5" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </Layout>
  );
};

export default Articles;

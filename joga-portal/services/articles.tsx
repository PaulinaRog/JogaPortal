import { getList, getFileBySlug } from '../lib/markdownParser';

export const getListOfArticles = () => {
  const articles: any[] = getList('_data');

  return articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
};

export const getArticle = async (slug: any) => {
  const article: {
    content: any;
    slug: any;
    createdAt: number | null;
  } = await getFileBySlug('_data', slug);

  return article;
};

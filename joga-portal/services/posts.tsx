import { getList } from '../lib/markdownParser';

export const getAllPosts = () => {
  const posts: any[] = getList('_data');

  const sortedPosts: any[] = posts.sort((a, b) => a.createdAt - b.createdAt).reverse();

  return sortedPosts;
};

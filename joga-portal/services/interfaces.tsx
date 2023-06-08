export type HomeProps = {
  posts: Posts[];
};

interface Posts {
  title: string;
  description: string;
  slug: string;
  date: string;
  cover: string;
  content: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export type ArticleProps = {
  article: Posts;
};

export interface PostsProps {
  post: {
    title: string;
    description: string;
    slug: string;
    date: string;
    cover: string;
  };
}

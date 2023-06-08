import React, { useState } from 'react';
import { PostsProps } from '../services/interfaces';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Posts: React.FC<PostsProps> = ({ post }) => {
  const [shadow, setShadow] = useState<string>('none');

  const { displayType, styles } = useSelector((state: any) => state.display);

  const handleMouseOver = (e: React.MouseEvent) => {
    setShadow('10px 10px 15px lightgray');
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setShadow('none');
  };

  const getClassName = () => {
    if (displayType === 'tiles') {
      return 'flex flex-col gap-2 rounded-xl border-[1px] p-5 md:w-1/3 lg:w-1/4';
    } else if (displayType === 'list') {
      return 'flex flex-col gap-2 rounded-xl border-[1px] p-5 h-fit max-w-[800px]';
    }
    return '';
  };

  return (
    <Link
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      href={`/blog/${post.slug}`}
      style={{ boxShadow: shadow }}
      className={getClassName()}>
      {displayType === "tiles" ? <img src={post.cover} alt={post.title} /> : null}
        <h1 className="text-lg font-semibold">{post.title}</h1>
        <p className="text-xs">{post.date}</p>
        <p>{post.description}</p>
    </Link>
  );
};

export default Posts;

import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const getList = (path: string) => {
  const directory: string = join(process.cwd(), path);
  const files: string[] = readdirSync(directory);

  return files.map((file) => {
    const fullPath: string = join(directory, file);
    const fileContents: string = readFileSync(fullPath, 'utf-8');
    const {
      data
    }: {
      [key: string]: any;
    } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};

export const getFileBySlug = async (path: string, slug: any) => {
  const directory: string = join(process.cwd(), path);
  const fullPath: string = join(directory, `${slug}.md`);
  const fileContents: string = readFileSync(fullPath, 'utf-8');

  const { data, content: markdownContent } = matter(fileContents);
  let content: any = '';

  if (markdownContent) {
    content = await remark().use(html).process(markdownContent);
    content = content.toString();
  }
  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};

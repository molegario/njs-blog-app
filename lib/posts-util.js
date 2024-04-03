import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectoryPath = path.join(process.cwd(), 'content', 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDirectoryPath);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectoryPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // const postFiles = fs.readdirSync(postsDirectoryPath);
  const postFiles = getPostFiles();
  const postsData = postFiles.map(xx=>getPostData(xx));
  return postsData.sort((postA, postB)=>postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts() {
  return getAllPosts().filter(yy=>yy.isFeatured)
}

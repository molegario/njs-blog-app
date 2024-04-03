import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function BlogHomePage({posts}) {
  return <AllPosts posts={posts} />;
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts
    },
    revalidate: 10
  };
}
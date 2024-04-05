import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

export default function BlogHomePage({posts}) {
  return <Fragment>
    <Head>
      <title>All Posted Articles</title>
      <meta name="description" content="Browse all our content"/>
    </Head>
    <AllPosts posts={posts} />
  </Fragment>;
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts
    },
    revalidate: 300
  };
}
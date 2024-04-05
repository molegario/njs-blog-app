import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function AppRootPage({posts}) {
  return <Fragment>
    <Hero />
    <FeaturedPosts posts={posts} />
  </Fragment>;
}

export async function getStaticProps(context) {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts
    },
    revalidate: 300
  }
}
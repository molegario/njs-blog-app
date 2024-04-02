import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function AppRootPage() {
  return <Fragment>
    <Hero />
    <FeaturedPosts />
  </Fragment>;
}
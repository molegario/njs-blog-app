import Head from "next/head";
import PostContent from "../../components/post-details/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

export default function PostArticlePage({post}) {
  return <div>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt}/>
    </Head>
    <PostContent {...post} />
  </div>
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  
  return {
    props: {
      post: postData
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug=>({params: { slug }})),
    fallback: false
  }
}
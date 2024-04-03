import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function PostContent({ title, slug, image, content }) {
  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if(node.children[0].tagName === 'img') {
        const image = node.children[0];
        return <div className={classes.image}>
          <Image 
            src={`/images/posts/${slug}/${image.properties.src}`}
            alt={image.alt}
            width={600}
            height={300}          
          />
        </div>;
      }
      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return <SyntaxHighlighter 
          style={atomDark}
          language={language}
          children={children}
        />;
    },
  };

  return <article className={classes.content}>
    <PostHeader title={title} image={imagePath}/>
    <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
  </article>;
}
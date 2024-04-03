import Image from "next/image";
import Link from "next/link";
import classes from './post-item.module.css'

export default function PostItem({
  title, image, excerpt, date, slug,
}) {

  const formattedDate = new Date(Date.parse(date)).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`

  return <li className={classes.post}>
    <Link href={`/posts/${slug}`}>
      <div className={classes.image}>
        <Image src={imagePath} alt={title} width={300} height={200}/>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </div>
    </Link>
  </li>
}
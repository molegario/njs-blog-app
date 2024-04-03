import Image from 'next/image';
import classes from './hero.module.css';
export default function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src='/images/site/profile-art-olegario.png' alt='blogger photo' width={300} height={300} />
    </div>
    <h1> Hi I'm Weathers</h1>
    <p>I blog about gaming, coding, youtubers, politics... ya anything. I like React, NextJS, Angular, and most modern Javascript Frameworks.</p>
  </section>;
}
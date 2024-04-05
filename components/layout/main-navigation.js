import Link from "next/link";
import Logo from "./logo";
import classes from './main-navigation.module.css';

export default function MainNavigation() {
  const headerCt = `${classes.sticky} ${classes.header}`
  return <header className={headerCt}>
    <Link href='/'><Logo /></Link>
    <nav>
      <ul>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>;
}
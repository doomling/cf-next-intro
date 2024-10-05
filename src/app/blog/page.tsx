import Link from "next/link";
import styles from "./..//page.module.css";

export default function Blog() {
  return (
    <div className={styles.page}>
      Esto a futuro será mi blog
      <Link href="/blog/25">Ir a post</Link>
    </div>
  );
}

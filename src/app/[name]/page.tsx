import styles from "./..//page.module.css";

export default function Name({ params }: { params: { name: string } }) {
  const { name } = params;

  return (
    <div className={styles.page}>
      <h1>hola {name}</h1>
    </div>
  );
}

import styles from "./styles.module.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.yellowContainer}>{children}</div>;
}

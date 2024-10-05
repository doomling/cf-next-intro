"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Counter(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </section>
  );
}

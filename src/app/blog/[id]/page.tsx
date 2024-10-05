"use client";
import { useParams, useRouter } from "next/navigation";

export default function PostPage() {
  const { id } = useParams();
  const router = useRouter();

  const handleNavigation = () => {
    // Navegar a una nueva página
    router.back();
  };

  return (
    <>
      <h1>Este el el blog con ID: {id}</h1>;
      <button onClick={handleNavigation}>Atrás</button>
    </>
  );
}

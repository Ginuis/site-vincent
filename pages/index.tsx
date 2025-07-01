import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/garde"); // Redirige vers /garde au chargement
  }, [router]);

  return null;
}
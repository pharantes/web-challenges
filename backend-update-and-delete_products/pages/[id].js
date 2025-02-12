import useSWR from "swr";
import { useRouter } from "next/router";
import ProductCard from "../components/Product";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return <ProductCard />;
}

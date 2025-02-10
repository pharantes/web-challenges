import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

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

    return (
        <>
            <span>{data.name} </span><br />
            <span>{data.description} </span><br />
            <span>{data.price}{data.currency}</span><br />
            <span>{data.category}</span><br />
            <Link href="/">Back to all</Link>
        </>
    );
}
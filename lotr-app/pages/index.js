import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the Rigns</h1>
      <Link href={`/volumes`}>Overview</Link>
    </div>
  );
}

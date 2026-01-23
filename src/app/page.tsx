import Link from "next/link";

export default function Home() {
  return <section>
    <h1>Wellcome To The Home Page</h1>
    <Link href="/products">Products</Link>
    <Link href="/about">About</Link>
    <Link href="/docs">Docs</Link>
    </section>;
}
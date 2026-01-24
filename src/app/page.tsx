import Link from "next/link";

export default async function Home() {
  // to show loading component
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <section className="bg-amber-500">
      <h1>Wellcome To The Home Page</h1>
      <Link href="/products">Products</Link>
      <Link href="/about">About</Link>
      <Link href="/docs">Docs</Link>
    </section>
  );
}
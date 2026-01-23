import Link from "next/link";

export default function ProductsPage() {
  return <section>
    <h1>Wellcome to the products list page</h1>
    <Link href="/products/1">Product details 1</Link>
    <Link href="/products/2">Product details 2</Link>
    <Link href="/products/3" replace>Product details 3</Link>

    <h2>Products details for 1 in diff lang&apos;s</h2>
    <Link href="/products/1?lang=en&page=10">Product details 1 in english</Link><br/>
    <Link href="/products/1?lang=hi&page=8">Product details 1 in hindi</Link><br/>
    <Link href="/products/1?lang=be&page=11">Product details 1 in bengali</Link>
    </section>;
}
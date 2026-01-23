import Link from "next/link";

export default function ProductsPage() {
  return <section>
    <h1>Wellcome to the products list page</h1>
    <Link href="/products/1">Product details 1</Link>
    <Link href="/products/2">Product details 2</Link>
    <Link href="/products/3" replace>Product details 3</Link>
    </section>;
}
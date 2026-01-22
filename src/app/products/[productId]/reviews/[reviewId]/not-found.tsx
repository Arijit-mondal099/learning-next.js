"use client";

import { usePathname } from "next/navigation";

// not-found component dosen't has props
export default function NotFoundPage() {
  const pathname = usePathname(); // /products/1/reviews/1001
  const prodId = pathname.split('/')[2]
  const reviId = pathname.split('/')[4]

  return (
    <div>
      <h2>Oops 404 review {reviId} not found! for product {prodId}</h2>
    </div>
  );
}
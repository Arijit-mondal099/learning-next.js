/**
 * We can only use one of then static/dynamic metadata
 * And only we can set metadat inside SSR
 */

"use client";

// import { Metadata } from "next";
import { use } from "react";

interface Props {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ lang: "en" | "hi" | "be", page: string }>;
}

// dynamicly set metadata for this page
// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const { productId } = await params;
//   return {
//     title: `Product details of ${productId}`,
//   };
// };

export default function ProductDetailsPage({
  params,
  searchParams,
}: Props) {
  const { productId } = use(params);
  const { lang = "en", page = 1 } = use(searchParams);

  return (
    <section>
      <h1>Wellcome to the products details page for product: {productId}</h1>
      <h4>Read all details in lang: {lang}, total page of details {page}</h4>
    </section>
  );
}

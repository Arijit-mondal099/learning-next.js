/**
 * We can only use one of then static/dynamic metadata
 * And only we can set metadat inside SSR
 */

import { Metadata } from "next";

interface Props {
  params: Promise<{ productId: string }>;
}

// dynamicly set metadata for this page
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product details of ${productId}`,
  };
};

export default async function ProductDetailsPage({ params }: Props) {
  const { productId } = await params;

  return (
    <section>
      Wellcome to the products details page for product: {productId}
    </section>
  );
}
import { notFound, redirect } from "next/navigation";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  // we have only < 1000 reviews, if user trying to access > 1000 reviews then show 404 page
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }

  return (
    <section>
      Wellcome to the product {productId}, review {reviewId} page
    </section>
  );
}
export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  
  return (
    <section>
      Wellcome to the product {productId}, review {reviewId} page
    </section>
  );
}
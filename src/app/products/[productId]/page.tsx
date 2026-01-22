export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <section>
      Wellcome to the products details page for product: {productId}
    </section>
  );
}

interface InterceptingProductsProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const InterceptingProducts: React.FC<InterceptingProductsProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Hey im products from root level intercepting...</h1>
    </div>
  );
};

export default InterceptingProducts;

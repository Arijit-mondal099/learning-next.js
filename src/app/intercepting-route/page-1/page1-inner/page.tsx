import Link from "next/link";

interface Page1InnerPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const Page1InnerPage: React.FC<Page1InnerPageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Page 1 inner page</h1>
      <Link href="/products" className="text-blue-500 underline">Show root level products</Link>
    </div>
  );
};

export default Page1InnerPage;

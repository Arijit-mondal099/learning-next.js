import Link from "next/link";

interface Page1PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const Page1Page: React.FC<Page1PageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Page-1 main page...</h1>
      <Link href="/about" className="text-blue-500 underline">Show about intercepting from root level...</Link>
    </div>
  );
};

export default Page1Page;

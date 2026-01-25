import Link from "next/link";

interface InterceptingPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const InterceptingPage: React.FC<InterceptingPageProps> = ({ params, searchParams }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Learning intercepting routes...</h1>
      <Link href="/intercepting-route/page-1" className="text-blue-500 underline">Show same level page-1 by intercepting</Link>
      <Link href="/profile" className="text-blue-500 underline">Show parent level profile by intercepting</Link>
    </div>
  );
};

export default InterceptingPage;

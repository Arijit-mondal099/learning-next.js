
interface Page1InterceptingProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const Page1Intercepting: React.FC<Page1InterceptingProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Hey Im page-1 form same level intercepting...</h1>
    </div>
  );
};

export default Page1Intercepting;


interface AboutInterceptingProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const AboutIntercepting: React.FC<AboutInterceptingProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Hey im about Intercept from grandparent...</h1>
    </div>
  );
};

export default AboutIntercepting;

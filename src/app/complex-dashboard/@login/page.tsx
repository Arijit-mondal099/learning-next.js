
interface LoginPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const LoginPage: React.FC<LoginPageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default LoginPage;

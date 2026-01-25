
interface ProfileInterceptingProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const ProfileIntercepting: React.FC<ProfileInterceptingProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Hey im profile from praent level intercepting...</h1>
    </div>
  );
};

export default ProfileIntercepting;

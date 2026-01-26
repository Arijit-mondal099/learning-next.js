interface IAuther {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface AuthorProps {
  slug: number;
}

const Author: React.FC<AuthorProps> = async ({ slug }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  const user = (await res.json()) as IAuther;

  return (
    <>
      <h2 className="text-2xl font-bold text-orange-500 py-4">
        Written by <span>{user.name}</span>
      </h2>
    </>
  );
};

export default Author;

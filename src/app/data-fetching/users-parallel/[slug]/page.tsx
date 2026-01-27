import { Suspense } from "react";

interface UserProfilePageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

const fetchUserPosts = async (userId: string) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    return (await res.json()) as Array<IPost>;
  } catch (error) {
    throw error;
  }
};

const fetchUserAlbums = async (userId: string) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
    );
    return (await res.json()) as Array<IAlbum>;
  } catch (error) {
    throw error;
  }
};

const UserProfilePage: React.FC<UserProfilePageProps> = async ({ params }) => {
  const { slug } = await params;

  const postData = fetchUserPosts(slug);
  const albumData = fetchUserAlbums(slug);

  const [posts, albums] = await Promise.all([postData, albumData]);

  return (
    <div className="mt-20 grid grid-cols-2 gap-4 p-6">
      <div className="border shadow">
        <h1>User Posts</h1>

        <div className="flex flex-col gap-2">
          <Suspense fallback={<p>fetching posts...</p>}>
            {posts.map((p) => (
              <div key={p.id} className="p-4 shadow">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            ))}
          </Suspense>
        </div>
      </div>

      <div className="border shadow">
        <h1>User Albums</h1>

        <div className="flex flex-col gap-2">
          <Suspense fallback={<p>fetching albums...</p>}>
            {albums.map((p) => (
              <div key={p.id} className="p-4 shadow">
                <h2>{p.title}</h2>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

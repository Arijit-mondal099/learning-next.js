import { Suspense } from "react";
import Author from "./author";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostSequentialsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as Array<IPost>;

  return (
    <>
        {posts && posts.length && posts.map(({ body, id, title, userId }) => (
          <div key={id} className="m-4 rounded-lg shadow">
            <h2>{title}</h2>
            <p>{body}</p>
            <p>user id: {userId}</p>

            <Suspense fallback={<p>fetching author of post...</p>}>
              <Author slug={userId} />
            </Suspense>
          </div>
        ))}
    </>
  );
};

export default PostSequentialsPage;

"use client";

import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersClientPage = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json() as Promise<Array<IUser>>)
      .then((res) => { setUsers(res); setLoading(false); setError(null); })
      .catch((err) => setError(err?.message || "faild to fatech users"));
  }, []);

  if (error) {
    throw Error(error);
  }

  return loading ? (
    <>
      <p>fetching users please wait...</p>
    </>
  ) : (
    <>
      {users && users?.length && users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default UsersClientPage;

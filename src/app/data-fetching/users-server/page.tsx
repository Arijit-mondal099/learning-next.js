interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersServerPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as Array<IUser>;

  return (
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

export default UsersServerPage;

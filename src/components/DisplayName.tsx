"use client";

import { useAppContext } from "./AppContext";

export const DisplayName = () => {
  const { user } = useAppContext();

  return (
    <div>
      <h1>User name: {user}</h1>
    </div>
  );
};

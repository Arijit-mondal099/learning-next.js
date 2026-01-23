"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handlelogin = () => {
    console.log("user loggedin successfully");
    router.push("/");
  };

  return (
    <section>
      <h1>Login page</h1>
      <button onClick={handlelogin}>Login</button>
    </section>
  );
}
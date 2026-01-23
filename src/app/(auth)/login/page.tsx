"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handlelogin = () => {
    console.log("user loggedin successfully");
    // router.push("/"); // to navigate to home page keeping login page in history
    // router.replace("/"); // to navigate to home page without keeping login page in history
    // router.refresh(); // to refresh the current route
    // router.back(); // to go back to the previous page
    // router.forward(); // to go forward to the next page
    // router.prefetch("/"); // to prefetch the home page
    router.prefetch("/about"); // to prefetch the about page
  };

  return (
    <section>
      <h1>Login page</h1>
      <button onClick={handlelogin}>Login</button>
    </section>
  );
}
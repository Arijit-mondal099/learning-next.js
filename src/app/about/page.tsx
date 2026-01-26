import ComponentOne from "@/components/component-one";
import ComponentTwo from "@/components/component-two";
import { Suspense } from "react";

// staticly set metadata for this page
export const metadata = {
  title: "About page",
  description: "Read about us how are we worked here...",
};

export default function AboutPage() {
  return (
    <section>
      <h1>Wellcome to the about page</h1>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentOne />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentTwo />
      </Suspense>
    </section>
  );
}

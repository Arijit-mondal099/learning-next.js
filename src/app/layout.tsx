/**
 * Root layout isn't optional
 * In nextjs root layout have to present
 */
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "default title", // default title of the app if any page don't have title then it'll show default title
    template: "%s | Arijit Mondal", // %s mean chaild page tittle + | Arijit Mondal
    absolute: "", // overwrite all title prefix/postfix and show only child title
  },
  description: "Learning next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
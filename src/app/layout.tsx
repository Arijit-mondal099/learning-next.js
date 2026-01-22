/**
 * Root layout isn't optional
 * In nextjs root layout have to present
 */

export const metadata = {
  title: "Next.js",
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
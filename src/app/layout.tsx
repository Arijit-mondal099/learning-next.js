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
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
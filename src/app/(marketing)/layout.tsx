export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Marketing Area</h1>
      <main>{children}</main>
    </div>
  );
}
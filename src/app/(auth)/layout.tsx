export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Auth Area</h1>
      {children}
    </div>
  );
}
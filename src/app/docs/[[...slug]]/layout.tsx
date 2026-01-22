/**
 * This layout used for docs route
 * it's an nested layout
 * first render root layout and then docs layout and so on
 */

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidebar 1</aside>
      <div>{children}</div>
      <aside>Sidevar 2</aside>
    </div>
  );
}
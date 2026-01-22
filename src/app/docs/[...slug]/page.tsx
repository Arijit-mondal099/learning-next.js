export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <section>
      <h1>Catch-all segments</h1>
      <p>{slug.join("/")}</p>

      {slug[0] && slug[0] === "nextjs" && (
        <div>
            Wellcome to the nextjs docs

            {slug[1] && slug[1] === "routing" && (
                <p>learning nextjs routing...</p>
            )}
        </div>
      )}

      {slug[0] && slug[0] === "reactjs" && (
        <div>
            Wellcome to the reactjs docs

            {slug[1] && slug[1] === "rsc" && (
                <p>learning reactjs RSC</p>
            )}
        </div>
      )}
    </section>
  );
}
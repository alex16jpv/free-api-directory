// TODO: fix children type
export default function Category({
  children,
  category,
}: {
  children: any;
  category: string;
}) {
  return (
    <section>
      <h2 className="my-2 text-2xl font-semibold">{category}</h2>
      <div className="gallery">{children}</div>
    </section>
  );
}

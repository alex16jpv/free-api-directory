// TODO: fix children type
export default function Category({
  children,
  category,
}: {
  children: any;
  category: string;
}) {
  return (
    <section className="mt-10 ">
      <div className="relative flex pt-3 pb-1 place-items-center">
        <div className="flex-grow border-t border-gray-500"></div>
        <h2 className="flex-shrink p-0 mx-4 mb-2 text-4xl font-semibold text-gray-500">
          {category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase()}
        </h2>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>
      <div className="gallery">{children}</div>
    </section>
  );
}

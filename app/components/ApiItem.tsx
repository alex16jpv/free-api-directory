import { ApiType } from "../lib/types";

export default function ApiItem({ data }: { data: ApiType }) {
  const { id, name, description } = data;
  return (
    <article className="p-4 bg-green-500" key={id}>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <a href="#!">Go - {id}</a>
    </article>
  );
}

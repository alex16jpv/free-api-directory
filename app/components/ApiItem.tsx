import { ApiType } from "../lib/types";
import Badge from "./Badge";

export default function ApiItem({ data }: { data: ApiType }) {
  const { id, name, description } = data;
  const HTTPS = {
    ENABLE: {
      text: "https",
      color: "green",
    },
    DISABLE: {
      text: "http",
      color: "red",
    },
  };
  const https = data.checks.https ? HTTPS.ENABLE : HTTPS.DISABLE;

  const CORS = {
    ENABLE: {
      text: "cors",
      color: "green",
    },
    DISABLE: {
      text: "no-cors",
      color: "red",
    },
  };
  const cors = data.checks.cors ? CORS.ENABLE : CORS.DISABLE;

  const AUTH: { [a: string]: { text: string; color: string } } = {
    NO_AUTH: {
      text: "no-auth",
      color: "red",
    },
    API_KEY: {
      text: "api-key",
      color: "blue",
    },
    OAUTH: {
      text: "oauth",
      color: "green",
    },
  };
  const auth = AUTH[data.checks.auth];

  return (
    <article className="p-4 rounded-md shadow-md bg-gray-50" key={id}>
      <div className="flex flex-col flex-wrap justify-between mb-2 sm:flex-row">
        <h3 className="text-xl font-semibold min-w-[200px]">{name}</h3>
        <div className="flex gap-x-2">
          <Badge color={https.color}>{https.text}</Badge>
          <Badge color={cors.color}>{cors.text}</Badge>
          <Badge color={auth.color}>{auth.text}</Badge>
        </div>
      </div>
      <p className="leading-4 line-clamp-3">{description}</p>
      <a href="#!">Go - {id}</a>
    </article>
  );
}

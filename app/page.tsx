import ApiItem from "./components/ApiItem";
import Category from "./components/Category";
import apiList from "./lib/apis.json";
import { ApiType } from "./lib/types";

export default function Home() {
  const apisByCategory: Map<string, ApiType[]> = new Map();
  apiList.forEach((api) => {
    let category = api.category ?? "Other";
    if (!apisByCategory.has(category)) apisByCategory.set(category, []);
    apisByCategory.get(category)?.push(api);
  });
  const listApisByCategory = Array.from(apisByCategory.keys());

  return (
    <main className="max-w-screen-lg p-2 mx-auto">
      <h1 className="text-4xl font-semibold">Free API Directory</h1>
      <p>
        Free API Directory is a collection of free APIs for developers to use.
      </p>

      {listApisByCategory.map((category) => {
        return (
          <Category key={category} category={category}>
            {apisByCategory.get(category)?.map((api: any) => (
              <ApiItem key={api.id} data={api} />
            ))}
          </Category>
        );
      })}
    </main>
  );
}

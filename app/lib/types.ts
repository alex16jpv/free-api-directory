export type ApiType = {
  id: string;
  name: string;
  image: string;
  description: string;
  category?: string;
  checks: {
    cors: boolean;
    https: boolean;
    auth: string | "NO_AUTH" | "API_KEY" | "OAUTH";
  };
};

import { API_URL } from "./constant";

export const fetcher = async (key: string) => {
  return fetch(`${API_URL}${key}`).then((res) => res.json());
};

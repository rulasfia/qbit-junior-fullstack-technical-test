import useSWRV from "swrv";
import { fetcher } from "@/utils/fetcherFn";

export function useQuery<TResponse>(key: string) {
  const res = useSWRV<TResponse>(key, fetcher, {
    revalidateDebounce: 1500,
  });

  return res;
}

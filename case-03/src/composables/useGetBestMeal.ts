import type { MealDetail } from "@/utils/types/MealTypes";
import { reactive, watch, watchEffect } from "vue";
import { useQuery } from "./useQuery";

export const useGetBestMeal = (meal: number) => {
  const { data, error } = useQuery<MealDetail>(`/lookup.php?i=${meal}`);
  return { data, error };
};

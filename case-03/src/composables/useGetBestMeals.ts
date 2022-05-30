import type { MealDetail } from "@/utils/types/MealTypes";
import { useQuery } from "./useQuery";

export const useGetBestMeals = (bestMeals: number[]) => {
  const bestMeal1 = useQuery<MealDetail>(`/lookup.php?i=${bestMeals[0]}`);
  const bestMeal2 = useQuery<MealDetail>(`/lookup.php?i=${bestMeals[1]}`);
  const bestMeal3 = useQuery<MealDetail>(`/lookup.php?i=${bestMeals[2]}`);

  if (bestMeal1.error || bestMeal2.error || bestMeal3.error) {
    return {
      status: "error",
      data: [],
    };
  }

  if (bestMeal1.data.value && bestMeal2.data.value && bestMeal3.data.value) {
    return {
      status: "success",
      data: [
        ...bestMeal1.data.value.meals,
        ...bestMeal2.data.value.meals,
        ...bestMeal3.data.value.meals,
      ],
    };
  }

  return {
    status: "loading",
    data: [],
  };
};

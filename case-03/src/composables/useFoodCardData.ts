import { computed } from "vue";
import { useRoute } from "vue-router";
import type { Category } from "@/utils/types/FoodCategoryTypes";
import type { Meal } from "@/utils/types/MealTypes";

export const useFoodCardData = (data: Category[] | Meal[]) => {
  const { params } = useRoute();

  const properties = computed(() => {
    return data.map((item) => ({
      id: "idMeal" in item ? item.idMeal : item.idCategory,
      title: "strMeal" in item ? item.strMeal : item.strCategory,
      type: "idMeal" in item ? "meal" : "foodCategory",
      link:
        "idMeal" in item
          ? `/food/${params.category}/${item.idMeal}`
          : `/food/${item.strCategory.toLowerCase()}`,
      imgSrc:
        "strMealThumb" in item ? item.strMealThumb : item.strCategoryThumb,
    }));
  });

  return { params, properties };
};

import type { MealDetail } from "./types/MealTypes";

export const getBreadcrumbUrl = (item: string, navItems: string[]) => {
  return item === ""
    ? "/"
    : navItems.slice(0, navItems.indexOf(item) + 1).join("/");
};

export const getBreadcrumbTitle = (
  item: string,
  navItems: string[],
  mealId: string,
  data: MealDetail | undefined
) => {
  // if item === empty string, return "Home"
  if (item === "") return "Home";
  // if breadcrum item > 3 & it's the last item, return meal name instead of mealId
  if (navItems.length > 3 && navItems[navItems.length - 1] === item && data) {
    const meal = data?.meals.find((m) => m.idMeal === mealId);
    return meal?.strMeal || "";
  }

  // if not, return item from url
  return item;
};

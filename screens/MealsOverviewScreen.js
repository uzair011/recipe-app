import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsLIst";

function MealsOverviewScreen({ route, navigation }) {
  const categoryID = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0; // return true
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryID, CATEGORIES]);

  return <MealsList items={displayMeals} />;
}

export default MealsOverviewScreen;

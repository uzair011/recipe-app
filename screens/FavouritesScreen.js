import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import MealsList from "../components/MealsList/MealsLIst";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/Favourites-context";

function FavouritesScreen() {
  const favouriteMealsContext = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsContext.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>
          Click the heart icon to add your favourite meals to this favourite
          screen
        </Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 200,
  },
});

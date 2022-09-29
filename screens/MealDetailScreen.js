import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/Favourites-context";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favouriteMealsContext = useContext(FavouritesContext);
  const isFavouriteMeal = favouriteMealsContext.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    // console.log("Added to your favourite list");
    if (isFavouriteMeal) {
      favouriteMealsContext.removeFromFavourites(mealId);
    } else {
      favouriteMealsContext.addToFavourites(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={isFavouriteMeal ? "heart" : "heart-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.imageStyle}
      />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Text style={styles.subTitleTextStyle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text style={styles.ingredientsStyle} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={[styles.subTitleTextStyle, styles.StepsTextAlign]}>
        Steps
      </Text>
      <View style={styles.rootSteps}>
        {selectedMeal.steps.map((step) => (
          <Text style={styles.stepsStyle} key={step}>
            {step}
          </Text>
        ))}
      </View>
      {/* <Text> {mealId}</Text> */}
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageStyle: {
    width: "100%",
    height: 350,
    // marginHorizontal: 6,
    // paddingRight: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 8,
  },
  detailText: {
    color: "white",
  },
  subTitleTextStyle: {
    fontWeight: "bold",
    color: "#e3a549",
    textAlign: "center",
    padding: 20,
    fontSize: 22,
    margin: 4,
    paddingBottom: 5,
  },
  ingredientsStyle: {
    color: "white",
    textAlign: "center",
    padding: 2,
  },
  StepsTextAlign: {
    textAlign: "left",
  },
  rootSteps: {
    backgroundColor: "pink",
    margin: 20,
    borderRadius: 8,
  },
  stepsStyle: {
    color: "#5c2635",
    marginLeft: 25,
    margin: 3,
  },
});

import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

  function renderMealItem(itemData) {
    const item = itemData.item;
    const itemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    // function pressMealDetailHandler() {
    //   navigation.navigate("MealDetails", {
    //     categoryId: itemData.item.id,
    //   });
    // }

    return (
      <MealItem
        {...itemProps}
        //   onPress={pressMealDetailHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      {/* <Text>hahaha {categoryID}</Text> */}
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

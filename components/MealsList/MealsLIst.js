import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealsList({ items }) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      {/* <Text>hahaha {categoryID}</Text> */}
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

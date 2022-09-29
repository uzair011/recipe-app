import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CategoryGridTile from "../CategoryGridTile";
import MealDetails from "../MealDetails";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.MealComponent}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerMealCoomponent}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  MealComponent: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    //overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  innerMealCoomponent: {
    overflow: "hidden",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

{
  /* <Text style={styles.title}>{title}</Text> */
}
// {/* <Text>{ mealIngredients}</Text> */}

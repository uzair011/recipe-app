import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItems, textStyle]}>{duration} minutes</Text>
      <Text style={[styles.detailItems, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItems, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
    marginHorizontal: 3,
  },
});

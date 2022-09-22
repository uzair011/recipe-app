import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItems}>Duration: {duration} minutes</Text>
      <Text style={styles.detailItems}>
        Complexity: {complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItems}>
        Affordability: {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

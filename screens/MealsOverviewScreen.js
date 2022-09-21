import { View, Text, StyleSheet, FlatList } from "react-native"

import { MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
    
    const categoryID = route.params.categoryId

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryID) >= 0; // return true
    })
    
    function renderMealItem(itemData) {
        return (
            <MealItem title={itemData.item.title} mealIngredients={ itemData.item.ingredients} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals} keyExtractor={(item)=>{item.id}} renderItem={renderMealItem} />
            
            
            <Text>
                Meals Overview Screen
                {categoryID}
            </Text>
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16
    }
})
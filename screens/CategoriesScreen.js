import { View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({navigation}) {
function renderCategoryItemHandler(itemData) {

    function pressHandler() {
        navigation.navigate("MealsOverview")
    }

    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    )
}

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItemHandler}
            numColumns={2}
        />
    )
}

export default CategoriesScreen  

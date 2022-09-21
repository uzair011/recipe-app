import {View, Text, Pressable, StyleSheet, Image} from "react-native"
import CategoryGridTile from "./CategoryGridTile"

function MealItem({title, imageUrl}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text>{title}</Text>
                </View>

                {/* <CategoryGridTile /> */}
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    // MealComponent: {
    //     backgroundColor: "",
    //     margin: 16
    // },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 200
    }
})

{/* <Text style={styles.title}>{title}</Text> */}
// {/* <Text>{ mealIngredients}</Text> */}
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavouritesContextProvider from "./store/context/Favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#630b24" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#5c2635" },
        drawerContentStyle: { backgroundColor: "#59061e" },
        drawerInactiveTintColor: "#8b656f",
        drawerActiveTintColor: "#59061e",
        drawerActiveBackgroundColor: "#8b656f",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#630b24" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#5c2635" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              options={{ title: "About the item" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

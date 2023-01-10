import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerActiveTintColor: "#e4baa1",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="MealsCategoriesDrawer"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="ios-list-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesMealsDrawer"
        component={FavoritesScreen}
        options={{
          title: "Favorites meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        {/*<FavoritesContextProvider>*/}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealCategoryDetail"
              component={CategoryDetailScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/*</FavoritesContextProvider>*/}
      </Provider>
    </>
  );
}

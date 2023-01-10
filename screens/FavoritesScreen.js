import { FlatList, Text, View } from "react-native";
import { useFavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const { ids } = useFavoritesContext();
  const { ids } = useSelector((state) => state.favoriteMeals);

  const favoriteMeals = MEALS.filter((item) => ids.includes(item.id));

  if (ids.length === 0) {
    return (
      <View className="items-center py-10">
        <Text className="text-white text-center text-xl w-1/2">
          You haven't any favorite meal... 😏
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      renderItem={(data) => {
        return <MealItem {...data.item} />;
      }}
      ItemSeparatorComponent={() => <View className="h-6"></View>}
      keyExtractor={(item) => item.id}
      className="py-4"
    />
  );
};

export default FavoritesScreen;

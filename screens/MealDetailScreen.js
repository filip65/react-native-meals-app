import { Image, ScrollView, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import FavouriteButton from "../components/FavouriteButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { useFavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  // const { addFavorite, removeFavorite, ids } = useFavoritesContext();
  const { ids } = useSelector((state) => state.favoriteMeals);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const meal = MEALS.find((item) => item.id === mealId);

  const mealIsFavorite = ids.includes(mealId);

  const handleHeaderPress = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <FavouriteButton onPress={handleHeaderPress} active={mealIsFavorite} />
      ),
    });
  }, [ids]);

  return (
    <ScrollView>
      <Image
        source={{
          uri: meal.imageUrl,
        }}
        className="w-full h-[200]"
      />
      <Text className="font-bold text-2xl text-white p-2 text-center">
        {meal.title}
      </Text>
      <View className="p-2">
        <Text className="text-white">
          <Text className="font-bold">Duration:</Text> {meal.duration}m
        </Text>
        <Text className="text-white">
          <Text className="font-bold">Complexity:</Text> {meal.complexity}
        </Text>
        <Text className="text-white">
          <Text className="font-bold">Affordability:</Text> {meal.affordability}
        </Text>
      </View>

      <List title="Ingredients" items={meal.ingredients} />

      <List title="Steps" items={meal.steps} />
    </ScrollView>
  );
};

const List = ({ title, items }) => {
  return (
    <View className="px-2 mb-4">
      <Text className="text-brown-light text-xl text-center">{title}</Text>
      <View className="bg-brown-light h-0.5 mx-12 my-1"></View>
      {items?.map((item, index) => (
        <View
          key={index}
          className="rounded-lg px-4 py-2 my-2 mx-12 bg-brown-light"
        >
          <Text className="text-brown-dark text-center">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailScreen;

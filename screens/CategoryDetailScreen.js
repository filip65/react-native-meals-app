import { FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const CategoryDetailScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title;

  const categoryMeals = MEALS?.filter((item) =>
    item.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, categoryTitle]);

  return (
    <View>
      <FlatList
        data={categoryMeals}
        renderItem={(data) => {
          const item = data.item;
          return <MealItem {...item} />;
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-6"></View>}
        className="py-4"
      />
    </View>
  );
};

export default CategoryDetailScreen;

import { FlatList, Pressable, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Ripple from "react-native-material-ripple";

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      className="flex-1"
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(data) => (
        <CategoryGridTile
          title={data.item.title}
          color={data.item.color}
          onPress={() =>
            navigation.navigate("MealCategoryDetail", {
              categoryId: data.item.id,
            })
          }
        />
      )}
      numColumns={2}
    />
  );
};

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <Ripple
      className={`flex-1 h-32 m-4 shadow-lg shadow-md rounded-xl`}
      style={{
        backgroundColor: color,
        elevation: 4,
      }}
      onPress={() => onPress?.()}
    >
      <View className="flex-1 p-4 justify-center items-center">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
    </Ripple>
  );
};

export default CategoriesScreen;

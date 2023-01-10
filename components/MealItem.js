import { Image, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  startNode,
}) => {
  const navigation = useNavigation();

  const onClickNavigate = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View className="ios:shadow-md">
      <View
        className="bg-white rounded-xl overflow-hidden mx-4"
        style={{
          elevation: 4,
        }}
      >
        <Ripple onPress={onClickNavigate}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              className="w-full h-[200]"
            />
            <Text className="font-bold text-xl text-center mt-2">{title}</Text>
          </View>
          <View className="p-2">
            <Text>
              <Text className="font-bold">Duration:</Text> {duration}m
            </Text>
            <Text>
              <Text className="font-bold">Complexity:</Text> {complexity}
            </Text>
            <Text>
              <Text className="font-bold">Affordability:</Text> {affordability}
            </Text>
          </View>
        </Ripple>
      </View>
    </View>
  );
};

export default MealItem;

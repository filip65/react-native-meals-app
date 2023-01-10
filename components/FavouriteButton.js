import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = ({ active, onPress }) => {
  return (
    <Pressable onPress={() => onPress?.()}>
      {active ? (
        <AntDesign name="star" size={24} color="yellow" />
      ) : (
        <AntDesign name="staro" size={24} color="yellow" />
      )}
    </Pressable>
  );
};

export default FavouriteButton;

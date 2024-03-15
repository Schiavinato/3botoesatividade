import { styles } from "../Style/StyleSheet";
import { Image, TouchableOpacity } from "react-native";

export default function Btn3Components() {
  return (
    <TouchableOpacity onPress={pressbutton3}>
      <Image source={require("../assets/Images/play.png")} />
    </TouchableOpacity>
  );
}

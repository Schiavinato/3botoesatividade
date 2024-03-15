import { styles } from "../Style/StyleSheet";
import { TouchableOpacity } from "react-native";

export default function Btn1Components() {
  return (
    <TouchableOpacity onPress={pressbutton1} style={styles.btn1}>
      Login
    </TouchableOpacity>
  );
}

import { styles } from "../Style/StyleSheet";
import { TouchableOpacity } from "react-native";

export default function Btn2Components() {
  return (
    <TouchableOpacity onPress={pressbutton2} style={styles.btn2}>
      Sign in
    </TouchableOpacity>
  );
}

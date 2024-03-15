import { View } from "react-native";
import { styles } from "../Style/StyleSheet";

const Home = ({ children }) => {
  pressbutton1 = () => {
    alert("vocẽ apertou o botão de login");
  };

  pressbutton2 = () => {
    alert("vocẽ apertou o botão de sign in");
  };

  pressbutton3 = () => {
    alert("vocẽ apertou o botão da imagem");
  };
  return <View style={styles.container}>{children}</View>;
};

export default Home;

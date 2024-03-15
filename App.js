import Btn1Components from "./src/Components/Btn1Components";
import Btn2Components from "./src/Components/Btn2Components";
import Btn3Components from "./src/Components/Btn3Components";
import Home from "./src/Pages/Home";

export default function App() {
  return (
    <Home>
      <Btn1Components />
      <Btn2Components />
      <Btn3Components />
    </Home>
  );
}

import logoSvg from "@/assets/react.svg";
import { Button } from "./components/ui/button";
function App() {
  return (
    <div>
      <img src={logoSvg} alt="" />
      <Button>Hello React</Button>
    </div>
  );
}

export default App;

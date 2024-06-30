import { useState } from "react";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Textarea } from "./components/ui/textarea";
function App() {
  const [textValue, setTextValue] = useState("");
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setTextValue(val);
  };
  return (
    <div className="flex flex-col w-full h-full relative">
      <Header />
      <Main>
        <Textarea
          value={textValue}
          onChange={onChangeValue}
          placeholder="Type your message here."
          className="rounded-none border-none"
        />
        <Counter stats={stats} className=" xl:flex-[40%] md:flex-[40%] sm:flex-[55%]" />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

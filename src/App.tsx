import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Textarea } from "./components/ui/textarea";
function App() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Header />
      <Main>
        <Textarea placeholder="Type your message here." className="rounded-none border-none"  />
        <Counter className="flex-[40%]" />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

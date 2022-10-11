import "./App.css";
import Header from "./components/header";
import ButtomArea from "./components/ButtomArea";
import InputArea from "./components/InputArea";
function App() {
  return (
    <div>
      <Header />
      <main className="flex flex-col w-full justify-center items-center m-3 ">
        <ButtomArea />
        <InputArea />
      </main>
    </div>
  );
}

export default App;

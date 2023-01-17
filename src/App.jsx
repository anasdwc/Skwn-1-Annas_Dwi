import "./App.css";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Header />
      <main>
        <Reasons />
        <Partners />
      </main>
    </>
  );
}

export default App;

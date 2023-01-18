import "./App.css";
import Categories from "./components/Categories";
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
        <Categories />
      </main>
    </>
  );
}

export default App;

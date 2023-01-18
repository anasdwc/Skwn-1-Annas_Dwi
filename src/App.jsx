import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Header />
      <main>
        <Reasons />
        <Partners />
        <Categories />
        <Products />
      </main>
    </>
  );
}

export default App;

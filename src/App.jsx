import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
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
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;

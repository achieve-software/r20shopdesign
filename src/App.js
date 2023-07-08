import Home from "./pages/Home";

import './App.css';
import Error from "./pages/Error";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
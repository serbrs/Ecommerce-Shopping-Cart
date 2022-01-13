import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductLists from "./components/ProductLists";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductLists />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/card" exact element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;

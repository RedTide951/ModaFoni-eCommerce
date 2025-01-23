import PageContent from "./layout/PageContent";
import "./App.css";
import ProductCard from "./components/ProductCard";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/productCard" element={<ProductCard />} />
        </Routes>
      </PageContent>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopPage } from "./pages/shop/ShopPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Routes>
            <Route path="shop" element={<ShopPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

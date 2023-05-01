import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShopPage } from "./pages/shop/ShopPage";
import { CheckOutPage } from "./pages/checkout/CheckoutPage";
import { CartPage } from "./pages/cart/CartPage";
import { ThanksPage } from "./pages/checkout/ThanksPage";
import { CMSOrdersPage } from "./pages/cms/orders/CMSOrdersPage";
import { CMSProductsPage } from "./pages/cms/products/CMSProductsPage";
import { LoginPage } from "./pages/login/LoginPage";
import { Navbar } from "./components/NavBar";
import { CMSPage } from "./pages/cms/CMSPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto">
          <Navbar />
          <Routes>
            {/* GENERICS ROUTES  */}
            <Route path="shop" element={<ShopPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="thanks" element={<ThanksPage />} />
            <Route path="login" element={<LoginPage />} />

            {/* NESTED ROUTES  */}
            <Route path="cms" element={<CMSPage />}>
              <Route path="products" element={<CMSProductsPage />} />
              <Route path="orders" element={<CMSOrdersPage />} />
              {/* DEFAULT CMS  */}
              <Route index element={<Navigate to="products" />} />
            </Route>

            {/* NOT FOUND  */}
            <Route path="*" element={<Navigate to="shop" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

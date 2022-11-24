import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useState } from "react";
// import UserContext from "./components/Context/context";
import ProductsPage from "./components/ProductsPage";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";

function App() {
  const [user, setUser] = useState([]);
  // const [change, setChange] = useState(false);

  const localUserSerializado = localStorage.getItem("localUser");
  const localUser = JSON.parse(localUserSerializado);

  if (localUser && user.length === 0) {
    setUser(localUser);
  }

  return (
    // <UserContext.Provider value={{ user, setUser, change, setChange }}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} /> */}
          <Route path="/cadastro" element={<CreateUserPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:id" />
        {/* <Route path="/adiciona-produto/:category" element={<AddProductsPage />} />
          <Route path="/sacola" element={<ShoppingBagPage/>} />
          <Route path="/pagamento" element={<CheckoutPage/>} /> */}
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;

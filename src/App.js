import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { BodyShape } from "./components/BodyShape";
import MatchMaker from "./components/MatchMaker"; // Correct import without {}

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/body-shape" element={<BodyShape />} /> {/* Use element prop for rendering components */}
            <Route path="/match-maker" element={<MatchMaker />} /> {/* Use element prop for rendering components */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

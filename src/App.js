import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Navber from "./components/Navber";
import ProductsPage from "./products";

function App() {
  return (
    <div className="app ">
     <BrowserRouter>
     <Navber/>
     <Routes>
      <Route path="/products" element={<ProductsPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

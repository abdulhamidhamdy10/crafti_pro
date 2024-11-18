import './App.css';
import Allhome from './Components/Home/Allhome';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider className="App">
      <Allhome/>
    </CartProvider>
  );
}

export default App;

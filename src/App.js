import './App.css';
import Header from './Containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 NOT FOUND!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

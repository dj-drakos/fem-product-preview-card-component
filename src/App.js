import './App.css';
import Footer from './Footer/Footer'
import ProductCard from './ProductCard/ProductCard';
import MockData from './mockData.json';

export default function App() {
  return (
    <div className="App">
      <ProductCard data={MockData}/>
      <Footer />
    </div>
  );
}




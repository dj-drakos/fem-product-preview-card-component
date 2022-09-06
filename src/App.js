import './App.css';
import Footer from './Footer/Footer.js'

export default function App() {
  return (
    <div className="App">
      <main className="product" role="main">
        <picture>
          <source media="screen and (max-width: 445px)" srcset="./image-product-mobile.jpg" />
          <img src='./image-product-desktop.jpg' alt="Gabrielle Essence Eau De Parfum"/>
        </picture>

        <section className='product-details'>
          <p className="product-category">
          Perfume
          </p>

          <h1 className="product-title">
          Gabrielle Essence Eau De Parfum
          </h1>


          <p className="product-description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
          </p>
            

          <p className="product-price">
            <span className="sale">$149.99</span>
            <span className="msrp">$169.99</span>
          </p>

          <button>
            <img src='./icon-cart.svg' alt='Cart Icon' />
          Add to Cart
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}




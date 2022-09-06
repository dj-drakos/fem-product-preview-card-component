import './App.css';

function App() {
  return (
    <div className="App">
      <main className="product" role="main">
        <img src='./image-product-desktop.jpg' alt="Gabrielle Essence Eau De Parfum"/>

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

      <footer role="contentinfo" class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com.dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;

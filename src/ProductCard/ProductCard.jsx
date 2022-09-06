import './ProductCard.css'

export default function ProductCard() {
  return (
    <main className="card" role="main">
        <picture>
          <source media="screen and (max-width: 445px)" srcset="./image-product-mobile.jpg" />
          <img src='./image-product-desktop.jpg' alt="Gabrielle Essence Eau De Parfum"/>
        </picture>

        <section className='product-details'>
          <p className="category">
          Perfume
          </p>

          <h1 className="name">
          Gabrielle Essence Eau De Parfum
          </h1>

          <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
          </p>

          <p className="price">
            <span className="sale">$149.99</span>
            <span className="msrp">$169.99</span>
          </p>

          <button>
            <img src='./icon-cart.svg' alt='Cart Icon' />
          Add to Cart
          </button>
        </section>
      </main>
  )
}
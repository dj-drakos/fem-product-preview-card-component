import './ProductCard.css'

export default function ProductCard({data}) {
  const {category, description, name, priceMSRP, priceSale, productImageURLDesktop, productImageURLMobile, qtyOnHand} = data;

  return (
    <main className="card" role="main">
        <picture>
          <source media="screen and (max-width: 445px)" srcSet={productImageURLMobile} />
          <img src={productImageURLDesktop} alt={name}/>
        </picture>

        <section className='product-details'>
          <p className="category">{category}</p>

          <h1 className="name">{name}</h1>

          <p className="description">{description}</p>

          <p className="price">
            <span className="sale">{priceSale}</span>
            <span className="msrp">{priceMSRP}</span>
          </p>

          <button  disabled={qtyOnHand <= 0}>
            <img src='./icon-cart.svg' alt='Cart Icon' />
          Add to Cart
          </button>
        </section>
      </main>
  )
}
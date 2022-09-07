import './ProductCard.css'
import Button from '../Button/Button'

export default function ProductCard({data}) {
  const {category, description, name, priceMSRP, priceSale, productImageURLDesktop, productImageURLMobile, qtyOnHand} = data;

  return (
    <div className="card" role="main">
        <picture>
          <source media="screen and (max-width: 445px)" srcSet={productImageURLMobile} />
          <img src={productImageURLDesktop} alt={name}/>
        </picture>

        <section className='details'>
          <p className="category">{category}</p>

          <h1 className="name">{name}</h1>

          <p className="description">{description}</p>

          <p className="price">
            {priceSale !== undefined && <span>{priceSale}</span>}
            <span>{priceMSRP}</span>
          </p>

          <Button qtyOnHand={qtyOnHand} />
        </section>
      </div>
  )
}
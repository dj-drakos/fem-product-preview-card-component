import './Button.css'
import { useState } from 'react';

export default function Button({qtyOnHand}) {
  const [qtyAvailable, setQtyAvailable] = useState(qtyOnHand);

  return (
    <button  disabled={qtyAvailable <= 0} onClick={() => setQtyAvailable(qtyAvailable - 1)}>
    <img src='./icon-cart.svg' alt='Cart Icon' />
    Add to Cart
    </button>
  )
}
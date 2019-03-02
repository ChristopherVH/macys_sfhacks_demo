import React from 'react';
import '../styles/Thumbnail.css'

const Nf = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <div className="product-information">
        <a href={props.product.summary.producturl}>
          <img className="thumbnail-image" src={props.product.image[0].imageurl}/>
        </a>
        <h4 className="product-name">{props.product.summary.name}</h4>
        <h5 className="product-price">{Nf.format(props.product.price.regular.value)}</h5>
      </div>
    </div>
  );
}

export default Thumbnail;

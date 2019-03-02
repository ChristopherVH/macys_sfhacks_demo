import React from 'react';
import Thumbnail from './Thumbnail';
import '../styles/Grid.css'

const Grid = (props) => {
  return (
    <div className="grid">
      {props.products.map((product) => <Thumbnail product={product} key={product.id}/>)}
    </div>
  );
}

export default Grid;

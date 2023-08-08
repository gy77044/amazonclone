import React, { useContext } from 'react';
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { StateContext, useStateValue } from '../../StateProvider';
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useContext(StateContext);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRateIcon style={{ color: 'gold' }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart}>Add to Basket</button>
    </div>
  );
};

export default Product;

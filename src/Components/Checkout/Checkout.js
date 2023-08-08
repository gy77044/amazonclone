import React, { useContext } from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { StateContext } from '../../StateProvider';
const Checkout = () => {
  const [{ basket }, dispatch] = useContext(StateContext);
  console.log(basket);
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
          alt='img'
        />
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

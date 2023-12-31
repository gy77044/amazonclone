import React, { useContext } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import { StateContext } from '../../StateProvider';
const Header = () => {
  const [{ basket }, dispatch] = useContext(StateContext);
  return (
    <div className='header'>
      <NavLink to='/'>
        <img
          className='header__logo'
          src={require('../../assets/amazon.png')}
          alt='xyz'
        />
      </NavLink>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <NavLink to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span
              className='header__optionLineTwo 
            header__basketCount'>
              {basket.length && basket.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

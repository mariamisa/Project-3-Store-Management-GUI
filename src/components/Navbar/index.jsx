import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../Filters/SearchBar'
import LinkComponent from './Link';
import Logo from '../Logo';

import { selectCartCount } from '../../features/cart/cartSelectors'
import { selectSearchValue } from '../../features/products/productsSelectors'
import { setSearchValue } from '../../features/products/productsSlice'

import Cart from '../../svg/cart'

import styles from './styles.module.css'

export default function Navbar() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount)
  const searchValue = useSelector(selectSearchValue)

  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <nav>
        <LinkComponent to="/" text='Home' />
        <LinkComponent to="/shop" text='Shop' />
        <LinkComponent to="/about" text='About' />
      </nav>
      <SearchBar onSearch={(e) => dispatch(setSearchValue(e))} query={searchValue} />
      <Link className={`${styles.link} ${styles.itemContainer}`} to="/cart">
        <Cart />
        <span className={styles.cartCount}>{cartCount}</span>
      </Link>
    </div>
  );
}

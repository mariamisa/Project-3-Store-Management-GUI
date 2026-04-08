import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchBar from '../Filters/SearchBar'
import LinkComponent from './Link';
import Logo from '../Logo';

import { selectCartCount } from '../../features/cart/cartSelectors'

import Cart from '../../svg/cart'

import styles from './styles.module.css'

export default function Navbar() {
  const cartCount = useSelector(selectCartCount)
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <nav>
        <LinkComponent to="/" text='Home' />
        <LinkComponent to="/shop" text='Shop' />
        <LinkComponent to="/about" text='About' />
      </nav>
      <SearchBar />
      <Link className={`${styles.link} ${styles.itemContainer}`} to="/cart">
        <Cart />
        <span className={styles.cartCount}>{cartCount}</span>
      </Link>
    </div>
  );
}

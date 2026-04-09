import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../../features/cart/cartSlice';

import DeleteIcon from '../../svg/delete';
import Decrease from '../../svg/decrease';
import Increase from '../../svg/increase';

import styles from "./styles.module.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity, stock } = product;

  return (
    <div className={styles.productCard} key={id}>
      <div className={styles.productImage}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${(price * quantity).toFixed(2)}</p>

        <div className={styles.btnCartContainer}>
          <div className={styles.cartBnt}>
            <Decrease onClick={() => dispatch(decrementQty(product))} />
            <span className={styles.cartCounter}>{quantity}</span>
            <Increase onClick={() => stock > quantity && dispatch(incrementQty(product))} />
          </div>
          <DeleteIcon onClick={() => dispatch(removeFromCart(product))} />
        </div>
      </div>
    </div>
  );
};

export default Product;
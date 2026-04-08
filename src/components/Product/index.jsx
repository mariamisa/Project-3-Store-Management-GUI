import { useDispatch } from 'react-redux';
import Button from '../Button';
import { addToCart } from '../../features/cart/cartSlice';
import styles from "./styles.module.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  
  const { id, name, category, price, stock, image } = product;

  return (
    <div className={styles.productCard} key={id}>
      <div className={styles.productImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productCategory}>{category}</p>
        <p className={styles.productPrice}>${price}</p>
        <p className={styles.productStock}>In stock: {stock}</p>
        <Button handelClick={() => dispatch(addToCart(product))} text="Add to Cart" />
      </div>
    </div>
  );
};

export default Product;
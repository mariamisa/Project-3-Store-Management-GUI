import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Toast from '../Toast'
import { addToCart } from '../../features/cart/cartSlice';
import { selectCartItems } from '../../features/cart/cartSelectors';
import styles from "./styles.module.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const [toast, setToast] = useState()

  const { id, name, price, stock, image } = product;


  const handelAddToCart = () => {
    const cartProduct = cartItems.find(el => el.id === id)
    if (stock > (cartProduct?.quantity || 0)) {
      dispatch(addToCart(product))
      setToast({ msg: "Item added successfully", status: "success" })
    } else {
      setToast({ msg: "You cant's add more of this item to cart", status: "warning" })
    }
  }

  return (
    <div className={styles.productCard} key={id}>
      <div className={styles.productImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${price}</p>
        <p className={styles.productStock}>In Stock: {stock}</p>

        <Button handelClick={handelAddToCart}
          text="Add to Cart" />
        {toast && (
          <Toast
            message={toast.msg}
            type={toast.status}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
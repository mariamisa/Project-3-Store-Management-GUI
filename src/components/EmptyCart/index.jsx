import styles from './styles.module.css';

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <h2>Your cart is empty 😢</h2>
      <p>Add some products to see them here!</p>
    </div>
  );
};

export default EmptyCart;
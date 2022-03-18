import styles from "../styles/Components/MobileCheckoutProducts.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import productQty from "../Store/actions/productQty";
import removeFromCart from "../Store/actions/removeFromCart";

const MobileCheckoutProduct = ({ product }) => {
   const dispatch = useDispatch();

   if (product.qty === 0) {
      dispatch(removeFromCart(product.id));
   }

   return (
      <div key={product.id} className={styles.m__CheckoutProduct}>
         <Image
            src={product.image}
            objectFit="contain"
            width={170}
            height={170}
            alt=""
         />

         <div className={styles.productInfo}>
            <p className={styles.productTitle}>{product.title}</p>

            <div className={styles.flex}>
               <p className={styles.productPrice}>Prix : {product.price} $</p>
               <p className={styles.total}>
                  Total : $ {(product.price * product.qty).toFixed(2)}
               </p>
            </div>

            <div className={styles.flex}>
               <div className={styles.counter}>
                  <button
                     onClick={() =>
                        dispatch(
                           productQty({
                              id: product.id,
                              updatedQty: product.qty + 1,
                           })
                        )
                     }
                  >
                     +
                  </button>
                  <p>{product.qty}</p>
                  <button
                     onClick={() =>
                        dispatch(
                           productQty({
                              id: product.id,
                              updatedQty: product.qty - 1,
                           })
                        )
                     }
                  >
                     -
                  </button>
               </div>
               <p
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeFromCart(product.id))}
               >
                  remove
               </p>
            </div>
         </div>
      </div>
   );
};

export default MobileCheckoutProduct;

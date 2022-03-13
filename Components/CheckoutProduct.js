import Image from "next/image";
import styles from "../styles/Checkout.module.scss";
import { useDispatch } from "react-redux";
import productQty from "../Store/actions/productQty";
import removeFromCart from "../Store/actions/removeFromCart";

const CheckoutProduct = ({ product }) => {
   const dispatch = useDispatch();

   return (
      <tr key={product.id}>
         <td className={styles.checkoutProduct}>
            <Image
               src={product.image}
               objectFit="contain"
               width={200}
               height={200}
            />

            <div className={styles.checkoutProductInfo}>
               <h4 className={styles.title}>{product.title}</h4>
               <p className={styles.category}>{product.category}</p>
               <p onClick={() => dispatch(removeFromCart(product.id))}>
                  remove
               </p>
            </div>
         </td>

         <td>
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
         </td>

         <td>
            <p className={styles.price}>$ {product.price}</p>
         </td>

         <td>$ {(product.price * product.qty).toFixed(2)}</td>
      </tr>
   );
};

export default CheckoutProduct;

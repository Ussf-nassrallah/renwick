import React, { useState } from "react";
import Image from "next/image";
import * as actioneTypes from "../Store/actions/types";
import styles from "../styles/Checkout.module.scss";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ product }) => {
    const [input, setInput] = useState(product.qty);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        let value = e.target.value;
        setInput(value);
        dispatch({
            type: actioneTypes.ADJUST_ITEM_QTY,
            payload: value,
        });
    };

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
                    <p>remove</p>
                </div>
            </td>

            <td>
                <input
                    id="number"
                    type="number"
                    value={input}
                    onChange={onChangeHandler}
                />
            </td>

            <td>
                <p className={styles.price}>$ {product.price}</p>
            </td>

            <td>$ {product.price * input}</td>
        </tr>
    );
};

export default CheckoutProduct;

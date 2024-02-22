import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cross from '../../assets/images/CartMedia/cross.png';
import { addProductToCart, dropProductFromCart } from '../../slices/cartSlice';
import style from '../Cart/Cart.module.css';

export const Cart = () => {
    const cartProducts = useSelector(state => state.cart.products);
    const totalCount = useSelector(state => state.cart.totalCount);
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    console.log(cartProducts)
    console.log(totalCount)
    console.log('product.discount_price:', products.discount_price);
    console.log('product.count:', products.count);   

    // Обработчик события для удаления товара из корзины
    const handleRemoveFromCart = (productId, price) => {
        dispatch(dropProductFromCart({ id: productId, price: price }));
    };

    const handleAddToCart = (productId,price) => {
        dispatch(addProductToCart({id: productId, price: price}))
    }

    // Проверяем, является ли cartProducts массивом и содержит ли он товары
    if (!Array.isArray(cartProducts) || cartProducts.length === 0) {
        return <div className={style.emptyCart}>Cart is empty</div>;
    }


    return (
        <section className={style.CartWrapper}>
            <div className={style.cartProductWrapper}>
                {cartProducts.map(product => {
                    const totalPrice = product.price * product.count;
                    const discountedTotalPrice = product.discount_price != null ? product.discount_price * product.count : 'yo';

                    return (
                        <div key={product.id} className={style.cartProduct}>
                            <img className={style.cartImgSize} src={`http://localhost:3333${product.image}`} alt={product.title} />
                            <div className={style.productCardWrapper}>
                                <h3 className={style.productCardTitle}>{product.title}</h3>
                                <div className={style.countPlusPriceWrapper}>
                                    <div className={style.btnWrapper}>
                                        <button className={style.btnMinus} onClick={() => handleRemoveFromCart(product.id,product.price)}>-</button>
                                        <p className={style.count}>{product.count}</p>
                                        <button className={style.btnPlus} onClick={() => handleAddToCart(product.id,product.price)}>+</button>
                                    </div>
                          <div className={style.salePriceWrapper}>
                                    <p className={style.realPrice}>${totalPrice}</p>
                                    <p>{discountedTotalPrice}</p>
                                
                                </div>
                                </div>
                            </div>
                            <button className={style.crossBtn} onClick={() => handleRemoveFromCart(product.id, product.price)}>
                                <img className={style.btnCroosImg} src={cross} alt="cross" />
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className={style.totalCount}>Total Count: {totalCount} </div> {/* Отображаем totalCount */}
        </section>
    )
}

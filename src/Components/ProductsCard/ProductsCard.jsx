import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductsCard.module.css";

export const ProductsCard = ({ product }) => {
  return (
    
    <Link
      key={product.id}
      className={style.saleCard}
      to={`/single-product/${product.id}`}
    >
  {
  product.discont_price && product.price &&
  <div className={style.saleBlock}> 
    -{Math.round(((product.price - product.discont_price) / product.price) * 100)}%
  </div>
}

      <img
        className={style.saleImg}
        src={`http://localhost:3333${product.image}`}
        alt={product.title}
      />
      <h2 className={style.saleCardText}>{product.title}</h2>

      <div className={style.salePriceWrapper}>
        <p className={style.realPrice}>${product.discont_price ?? product.price}</p>

        {product.discont_price ? (
          <p className={style.firstPrice}>${product.price}</p>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductsCard;
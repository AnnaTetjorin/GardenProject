import React, { useEffect } from "react";
import { BreadCrumbs } from "../Components/BreadCrumbs/BreadCrumbs";
import { ProductsList } from "../Components/ProductsList/ProductsList";
import { AllProductsFilter } from "../hooks/useFilterAllProducts";

export const ProductsPage = ({isLoading}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (isLoading) {
    return (
      <div className={style.loader}>
        <div className={style.loaderText}>Loading...</div>
        <div className={style.loaderAnimation}></div>
      </div>
    );
  }
  return (
    <main>
      <BreadCrumbs />
      <AllProductsFilter />
      <ProductsList title={"All Products"} />
    </main>
  );
};

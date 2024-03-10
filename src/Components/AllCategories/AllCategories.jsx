import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../slices/apiSlice";
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import style from "./AllCategories.module.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AllCategories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery(); //подгружаем данные из редакс слайса
  const theme = useSelector((state) => state.theme.theme); //получаем состояние темы

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (error) {
    return <h2 className={style.error}>"Error fetching date:"</h2>;
  }
  if (isLoading) {
    return <h2 className={style.error}>Loading....</h2>;
  }

  return (
    <section
      className={`${style.allCategoriesWrapper} ${theme === "light" ? style.dark : style.light
        }`}
    >
      <BreadCrumbs data={data} />
      <h2 className={style.categoriesWrapperText}>Categories</h2>
      <section className={style.categoryCardsWrapper}>
        {data.map((category) => (
          <Link
            key={category.id}
            className={style.categoryCard}
            to={`/categories/${category.id}`}
          >
            <img
              className={style.categoryImg}
              src={`http://localhost:3333${category.image}`}
              alt={category.title}
            />
            <h2
              className={`${style.categoryCardText} ${theme === "light" ? style.dark : style.light
                }`}
            >
              {category.title}
            </h2>
          </Link>
        ))}
      </section>
    </section>
  );
};

import React, { Fragment, useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext";
import Electronic from "./Electronics";
import Skincare from "./Skincare";
import Food from "./Food";

const ProductsBody = () => {
    let { fetchedProducts, fetchProducts, flag } = useContext(ProductContext);
    console.log('component is getting called')
    let electronicsProducts = fetchedProducts.filter(
        (prod) => prod.productCatagory === "electronic"
    );
    let foodProducts = fetchedProducts.filter((prod) => prod.productCatagory === "food");
    let skincareProducts = fetchedProducts.filter(
        (prod) => prod.productCatagory === "skincare"
    );

    console.log('electronic :=', electronicsProducts)
    console.log('skincare :=', skincareProducts)
    console.log('food :=', foodProducts)

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [flag]);
    return (

        <>
            <Electronic prod={electronicsProducts} />;

            <Skincare prod={skincareProducts} />;

            <Food prod={foodProducts} />;
        </>

    );
};

export default ProductsBody;

import { useState } from "react";
import ProductContext from "./ProductContext";
import axios from 'axios'

const ProductContextProvider = (props) => {
    const [fetchedProducts, setFetchedProducts] = useState([])
    const [flag, setFlag] = useState(false)
    const postProduct =async(product)=>{
       
        try {
            await axios.post('http://localhost:5000/postproduct',{...product})

            console.log('product successfully posted')
            setFlag(!flag)
        } catch (error) {
            console.log(error)
            
        }
    }


    const fetchProducts=async()=>{

        try {
            const result = await axios.get('http://localhost:5000/fetchproducts')
           
            setFetchedProducts(result.data)
        } catch (error) {
            console.log(error)
            
        }
    }

    const deleteHandler =async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/delete/${id}`)
            console.log('product deleted')
            setFlag(!flag)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <ProductContext.Provider value={{fetchedProducts,postProduct,fetchProducts,flag,deleteHandler}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider
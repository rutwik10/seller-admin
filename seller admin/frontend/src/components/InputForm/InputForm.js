
import React, { Fragment, useState , useContext} from "react";
import ProductContext from "../../context/ProductContext";
const InputForm = (props) => {
  const [updatedState, updateTheState] = useState({
 
    productTitle: "",
    productCatagory: "",
    productPrice: "",
  });
  const {postProduct} = useContext(ProductContext)



  const productPriceChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      productPrice: e.target.value,
    });
  };

  const productTitleChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      productTitle: e.target.value,
    });
  };
  const productCatagoryChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      productCatagory: e.target.value,
    });
  };

  const getAllInputes = (e) => {
    e.preventDefault();
    const allInputs = {
    
      productTitle: updatedState.productTitle,
      productCatagory: updatedState.productCatagory,
      productPrice: updatedState.productPrice,
    };

    postProduct(allInputs)

    updateTheState({
  
      productTitle: "",
      productCatagory: "",
      productPrice: "",
    });
  };

  return (
    <Fragment>
      <form
        onSubmit={getAllInputes}
        className="d-flex justify-content-between p-5  "
      >
      
     
        <input
          onChange={productTitleChangeHandler}
          value={updatedState.productTitle}
          type="text"
          placeholder="Product Title..."
        ></input>

           <input
          onChange={productPriceChangeHandler}
          value={updatedState.productPrice}
          type="number"
          placeholder="Product Price..."
        ></input>
        <select
          onChange={productCatagoryChangeHandler}
          value={updatedState.productCatagory}
         
        >
          <option>None</option>
          <option>electronic</option>
          <option>skincare</option>
          <option>food</option>
        </select>
        <input type="submit" className="btn btn-success" />
      </form>
    </Fragment>
  );
};

export default InputForm;
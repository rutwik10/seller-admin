import React, { Fragment,useContext } from 'react'
import ProductContext from '../../context/ProductContext'

const Food = (props)=>{
      
    const {deleteHandler} = useContext(ProductContext)
  
    const deleteClickHandler = (id)=>{
      deleteHandler(id)
    }
    return(
        <Fragment>
            <h1>Food Catagory </h1>
            <div style={{ marginLeft: '25%' }}>
            <div className='d-flex justify-content-around border rounded w-50 p-5 orderDiv' >
                      {props.prod.map((product)=>{
                       
                            return <>
                           <li  key={product.id}>
                           <span>{product.id} </span>
                            <span>{product.productTitle} </span>
                            <span>{product.productPrice}</span>
    
                            <button onClick={()=>deleteClickHandler(product.id)} >Delete</button>
                           </li>
                            </>
                          }
                        )}
                    </div>
            </div >
        </Fragment>
    )
}

export default Food
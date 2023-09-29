import React from 'react'
import InputForm from './components/InputForm/InputForm'
import ProductContextProvider from './context/ProductContextProvider'
import ProductsBody from './components/products/ProductsBody'

const App = () => {
  return (
    <ProductContextProvider>
      <InputForm/>
      <ProductsBody/>
    </ProductContextProvider>
  )
}

export default App
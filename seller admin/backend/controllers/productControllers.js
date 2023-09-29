const Product = require('../models/product')

module.exports = productController = {
    postProduct:async(req,res,next)=>{
      
       try {
      const result =   await Product.create({
            productTitle:req.body.productTitle,
            productPrice:Number(req.body.productPrice),
            productCatagory:req.body.productCatagory
        })
       
        res.status(200).send('your product has been created successfully')
       } catch (error) {
        // console.log(error)
        res.status(500).send('sorry your product can not be posted in server')
       }
    },

    fetchProducts:async(req,res,next)=>{

        try {
            const data = await Product.findAll();

            res.status(200).send(data)
        } catch (error) {
            console.log(error)
            
        }
    },
    deleteProduct:async(req,res,next)=>{
        try {
            await Product.destroy({where:{id:req.params.id}})
            res.status(200).send('product deleted successfully')
        } catch (error) {
            console.log(error)
            res.status(500).send('sorry product not deleted')
        }
    }
}
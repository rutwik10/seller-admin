const express = require('express');
const cors = require('cors')
const router = require('./router/productRoutes');
const sequelize = require('./utils/database');

const app = express();

app.use(cors())
app.use(express.json())
app.use(router)


sequelize.sync().then((res)=>{
    app.listen(5000,()=>{
        console.log('server started....')
    })
}).catch(error =>console.log(error))
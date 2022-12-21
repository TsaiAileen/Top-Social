const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes')   // ./routes底下的index.js是默認的所以可以省略不寫

app.use(cors())            //中間件必須先跑
app.use(express.json())    //解析json文件
app.use('/api',router)

app.listen(80, ()=>{
  console.log('Server is running on http://127.0.0.1:80');
})
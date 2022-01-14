require('dotenv').config()
const mysql=require('mysql')

const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:'dian',
    port:'3306'
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('connected')
})


module.exports={db}
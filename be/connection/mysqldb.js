const mysql=require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'Scherzie',
    password:'ngapainhayo',
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
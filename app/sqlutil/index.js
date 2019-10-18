// import sql from 'mssql'
const sql = require('mssql')
const se = require('../../secret/index')


const connectDB = async () => {
    // console.log('----------------------start connect', config)
    let res
    try{
    let pool = await sql.connect(se.mssqlConfig)
    // await sql.connect('mssql://test:test123@localhost/test')
    
    res = await pool.request().query('select * from [test].[dbo].[Product]')
    // res = await sql.query('select * from Product')

    }
    catch(e) {
        console.log('----------------------------connect error', e)
    }

    console.log('-------------------------------res is', res)
}

module.exports =  {
     connectDB,
}
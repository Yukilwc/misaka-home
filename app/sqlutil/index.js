const sql = require('mssql')
const se = require('../../secret/index')
// 全局使用的连接池
function poolError(err) {
    console.log('---------------------------mssql connect error', err)
}
const pool = new sql.ConnectionPool(se.mssqlConfig, poolError)
pool.close()
/**
 * 建立一次连接校验config
 */
pool.connect((err) => {
    console.log('pool connect err', err)
})

const select = async (sqlStr) => {
    try {
        res = await pool.request().query(sqlStr)
        console.log('query completed')
        return res
    }
    catch (e) {
        console.log('----------------------------query error', e)
        // throw new  Error(e)       
        return Promise.reject(e)
    }

}

const insert = async (sqlStr, params) => {
 let res =   pool.request().input('add_time', sql.DateTime, new Date())
 console.log()
}

module.exports = {
    pool,
    sql,
}

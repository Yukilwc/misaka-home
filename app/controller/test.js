// import sqlUtil from '../sqlutil/index'
const sql = require('../sqlutil/index')
const {generateToken, parseToken} = require('../service/auth/token')
const Controller = require('egg').Controller;


class TestController extends Controller {
  async index() {
    const { ctx } = this;
    // let sqlStr = "insert into [test].[dbo].[user](id,name,level,role,add_time) values ('00000002','liwenchao','1','owner',@create_date)"
    // await sql.pool.request().input('create_date', sql.sql.DateTime, new Date() ).query(sqlStr)
    let token = generateToken()
    parseToken(token)
    ctx.body = 'hi, egg';
  }
}

module.exports = TestController;

// import sqlUtil from '../sqlutil/index'
const sqlUtil = require('../sqlutil/index')
const Controller = require('egg').Controller;


class TestController extends Controller {
  async index() {
    const { ctx } = this;
    // let res = await sqlUtil.select('select * from [test].[dbo].[user]')
    // let res = await sqlUtil.select("insert into [test].[dbo].[user](id,name,level,role,add_time) values ('00000001','liwenchao','1','admin',getdate())")
    // console.log('test res', res)
    await sqlUtil.insert()
    ctx.body = 'hi, egg';
  }
}

module.exports = TestController;

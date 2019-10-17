// import sqlUtil from '../sqlutil/index'
const sqlUtil = require('../sqlutil/index')
const Controller = require('egg').Controller;


class TestController extends Controller {
  async index() {
    const { ctx } = this;
    sqlUtil.connectDB()
    ctx.body = 'hi, egg';
  }
}

module.exports = TestController;

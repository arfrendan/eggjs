const Controller = require('egg').Controller;

class NewsController extends Controller {
    async show() {
      const ctx = this.ctx;
      const weight = await ctx.service.sql.weight(25)
      this.ctx.response.body = weight;
    }
  }
module.exports = NewsController;
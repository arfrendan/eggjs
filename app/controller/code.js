const Controller = require('egg').Controller;

class CodeController extends Controller {
    async show() {
        const  ctx = this.ctx;
        var code = ctx.request.body
        
        ctx.logger.info('some request data: %j', code);
        

        var newcode = await ctx.service.code.reg(code['code'])
        ctx.body = { 'code':newcode };
        ctx.logger.info('%j', ctx.body);
        ctx.status = 201;

    }
  }
module.exports = CodeController;
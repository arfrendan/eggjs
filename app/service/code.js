const Service = require('egg').Service;
class CodeService extends Service {
    async reg(code) {
      const newcode = 'code:'+code 
      return newcode;
    }
}
  
module.exports = CodeService;
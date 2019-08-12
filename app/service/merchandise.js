const Service = require('egg').Service;
class MerchandiseService extends Service {
    async weight(uid) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const weight = await this.app.mysql.get('MERCHANDISE', { M_ID: uid });
      return { weight };
    }
  }
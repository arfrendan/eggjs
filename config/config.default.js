

module.exports = {
  security: {
    csrf: {
      enable: false,
    },
  },

  key : '123456',

  mysql:{
    client: {
      // host
      host: '192.168.0.110',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'test',
    },
  }
};
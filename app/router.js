'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/code', controller.news.list);
  router.post('/barcode', controller.code.show);
  router.get('/show', controller.show.show);
};
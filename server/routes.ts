import * as express from 'express';

import PersianaCtrl from './controllers/persiana';
import UserCtrl from './controllers/user';
import Persiana from './models/persiana';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const persianaCtrl = new PersianaCtrl();
  const userCtrl = new UserCtrl();

  // Persianas
  router.route('/persianas').get(persianaCtrl.getAll);
  router.route('/persianas/count').get(persianaCtrl.count);
  router.route('/persiana').post(persianaCtrl.insert);
  router.route('/persiana/:id').get(persianaCtrl.get);
  router.route('/persiana/:id').put(persianaCtrl.update);
  router.route('/persiana/:id').delete(persianaCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

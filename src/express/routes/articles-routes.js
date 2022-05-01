'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/add`, (req, res) => res.send(`/articles/add`));
articlesRouter.get(`/category/:id`, (req, res) => res.send(`/articles/category/${req.params[`id`]}`));
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`articles/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.send(`articles/:id`));

module.exports = articlesRouter;
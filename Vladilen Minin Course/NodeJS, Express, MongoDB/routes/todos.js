const {Router} = require('express')
const Todo = require('../models/todo')

const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({})
  res.render("index", {
    title: "Todos List",
    isIndex: true,
    todos,
  });
})

router.get('/create', (req, res) => {
  res.render("create", {
    title: "Create Todo",
    isCreate: true,
  });
})

router.post("/create", async (req, res) => {
  const todos = new Todo({
    title: req.body.title,
  });
  await todos.save();
  res.redirect("/");
});

module.exports = router
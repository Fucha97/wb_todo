const { todosModel } = require('../../models/todos');

module.exports.todosGetController = async (req, res) => {
  const todos = await todosModel.value();
  res.status(200).json({
    additionalErrors: null,
    data: {todos},
    error: false,
    errorText: '',
});
};

module.exports.todosDeleteController = async (req, res) => {

  const id = req.body.id;
  await todosModel.remove({id}).write();
  res.status(200).json({
    additionalErrors: null,
    data: { id },
    error: false,
    errorText: '',
});
};

module.exports.todosPostController = async (req, res) => {
  const currentDate =  new Date();
  const newTodo = {
    id: new Date().getTime().toString(),
      title: req?.body?.title,
      isComplete: false,
      createdAt: currentDate.getDate() + '/' + (currentDate.getMonth()+1) + '/' + currentDate.getFullYear(),
      description: req?.body?.description
  }
  await todosModel.push(newTodo).write();
  res.status(200).json({
    additionalErrors: null,
    data: { newTodo },
    error: false,
    errorText: '',
});
};

module.exports.todosPutController = async (req, res) => {
  const {
    updatedTodo
  } = req.body;

  await todosModel.find( {id : updatedTodo.id }).assign(updatedTodo).write();
  res.status(200).json({
    additionalErrors: null,
    data: { updatedTodo },
    error: false,
    errorText: '',
});
};

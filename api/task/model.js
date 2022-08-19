const db = require("../../data/dbConfig.js");
const mappers = require('../../data/helpers/mappers');

module.exports = {
  get,
  insert
};

function get(id) {
    let query = db('tasks');
  
    if (id) {
      return query
        .where('task_id', id)
        .first()
        .join('projects', 'tasks.project_id', '=', 'projects.project_id')
        .then((task) => {
          if (task) {
            return mappers.taskToBody(task)
          } else {
            return null;
          }
        });
    } else {
      return query.join('projects', 'tasks.project_id', '=', 'projects.project_id').then((tasks) => {
        return tasks.map((task) => mappers.taskToBody(task));
      });
    }
  }

function insert(task) {
    const mappedTask = mappers.bodyToTask(task)
  return db("tasks")
    .insert(mappedTask)
    .then(([id]) => get(id));
}

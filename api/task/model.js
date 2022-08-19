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
        .then(async(task) => {
          if (task) {
            const project = await getTaskProject(task.project_id)
            return {...mappers.taskToBody(task), ...project};
          } else {
            return null;
          }
        });
    } else {
      return query.then((tasks) => {
        return tasks.map(async(task) => {
          const project = await getTaskProject(task.project_id)
          return {...mappers.taskToBody(task), ...project};
        });
      });
    }
  }

function insert(task) {
    const mappedTask = mappers.bodyToTask(task)
  return db("tasks")
    .insert(mappedTask)
    .then(([id]) => get(id));
}

function getTaskProject(projectId) {
  return db("projects").select('project_name', 'project_description')
    .where("project_id", projectId).first()
    .then(project => project);
}

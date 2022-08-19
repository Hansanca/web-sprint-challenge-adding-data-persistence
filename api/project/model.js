const db = require("../../data/dbConfig.js");
const mappers = require('../../data/helpers/mappers');

module.exports = {
  get,
  insert
};

function get(id) {
    let query = db('projects');
  
    if (id) {
      return query
        .where('project_id', id)
        .first()
        .then((project) => {
          if (project) {
            return mappers.projectToBody(project);
          } else {
            return null;
          }
        });
    } else {
      return query.then((projects) => {
        return projects.map((project) => mappers.projectToBody(project));
      });
    }
  }

function insert(project) {
    const mappedProject = mappers.bodyToProject(project)
  return db("projects")
    .insert(mappedProject)
    .then(([id]) => get(id));
}

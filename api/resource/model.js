const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert
};

function get(id) {
    let query = db('resources');
  
    if (id) {
      return query
        .where('resource_id', id)
        .first()
        .then((resource) => {
          if (resource) {
            return resource;
          } else {
            return null;
          }
        });
    } else {
      return query.then((resources) => {
        return resources;
      });
    }
  }

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => get(id));
}

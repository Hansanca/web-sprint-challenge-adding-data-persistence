module.exports = {
  intToBoolean,
  booleanToint,
  projectToBody,
  taskToBody,
  bodyToProject,
  bodyToTask
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function projectToBody(project) {
  return {
    ...project,
    project_completed: intToBoolean(project.project_completed),
  };
}

function taskToBody(task) {
    return {
      ...task,
      task_completed: intToBoolean(task.task_completed),

    };
}

function bodyToProject(project) {
  return {
    ...project,
    project_completed: booleanToint(project.project_completed),
  };
}

function bodyToTask(task) {
  return {
    ...task,
    task_completed: booleanToint(task.task_completed),
  };
}

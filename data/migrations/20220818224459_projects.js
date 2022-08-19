/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("projects", function(projects) {
        projects.increments("project_id");

        projects.string("project_name", 128).notNullable();
        projects.text("project_description").nullable();
        projects.integer("project_completed").defaultTo(0);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
};

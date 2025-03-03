/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("resources", function(resources) {
        resources.increments("resource_id");

        resources.string("resource_name", 128).notNullable().unique();
        resources.text("resource_description").nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources");
};

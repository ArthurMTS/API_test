"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return knex.schema
        .createTable("users", function (table) {
        table.increments("id");
        table.string("name", 255).notNullable();
        table.integer("age").notNullable();
        table.string("email", 255).notNullable();
        table.string("password", 255).notNullable();
    });
}
exports.up = up;
;
function down(knex) {
    return knex.schema
        .dropTable("users");
}
exports.down = down;
;

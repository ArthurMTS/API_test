"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.development = void 0;
exports.development = {
    client: "sqlite3",
    connection: {
        filename: "./src/database/dev.sqlite3"
    },
    migrations: {
        directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
};

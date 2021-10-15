const db_ = require("dbdjs.db");
const db = new db_.Database({
    path: "data/",
    tables: [{
        name: "storage",
    }]
});

db.once("ready", () => {
    console.log("Database ready!");
});

db.connect();
module.exports = db
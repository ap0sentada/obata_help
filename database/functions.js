module.exports = (db) => {
    global.getData = async function(user_id, key) {
        const fs = require('fs')
        const bases = JSON.parse(fs.readFileSync('./database/base_values.json', "utf-8"))
        let x = await db.get("storage", `${user_id}_${key}`);
        if (x === undefined) x = eval(`bases.${key}`);
        else x = x.value;
        if (x === undefined) return `${key} não foi préviamente definido em \`base_values.json\``
        return x
    }
    global.setData = async function(user_id, key, value) {
        await db.set("storage", `${user_id}_${key}`, value);
    }
}

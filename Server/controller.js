// module.exports = {

//     getChest: (req, res) => {
//         const chestLifts = ["Bench Press", "Pushup"]
//     }
// }

require("dotenv").config();
const Sequelize = require("sequelize");

// this is the same syntax as const CONNECTION_STRING = process.env.CONNECTION_STRING
const {CONNECTION_STRING} = process.env //destructuring CONNECTION_STRING ffrom out .env file

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

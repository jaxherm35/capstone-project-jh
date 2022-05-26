require("dotenv").config();
const req = require("express/lib/request");
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

module.exports = {
    // getAll: (req, res) => {
    //     sequelize.query(`SELECT * FROM all_table`)
    //     .then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // },


    getChest: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type = 'Chest'`)
            .then((dbRes) => {
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getArms: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM ${req.query}`)
            .then((dbRes) => {   //try from ${req.query}
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

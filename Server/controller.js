require("dotenv").config();
// const req = require("express/lib/request");
const Sequelize = require("sequelize");


const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getChest: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Chest'`)
            .then((dbRes) => {
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getArms: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type = 'Arms'`)
            .then((dbRes) => {   //try from ${req.query}
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getBack: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Back'`)
            .then((dbRes) => {
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getLegs: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Legs'`)
            .then((dbRes) => {
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getCore: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Core'`)
            .then((dbRes) => {
                res.status(200).send(dbRes)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


    // getAll: (req, res) => {
    //     sequelize.query(`SELECT * FROM all_table`)
    //     .then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // },
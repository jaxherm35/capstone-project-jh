require("dotenv").config();
const { default: axios } = require("axios");
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

const goals = []


module.exports = {
    getChest: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Chest'`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getArms: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type = 'Arms'`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getBack: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Back'`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getLegs: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Legs'`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getCore: (req, res) => {
        sequelize.query(`SELECT lift_name, type FROM all_table WHERE type ='Core'`)
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    addGoal: (req, res) => {
        const {newGoal} = req.body

        goals.push(newGoal)
        res.status(200).send('New Goal Added')
    },

    // deleteGoal: (req, res) => {
    //     const {id} = req.params

    //     if(goals[+id]) {
    //         goals.splice(id, 1)
    //     } else {
    //         res.status(200).send('Goal deleted successfully')
    //     }
    //         res.status(404).send('No goals found')
    // },

    getGoals: (req, res) => {
        res.status(200).send(goals)
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
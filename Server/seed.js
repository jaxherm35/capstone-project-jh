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


module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists all_table;
        // drop table if exists chest_table;
        // drop table if exists arms_table;
        // drop table if exists back_table;
        // drop table if exists legs_table;
        // drop table if exists core_table;

        CREATE TABLE all_table (
            lift_id SERIAL PRIMARY KEY,
            lift_name VARCHAR(100),
            type VARCHAR(20)
        );
        
        // CREATE TABLE chest_table (
        //     lift_id INTEGER REFERENCES all_table (lift_id),
        //     chest_id SERIAL PRIMARY KEY,
        //     lift_name VARCHAR(100)
        // );

        // CREATE TABLE arms_table (
        //     lift_id INTEGER REFERENCES all_table (lift_id),
        //     arms_id SERIAL PRIMARY KEY,
        //     lift_name VARCHAR(100)
        // );

        // CREATE TABLE back_table (
        //     lift_id INTEGER REFERENCES all_table (lift_id),
        //     back_id SERIAL PRIMARY KEY,
        //     lift_name VARCHAR(100)
        // );

        // CREATE TABLE legs_table (
        //     lift_id INTEGER REFERENCES all_table (lift_id),
        //     legs_id SERIAL PRIMARY KEY,
        //     lift_name VARCHAR(100)
        // );

        // CREATE TABLE core_table (
        //     lift_id INTEGER REFERENCES all_table (lift_id),
        //     core_id SERIAL PRIMARY KEY,
        //     lift_name VARCHAR(100)
        // );

        INSERT INTO all_table (lift_name, type)
        VALUES ('Bench', 'Chest'),
        ('Squats', 'Legs'),
        ('Curls', 'Arms'),
        ('Rows', 'Back'),
        ('Crunches', 'Core');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },

    getAll: (req, res) => {
        sequelize.query(`SELECT * FROM all_table`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0]);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
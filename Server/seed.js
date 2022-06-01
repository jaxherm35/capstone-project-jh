require("dotenv").config();
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
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists all_table;

        CREATE TABLE all_table (
            lift_id SERIAL PRIMARY KEY,
            lift_name VARCHAR(100),
            type VARCHAR(20)
        );
        
        INSERT INTO all_table (lift_name, type)
        VALUES ('Bench', 'Chest'),
        ('Squats', 'Legs'),
        ('Curls', 'Arms'),
        ('Rows', 'Back'),
        ('Crunches', 'Core'),
        ('Flys', 'Chest'),
        ('Incline Bench', 'Chest'),
        ('Incline Flys', 'Chest'),
        ('Decline Bench', 'Chest'),
        ('Chest Press with Plate', 'Chest'),
        ('Skull Crushers', 'Arms'),
        ('Dips', 'Arms'),
        ('Tricep Pulldowns', 'Arms'),
        ('Overhead Tricep Extensions', 'Arms'),
        ('Diamond Pushups', 'Arms'),
        ('Bent Over Rows', 'Back'),
        ('Lat Pulldowns', 'Back'),
        ('Shrugs', 'Back'),
        ('Inverted Row', 'Back'),
        ('Bent Over Reverse Flys', 'Back'),
        ('Cable Rows', 'Back'),
        ('EZ-Curls', 'Arms'),
        ('Reverse Curls', 'Arms'),
        ('Hammer Curls', 'Arms'),
        ('Concentration Curls', 'Arms'),
        ('Cross Body Curls', 'Arms'),
        ('EZ Incline Curls', 'Arms'),
        ('Arnold Press', 'Arms'),
        ('Military Press', 'Arms'),
        ('Lateral Raises', 'Arms'),
        ('Front Raises', 'Arms'),
        ('Cuban Press', 'Arms'),
        ('Hang Cleans', 'Arms'),
        ('Cross Overs', 'Arms'),
        ('Front Squats', 'Legs'),
        ('Lunges', 'Legs'),
        ('Romanian Deadlifts', 'Legs'),
        ('Quad Extensions', 'Legs'),
        ('Hamstring Curls', 'Legs'),
        ('Calf Raises', 'Legs'),
        ('Single Leg Squats', 'Legs'),
        ('Goblet Squats', 'Legs'),
        ('Jump Squats', 'Legs'),
        ('Single Leg Raise on Box', 'Legs'),
        ('Power Cleans', 'Legs'),
        ('Deadlifts', 'Legs'),
        ('Knees to Elbows', 'Core'),
        ('Frog Crunches', 'Core'),
        ('Bicycles', 'Core'),
        ('Oblique Crunches', 'Core'),
        ('Flutter Kicks', 'Core'),
        ('Jackknives', 'Core'),
        ('Foot Raises Side to Side', 'Core'),
        ('Plank', 'Core'),
        ('Side Plank', 'Core'),
        ('Cross Sit Up', 'Core'),
        ('Russian Twists', 'Core'),
        ('Penguins', 'Core'),
        ('V Up', 'Core');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
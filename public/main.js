console.log('connected')

const baseURL = `http://localhost:5432`


function makeCard(all_table) {
    let list = document.createElement('ul')
    list.classList.add('newCard')
    all_table.forEach(lift => {
        const li = document.createElement('li')
        li.textContent = lift.lift_name
        list.appendChild(li)
    })
    return list
}


function getChest() {
    axios.get(`${baseURL}/all_table/chest`)
    .then(res => {        
            const newCard = makeCard(res.data)
            document.getElementById('chestLifts').appendChild(newCard) 
            console.log(newCard)      
    })
    .catch(err => console.log(err))
}
document.getElementById("Chest").addEventListener('click', getChest);

function getArms() {
    axios.get(`${baseURL}/all_table/arms`)
    .then(res => {
        const newCard = makeCard(res.data)
        document.getElementById('armLifts').appendChild(newCard)
        console.log(newCard)
        
    })
    .catch(err => console.log(err))
}    
document.getElementById("Arms").addEventListener('click', getArms);

function getBack() {
    axios.get(`${baseURL}/all_table/back`)
    .then(res => {
        const newCard = makeCard(res.data)
        document.getElementById('backLifts').appendChild(newCard)
    })
    .catch(err => console.log(err))
}
document.getElementById("Back").addEventListener('click', getBack)

function getLegs() {
    axios.get(`${baseURL}/all_table/legs`)
    .then(res => {
        const newCard = makeCard(res.data)
        document.getElementById('legLifts').appendChild(newCard)
    })
    .catch(err => console.log(err))
}
document.getElementById("Legs").addEventListener('click', getLegs)

function getCore() {
    axios.get(`${baseURL}/all_table/core`)
    .then(res => {
        const newCard = makeCard(res.data)
        document.getElementById('coreLifts').appendChild(newCard)
    })
    .catch(err => console.log(err))
}
document.getElementById("Core").addEventListener('click', getCore)




const addGoalBtn = document.getElementById('addGoalBtn')
const addGoalInput = document.getElementById('addGoalInput')

const addGoal = () => {
    const newGoal = addGoalInput.value
    axios.post('http://localhost:5432/goals', {newGoal})
    .then(res => {
        console.log(newGoal)
        alert(res.data)
        addGoalInput.value = ''
    })
}
addGoalBtn.addEventListener('click', addGoal)

const deleteGoalBtn = document.getElementById('deleteGoalBtn')
const deleteGoalInput = document.getElementById('deleteGoalInput')

// const deleteGoal = () => {
//     axios.delete(`http://localhost:5432/goals/${deleteInput.value}`)
//     .then(res => {
//         alert(res.data)
//         deleteInput.value = ''
//     })
// }

// deleteGoalBtn.addEventListener('click', deleteGoal)


const getGoals= () => {
    axios.get('http://localhost:5432/goals')
    .then(res => {
        const data = res.data
        alert(data)
    })
}
document.getElementById("getGoalsBtn").addEventListener('click', getGoals)

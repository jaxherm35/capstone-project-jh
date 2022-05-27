console.log('connected')

const baseURL = `http://localhost:5432`

// const chestBtn = document.getElementById("Chest");
// const armBtn = document.getElementById("Arms")

// function getAll() {
//      axios.get('http://localhost:5432/all_table')
//      .then(res => {
//     const data = res.data;
//     alert(data);
//     });
//  }

function getChest() {
    axios.get(`${baseURL}/all_table/chest`)
    .then(res => {
        console.log(res.data)
    })
}
document.getElementById("Chest").addEventListener('click', getChest);

function getArms() {
    axios.get(`${baseURL}/all_table/arms`)
    .then(res => {
        console.log(res.data)
    })
}    
document.getElementById("Arms").addEventListener('click', getArms);

function getBack() {
    axios.get(`${baseURL}/all_table/back`)
    .then(res => {
        console.log(res.data)
    })
}
document.getElementById("Back").addEventListener('click', getBack)

function getLegs() {
    axios.get(`${baseURL}/all_table/legs`)
    .then(res => {
        console.log(res.data)
    })
}
document.getElementById("Legs").addEventListener('click', getLegs)

function getCore() {
    axios.get(`${baseURL}/all_table/core`)
    .then(res => {
        console.log(res.data)
    })
}
document.getElementById("Core").addEventListener('click', getCore)
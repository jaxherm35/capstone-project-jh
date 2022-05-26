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
    axios.get(`${baseURL}/all_table/?type='Chest'`)
    .then(res => {
        console.log(res.data)
    })
}
// chestBtn.addEventListener('click', getChest);
document.getElementById("Chest").addEventListener('click', getChest);

function getArms() {
    axios.get(`${baseURL}/all_table/?type='Arms'`)
    .then(res => {
        console.log(res.data)
    })
}    
// armBtn.addEventListener('click', getArms)
document.getElementById("Arms").addEventListener('click', getArms)
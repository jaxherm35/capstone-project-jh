// const chestBtn = document.getElementById('Chest');

const { default: axios } = require("axios");

// const getChest = () => {
//     axios.get('http://localhost:3000/api/chest/')
//     .then(res => {
//         const data = res.data;
//         alert(data);

//     })
// };
// chestBtn.addEventListener('click', getChest);

function getAll() {
    axios.get('http://localhost:5432/all_table/')
}
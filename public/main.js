const chestBtn = document.getElementById('Chest');

const getChest = () => {
    axios.get('http://localhost:5050/api/chest/')
    .then(res => {
        const data = res.data;
        alert(data);

    })
};
chestBtn.addEventListener('click', getChest);
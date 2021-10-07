const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function(numUsers){
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await userRequest.json();
    const userResults = data.results;

    displayUsers(userResults);
};

getData(1);

const displayUsers = function(userResults) {
    randomFolks.innerHTML = "";

    for (const eachUser of userResults) {
        const country = eachUser.location.country;
        const name = eachUser.name.first;
        const imageUrl = eachUser.picture.medium;

        const userDiv = document.createElement("div")
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt ="User Avatar" />
            `
        randomFolks.append(userDiv);
    };

};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);
})
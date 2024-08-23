let AddButton = document.getElementById("AddButton");
let InputHolder = document.getElementById("InputHolder");
let candidates = ["Alina", "Areesha", "Musfirah", "Zulaikha", "Tooba"];

AddButton.addEventListener("click", () => {
    candidates.push(InputHolder.value);
    InputHolder.value = "";
    displayCandidates();
});
function displayCandidates() {
    var tableInfo = document.getElementById("tableInfo");
    tableInfo.innerHTML = "";

candidates.forEach((candidates, index) => {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = candidates;
    var indexCell = document.createElement("td");
    indexCell.textContent = index + 1;
    var voteCell = document.createElement("td");
    voteCell.textContent = 0;

    row.append(indexCell);
    row.append(nameCell);
    row.append(voteCell);

    row.addEventListener("click" , () => {
        voteCell.innerHTML ++;
    });
    tableInfo.appendChild(row);
});
}
displayCandidates();
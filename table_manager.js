const tbody = document.getElementById("gameBody");
var counter=0;
function init() {
    const limit =5;

    for (let i = 0; i < 5; i++) {

        const row = document.createElement("tr")
        let str ="<td contenteditable=\"true\" class =" + i.toString() +"></td> \n"

        for (let j = 0; j < limit; j++) {
            const cell = document.createElement("td");

            cell.contentEditable = true;

            cell.className = `col-${j}`;  

            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
}

init()

function hide_colum(collum){
    const elements = document.querySelectorAll(`.col-${collum}`);
    elements.forEach(element => {
    element.style.display = "none";
});

return "done"
}

function show_column(column) {
        const elements = document.querySelectorAll(`.col-${column}`);
        elements.forEach(element => {
            element.style.display = "";
        });
    
}
function hide_dynamik() {
    if (counter < 5) {
        hide_colum(counter);
        counter++;
    }
}
function show_dynamik() {
    if (counter > 0) {
        counter--;
        show_column(counter);
    }
}

const table = document.createElement("table")
for (let i=1; i<= 4; i++){
    const tr = document.createElement("tr")
    for(let j=2; j<= 10; j++){
        const td = document.createElement("td")
        td.textContent = i + "x" + j + "=" + i*j;
        if(j % 2 == 0){
            td.setAttribute("bgColor", "red")
        }
        tr.appendChild(td);
    }
    table.appendChild(tr)
}
table.setAttribute("border", "1")
document.body.appendChild(table)

function create(){
    let table = document.createElement("table");
    let head = document.createElement("thread");
    let body = document.createElement("tbody");
    let Bingo = ["B", "I", "N", "G", "O"];

    let B = shu(0);
    let I = shu(1);
    let N = shu(2);
    let G = shu(3);
    let O = shu(4);
    let number = [B, I, N, G, O];

    for (let i = 0; i < 1; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let col2 = document.createElement("th");
            let text2 = document.createTextNode(Bingo[j]);
            col2.appendChild(text2);
            row.appendChild(col2);
        }
        body.appendChild(row);
    }
    for(let i = 0; i < 5; i++) {
        let row = document.createElement("tr");

        for(let j = 0; j < 5; j++) {
            let col = document.createElement("td");
            let Btext = document.createElement("input");
            if(i==2 && j==2){
                Btext = document.createTextNode("★");
            }else{
                Btext.setAttribute("type", "button");
                Btext.setAttribute("value", number[j][i]);
                Btext.setAttribute("onclick" , "change(this)");
                Btext.classList.add("changebutton");
                col.appendChild(Btext);
                row.appendChild(col);
            }
            col.appendChild(Btext);
            row.appendChild(col);
        }
        body.appendChild(row);
    }
    table.appendChild(body);
    document.body.appendChild(table);
    table.setAttribute("border","2");
}

function shu(x){
    let shuffle = [];
    for(let i = 0; i < 15; i++ ){
        shuffle.push((i+1)+(15*x));
    }
    let a = shuffle.length;
    while (a) {
        var s = Math.floor( Math.random() * a );
        var t = shuffle[--a];
        shuffle[a] = shuffle[s];
        shuffle[s] = t;
    }
    return shuffle;
}

function change(x) {
    x.classList.toggle("hanten");
}
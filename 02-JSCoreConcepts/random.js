var tab = [];

let random = (a) => {
    for(let n = 0; n<10; n++){
        tab[n] = Math.floor(Math.random() * (20 - 5) + 5);
    }
}

let printTab = () =>{
    tab.forEach(element => {
        console.log(element);
    });
}

random(tab);
printTab(tab);
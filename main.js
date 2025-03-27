let count = 0;

let sum = document.querySelector('.plus').onclick = function() {
    count += 1;
    document.getElementById('count').innerHTML = count;
};



///////////////////////////////
let minus = document.querySelector('.decrease').onclick = function() {
    count -=1;
    document.getElementById('count').innerHTML = count;
};


/////////////////////////////////
let reset = document.querySelector('.reset').onclick = function() {
    count = 0;
    document.getElementById('count').innerHTML = count;
};



////////////////////////


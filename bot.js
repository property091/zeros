var area = document.getElementById('area');
var square = document.getElementsByClassName('square');
var win = document.getElementsByClassName('win');

var player = 'X';
var winInd = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

for (var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='square' id=" + i + "></div>"
}

//без false - ошибка
for(var i = 0; i < 9; i++) {
    square[i].addEventListener('click', squareClick, false)
}

//чтобы не избежать setTimout
var startFunction = true;

function squareClick() {

    if (startFunction) {
        startFunction = false;


        var data = []
        var data0 = []
    
        var dataForComputer = []
    
        if(!this.innerHTML) {
            
            this.innerHTML = player
        }
        else {
            document.getElementById('now').innerHTML = "Клетка занята!:C"
            startFunction = true;
            return;
        }
    
        for(var i in square) {
            /* console.log(i) */
            if(square[i].innerHTML != 'X' && square[i].innerHTML != '0') {
                dataForComputer.push(parseInt(i))
            }
        }
    
        if(data.length != 5) {
            data0.push(computer(dataForComputer))
        }
    
    
        for(var i in square) {
            /* console.log(i) */
            if(square[i].innerHTML == player) {
                data.push(parseInt(i))
            }
    
            /* if(square[i].innerHTML == "0") {
                data0.push(parseInt(i))
            } */
        }
        
        for(var i in square) {
            /* console.log(i) */
            if(square[i].innerHTML == "0") {
                data0.push(parseInt(i))
            }
        }
        
    
        if(checkWin(data) ) {
    
            document.getElementById('who').innerHTML = player
            document.querySelector('.win').classList.replace('win', 'win1')
        }
        else if(checkWin(data0)) {
            document.getElementById('who').innerHTML = "0"
            document.querySelector('.win').classList.replace('win', 'win1')
        }
    
        else if(data.length >= 5) {
            document.getElementById('winner').innerHTML = "Ничья!"
            document.querySelector('.who').classList.replace('who', 'who1')
            document.querySelector('.win').classList.replace('win', 'win1')
        }
    
        console.log(data)
        console.log(data0)
        /* console.log(dataForComputer) */
        
        /* player = player == 'X' ? '0' : 'X'  */
        document.getElementById('now').innerHTML = "Сейчас ходит: " + player
       
    }

}

function checkWin(data) {
    for(var i in winInd) {
        win = true

        for (var j in winInd[i]) {
            var value = winInd[i][j]
            var index = data.indexOf(value)

            if (index == -1)  {
                win = false
            }
        }
        if (win) return true;
    }
    return false;
}

function computer(data) {
    //console.log(data)

    //УБИРАЕТ NAN
    var x = data.filter(Boolean);
    var n = x[getRnd(x.length)]

    /* console.log(x)
    console.log(n) */
    console.log(data)
    
    if (data.length != 3) {
        
        setTimeout(function() {
            console.log('2 sec');
            document.getElementById(`${n + 1}`).innerHTML = "0";
            startFunction = true;
        }, 300);
        
    }
    
    return n;
}

function getRnd(x) {
    return Math.floor(Math.random() * x)
}


var area = document.getElementById('area');

for (var i = 0; i < 9; i++) {
    area.innerHTML += "<div class='square' id='>" + i + "<'/div>"
}


var square = document.getElementsByClassName('square');
for (var i = 0; i < 9; i++) {
    square[i].addEventListener('click', click, false)
    /* console.log(square[i]) */
}



var X = 0;
var O = 0;
var DRAWS = 0;

var nextGame = true
var countX = 1

function click() {
    document.getElementById('alredy').innerText = " "
    if (!nextGame) {
        return;
    }
    

    dataForComputer = []

    if (!this.innerHTML) {
        this.innerText = "X"
    }
    else {
        document.getElementById('alredy').innerText = "Клетка занята!"
        document.getElementById('alredy').style.color = `rgb(${getRnd(100) + "," + getRnd(100) + "," + getRnd(100)})`
        var x = `rgb(${getRnd(200) + "," + getRnd(200) + "," + getRnd(200)})`
        console.log(x)
        /* console.log("клетка занята"); */
        return;
    }

    for (var i = 0; i < 9; i++) {
        if (square[i].innerText != "X" && square[i].innerText != "0") {
            dataForComputer.push(parseInt(i))
        }
    }

    /* console.log(dataForComputer) */
    if (dataForComputer.length > 0) {
        square[computer(dataForComputer)].innerText = "0"
    }
    
    /* console.log(this.innerText) */
    if ((square[0].innerText == square[1].innerText && square[1].innerText == square[2].innerText && square[0].innerText == "X")
    || (square[3].innerText == square[4].innerText && square[4].innerText == square[5].innerText && square[3].innerText == "X") 
    || (square[6].innerText == square[7].innerText && square[7].innerText == square[8].innerText && square[6].innerText == "X")

    || (square[0].innerText == square[3].innerText && square[3].innerText == square[6].innerText && square[0].innerText == "X")
    || (square[1].innerText == square[4].innerText && square[4].innerText == square[7].innerText && square[1].innerText == "X")
    || (square[2].innerText == square[5].innerText && square[5].innerText == square[8].innerText && square[2].innerText == "X")

    || (square[0].innerText == square[4].innerText && square[4].innerText == square[8].innerText && square[0].innerText == "X")
    || (square[2].innerText == square[4].innerText && square[4].innerText == square[6].innerText && square[2].innerText == "X"))
    {   
        X += 1
        console.log(document.getElementById('who'))
        document.getElementById('who').innerText = 'X'

        document.getElementById('winner').style.visibility = 'visible'
        document.getElementById('X').innerText = "X:" + X

        nextGame = false
        clear()
        return;
    }

    else if ((square[0].innerText == square[1].innerText && square[1].innerText == square[2].innerText && square[0].innerText == "0")
    || (square[3].innerText == square[4].innerText && square[4].innerText == square[5].innerText && square[3].innerText == "0") 
    || (square[6].innerText == square[7].innerText && square[7].innerText == square[8].innerText && square[6].innerText == "0")

    || (square[0].innerText == square[3].innerText && square[3].innerText == square[6].innerText && square[0].innerText == "0")
    || (square[1].innerText == square[4].innerText && square[4].innerText == square[7].innerText && square[1].innerText == "0")
    || (square[2].innerText == square[5].innerText && square[5].innerText == square[8].innerText && square[2].innerText == "0")

    || (square[0].innerText == square[4].innerText && square[4].innerText == square[8].innerText && square[0].innerText == "0")
    || (square[2].innerText == square[4].innerText && square[4].innerText == square[6].innerText && square[2].innerText == "0")) 
    {   
        O += 1
        document.getElementById('who').innerText = "0"
        document.getElementById('winner').style.visibility = 'visible'
        document.getElementById('0').innerText = "0: " + O

        nextGame = false
        clear()
        return;
    }

    else if (countX >= 5) {
        DRAWS += 1
        document.getElementById('text_winner').innerText = 'DRAW!'
        document.getElementById('who').innerText = ":)"

        document.getElementById('winner').style.visibility = 'visible'
        document.getElementById('draw').innerHTML = "DRAWS: " + DRAWS

        nextGame = false
        clear()
        return;
    }

    countX++;
}

function computer(dataForComputer) {
    return dataForComputer[getRnd(dataForComputer.length)]
}

function getRnd(x) {
    return Math.floor(Math.random() * x)
}


function clear() {
    
    document.getElementById('table').style.visibility = 'visible'
    
    setTimeout(function() {
        square[0].innerText = ''
        square[1].innerText = ''
        square[2].innerText = ''
        square[3].innerText = ''
        square[4].innerText = ''
        square[5].innerText = ''
        square[6].innerText = ''
        square[7].innerText = ''
        square[8].innerText = ''
        
        countX = 1
        document.getElementById('winner').style.visibility = 'hidden'
        
        nextGame = true
    }, 2000);
    
}
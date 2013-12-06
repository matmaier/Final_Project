function init() {
   

    name = localStorage.getItem("name");
    if (name == "null" || name == null) {
        name = prompt("What is your name?");
        localStorage.setItem("name", name);
        alert("Hi, " + name + "!\nWelcome to Connect 4!");
    } else {
        alert("Hi, " + name + "!\nWelcome to Connect 4!");
    }

    
    
    initialize();
}

function initialize() {
    //window.setTimeout(function () { alert("Hello!") }, 1000);
    var status = new Array();
    var color = new Array();
    //var winner = 2;
    var player = 0;
    var i = 0;
    var end = 0;

    for (i = 0; i < 49; i++) {
        status[i] = 0;
    }
    for (i = 0; i < 49; i++) {
        color[i] = 2;
    }


    localStorage.setItem("status", status);
    localStorage.setItem("player", player);
    localStorage.setItem("color", color);
    //localStorage.setItem("winner", winner);
    localStorage.setItem("end",end);
}

function insert0() {
    
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 0;
        while ((array[i] == 1) && (i < 7)) {
            i++;
        }
        if (i > 6) {
            alert("Column is full! Choose other column!");
            checkIfFull();

        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
   

}


function insert1() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 7;
        while ((array[i] == 1) && (i < 14)) {
            i++;
        }
        if (i > 13) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function insert2() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 14;
        while ((array[i] == 1) && (i < 21)) {
            i++;
        }
        if (i > 20) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function insert3() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 21;
        while ((array[i] == 1) && (i < 28)) {
            i++;
        }
        if (i > 27) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function insert4() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 28;
        while ((array[i] == 1) && (i < 35)) {
            i++;
        }
        if (i > 34) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function insert5() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 35;
        while ((array[i] == 1) && (i < 42)) {
            i++;
        }
        if (i > 41) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function insert6() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var color2 = new Array();
    status = localStorage.getItem("status");
    player = localStorage.getItem("player");
    color = localStorage.getItem("color");
    end=localStorage.getItem("end");
    if (end == 0) {
        for (i = 0; i < 49; i++) {
            array[i] = status[j];
            color2[i] = color[j];
            j = j + 2
        }
        i = 42;
        while ((array[i] == 1) && (i < 49)) {
            i++;
        }
        if (i > 48) {
            alert("Column is full! Choose other column!");
            checkIfFull();
        } else if (player == 1) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#000000";
            array[i] = 1;
            color2[i] = 1;

            checkIfFull();
            playerChange();

        } else if (player == 0) {
            var changeColor = document.getElementById("a" + i);
            changeColor.style.backgroundColor = "#ff0000";
            array[i] = 1;
            color2[i] = 0;

            checkIfFull();
            playerChange();

        } else {
            alert("Error:player undefined!");
        }


        localStorage.setItem("status", array);
        localStorage.setItem("color", color2);
        checkIfWinner();
    } else {
        //do nothing, game is over
    }
}
function playerChange() {
    player = localStorage.getItem("player");
    if (player == 0) {
        player = 1;
    } else if (player == 1) {
        player = 0;
    } else {
        alert("Error:change player!");
    }
    localStorage.setItem("player", player);
}
function checkIfFull() {
    var i = 0;
    var j = 0;
    var array = new Array();
    status = localStorage.getItem("status");

    for (i = 0; i < 49; i++) {
        array[i] = status[j];
        j = j + 2
    }
    i = 0;
    while ((array[i] == 1) && (i < 49)) {
        i++;
    }
    if (i > 47) {
        alert("Game Over! The field is full!");
        EndOfGame();
    }

}
function checkIfWinner() {
    var i = 0;
    var j = 0;
    var array = new Array();
    var elements = new Array();
    var color2 = new Array();

    status = localStorage.getItem("status");
    color = localStorage.getItem("color");
    //winner = localStorage.getItem("winner");

    for (i = 0; i < 49; i++) {
        array[i] = status[j];
        color2[i] = color[j];
        j = j + 2
    }
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 4; j++) {
            if ((color2[i * 7 + j] == 1) && (color2[i * 7 + j + 1] == 1) && (color2[i * 7 + j + 2] == 1) && (color2[i * 7 + j + 3] == 1)) {
                alert("Winner:Player black!!");
                //winner = 1;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else if ((color2[i * 7 + j] == 0) && (color2[i * 7 + j + 1] == 0) && (color2[i * 7 + j + 2] == 0) && (color2[i * 7 + j + 3] == 0)) {
                alert("Winner:Player red!!");
                //winner = 0;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else {
                //do nothing
            }

        }
    }
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 4; j++) {
            if ((color2[i + j * 7] == 1) && (color2[i + j * 7 + 1 * 7] == 1) && (color2[i + j * 7 + 2 * 7] == 1) && (color2[i + j * 7 + 3 * 7] == 1)) {
                alert("Winner:Player black!!");
                //winner = 1;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else if ((color2[i + j * 7] == 0) && (color2[i + j * 7 + 1 * 7] == 0) && (color2[i + j * 7 + 2 * 7] == 0) && (color2[i + j * 7 + 3 * 7] == 0)) {
                alert("Winner:Player red!!");
                //winner = 0;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else {
                //do nothing
            }

        }
    }
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 4; j++) {
            if ((color2[i * 7 + j] == 1) && (color2[i * 7 + j + 1 * 8] == 1) && (color2[i * 7 + j + 2 * 8] == 1) && (color2[i * 7 + j + 3 * 8] == 1)) {
                alert("Winner:Player black!!");
                //winner = 1;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else if ((color2[i * 7 + j] == 0) && (color2[i * 7 + j + 1 * 8] == 0) && (color2[i * 7 + j + 2 * 8] == 0) && (color2[i * 7 + j + 3 * 8] == 0)) {
                alert("Winner:Player red!!");
                //winner = 0;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else {
                //do nothing
            }

        }
    }
    for (i = 0; i < 5; i++) {
        for (j = 3; j < 7; j++) {
            if ((color2[i * 7 + j] == 1) && (color2[i * 7 + j + 1 * 6] == 1) && (color2[i * 7 + j + 2 * 6] == 1) && (color2[i * 7 + j + 3 * 6] == 1)) {
                alert("Winner:Player black!!");
                //winner = 1;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else if ((color2[i * 7 + j] == 0) && (color2[i * 7 + j + 1 * 6] == 0) && (color2[i * 7 + j + 2 * 6] == 0) && (color2[i * 7 + j + 3 * 6] == 0)) {
                alert("Winner:Player red!!");
                //winner = 0;
                //localStorage.setItem("winner", winner);
                endOfGame();
            } else {
                //do nothing
            }

        }
    }


}
function endOfGame() {
    var i = 0;
    var array = new Array();
    var end = 1;

    for (i = 0; i < 49; i++) {
        array[i] = 0;
    }

    localStorage.setItem("status", array);
    localStorage.setItem("end",end);
    
}
function newGame()
{
    var i = 0;
    var changColor;
    for (i = 0; i < 49; i++) {
        changeColor = document.getElementById("a" + i);
        changeColor.style.backgroundColor = "#ffffff";
    }
    init();
}
function visitor() {
    name = prompt("What is your name?");
    localStorage.setItem("name", name);
    alert("Hi, " + name + "!\nThat's your Connect 4!");
}
function editor() {
    alert("Matthias Maier\nFall Semester 2013\nIUPUI\nmatmaier@iupui.edu");
}
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // modeButtons eventlistener
    setupModeButtons();
    // squares eventListeners
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listener to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = (this.style.backgroundColor);
            //  compare color of picked color
            if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct!";
            messageDisplay.style.backgroundColor = clickedColor;
            messageDisplay.classList.add("messageColor");
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!!!";
                messageDisplay.classList.add("messageColor");
            }
        });
    }
}

function reset(){
     // generate all new colors
     colors = getRandomColor(numSquares );
     // pick a new color from array
     pickedColor = pickColor();
     // change color display to match picked color
     colorDisplay.textContent = pickColor();
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
     // change colors of squares
     for(var i = 0; i < squares.length; i++){
         if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];
         }else{
            squares[i].style.display = "none";
         }         
         h1.style.backgroundColor = "steelblue";
     }
}

resetButton.addEventListener("click", function(){
    reset();
})

    function changeColor(color){
        // loop all the squares
        for (var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;

        }
    }

    function pickColor(){
       var randomNo = Math.floor(Math.random() * colors.length); 
       return colors[randomNo];  

    }

    function getRandomColor(num){
        // make an array
        var arr = []
        // add num random colors to array
        for (var i = 0; i < num; i++){
            // get random color and push into arr
          arr.push(randomColor());
        }
        // return that array
        return arr;
    }

    function randomColor(){
        //pick a red from 0 - 255
       var r= Math.floor( Math.random() * 256); 
        // pick a green
        var g = Math.floor( Math.random() * 256);
        // pick a blue 
        var b = Math.floor( Math.random() * 256);
       return "rgb(" + r + ", " + g + ", " + b + ")"    
     }







// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = getRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(   colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }

//     }

// })


// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = getRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
    
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
     
// })

let container = document.querySelector('.container');
const newGrid = document.querySelector('.createNewGrid');
const resetGrid = document.querySelector('.resetGrid');
const rainbow = document.querySelector('rainbow');
const black = document.querySelector('.black');

// This function creates a grid of given size
// Also adjusts the size of boxes according to number of boxes
function makeGrid(number){
    container.innerHTML = "";
    var child;
    let childWidth = 500 / number;

    for(let i = 0; i < number*number; i++){
       child = document.createElement('div');
       child.setAttribute('class' , 'child');
        child.style['width'] = `${childWidth}px`;
        child.style['height'] = `${childWidth}px`;
       container.appendChild(child)
   }

   colorSquares(1);
}

makeGrid(16);


//Event listenet for create new grid button
newGrid.addEventListener('click', function newGrid(){
    let number = prompt("Enter grid size less than 100!" , "16");

    if(number <= 0){
        alert("Not a valid number");
        newGrid();
    }

    else if(number >= 100){
        alert("Your input is very large, enter a small number");
        newGrid();
    }

    else{
        makeGrid(number);
    }
})


function colorSquares(number){
    let squares = document.querySelectorAll('.child');

    for(let square of squares){
        let random1 = Math.floor(Math.random() * 257)
        let random2 = Math.floor(Math.random() * 257)
        let random3 = Math.floor(Math.random() * 257)

        switch(number){
            case 1:
                square.addEventListener('mouseover', (e) => {
                    square.style['background-color'] = "black";
                })
                break;
            
            case 2:
                square.addEventListener('mouseover', (e) => {
                    square.style['background-color'] = `rgb(${random1}, ${random2}, ${random3})`;
                })
                break;

            default:
                break;
        }

    }

}

function gridReset(){
    let squares = document.querySelectorAll('.child').forEach(item =>{
        item.style['background-color'] = "#829079";
    })
}
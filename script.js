let dimensions = 16;
const dimensionButton = document.getElementById('dimensionButton')
const container = document.getElementById('container');
const gridContainer = document.getElementById('gridContainer')

document.getElementById('dimensionButton').addEventListener('click', function(){
    let dimensions = prompt("please input dimension");
    createBox(dimensions);
    });


    function createBox(dimensions){

        let gridContainer = document.getElementById('gridContainer');

        let totalGap = (dimensions - 1) * 1; 
        let borderSize = dimensions * 2 * 1; 
        let cellSize = (600 - totalGap - borderSize) / dimensions;
    
        gridContainer.innerHTML = '';
    
        gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

        for (let i = 0; i < dimensions * dimensions; i++){
            let cell = document.createElement('div');
            cell.id = "cell"; 
            gridContainer.appendChild(cell);
    
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
    
            cell.style.border = "1px solid black";
            cell.style.backgroundColor = "white";
            cell.onmouseover = function () {
                cell.style.backgroundColor = "black";
            }
        } 
        let container = document.getElementById('container');
        container.appendChild(gridContainer);    
    }
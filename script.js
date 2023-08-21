const sketchpad = document.querySelector('.sketchpad');

function clearSketchpad() {
    sketchpad.innerHTML = "";
}

function createGrid(gridDensity = 16) {
    const borderWidth = 1;
    gridSize = 640 / gridDensity - 2 * borderWidth;

    clearSketchpad();

    for (i = 1; i <= gridDensity * gridDensity; i++) {
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        gridbox.style.cssText = `width: ${gridSize}px; height: ${gridSize}px`;
        gridbox.addEventListener('mouseover', () => {
            gridbox.style.backgroundColor = 'black';
        });
        sketchpad.appendChild(gridbox);
    }
}

createGrid();

var gridDensityList = document.getElementById('grid-density');

gridDensityList.addEventListener('change', (e) => {
    createGrid(e.target.value);
});

const clearBtn = document.getElementById('clear-grid');
clearBtn.addEventListener('click', () => {
    createGrid(gridDensityList.value);
});
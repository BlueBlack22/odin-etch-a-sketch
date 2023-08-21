const sketchpad = document.querySelector('.sketchpad');

const gridDensity = 16;

function createGrid(gridDensity) {
    const borderWidth = 1;
    gridSize = 640 / gridDensity - 2 * borderWidth;

    for (i = 1; i <= gridDensity * gridDensity; i++) {
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        gridbox.style.cssText = `width: ${gridSize}px; height: ${gridSize}px`;
        sketchpad.appendChild(gridbox);
    }
}

createGrid(gridDensity);
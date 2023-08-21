function createGrid(gridDensity = 16) {
    const borderWidth = 1;
    gridSize = 640 / gridDensity - 2 * borderWidth;

    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = "";

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

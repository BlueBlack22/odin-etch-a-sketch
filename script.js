const sketchpad = document.querySelector('.sketchpad');

for (i = 1; i <= 16 * 16; i++) {
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    sketchpad.appendChild(gridbox);
}

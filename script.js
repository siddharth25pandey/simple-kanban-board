const cards = document.querySelectorAll('.card');
const dropZones = document.querySelectorAll('.dropzone');

cards.forEach( (card) => {
    card.addEventListener('dragstart', dragstart);

    card.addEventListener('drag', drag);

    card.addEventListener('dragend', dragend);
})

function dragstart(){
    dropZones.forEach( dropZone => dropZone.classList.add('highlight'));

    this.classList.add('is-dragging');
}

function drag(){
    console.log('card is drag')
}

function dragend(){
    dropZones.forEach( dropZone => dropZone.classList.remove('highlight'));

    this.classList.remove('is-dragging');
}


/** ------------------------------------------- */

dropZones.forEach( dropZone => {
    dropZone.addEventListener('dragenter', dragenter);
    dropZone.addEventListener('dragover', dragover);
    dropZone.addEventListener('dragleave', dragleave);
    dropZone.addEventListener('drop', drop);
});


function dragenter() {
    console.log('entrou na dropzone')
}

function dragover() {
    this.classList.add('over');

    const cardBeingDrag = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDrag); 
}


function dragleave() {
    this.classList.remove('over');
}

function drop() {
    this.classList.remove('over');
}


















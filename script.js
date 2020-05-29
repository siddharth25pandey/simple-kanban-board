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

function drag() {
    dropZones.forEach( dropZone => dropZone.classList.add('highlight'));
}

function dragend(){
    cards.forEach( card => card.classList = 'card')
    dropZones.forEach( dropZone => dropZone.classList = 'dropzone')
    
}


/** ------------------------------------------- */

dropZones.forEach( dropZone => {
    dropZone.addEventListener('dragenter', dragenter);
    dropZone.addEventListener('dragover', dragover);
    dropZone.addEventListener('dragleave', dragleave);
});


function dragenter() {
    this.classList.add('over');
}

function dragover() {
    const cardBeingDrag = document.querySelector('.is-dragging');

    if (cardBeingDrag !== null) { 
        this.appendChild(cardBeingDrag) 
    }; 
}


function dragleave() {
    dropZones.forEach( dropZone => dropZone.classList = 'dropzone');
    
}



















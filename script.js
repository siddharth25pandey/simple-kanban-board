const cards = document.querySelectorAll('.card');
const dropZones = document.querySelectorAll('.dropzone');
const tagContainers = document.querySelectorAll('.tag-container')



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


tagContainers.forEach(tagContainer => {

    let allTags = Array(tagContainer.childNodes[0], tagContainer.childNodes[2], tagContainer.childNodes[4]);

    let firstTag = allTags[0];
    let secondTag = allTags[1];
    let thirdTag = allTags[2];

    console.log(secondTag.classList)

    firstTag.addEventListener('click', () => {
        tagContainer.classList.toggle('expand')

    })

    secondTag.addEventListener('click', () => {
        let firstColor = firstTag.classList[2];
        let secondColor = secondTag.classList[2];

        firstTag.classList.remove(firstColor);
        firstTag.classList.add(secondColor);

        secondTag.classList.remove(secondColor);
        secondTag.classList.add(firstColor);

        tagContainer.classList.toggle('expand')

    })

    thirdTag.addEventListener('click', () => {
        let firstColor = firstTag.classList[2];
        let thirdColor = thirdTag.classList[2];

        firstTag.classList.remove(firstColor);
        firstTag.classList.add(thirdColor);

        thirdTag.classList.remove(thirdColor);
        thirdTag.classList.add(firstColor);

        tagContainer.classList.toggle('expand')

    })




})















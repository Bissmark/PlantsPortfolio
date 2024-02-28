const container = document.querySelector('.container');
let lastTreePart = null;

container.addEventListener('click', function(e) {
    addTreePart(e);
});

const addTreePart = (e) => {
    const treePart = document.createElement('div');
    treePart.style.position = 'absolute';
    treePart.style.left = '459px';
    if (lastTreePart) {
        const lastTreePartRect = lastTreePart.getBoundingClientRect();
        treePart.style.top = lastTreePartRect.bottom + 'px';
    } else {
        treePart.style.top = e.clientY + 'px';
    }
    treePart.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
    treePart.classList.add('tree3');
    
    container.appendChild(treePart);

    // Update lastTreePart
    lastTreePart = treePart;
}

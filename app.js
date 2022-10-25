const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Beau';
nameDisplay.classList.add('pink');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('button was clicked');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});

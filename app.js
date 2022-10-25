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

const colorDropdown = document.getElementById('color-dropdown');
colorDropdown.addEventListener('change', () => {
    console.log('menu was accessed');
    console.log(colorDropdown.value);

    const nameTagSection = document.getElementById('name-tag-section');
    nameDisplay.classList.remove('orange');
    nameDisplay.classList.remove('blue');
    nameDisplay.classList.remove('yellow');
    nameDisplay.classList.add(colorDropdown.value);
});

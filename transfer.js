document.addEventListener("DOMContentLoaded", function() {
    const leftListbox = document.querySelectorAll('.listbox')[0];
    const rightListbox = document.querySelectorAll('.listbox')[1];

    const moveSelected = (from, to) => {
        const items = from.querySelectorAll('input[type="checkbox"]:checked');
        items.forEach(item => {
            const label = item.parentElement;
            item.checked = false;
            from.removeChild(label.nextSibling); 
            from.removeChild(label); 
            to.appendChild(label); 
            to.appendChild(document.createElement('br'));
        });
    };

    const moveAll = (from, to) => {
        const items = from.querySelectorAll('label');
        items.forEach(item => {
            from.removeChild(item.nextSibling); 
            from.removeChild(item);
            to.appendChild(item);
            to.appendChild(document.createElement('br'));
        });
    };

    const buttons = document.querySelectorAll('.buttons button');
    
    buttons[0].addEventListener('click', () => moveAll(leftListbox, rightListbox));
    buttons[1].addEventListener('click', () => moveSelected(leftListbox, rightListbox));
    buttons[2].addEventListener('click', () => moveSelected(rightListbox, leftListbox));
    buttons[3].addEventListener('click', () => moveAll(rightListbox, leftListbox)); 
});

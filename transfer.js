document.addEventListener("DOMContentLoaded", function() {
    const leftListbox = document.querySelectorAll('.listbox')[0];
    const rightListbox = document.querySelectorAll('.listbox')[1];

    const moveSelected = (from, to) => {
        const items = from.querySelectorAll('input[type="checkbox"]:checked');
        items.forEach(item => {
            const label = item.parentElement;
            item.checked = false;
            from.removeChild(label.nextSibling); // Remove the existing <br> before moving
            from.removeChild(label); // Remove the label from the current list
            to.appendChild(label); // Add the label to the new list
            to.appendChild(document.createElement('br')); // Add a <br> after the label
        });
    };

    const moveAll = (from, to) => {
        const items = from.querySelectorAll('label');
        items.forEach(item => {
            from.removeChild(item.nextSibling); // Remove the existing <br> before moving
            from.removeChild(item); // Remove the label from the current list
            to.appendChild(item); // Add the label to the new list
            to.appendChild(document.createElement('br')); // Add a <br> after the label
        });
    };

    const buttons = document.querySelectorAll('.buttons button');
    
    buttons[0].addEventListener('click', () => moveAll(leftListbox, rightListbox)); // >> button
    buttons[1].addEventListener('click', () => moveSelected(leftListbox, rightListbox)); // > button
    buttons[2].addEventListener('click', () => moveSelected(rightListbox, leftListbox)); // < button
    buttons[3].addEventListener('click', () => moveAll(rightListbox, leftListbox)); // << button
});

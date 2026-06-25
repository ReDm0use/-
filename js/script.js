const checkboxes = document.querySelectorAll('.filters input');
const cards = document.querySelectorAll('.card');

checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', () => {

        const selected = [];

        checkboxes.forEach(item => {
            if (item.checked) {
                selected.push(item.value);
            }
        });

        cards.forEach(card => {

            const category = card.dataset.category;

            if (
                selected.length === 0 ||
                selected.includes(category)
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }

        });

    });

});

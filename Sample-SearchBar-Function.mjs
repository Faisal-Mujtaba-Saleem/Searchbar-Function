function handleSearchBar(e) {
    e.preventDefault();

    let bool;

    // Search through category 
    const searchInput = document.getElementById('food-searcher');

    let categoryContainer = document.getElementsByClassName('category-container');
    categoryContainer = Array.from(categoryContainer);

    const filtered_CategoryContainer = categoryContainer.filter(
        (category, index, array) => {
            const categoryText = category.firstElementChild.innerText.toLowerCase()
            const condition = categoryText === searchInput.value.toLowerCase();
            return condition;
        }
    )
    const condition = filtered_CategoryContainer.length !== 0;
    (condition === true ? bool = true : bool = false);
    console.log(`condition: ${condition}`);
    console.log(`bool: ${bool}`);

    if (bool === true) {

        categoryContainer.forEach((each_container) => {
            filtered_CategoryContainer.forEach(
                (filtered_container) => {

                    if (each_container === filtered_container) {
                        each_container.style.display = 'block';
                    } else {
                        each_container.style.display = 'none';
                    }

                });
        });
    } else {
        console.log('inside else block');
        // Search through title 
        let cardsDivs = document.getElementsByClassName('cards-divs');
        let cardsTitles = document.getElementsByClassName('card-title');

        cardsDivs = Array.from(cardsDivs);
        cardsTitles = Array.from(cardsTitles);

        cardsDivs.forEach((card_div) => {
            const filteredCardsTitles = cardsTitles.filter((title) => {
                const condition = title.innerText.toLowerCase() === searchInput.value.toLowerCase();
                return condition;
            });
            if (filteredCardsTitles.length !== 0) {
                if (card_div.contains(...filteredCardsTitles)) {
                    (!card_div.classList.contains('d-inline-flex') ? card_div.classList.add('d-inline-flex') : true);
                    // console.log(true);
                } else {
                    card_div.classList.remove('d-inline-flex');
                    card_div.style.display = 'none';
                    // console.log(false);
                }
            } else {
                if (searchInput.value === '' || searchInput.value.toLowerCase() === 'display all') {
                    (!card_div.classList.contains('d-inline-flex') ? card_div.classList.add('d-inline-flex') : true);
                }
            }
        });
    }

    if (searchInput.value === '' || searchInput.value.toLowerCase() === 'display all') {
        categoryContainer.forEach((each_container) => {
            console.log(each_container);
            each_container.style.display = 'block';
        })
    }
}

export default handleSearchBar;
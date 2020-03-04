import { default as pizzas } from './pizzas.js';

export const renderFilters = () => {
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add("filterContainer");
    root.append(filtersContainer);

    const filter = document.createElement('div');
    filter.classList.add('filter');
    filtersContainer.append(filter);

    const spicyButton = document.createElement('button');
    spicyButton.id = 'spicy';
    spicyButton.innerHTML = "SPICY";
    filter.append(spicyButton);

    const veggiButton = document.createElement('button');
    veggiButton.id = 'veggi';
    veggiButton.innerHTML = "VEGGY";
    filter.append(veggiButton);

    const classicButton = document.createElement('button');
    classicButton.id = 'classic';
    classicButton.innerHTML = "CLASSIC";
    filter.append(classicButton);
}

const filterPizza = (elemId, buttonClass) => {
    const button = document.getElementById(elemId);
    button.classList.toggle(buttonClass)
    const result = pizzas.filter(el => el[elemId] == false)
    if (button.className == buttonClass) {
        result.map(el => {
            document.getElementById(el.id).style.display = "none"
        })
    } else {
        result.map(el => {
            document.getElementById(el.id).style.display = "flex"
        })
    }

}

export const renderPizzaFilter = (e) => {
    switch (e.target.id) {
        case 'spicy': filterPizza('spicy', 'spicyActive');
            break;
        case 'veggi': filterPizza('veggi', 'veggiActive');
            break;
        case 'classic': filterPizza('classic', 'classicActive');
            break;
    }

}
import { default as pizzas } from './pizzas.js';


export const renderMainPage = () => {
    const content = document.createElement('div');
    content.classList.add('content');
    root.append(content);
    renderContent();
}

export const renderContent = () => {

    pizzas.map(el => {
        const card = document.createElement('div');
        card.className = "card";
        card.setAttribute('id', el.id)
        document.querySelector('.content').append(card);

        const containerImg = document.createElement('div');
        containerImg.classList.add('cardImgcontainer');
        card.append(containerImg);

        const margaritaImg = document.createElement('img');
        margaritaImg.src = el.img;
        containerImg.append(margaritaImg);

        const titlesContainer = document.createElement('div');
        card.append(titlesContainer);

        const compositionsContainer = document.createElement('div');
        compositionsContainer.classList.add('compositions');
        card.append(compositionsContainer);

        const titles = document.createElement('p');
        titles.innerHTML = el.title;
        titlesContainer.append(titles);

        const compositions = document.createElement('p');
        compositions.innerHTML = el.composition;
        compositionsContainer.append(compositions);


        const buttonPriceContainer = document.createElement('div');
        buttonPriceContainer.classList.add('containerButtonPrice');
        card.append(buttonPriceContainer);

        const priceCard = document.createElement('p');
        priceCard.innerHTML = `${el.price} BYN`;
        buttonPriceContainer.append(priceCard);

        const buttonCard = document.createElement('button');
        buttonCard.classList.add('cardButton');
        buttonCard.innerHTML = 'Add to cart';
        buttonPriceContainer.append(buttonCard);

        return card;
    });
}

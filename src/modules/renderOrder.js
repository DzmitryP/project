import { default as pizzas } from './pizzas.js';

import { order } from './order.js';

const createOrderItem = (el) => {

    const basketProduktsContainer = document.createElement('div');
    basketProduktsContainer.classList.add('containerBusketProdukts');
    document.querySelector('.wrapperOfOrders').append(basketProduktsContainer);

    const orderImg = document.createElement('img');
    orderImg.classList.add('orderImg');
    orderImg.src = el.img;
    basketProduktsContainer.append(orderImg);

    const priceTitleBasket = document.createElement('div');
    priceTitleBasket.classList.add('priceTitleBasket');
    basketProduktsContainer.append(priceTitleBasket);

    const titlesBasket = document.createElement('p');
    titlesBasket.innerHTML = el.title;
    priceTitleBasket.append(titlesBasket);

    const priceBasket = document.createElement('p');
    priceBasket.innerHTML = `${el.price} BYN`;
    priceTitleBasket.append(priceBasket);

    const deletOrder = document.createElement('i');
    deletOrder.className = "fa fa-trash-o";
    basketProduktsContainer.append(deletOrder);

    return basketProduktsContainer;
}

export const addTocard = (e) => {
    if (e.target.className === "cardButton") {

        const result = pizzas.find(el => {
            return (el.id == e.target.parentElement.parentElement.id);
        })

        order.push(result);

        document.querySelector('.titleHeaderBasket').innerHTML = `Your orders: ${countOrder()} BYN`

        document.querySelector('.counter').innerHTML = order.length;

        console.log(order);

        createOrderItem(result);

        countOrder();
    }
}

export const countOrder = () => {
    const sumArr = order.map(i => i.price);
    const sum1 = sumArr.reduce((sum, current) => sum + current, 0);

    return sum1.toFixed(2);
}
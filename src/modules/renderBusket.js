import { countOrder } from './renderOrder.js';
import { renderOrderContainer } from './renderOrderPage.js';
import { order } from './order.js';

export const createOrderContainer = () => {

    const basketOrderContainer = document.createElement('div');
    basketOrderContainer.classList.add('orderPreview');
    root.append(basketOrderContainer);

    const titleCloseBasketContainer = document.createElement('div');
    titleCloseBasketContainer.classList.add('titleCloseBasketContainer');
    basketOrderContainer.append(titleCloseBasketContainer);

    const headerTitle = document.createElement("p");
    headerTitle.classList.add('titleHeaderBasket')
    headerTitle.innerHTML = `Your orders: ${countOrder()} BYN`
    titleCloseBasketContainer.append(headerTitle);

    const wrapperOfOrders = document.createElement('div');
    wrapperOfOrders.classList.add('wrapperOfOrders');
    basketOrderContainer.append(wrapperOfOrders);

    const closeBasketContainer = document.createElement('div');
    closeBasketContainer.classList.add('closeBasket');
    titleCloseBasketContainer.append(closeBasketContainer);

    const closeBasket = document.createElement('i');
    closeBasket.className = "fa fa-times-circle";
    closeBasketContainer.append(closeBasket);

    const orderButtonContainer = document.createElement('div');
    orderButtonContainer.classList.add('orderButtonContainer');
    basketOrderContainer.append(orderButtonContainer);

    const orderButton = document.createElement('button');
    orderButton.innerHTML = "Order";
    orderButton.classList.add('orderButton');
    orderButtonContainer.append(orderButton);

    basketOrderContainer.style.display = 'none';

    return basketOrderContainer;

}

//отрисовка корзины по клику

export const renderOrder = (e) => {
    if (e.target.className === "linkBasket") {
        if (!document.querySelector('.orderPreview')) {
            createOrderContainer();
        } else {
            document.querySelector('.orderPreview').style.display = 'block';
        }
    }
}


export const basketContainerClose = (e) => {
    if (e.target.className === 'fa fa-times-circle') {
        document.querySelector('.orderPreview').style.display = 'none';
    }
}

export const deleteOrder = (el) => {
    let arr = Array.from(el.parentElement.parentElement.children);
    let index = arr.indexOf(el.parentElement)
    order.splice(index, 1);
    el.parentElement.remove();
    document.querySelector('.titleHeaderBasket').innerHTML = `Your orders: ${countOrder()} BYN`
    document.querySelector('.counter').innerHTML = order.length;
    console.log('busket', order)
}


export const removeOrderItem = (e) => {
    if (e.target.className === "fa fa-trash-o") {
        deleteOrder(e.target);
    }

}

export const makeOrder = (e) => {
    if (e.target.className === 'orderButton') {
        document.querySelector('.containerBasketWish').style.display = "none";
        document.querySelector('.content').style.display = "none";
        document.querySelector('.orderPreview').style.display = "none";
        document.querySelector('.filterContainer').style.display = "none";

        if (!document.querySelector('.orderPageContainer')) {
            renderOrderContainer();
        } else {
            document.querySelector('.orderPageContainer').style.display = 'block';
        }

    }
}
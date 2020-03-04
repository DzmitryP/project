import { order } from './order.js';
import { countOrder } from './renderOrder.js';

export const renderOrderContainer = () => {

    const mainOrderContainer = document.createElement('div');
    mainOrderContainer.classList.add('mainOrderContainer');
    root.append(mainOrderContainer);

    const orderFormContainer = document.createElement('div');
    orderFormContainer.classList.add('orderFormContainer');
    mainOrderContainer.append(orderFormContainer);

    const orderForm = document.createElement('form');
    orderForm.classList.add('formOrder');
    orderFormContainer.append(orderForm);

    const phoneInput = document.createElement('input');
    phoneInput.classList.add('orderInput');
    phoneInput.setAttribute('type', 'text', 'required');
    phoneInput.setAttribute('placeholder', 'your phone');
    orderForm.append(phoneInput);

    const nameInput = document.createElement('input');
    nameInput.classList.add('orderInput');
    nameInput.setAttribute('type', 'text', 'required');
    nameInput.setAttribute('placeholder', 'your name');
    orderForm.append(nameInput);

    const comment = document.createElement('textarea');
    comment.classList.add('orderTextarea');
    comment.setAttribute('type', 'password', 'required');
    comment.setAttribute('placeholder', 'your comment');
    orderForm.append(comment);


    const orderPageContainer = document.createElement('div');
    orderPageContainer.classList.add('orderPageContainer')
    mainOrderContainer.append(orderPageContainer);

    const titleOrderDetiles = document.createElement('p');
    titleOrderDetiles.innerHTML = "ORDER DETILES:";
    titleOrderDetiles.classList.add('titleOrderDetiles')
    orderPageContainer.append(titleOrderDetiles);

    const makeOrderContainer = document.createElement('div')
    makeOrderContainer.classList.add('makeOrderContainer')
    orderPageContainer.append(makeOrderContainer);

    order.map(el => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('orderCard')
        makeOrderContainer.append(orderCard);

        const imgOrderCardContainer = document.createElement('div');
        orderCard.append(imgOrderCardContainer);

        const orderTexInformation = document.createElement('div');
        orderTexInformation.classList.add('orderTexInformation')
        orderCard.append(orderTexInformation);

        const orderTitleContainer = document.createElement('div');
        orderTexInformation.append(orderTitleContainer);

        const orderTitle = document.createElement('p');
        orderTitle.innerHTML = el.title;
        orderTitleContainer.append(orderTitle);



        const priceCloseOrder = document.createElement('div');
        priceCloseOrder.classList.add('priceCloseOrder')
        orderCard.append(priceCloseOrder);

        const orderPrice = document.createElement('p');
        orderPrice.innerHTML = `${el.price} BYN`;
        priceCloseOrder.append(orderPrice);

        const closeOrder = document.createElement('i');
        closeOrder.className = "fa fa-times";
        priceCloseOrder.append(closeOrder);


        const imgOrderCard = document.createElement('img');
        imgOrderCard.src = el.img;
        imgOrderCardContainer.append(imgOrderCard);

        document.addEventListener('click', confirmOrderClose);
    })

    let priceOfOrders = document.createElement("p");
    priceOfOrders.classList.add('priceOfOrders')
    priceOfOrders.innerHTML = `Total amount: ${countOrder()} BYN`
    orderPageContainer.append(priceOfOrders);


    const buttonsOrder = document.createElement('div');
    buttonsOrder.classList.add('buttonsOrder');
    orderPageContainer.append(buttonsOrder);

    const goBackButtonContainer = document.createElement('div');
    goBackButtonContainer.classList.add('goBackButtonContainer')
    buttonsOrder.append(goBackButtonContainer);


    const goBackButton = document.createElement('button');
    goBackButton.innerHTML = "Go back";
    goBackButton.classList.add('goBackButton')
    goBackButtonContainer.append(goBackButton);

    const confirmOrderButtonContainer = document.createElement("div")
    confirmOrderButtonContainer.classList.add('confirmOrderButtonContainer');
    buttonsOrder.append(confirmOrderButtonContainer);

    const confirmOrderButton = document.createElement('button');
    confirmOrderButton.innerHTML = "Confirm order";
    confirmOrderButton.classList.add('confirmButton')
    confirmOrderButtonContainer.append(confirmOrderButton);
}



export const confirmOrderClose = (e) => {
    if (e.target.className === 'fa fa-times') {
        let arr = Array.from(e.target.parentElement.children);
        let index = arr.indexOf(e.target.parentElement)
        order.splice(index, 1);
        e.target.parentElement.parentElement.remove();
        document.querySelector('.priceOfOrders').innerHTML = `Your orders: ${countOrder()} BYN`
        console.log(document.querySelector('.titleHeaderBasket').innerHTML);
    }
}


export const resetPage = (e) => {
    if (e.target.className === "goBackButton") {
        document.querySelector('.mainOrderContainer').remove();
        document.querySelector('.containerBasketWish').style.display = "";
        document.querySelector('.content').style.display = "";
        document.querySelector('.filterContainer').style.display = "block";
    }
}


export const confirmOrder = (e) => {
    if (e.target.className === "confirmButton") {
        document.querySelector('.mainOrderContainer').remove();

        const successfulMessageContainer = document.createElement('div');
        successfulMessageContainer.classList.add('successfulMessageContainer')
        root.append(successfulMessageContainer);

        const successfulMessage = document.createElement('p');
        successfulMessage.classList.add('successfulMessage');
        successfulMessage.innerHTML = "Thank you for your order!";
        successfulMessageContainer.append(successfulMessage);
    }
}
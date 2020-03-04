import { renderHeader } from './modules/renderHeader.js';
import { renderFilters, renderPizzaFilter } from './modules/renderFilters.js';
import { renderMainPage } from './modules/renderMainPage.js';
import { funcLogin, createLogin } from './modules/funcLogin.js';
import { addTocard } from './modules/renderOrder.js';
import { createOrderContainer, renderOrder, basketContainerClose, removeOrderItem, makeOrder } from './modules/renderBusket.js';
import { resetPage, confirmOrder } from './modules/renderOrderPage.js';


const root = document.getElementById('root');


window.addEventListener('load', renderHeader);
window.addEventListener('load', renderFilters);
window.addEventListener('load', renderMainPage);
window.addEventListener('load', createOrderContainer);
document.addEventListener('click', createLogin);
document.addEventListener('click', confirmOrder);
document.addEventListener('click', resetPage);
document.addEventListener('click', makeOrder);
document.addEventListener('click', renderPizzaFilter);
document.addEventListener('click', funcLogin);
document.addEventListener('click', removeOrderItem)
document.addEventListener('click', renderOrder);
document.addEventListener('click', basketContainerClose);
document.addEventListener('click', addTocard);


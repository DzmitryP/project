export const renderHeader = () => {
    const header = document.createElement('div');
    root.append(header);

    const topHeader = document.createElement('div');
    topHeader.className = 'headerTop';
    topHeader.setAttribute('id', 'top-header');
    header.append(topHeader);

    const headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    topHeader.append(headerContainer);

    const headerLinksLeft = document.createElement('div');
    headerLinksLeft.className = "headerLinksLeft";
    headerContainer.append(headerLinksLeft);

    const phoneHeader = document.createElement('div');
    headerLinksLeft.append(phoneHeader);

    const phoneLinkImg = document.createElement('i');
    phoneLinkImg.className = 'fa fa-phone';
    phoneHeader.append(phoneLinkImg);

    const phoneLink = document.createElement('a');
    phoneLink.setAttribute('href', '#');
    phoneLink.innerHTML = "+375447825911";
    phoneHeader.append(phoneLink);

    const mailHeader = document.createElement('div');
    headerLinksLeft.append(mailHeader);

    const mailLinkImg = document.createElement('i');
    mailLinkImg.className = 'fa fa-envelope-o';
    mailHeader.append(mailLinkImg);

    const mailLink = document.createElement('a');
    mailLink.setAttribute('href', '#');
    mailLink.innerHTML = "projectpizza@gmail.com";
    mailHeader.append(mailLink);

    const locationHeader = document.createElement('div');
    headerLinksLeft.append(locationHeader);

    const locationLinkImg = document.createElement('i');
    locationLinkImg.className = "fa fa-map-marker";
    locationHeader.append(locationLinkImg);

    const locationLink = document.createElement('a');
    locationLink.setAttribute('href', '#');
    locationLink.innerHTML = "Gomel";
    locationHeader.append(locationLink);


    const headerLinksRight = document.createElement('div');
    headerLinksRight.className = 'headerLinksRight';
    headerContainer.append(headerLinksRight);

    const accountHeader = document.createElement('div');
    accountHeader.classList.add('account-header');
    headerLinksRight.append(accountHeader);

    const accountLinkImg = document.createElement('i');
    accountLinkImg.id = "accountLinkImg";
    accountLinkImg.className = "fa fa-user-o";
    accountHeader.append(accountLinkImg)

    const accountLink = document.createElement('a');
    accountLink.innerHTML = 'My account';
    accountLink.style = "cursor: pointer";
    accountLink.classList.add('account-link');
    accountHeader.append(accountLink);

    const mainHeader = document.createElement('div');
    mainHeader.className = "headerMain";
    header.append(mainHeader);

    const mainHeaderContainer = document.createElement('div');
    mainHeaderContainer.classList.add('container', 'headerMainContainer');
    mainHeader.append(mainHeaderContainer);

    const logoContainer = document.createElement('div');
    logoContainer.className = 'containerLogo';
    mainHeaderContainer.append(logoContainer);

    const logo = new Image;
    logo.src = "img/logo.2.png";
    logoContainer.append(logo);

    const titleLogo = document.createElement('p');
    titleLogo.classList.add('logoTitle');
    titleLogo.innerHTML = 'PIZZA';
    titleLogo.style = "cursor: pointer";
    logoContainer.append(titleLogo);

    const basketWishContainer = document.createElement('div');
    basketWishContainer.className = 'containerBasketWish';
    mainHeaderContainer.append(basketWishContainer);

    let basketCounterValue = 0;

    const basketContainer = document.createElement('div');
    basketContainer.className = 'containerBasket';
    basketWishContainer.append(basketContainer);

    const counterBasket = document.createElement('div');
    counterBasket.className = 'counter';
    counterBasket.innerHTML = 0;
    basketContainer.append(counterBasket);

    const basket = document.createElement('div');
    basketContainer.append(basket);

    const basketImg = document.createElement('i');
    basketImg.className = 'fa fa-shopping-cart';
    basket.append(basketImg);

    const basketLink = document.createElement('a');
    basketLink.classList.add('linkBasket');
    basketLink.innerHTML = 'Your Cart';
    basketContainer.append(basketLink);
}
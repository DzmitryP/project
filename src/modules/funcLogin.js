class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}

const users = [];

//отрисовка формы

export let funcLogin = (e) => {
    if (e.target.className === 'account-link') {
        document.querySelector('.account-link').style = "display: none";
        document.getElementById('accountLinkImg').style = 'display: none';

        const formInp = document.createElement('form');
        formInp.classList.add('formInput');
        document.querySelector('.account-header').append(formInp);

        const loginInp = document.createElement('input');
        loginInp.classList.add('loginInput');
        loginInp.setAttribute('type', 'text', 'required');
        loginInp.setAttribute('placeholder', 'your name');
        loginInp.setAttribute('id', 'login');
        formInp.append(loginInp);

        const passwordInp = document.createElement('input');
        passwordInp.classList.add('passwordInput');
        passwordInp.setAttribute('type', 'password', 'required');
        passwordInp.setAttribute('placeholder', 'your password');
        passwordInp.setAttribute('id', 'password');
        formInp.append(passwordInp);

        const submitInp = document.createElement('input');
        submitInp.classList.add('submitInput');
        submitInp.setAttribute('type', 'submit');
        submitInp.setAttribute('value', 'sign up');
        formInp.append(submitInp);
    }
}

//валидация формы, занесение в localstorage

export const createLogin = (e) => {
    e.preventDefault();
    let loginInp = document.querySelector('.loginInput');
    let passwordInp = document.querySelector('.passwordInput');
    if (e.target.className === 'submitInput') {
        if (loginInp.value === "") {
            const errMessage = document.createElement('p');
            errMessage.classList.add('errMessage')
            errMessage.innerHTML = "invalid login";
            document.querySelector('.headerLinksRight').append(errMessage)
            setTimeout(() => {
                errMessage.remove();
            }, 3000);

        } else {
            let user = new User(loginInp.value, passwordInp.value);
            let validateUser = users.find(item => item.login === loginInp.value);
            if (validateUser) {
                const errMessage = document.createElement('p');
                errMessage.classList.add('errMessage')
                errMessage.innerHTML = "This login is already taken";
                document.querySelector('.headerLinksRight').append(errMessage)
                setTimeout(() => {
                    errMessage.remove();
                }, 3000);
            } else {
                users.push(user);
                user.isLogged = true;
                localStorage.setItem('users', JSON.stringify(users))
                console.log(users);
                document.querySelector('.formInput').style = "display: none"
                const message = document.createElement('p');
                message.classList.add('message');
                message.innerHTML = `Hello, ${user.login}`;
                document.querySelector('.account-header').append(message);
            }

        }

    }
}
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");

const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);
addSavedData();

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

function onFormInput(event) { 
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

function onFormSubmit(event) { 
    event.preventDefault();
    const storageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (form.elements.email.value === "" || form.elements.message.value === "") {
        alert("Fill into all the fields");
    }
    else if (form.elements.message.value.trim() === "") {
        alert("The Message filed is empty. Please fill into the Message field");
    }
    else {        
        console.log(storageData);
    }

    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.

function addSavedData() { 
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSavedData = JSON.parse(savedData);

    if (savedData) { 
        emailInput.value = parsedSavedData.email;
        textarea.value = parsedSavedData.message;
    }
};








// const form = document.querySelector(".feedback-form");
// const emailInput = document.querySelector(".feedback-form input");
// const textarea = document.querySelector(".feedback-form textarea");

// const LOCALSTORAGE_KEY = "feedback-form-state";

// form.addEventListener("input", throttle(onFormInput, 500));
// form.addEventListener("submit", onFormSubmit);

// addSavedData();
// // textarea


// // 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// // в которых сохраняй текущие значения полей формы. 
// // Пусть ключом для хранилища будет строка "feedback-form-state".

// function onFormInput(event) { 

//     const {
//         elements: { email, message }
//     } = event.currentTarget;
    
//     const objEmailMessage = { email: email.value, message: message.value }
    
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objEmailMessage));
//     // console.log(localStorage);
//     // event.currentTarget.reset();
// }



// // 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями
// // email, message и текущими их значениями в консоль.

// function onFormSubmit(event) { 
//     event.preventDefault();
//     console.log({ email: event.currentTarget.email.value, message: event.currentTarget.message.value });
//     event.currentTarget.reset();
//     // localStorage.clear();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// }


// // 2. При загрузке страницы проверяй состояние хранилища,
// // и если там есть сохраненные данные, заполняй ими поля формы.
// // В противном случае поля должны быть пустыми.

// function addSavedData() { 
//     const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
//     const parsedSavedData = JSON.parse(savedData);
//     // console.log(parsedSavedData);

//     const savedEmail = parsedSavedData.email;
//     console.log(savedEmail)
//     const savedMessage = parsedSavedData.message;

//     if (savedData) { 
//         emailInput.value = savedEmail;
//         textarea.value = savedMessage;
//     }
// };







import './index.scss';
const OPEN_MODAL_WINDOW = "visible";
const modalWindow = document.querySelector(".modal_window");
const overlay = document.querySelector(".modal__overlay");
const btnOpen = document.querySelector(".btn_open");
const btnNo = document.querySelector(".btn_no");
const btnYes = document.querySelector(".btn_yes");

// let isOpen = modalWindow.classList.contains(OPEN_MODAL_WINDOW);

btnOpen.addEventListener("click", openModal);
btnNo.addEventListener("click", closeModal);
btnYes.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// toggleModal();
//
// function toggleModal() {
//     if (isOpen) {
//         closeModal();
//     } else {
//         openModal();
//     }
// }

function openModal() {
    modalWindow.classList.add(OPEN_MODAL_WINDOW);
}
function closeModal() {
    modalWindow.classList.remove(OPEN_MODAL_WINDOW);
}
setTimeout(() => {
    console.log ("Open modal window!");
    openModal();
}, 3000);

setTimeout (() => {
    console.log ("Close open window!");
    closeModal();
}, 10000);



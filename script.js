'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener(`click`, openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  //SCROLLING TO SECTION ~ THE OLD WAY
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  //SCROLLING TO SECTION ~ THE NEW WAY
  section1.scrollIntoView({ behavior: `smooth` });
});

////////////////////JUST FOR LEARNING///////////////////////////

// //SELECTING ELEMENTS FROM DOM
// const header = document.querySelector(`.header`);

// //CREATING ELEMENTS
// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// // message.textContent = `We use cookies for improved functionality and analytics`;
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// //DIFFERENT WAYS TO ADD ELEMENT TO DOM
// // header.prepend(message);  // (1) Add at start of header
// // header.append(message.cloneNode(true));  // (2) Add a clone of the element as same element can't be added to DOM at two places
// header.append(message); // (3) Add at the end of header
// //header.before(message);  // (4) Add before header
// //header.after(message);  // (5) Add after header

// //DELETE ELEMENT FROM DOM
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });

// //STYLES
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);

//////////////////////////////////////////////////////////////

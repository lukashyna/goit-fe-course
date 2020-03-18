refs = {
  firstButton: document.querySelector(".button1"),
  secondButton: document.querySelector(".button2"),
  thirdButton: document.querySelector(".button3"),
  fourthButton: document.querySelector(".button4"),
  fifthButton: document.querySelector(".button5"),
  sixthButton: document.querySelector(".button6"),
  modalForm: document.querySelector(".lightbox"),
  closeForm: document.querySelector(".lightbox__button"),
  sentRequestTwo: document.querySelector(".sent-request2"),
  sentRequestFour: document.querySelector(".sent-request4"),
  sentRequestFive: document.querySelector(".sent-request5"),
  sentRequestSix: document.querySelector(".sent-request6")
};
// modal
function setData() {
  refs.modalForm.classList.add(`is-open`);
}
function removeData() {
  refs.modalForm.classList.remove(`is-open`);
}

function openModalForm(event) {
  event.preventDefault();
  setData();
}

function closeModalForm(event) {
  event.preventDefault();
  removeData();
}
// sentRequest
function sentRequest1() {
  event.preventDefault();
  refs.sentRequestTwo.classList.remove(`visually-hidden`);
  setTimeout(() => {
    refs.sentRequestTwo.classList.add(`visually-hidden`);
  }, 2000);
}
function sentRequest2() {
  event.preventDefault();
  refs.sentRequestFour.classList.remove(`visually-hidden`);
  setTimeout(() => {
    refs.sentRequestFour.classList.add(`visually-hidden`);
  }, 2000);
}
function sentRequest3() {
  event.preventDefault();
  refs.sentRequestFive.classList.remove(`visually-hidden`);
  setTimeout(() => {
    refs.sentRequestFive.classList.add(`visually-hidden`);
  }, 2000);
}
function sentRequest4() {
  event.preventDefault();
  refs.sentRequestSix.classList.remove(`visually-hidden`);
  setTimeout(() => {
    refs.sentRequestSix.classList.add(`visually-hidden`);
  }, 2000);
}
refs.firstButton.addEventListener(`click`, openModalForm);
refs.thirdButton.addEventListener(`click`, openModalForm);
refs.closeForm.addEventListener(`click`, closeModalForm);
refs.secondButton.addEventListener(`click`, sentRequest1);
refs.fourthButton.addEventListener(`click`, sentRequest2);
refs.fifthButton.addEventListener(`click`, sentRequest3);
refs.sixthButton.addEventListener(`click`, sentRequest4);

$(function() {
  $(".team-list").slick({ slidesToShow: 4, slidesToScroll: 4 });
});
$(function() {
  $(".slide-list").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
});
// $(function() {
//   $(".tehnology-list").slick({
//     autoplay: true,
//     autoplaySpeed: 5000,
//     dots: true
//   });
// });

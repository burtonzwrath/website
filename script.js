const li = document.querySelectorAll(`.navBar__li`);
const input = document.querySelectorAll(".subscribe-input");
const buttonSubscribe = document.querySelectorAll(".subscribe-button");
const button = document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const form = document.querySelectorAll("form");
const menuBtn = document.querySelector(".burger-menu");
const navbarClone = document.querySelector(`.navBar`).cloneNode(1);
const menu = document.querySelector(".navigation-wrapper");
const modalWindow = document.querySelector(".modal__window");
const modalOverlay = document.querySelector(`.modal-overlay`);
const modalClose = document.querySelector(`.modal__close`);
li.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.classList.add("hover");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("hover");
  });
});
input.forEach((item) => {
  item.addEventListener("blur", (e) => {
    const parent = e.target.closest(".subscribe");
    const el = parent.querySelector(".subscribe-button");
    el.focus();
  });
});
button.forEach((item) => {
 item.addEventListener("mouseenter",(e)=> {
   e.target.classList.add("activeBorder")
 })
   item.addEventListener("mouseout",(e)=>{
     e.target.classList.remove("activeBorder")
 })
  item.style.cursor="pointer"
  item.addEventListener("click", (e) => {
    e.target.style.marginTop = "4px";
    e.target.style.marginLeft = "4px";
    setTimeout(() => {
      e.target.style.marginTop = "0";
      e.target.style.marginLeft = "0";
    }, 300);
  });
});
buttonSubscribe.forEach((item)=>{
  item.style.cursor="pointer"
})

const faceIconClone = document
  .querySelector(`.buttonFace-wrapper`)
  .cloneNode(1);

function openModalWindow() {
  modalWindow.appendChild(navbarClone);
  modalWindow.appendChild(faceIconClone);
  modalOverlay.style.display = "flex";
  menuBtn.classList.add("active");
  menu.classList.add("active");
  body.style.position = "fixed";
  document.addEventListener("keydown", onKeyDown);
}
function closeModalWindow() {
  modalOverlay.style.display = "none";
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  body.style.position = "static";
}
function onKeyDown(e) {
  if (e.key === "Escape") {
    modalOverlay.style.display = "none";
    document.removeEventListener("keydown", onKeyDown);
  }
}

menuBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    openModalWindow();
  }
});

menuBtn.addEventListener("click", () => {
  openModalWindow();
});

modalClose.addEventListener("keydown", () => {
  closeModalWindow();
});

modalClose.addEventListener("click", () => {
  closeModalWindow();
});

form.forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const parent = e.target.closest(".subscribe");
    const el = parent.querySelector(".subscribe-button");
    el.querySelector("button").focus();
    e.preventDefault();
  });
});

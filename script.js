"use strict";

const notification = document.querySelectorAll(".notification");

const notifications = document.querySelector(".notifications");

let countInner = document.querySelector(".count");

document.addEventListener("onload", count());

function count() {
  let count = 0;
  notification.forEach((e) => {
    if (!e.classList.contains("read")) {
      count += 1;
      console.log(count);
    }
    countInner.innerHTML = count;
  });
}

function readAll() {
  notification.forEach((e) => {
    if (!e.classList.contains("read")) {
      e.classList.add("read");
    }
    count();
  });
}

notifications.addEventListener("click", function (e) {
  if (e.target.closest(".notification").classList.contains("read")) {
    return;
  }
  if (!e.target.closest(".notification").classList.contains("read")) {
    e.target.closest(".notification").classList.add("read");
    count();
  }
});

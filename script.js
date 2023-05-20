"use strict";

const wButton = document.querySelector(".crash");
const rButton = document.querySelector(".kick");
const yButton = document.querySelector(".snare");
const iButton = document.querySelector(".tom1");
const pButton = document.querySelector(".tom2");
const sButton = document.querySelector(".tom3");
const dButton = document.querySelector(".tom4");

const keys = document.querySelectorAll(".btn_group");

const crashAudio = new Audio("crash.mp3");
const kickAudio = new Audio("kick-bass.mp3");
const snareAudio = new Audio("snare.mp3");
const tom1Audio = new Audio("tom-1.mp3");
const tom2Audio = new Audio("tom-2.mp3");
const tom3Audio = new Audio("tom-3.mp3");
const tom4Audio = new Audio("tom-4.mp3");

const playAudio = (audio) => {
  audio.currentTime = 0;
  audio.play();
};

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.btn_group[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  btn.classList.add("active");
}

document.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("active");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// For mobiles

// TODO: Find a way to add active class in mobiles too

wButton.addEventListener("click", () => {
  playAudio(crashAudio);
});

rButton.addEventListener("click", () => {
  playAudio(kickAudio);
});

yButton.addEventListener("click", () => {
  playAudio(snareAudio);
});

iButton.addEventListener("click", () => {
  playAudio(tom1Audio);
});

pButton.addEventListener("click", () => {
  playAudio(tom2Audio);
});

sButton.addEventListener("click", () => {
  playAudio(tom3Audio);
});

dButton.addEventListener("click", () => {
  playAudio(tom4Audio);
});

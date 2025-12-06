import { createPage1, createPage2, createPage3 } from "./createPage.js";
import "./styles.css";
import '../node_modules/modern-normalize';

const button1 = document.getElementById("menuButton1");
const button2 = document.getElementById("menuButton2");
const button3 = document.getElementById("menuButton3");

button1.addEventListener("click", createPage1);
button2.addEventListener("click", createPage2);
button3.addEventListener("click", createPage3);



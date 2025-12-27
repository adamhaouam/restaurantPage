import createPage1 from "./createPage1.js";
import createPage2 from "./createPage2.js";
import createPage3 from "./createPage3.js";
import "./styles.css";
import '../node_modules/modern-normalize';

const button1 = document.getElementById("menuButton1");
const button2 = document.getElementById("menuButton2");
const button3 = document.getElementById("menuButton3");

button1.addEventListener("click", createPage1);
button2.addEventListener("click", createPage2);
button3.addEventListener("click", createPage3);



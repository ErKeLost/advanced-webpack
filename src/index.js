import "./index.css";
import "./title.less";
import imag from "./girl.jpg";
console.log(666);

const div = document.createElement("div");
div.textContent = "<span>43243543132</span>";
div.classList.add('bg')
div.classList.add("name");

document.body.append(div);

const img = document.createElement("img");
img.src = imag;

document.body.append(img);

let image = document.createElement("img");
image.src = "../images/Rohan.jpg";
image.alt = "headshot of Rohan wearing sunglasses";
image.width = "200";
image.height = "200";
image.style.width = "fit-content";
image.style.display = "block";
image.style.marginRight = "auto";
image.style.marginLeft = "auto";
image.style.borderRadius = "50%";
document.body.append(image);

let para = document.createElement("p");

let fL = document.createElement("span");
fL.style.fontWeight = "bold";
var firstLine = document.createTextNode("Hello, my name is Rohan Singh.");
fL.appendChild(firstLine);
para.appendChild(fL);

var rT = document.createElement("span");

var restText = document.createTextNode(
  " I'm a former software engineer and a \
Master's student at PSU. My hobbies are reading, riding motorcycles, \
listening to music and watching nature documentaries."
);

para.style.width = "50%";
para.style.display = "block";
para.style.marginRight = "auto";
para.style.marginLeft = "auto";
para.style.fontFamily = "'Open Sans', 'Helvetica Neue', sans-serif";
para.style.fontSize = " 1.2em";
para.style.color = "#333333";

rT.appendChild(restText);

para.appendChild(rT);

document.body.append(para);

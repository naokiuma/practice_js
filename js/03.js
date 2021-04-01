let t = document.querySelector("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");

let link1 = document.createElement("a");
let link2 = document.createElement("a");
let img1 = document.createElement("img");
let img2 = document.createElement("img");

link1.href="a1.html";
link2.href="a2.html";
img1.src="/img/bookmark.png";
img2.src="/img/bookmark.png";
link1.append(img1);
link2.append(img2);
li1.append(link1);
li2.append(link2);
t.append(li1);
t.append(li2);

export async function getDatach(i, x) {
  const responseCH = await axios.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"
  );
  let productData = responseCH.data;
  // console.log(productData);
  for (let product of productData) {
    if (product.id == i) {
      // let leftCard = document.createElement("div");
      // let card = document.querySelector("#section");
      // let cardleft = document.querySelector(".secLeft");

      // let secLeft = document.createElement("div");
      // secLeft.classList.add("secLeft");
      // section.append(secLeft);
      y++;
      let secLeft = document.querySelector(".secLeft");

      let checkoutLeftCard = document.createElement("div");
      checkoutLeftCard.classList.add("checkout-leftCard");
      secLeft.append(checkoutLeftCard);
      let imgdive = document.createElement("div");
      imgdive.classList.add("imgdive");
      checkoutLeftCard.append(imgdive);
      let image = document.createElement("img");
      image.src = product.preview;
      imgdive.append(image);
      let textdive = document.createElement("div");
      textdive.classList.add("textdive");
      checkoutLeftCard.append(textdive);
      let checkedprodTitle = document.createElement("h4");
      checkedprodTitle.classList.add("checkedprodTitle");
      let into = document.createElement("p");
      into.classList.add("into");
      let checkedAmount = document.createElement("p");
      checkedAmount.classList.add("checked-amount");
      checkedprodTitle.innerHTML = product.name;
      into.innerHTML = `x${x}`;
      checkedAmount.innerHTML = `Amount: Rs ${product.price * x}`;
      textdive.append(checkedprodTitle, into, checkedAmount);
      //.................
      toItem = document.querySelector(".toItem");
      toItem.innerHTML = `Total Items: ${y}`;

      //.............
      tAmount = tAmount + product.price * x;
    }
  }
}
let badge = document.querySelector("#cartBadge");
let toItem;
let y = 0;

let counter;
let count = localStorage.getItem("arrayId2");
// count ? (count = count.split(",")) : (counter = 1);
if (count) {
  count = count.split(",");
  counter = count.length - 1;
} else {
  count = 0;
  counter = 0;
}
console.log(count, counter);
let q;
// count == 0 ? (q = 1000) : (q = (counter / 3) * 1000);
if (counter == 0) {
  badge.classList.add("none");
  q = 1000;
} else {
  let hidden = document.querySelector(".none");
  if (hidden) hidden.classList.remove("none");
  badge.innerHTML = counter;
  if (counter > 0 && counter < 2) q = 1500;
  if (counter > 1 && counter < 5) q = 2500;
  if (counter > 4 && counter < 9) q = (counter / 2) * 1200;
  if (counter > 8) q = (counter / 3) * 1000;
}
toItem = document.querySelector(".toItem");
toItem.innerHTML = `Total Items: ${y}`;
// let idfromP = localStorage.getItem("id");

const container = document.querySelector("#container");
let x = 1;
let secRight = document.querySelector(".secRight");
let tAmount = 0;

if (counter == 1) {
  getDatach(count[1], x);
  console.log("aalo na re11");
}

if (counter > 1) {
  for (let i = 1; i < counter + 1; i++) {
    // if(i==0){
    //   getDatach(count[0]);
    //   continue;
    x = 1;
    for (let j = i + 1; j <= counter; j++) {
      if (count[i] == count[j]) {
        x++;
        // console.log(count.pop[j]);
        count.splice(j, 1);
        j--;
        counter--;
      }
    }
    getDatach(count[i], x);
  }
}

setTimeout(amountCard, q);
function amountCard() {
  let checkoutRightCard = document.createElement("div");
  checkoutRightCard.classList.add("checkout-rightCard");
  secRight.append(checkoutRightCard);
  let tamountTitle = document.createElement("p");
  tamountTitle.classList.add("tamountTitle");
  tamountTitle.innerHTML = "Total Amount";
  let totalAmount = document.createElement("p");
  // totalAmount.classList.add("totalAmount");
  totalAmount.innerHTML = `Amount Rs.`;
  let spanAmount = document.createElement("span");
  spanAmount.classList.add("totalAmount");
  spanAmount.innerHTML = `${tAmount}`;
  totalAmount.append(spanAmount);
  let button = document.createElement("button");
  button.classList.add("Addbutton");
  button.innerHTML = "Place Order";
  button.onclick = function () {
    if (y > 0) location.href = "confirmation.html";
  };
  checkoutRightCard.append(tamountTitle, totalAmount, button);
}

let burger = document.querySelector(".hambergur");
burger.addEventListener("click", function () {
  let span = document.querySelector(".toggleSpan");
  span.style = "display:block";
  burger.style = "display:none";
  span.addEventListener("click", function () {
    span.style = "display:none";
    burger.style = "display:block";
  });
});
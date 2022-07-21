// import { getDatach } from "./checkout.html";
async function getData(s) {
  const response = await axios.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"
  );
  let productData = response.data;
  console.log(productData);
  const body = document.querySelector("body");
  const container = document.querySelector("#container");
  // container.id = "container";
  // body.appendChild(container);
  for (let product of productData) {
    const {
      id,
      name: mname,
      preview,
      photos,
      description,
      size,
      isAccessory,
      brand,
      price,
    } = product;
    if (id == s) {
      const LHS = document.createElement("div");
      LHS.id = "LHS";
      const RHS = document.createElement("div");
      RHS.id = "RHS";
      container.append(LHS, RHS);
      // container.appendChild(RHS);
      // LHS.........
      const mainImg = document.createElement("img");
      mainImg.src = preview;
      LHS.appendChild(mainImg);

      // RHS..........
      const text = document.createElement("div");
      text.classList.add("rhsCont");
      RHS.appendChild(text);
      const title = document.createElement("h1");
      title.innerHTML = mname;
      const brands = document.createElement("h4");
      brands.innerHTML = brand;
      const cost1 = document.createElement("h3");
      cost1.innerHTML = `Price: Rs `;
      const cost = document.createElement("span");
      cost.id = "price";
      cost.innerHTML = price;
      cost1.appendChild(cost);

      const titleDesc = document.createElement("h3");
      titleDesc.innerHTML = "Description";
      const descrip = document.createElement("p");
      descrip.innerHTML = description;
      const prodPrev = document.createElement("h3");
      prodPrev.innerHTML = "Product Preview";
      const imgGrid = document.createElement("div");
      imgGrid.id = "imgGrid";

      text.append(title, brands, cost1, titleDesc, descrip, prodPrev, imgGrid);

      for (let photo of photos) {
        // for (let i = 0; i < photos.length; i++) {
        let gridImg = document.createElement("img");
        // gridImg.classList.add("unactive");
        gridImg.src = photo;
        imgGrid.appendChild(gridImg);
        // gridImg.style.border = "none";

        gridImg.addEventListener("click", function () {
          var suraj = document.querySelector(".active");
          if (suraj) suraj.classList.remove("active");
          gridImg.classList.add("active");
          mainImg.src = photo;
        });

        imgGrid.firstChild.className = "active";
      }

      const btn = document.createElement("button");
      btn.innerHTML = "Add to Cart";
      text.appendChild(btn);

      // let counts = [];
      // let count = localStorage.getItem(`county`);

      let badge = document.querySelector("#cartBadge");
      let counter;
      let count = localStorage.getItem("arrayId2");
      // counter=count.length;
      if (!count) {
        count = 0;
      }
      // if (count.length == 1) {
      //   count = [];
      // }
      // count.push(localStorage.getItem("arrayId"));

      console.log(count);
      // if (count == null) {
      //   count = [];
      //   // console.log("helloo tou");
      // }

      // ids = [];

      btn.addEventListener("click", function () {
        count = count + "," + id;
        console.log(count);

        localStorage.setItem("arrayId2", count);

        // count = localStorage.getItem("arrayId0");
        counter = localStorage.getItem("arrayId2").split(",").length - 1;
        badge.classList.remove("none");
        badge.innerHTML = counter;

        console.log(counter);
      });
      // if (count != 0) {
      //   counter = localStorage.getItem("arrayId2").split(",").length;
      // }
      if (count == 0) {
        badge.classList.add("none");
      } else {
        let hidden = document.querySelector(".none");
        if (hidden) hidden.classList.remove("none");
        counter = localStorage.getItem("arrayId2").split(",").length - 1;
        badge.innerHTML = counter;
      }
    }
  }
}
let url = document.URL;
let urlId = url.split("=");
let Id = urlId[1];
getData(Id);

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
// export function display();

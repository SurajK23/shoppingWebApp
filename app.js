async function getData() {
  const response = await axios.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
  );

  const productData = response.data;
  console.log(productData);

  const section1 = document.getElementById("sec1");
  const section2 = document.getElementById("sec2");
  const heading1 = document.getElementById("head1");
  const heading2 = document.getElementById("head2");

  for (let product of productData) {
    const {
      id,
      name,
      preview,
      photos,
      description,
      size,
      isAccessory,
      brand,
      price,
    } = product;
    const cards = document.createElement("div");
    cards.classList.add("card");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    title.classList.add("cardTitle");
    const Brand = document.createElement("h4");
    const Price = document.createElement("h5");
    Price.classList.add("price");
    cards.id = id;
    cards.addEventListener("click", function () {
      document.location = `../pd.html?p=${id}`;
    });

    img.src = preview;
    title.innerHTML = name;
    Brand.innerHTML = brand;
    Price.innerHTML = `Rs ${price}`;
    cards.appendChild(img);
    cards.appendChild(title);
    cards.append(Brand);
    cards.appendChild(Price);
    if (isAccessory === false) {
      section1.appendChild(cards);
    } else {
      section2.appendChild(cards);
    }
  }
}
getData();
let badge = document.querySelector("#cartBadge");
// let count;
let counter;
let count = localStorage.getItem("arrayId2");
console.log(count);
if (count == null) {
  badge.classList.add("none");
} else {
  let hidden = document.querySelector(".none");
  if (hidden) hidden.classList.remove("none");
  counter = count.split(",").length - 1;
  badge.innerHTML = counter;
}
let burger = document.querySelector(".hambergur");
burger.addEventListener("click", function () {
  let span = document.querySelector(".toggleSpan");
  span.style = "display:block";
  burger.style = "display:none";
  counter = count.split(",").length - 1;
  badge.innerHTML = counter;

  span.addEventListener("click", function () {
    span.style = "display:none";
    burger.style = "display:block";
  });
});

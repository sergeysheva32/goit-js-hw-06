const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");


const oneIngr = document.createElement("li");
oneIngr.textContent = `Potatoes`;
oneIngr.classList.add("item")
console.log(oneIngr);
list.append(oneIngr);

const twoIngr = document.createElement("li");
twoIngr.textContent = `Mushrooms`;
twoIngr.classList.add("item")
console.log(twoIngr);
list.append(twoIngr);

const threeIngr = document.createElement("li");
threeIngr.textContent = `Garlic`;
threeIngr.classList.add("item")
console.log(threeIngr);
list.append(threeIngr);

const fourIngr = document.createElement("li");
fourIngr.textContent = `Tomatos`;
fourIngr.classList.add("item")
console.log(fourIngr);
list.append(fourIngr);

const fiveIngr = document.createElement("li");
fiveIngr.textContent = `Herbs`;
fiveIngr.classList.add("item")
console.log(fiveIngr);
list.append(fiveIngr);

const sixIngr = document.createElement("li");
sixIngr.textContent = `Condiments`;
sixIngr.classList.add("item")
console.log(sixIngr);
list.append(sixIngr);


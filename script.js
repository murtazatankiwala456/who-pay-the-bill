const btn = document.querySelector(".btn");
const result = document.querySelector("#result");

btn.addEventListener("click", nameGenerator);

function nameGenerator() {
  const list = ["Murtaza", "Hatim", "Taher"]; // create array of names
  const random = Math.floor(Math.random() * list.length); //generates random element number using length property
  result.innerHTML = `<div class="alert alert-success"> Congratulations! ${list[random]} pays the bill`; // render it in result div
}

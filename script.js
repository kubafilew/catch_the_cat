const btn = document.querySelector("#getCat");

btn.addEventListener("click", imgAdd);

function imgAdd() {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => {
      const url = data[0].url;
      const imgEl = document.createElement("img");
      imgEl.setAttribute("data-test", "img-kitty");
      imgEl.setAttribute("src", url);
      imgEl.setAttribute("width", "300px");
      imgEl.setAttribute("height", "200px");
      document.body.appendChild(imgEl);
    })
    .catch((err) => console.log(err));
}
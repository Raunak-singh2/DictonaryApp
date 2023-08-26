console.log("hellow world");

const buttomEl = document.getElementById("btn");
const animNameEl = document.getElementById("anim-name");
const animImageEl = document.getElementById("anim-image");

const url = "https://api.catboys.com/img";
buttomEl.addEventListener("click", async () => {
  try {
    animImageEl.innerHTML = `<img src="anim.png">`;
  buttomEl.innerText = "Loading....";
  animNameEl.innerText = "Updatingt....";
  const result = await fetch(url);
  const data = await result.json();
  animImageEl.src = data.url;
  animNameEl.innerText = data.artist;
  buttomEl.innerText = "Get Anim";
} catch (error) {
  console.log(error)
}
});

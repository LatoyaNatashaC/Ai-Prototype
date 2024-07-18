function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "poem goes here",
    autoStart: true,
    delay: 45,
    cursor: "",
  });
}

let poemFormGenerator = document.querySelector("#poem-generator");
poemFormGenerator.addEventListener("submit", generatePoem);

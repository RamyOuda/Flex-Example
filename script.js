function randomizeColors() {
  const divArr = document.querySelectorAll("div");

  divArr.forEach((div) => {
    const RGB = `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`;

    div.style.borderColor = RGB;
  });
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

setInterval(randomizeColors, 1000);

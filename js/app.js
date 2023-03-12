const colorCode = () => {
  const colorChe = "0123456789ABCDEF";
  let finalColor = "#";

  for (let i = 0; i < 6; i++) {
    const random = Math.round(Math.random() * 15);
    const randomCode = colorChe[random];
    finalColor += randomCode;
  }

  return finalColor;
};

const boxwrapper = document.querySelector(".boxItems");
const generateColorBox = () => {
  boxwrapper.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    boxwrapper.innerHTML += `<div onclick="copyColorCode(this)" class="box">
    <span style="background:${colorCode()}"></span>
    <p>${colorCode()}</p>
  </div>`;
  }
};

const copyColorCode = (code) => {
  const cCode = code.children[1].innerText;
  navigator.clipboard.writeText(cCode);
  code.children[1].innerText = "Copied";

  setTimeout(() => {
    code.children[1].innerText = cCode;
  }, 1500);
};

generateColorBox();

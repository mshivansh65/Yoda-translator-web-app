const btnTranslate = document.querySelector("#btn-translate");
const inputTextAreaEl = document.querySelector(".input");

const outputTextAreaEl = document.querySelector(".output");

function constructURL(inputString) {
  const key = `text`;
  const server1 = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json`;
  const server2 = `https://api.funtranslations.com/translate/yoda.json`;
  const serverURL = server2;
  const url = `${serverURL}?${key}=${inputString}`;
  return url;
}

function translate(inputString) {
  const url = constructURL(inputString);

  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      // console.log(json.contents.translated);
      outputTextAreaEl.textContent = json.contents.translated;
    })
    .catch((err) => {
      outputTextAreaEl.textContent = `Sorry! Please try after some time`;
    });
}

btnTranslate.addEventListener("click", function (e) {
  let inputText = inputTextAreaEl.value;
  outputTextAreaEl.textContent = "";
  if (inputText) {
    outputTextAreaEl.setAttribute("placeholder", "processing please wait!");
    translate(inputText);
    // changeButton().then(translate(inputText)).then(changeButton);
  }
});

const btnTranslate = document.querySelector("#btn-translate");
const inputTextAreaEl = document.querySelector(".input");

const outputTextAreaEl = document.querySelector(".output");

function constructURL(inputString) {
  const key = `text`;
  const server1 = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json`;
  const serverURL = server1;
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
    });
}

btnTranslate.addEventListener("click", function (e) {
  let inputText = inputTextAreaEl.value;

  if (inputText) {
    translate(inputText);
    // changeButton().then(translate(inputText)).then(changeButton);
  }
});

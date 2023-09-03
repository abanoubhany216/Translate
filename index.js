let from = document.getElementById("from");
let to = document.getElementById("to");
let sub = document.getElementById("sub");
let text = document.getElementById("text");
let result = document.getElementById("result");
let speak1 = document.getElementById("speak1");
let copy = document.getElementById("copy");
let copy1 = document.getElementById("copy1");

let utter = new SpeechSynthesisUtterance();

const languages = ['English','Arabic','French','German',"Italian","Chinese",'Japanese','Portuguese','Russian','Turkish','Spanish']; 
const codes = ["en","ar","fr","de","it","zh-TW","ja","pt","ru","tr","es"];
const words = [];
function checklang(lang) {
    return lang == from.value;
  }
  function checklang1(lang1) {
    return lang1 == to.value;
  }
languages.forEach(lang => {
let option = document.createElement("option");
let option1 = document.createElement("option");
option.innerHTML = lang;
option1.innerHTML = lang;
from.append(option)
to.append(option1)
});
async function translate_fun() {
  let from_code = languages.findIndex(checklang);
  let to_code = languages.findIndex(checklang1);
  const url = `https://translation-api4.p.rapidapi.com/translation?from=${codes[from_code]}&to=${codes[to_code]}&query=${text.value}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '2485ae7aa5msh68196d82e5384ffp153570jsn1ae24bad1b04',
          'X-RapidAPI-Host': 'translation-api4.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result_ = await response.json();
      result.value = result_.translation;
  } catch (error) {
      console.error(error);
  }
}

sub.onclick = ()=>{
  translate_fun()
}
  speak1.onclick = ()=>{
    let speak_code = languages.findIndex(checklang1);
    utter.lang = codes[speak_code];
    utter.volume = 2;
    utter.text = result.value;
    window.speechSynthesis.speak(utter);
  }
  copy.onclick = ()=>{
    text.select();
    text.setSelectionRange(0 , 99999);
document.execCommand("copy");
  }

  copy1.onclick = ()=>{
    result.select();
    result.setSelectionRange(0 , 99999);
document.execCommand("copy");
  }

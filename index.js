let from = document.getElementById("from");
let to = document.getElementById("to");
let text = document.getElementById("text");
let result = document.getElementById("result");
let speak = document.getElementById("speak");
let speak1 = document.getElementById("speak1");
let copy = document.getElementById("copy");
let copy1 = document.getElementById("copy1");

let utter = new SpeechSynthesisUtterance();
let utter1 = new SpeechSynthesisUtterance();

const languages = ['English','Arabic','French','German',"Italian","Chinese",'Japanese','portuguese']; 
const codes = ["en","ar","fr","de","it","zh","ja","pt"];
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
translate.engine = "google";
translate.from = from.value;
const trans = await translate(text.value,to.value);
result.innerHTML = trans;
  }
  text.oninput = ()=>{
  translate_fun()
  }
  from.onchange = ()=>{
        translate_fun()
  }
  to.onchange = ()=>{
    translate_fun()
  }

  speak.onclick = ()=>{
   let speak_code = languages.findIndex(checklang);
   utter1.lang = codes[speak_code];
    utter.lang = "en";
    utter.volume = 2;
    utter.text = text.value;
    window.speechSynthesis.speak(utter);
  }
  speak1.onclick = ()=>{
    let speak_code1 = languages.findIndex(checklang1);
    utter1.lang = codes[speak_code1];
    utter1.volume = 2;
    utter1.text = result.value;
    window.speechSynthesis.speak(utter1);
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
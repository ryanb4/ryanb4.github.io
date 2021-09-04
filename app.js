let textDiv = document.querySelector('.indexText');
let text = "HELLO";
let text2 = "HELLO my name is Ryan."
let i = 0;
let j = 10;
let lever = 1; 

function typeWriter() {

  if(lever == 1) {
    if(i < text.length) {
      textDiv.innerHTML += text.charAt(i);
      i++;
      j++;
      setTimeout(typeWriter, 300);
    } else {
      lever = 0;
    }
  }

}



function spellCheck() {
  
  if (lever == 0) {
    if (j < text2.length) {
      textDiv.innerHTML += text2.charAt(j);
    }
  }


}


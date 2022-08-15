let numSpaces:number = 100;
let inputString: string = "happy";
function prepend(numSpaces: number, inputString: string) {
  // your code here
  let spaces: string ="";
  for(let x=0; x<numSpaces;x++){
  spaces = spaces + "&nbsp;";
  }
  return spaces + inputString;
}

let result = prepend(numSpaces,inputString);
console.log(result);

let output = "\"" + result + "\"";

// Same as old Javascript
let outputElement = document.getElementById("output");
if (outputElement != null) {
    outputElement.innerHTML = output;
    console.log(numSpaces);
}

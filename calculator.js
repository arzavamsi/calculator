var button1 = document.getElementById("button1")
var text1 = document.getElementById("text1")

function display(val){
  text1.value= text1.value+val;
}
function result(){
  let x = text1.value
  let y = eval(x)
  text1.value = y
}
function clr(){
  text1.value=""
}

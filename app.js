const text = document.getElementById("in");
const button = document.getElementById("button");
const items = document.getElementById("items");
// var checkClass = document.getlemen 
button.addEventListener("click",additems);
text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      button.click();
    }
  });







function additems(){
if(text.value=="")
{
    return;
}
const list = document.createElement('li');
const spanWrapper = document.createElement('span');
const textlist = document.createTextNode(text.value);
const deleteButton = document.createElement('button'); 
const buttonCheck = document.createElement('button');
const spanCheck = document.createElement('span');

spanCheck.classList.add('checkWrapper');

buttonCheck.classList.add("btncheck");
// buttonCheck.innerHTML = '&check;'
// buttonCheck.textContent = '&radic;'
 buttonCheck.addEventListener("click",check);

spanCheck.appendChild(buttonCheck);

deleteButton.classList.add("delbtn");
deleteButton.addEventListener("click" ,deleteItem);
deleteButton.textContent = 'X';

spanWrapper.classList.add('mySpan');
spanWrapper.appendChild(textlist);

list.appendChild(spanWrapper);
list.appendChild(deleteButton);
// list.createElement("textdecore");
list.appendChild(spanCheck);
// list.appendChild(check);
items.appendChild(list);
list.style.marginBottom= "7px";
text.value= "";
text.focus();
}

function deleteItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
function check(){
//  this.textContent='&#8730;';
  this.parentNode.parentNode.classList.toggle('textdecore');

  const classes = Array.from(this.parentNode.parentNode.classList); //converting html collection to js array

  console.log(classes); // debugging purposes 

  // classes.forEach((item) => {
  //   console.log(item);
  //   if (item !== 'textdecore') {
  //     this.textContent = '';
  //     }
  //   else {
  //     this.innerHTML = '&check;'
  //   }
  // });

  if (classes[0] == 'textdecore'){
    this.innerHTML = '&check;'
    this.parentNode.style.top="1.8px";      // this happens when the user clicks the check btn and the textdecore class is added
  } else {
    this.textContent = ''; 
    this.parentNode.style.top="4.8px";         // this happens when the user
  }
  
  // if (this.innerHtml == '✓') {
  //   this.textContent = '';
  // } else {
  //   this.innerHTML = '&check;'
  // }


}
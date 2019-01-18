document.querySelector(".c1").addEventListener("mouseover", function(){
  document.querySelector(".p1").classList.remove("display");
});

document.querySelector(".c1").addEventListener("mouseout", function(){
  document.querySelector(".p1").classList.add("display");
});



document.querySelector(".c2").addEventListener("mouseover", function(){
  document.querySelector(".p2").classList.remove("display");
});

document.querySelector(".c2").addEventListener("mouseout", function(){
  document.querySelector(".p2").classList.add("display");
});



document.querySelector(".c3").addEventListener("mouseover", function(){
  document.querySelector(".p3").classList.remove("display");
});

document.querySelector(".c3").addEventListener("mouseout", function(){
  document.querySelector(".p3").classList.add("display");
});



document.querySelector(".c4").addEventListener("mouseover", function(){
  document.querySelector(".p4").classList.remove("display");
});

document.querySelector(".c4").addEventListener("mouseout", function(){
  document.querySelector(".p4").classList.add("display");
});









document.querySelector(".circle").addEventListener("mouseout", function(){
  document.querySelector(".popup-main").classList.remove("display");
});


document.querySelector(".circle").addEventListener("mouseover", function(){
  document.querySelector(".popup-main").classList.add("display");
});








/*

Copyright (c) YEAR - Zac Holme - https://codepen.io/jaaclaine/pen/KmqEbq

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall 
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

*/

var date = document.getElementsByClassName("day");

for(i = 0; i < 50; i++){
  
  var event = document.createElement("div");
  event.id = "add";
  event.innerHTML = "<p>Add Phone Number</p><input type='text'> <span class='close'><i class='fa fa-times' aria-hidden='true'></i></span>";
  date[i].appendChild(event);
  
  var btn = document.createElement("button");
  btn.innerHTML = "<i class='fa fa-plus' aria-hidden='true'></i>";
  event.appendChild(btn);  
  btn.addEventListener("click", createEvent);
  
  date[i].addEventListener("click", clickEvent);
  
  event.getElementsByClassName("close")[0].addEventListener("click", closeEvent);
  
}

function createEvent(){
  
  var parent = this.parentElement;
  var parentDay = parent.parentElement;
  
  if(parent.getElementsByTagName("input")[0].value === "" ){
    alert("type something");
  }
    else{
      var createDiv = document.createElement("div");
  createDiv.id = "eventDiv";
  parent.appendChild(createDiv);
  
  parentDay.classList.add("active");
  
  var txt = parent.getElementsByTagName("input")[0].value;
  createDiv.innerHTML = txt;
  parent.getElementsByTagName("input")[0].value = "";
      
      //parent.style.visibility = "visible";
      
    }

  
  }

function clickEvent(){
  var a = this.getElementsByTagName("div")[0];
  a.classList.toggle("active");
}

function closeEvent(){
  document.getElementById("add").classList.remove("active");
}




// CREATE CLOSE BUTTON
var myLi = document.getElementsByTagName("li");
var i;
for ( i = 0; i < myLi.length; i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myLi[i].appendChild(span);
}
//CLICK ON CLOSE BUTTON
var close = document.getElementsByClassName("close");
var i;
for ( i = 0; i < close.length; i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// CREATE ELEMENT WHEN CLICK ON ADD BUTTON
function newElement() {
     var li = document.createElement("li");
     var inputvalue = document.getElementById("myinput").value;
     var name = document.createTextNode(inputvalue);

     li.appendChild(name);
     if (inputvalue === '')
     {
         alert("You must write name !")
     }
     else{
         document.getElementById("ullist").appendChild(li);
     }
      document.getElementById("myinput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myLi[i].appendChild(span);


    for ( i = 0; i < close.length; i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
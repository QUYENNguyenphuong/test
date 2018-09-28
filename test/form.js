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

}
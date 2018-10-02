//
// // CREATE ELEMENT WHEN CLICK ON ADD BUTTON
// function newElement() {
//      var li = document.createElement("li");
//      var inputvalue = document.getElementById("myinput").value;
//      var name = document.createTextNode(inputvalue);
//
//      li.appendChild(name);
//      if (inputvalue === '')
//      {
//          alert("You must write name !")
//      }
//      else{
//          document.getElementById("ullist").appendChild(li);
//      }
//       document.getElementById("myinput").value = "";
//
// }

// CREATE ELEMENT WHEN CLICK ON ADD BUTTON
$(document).ready(function () {
    $('#btnAdd').click(function () {
        var name =  $('#myinput').val();
        if ($('#myinput').val() == '') {
            alert("You must write name !")
        }
        else  {
            $('#ullist').append('<li>' + name + '<input type="button" class="close" value="Delete" >'+'</li>');
        }
        $('#myinput').val("");
    })
})
// function enter
$('#myinput').change(function () {
    $('#btnAdd').click();
})

//function delete
function delete_item(e, item){
    e.preventDefault();
    $(item).parent().remove();
}
$(document).on('click', '.close', function(e){
    var item = this;
    var noti = confirm("Do you want delete this item ?");
    if ( noti == true){
        delete_item(e, item);
    }

})
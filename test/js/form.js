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
        if ( name == '') {
            alert("You must write name !");
        }
        else  {
            $('#ullist').append('<li>'+  name + '<input type="button" class="close_li" value="Delete" data-toggle="modal" >'+'</li>');
        }
        $('#myinput').val("");
        $('#myinput').focus();
    });
});
//function enter
 $('#myinput').keyup(function (e) {
     if ( e.keyCode == 13){
         $('#btnAdd').click();
     }
 });
//function delete
function delete_item(e, item){
    e.preventDefault();
    $(item).parent().remove();
}

// delete button with modal
$(document).on('click','.close_li', function(e){
    var  item = this;
    $('#modal').modal();
    $('#modal').find('#btn-yes').click(function () {
        delete_item(e,item);
        $('#modal').modal('hide');
        });
    $('#modal').find('.close').click(function () {
        $('#modal').modal('hide');
    });
});
// function finish
$(document).on('click','li', function(){
    $(this).toggleClass('finish');
});
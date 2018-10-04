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
            $('#ullist').append('<li class="li_item">'+  name + '<input type="button" class="close_li" id="close_li" value="Delete" data-toggle="modal" data-target="#modal">'+'</li>');
        }
        $('#myinput').val("");
    });
});
//function enter
$('#myinput').keyup(function (e) {
    if ( e.keyCode == 13){
        $('#btnAdd').click();
    }
});
// Delete function
$(document).on("click",".li_item", function () {
   var $item = this;
    $($item).addClass("delete");
    $("#btn-yes").click(function () {
        if($($item).hasClass("delete"))
        {
            $($item).remove();
            $('#modal').modal('hide');
        }
    });
    $("#btn-no").click(function () {
        $($item).removeClass("delete");
        $('#modal').modal('hide');
    });
    $(".close").click(function () {
        $($item).removeClass("delete");
        $('#modal').modal('hide');
    })
});






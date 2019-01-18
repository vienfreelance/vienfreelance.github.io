$("#mobileMenuLink a").on("click", function (e) {
    console.log("WOOOOO!"); 
    $("#mobileNav").toggleClass("menu-open")
})    

$("#guests-select").change(function () {
    guests = $("#guests-select").val()
    console.log(guests)
    if (guests != "" && guests != "0") {
        $("#main-form").toggle("slide");
        $("#guests-form").toggle("slide");
        if (guests == "1") {
            $("#plus-one").show()
            $("#plus-two").hide()
            $("#plus-three").hide()
            $("#plus-four").hide()
            $("#plus-five").hide()
        }
        else if (guests == "2") {
            $("#plus-one").show()
            $("#plus-two").show()
            $("#plus-three").hide()
            $("#plus-four").hide()
            $("#plus-five").hide()
        }
        else if (guests == "3") {
            $("#plus-one").show()
            $("#plus-two").show()
            $("#plus-three").show()
            $("#plus-four").hide()
            $("#plus-five").hide()
        }
        else if (guests == "4") {
            $("#plus-one").show()
            $("#plus-two").show()
            $("#plus-three").show()
            $("#plus-four").show()
            $("#plus-five").hide()
        }
        else if (guests == "5") {
            $("#plus-one").show()
            $("#plus-two").show()
            $("#plus-three").show()
            $("#plus-four").show()
            $("#plus-five").show()
        }
    } else {
        console.log("nothing happened");
    }


})

$("#back-btn").click(function () {
    $("#main-form").toggle("slide");
    $("#guests-form").toggle("slide");
    $("#guests-select").val("");
})

var $form = $('#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbwo4TZEVKJtgb-dpxHYVMjMKDriNkHxCAILCxgpwB1p-o6-IPM/exec'

$('#rsvp-form').on('submit', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(function(data) {
      $("#thankyou").toggle("fade")
      $("#form-block").hide();
  }

    
  );
})

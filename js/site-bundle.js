$(document).ready(function () {
    $firstName = $("input[name=First_Name]");
    // $firstName.focus()
    $lastName = $("input[name=Last_Name]");
    $("#rsvp-yes").on("click", function(e) {
        $("input[name='Attending']").val("yes");
        $("#guest-selection").fadeIn();
        $("#food-selection").fadeIn();
        $("#diet-restriction").fadeIn();
    })
    $("#rsvp-no").on("click", function (e) {
        $("input[name='Attending']").val("no");
        $("#guests-select").prop("required", false)
        $("#guest-selection").fadeOut();
        $("#food-selection").fadeOut();
        $("#diet-restriction").fadeOut();

    })
    console.log("ready!");
});

$("#mobileMenuLink a").on("click", function (e) {
    console.log("WOOOOO!"); 
    $("#mobileNav").toggleClass("menu-open")
})    

$("#guests-select").change(function () {
    if ($firstName.val() == "") {
        $firstName.focus()
        guests = $("#guests-select").val("")
    } else if ($lastName.val() == "") {
        $lastName.focus()
        guests = $("#guests-select").val("")
    } else {
        // guests = $("#guests-select").val("")
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
                
                makeRequired("Plus_one")
                makeNotRequired("Plus_two")
                makeNotRequired("Plus_three")
                makeNotRequired("Plus_four")
                
            }
            else if (guests == "2") {
                $("#plus-one").show()
                $("#plus-two").show()
                $("#plus-three").hide()
                $("#plus-four").hide()
                makeRequired("Plus_one")
                makeRequired("Plus_two")
                makeNotRequired("Plus_three")
                makeNotRequired("Plus_four")
            }
            else if (guests == "3") {
                $("#plus-one").show()
                $("#plus-two").show()
                $("#plus-three").show()
                $("#plus-four").hide()
                
                makeRequired("Plus_one")
                makeRequired("Plus_two")
                makeRequired("Plus_three")
                makeNotRequired("Plus_four")
            }
            else if (guests == "4") {
                $("#plus-one").show()
                $("#plus-two").show()
                $("#plus-three").show()
                $("#plus-four").show()
                makeRequired("Plus_one")
                makeRequired("Plus_two")
                makeRequired("Plus_three")
                makeRequired("Plus_four")
            }
        } else {
            console.log("nothing happened");
            makeNotRequired("Plus_one")
            makeNotRequired("Plus_two")
            makeNotRequired("Plus_three")
            makeNotRequired("Plus_four")
        }
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
      $attending = $("input[name='Attending']").val();
      console.log("$attending", $attending)
      if($attending == "yes") {
          $("#thankyou").toggle("fade")
          $("#nope").hide();
      }
      else {
          $("#nope").show();
          $("#thankyou").hide();
          $("#forward-text").hide();
      }
      $("#form-block").hide();
      $("#rsvp-caption").hide();
  }

    
  ).error(function (data) {
      alert("Please make sure you have filled out all required (*) fields!")
  }

  );
})

let makeRequired = function(prefix) {
    $("select[name="+  prefix + "_entree]").prop("required", true)
    $("input[name=" + prefix + "_name]").prop("required", true)
}

let makeNotRequired = function(prefix) {
    $("input[name=" + prefix + "_name]").prop("required", false)
    $("select[name=" + prefix + "_entree]").prop("required", false)
}
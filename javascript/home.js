$(document).ready(function () {

    $("#signIn").click(function () {
        $("#signInElements").css({"display": "block" });
        $("#signInElements").animate({top: '5%'});
        $("#signUpElements").css({"display": "none" }); 
        $("#signUpElements").animate({top: '0'});     
    });

    $("#signInClose").click(function () {    
        $("#signInElements").css({"display": "none" }); 
        $("#signInElements").animate({top: '0'});
    });
   
   
    // sign in elements ended

    // sign up elements started
    $("#signUp").click(function () {
        $("#signUpElements").css({"display": "block" });
        $("#signUpElements").animate({top: '5%'});

        $("#signInElements").css({"display": "none" }); 
        $("#signInElements").animate({top: '0'});     
    });

    $("#signUpClose").click(function () {    
        $("#signUpElements").css({"display": "none" }); 
        $("#signUpElements").animate({top: '0'});
    });

   
    // sign up elements ended
    // arrival start
    $("#whomen").hide();
    $("#bags").hide();
    $("#footwear").hide();
    // arrival end
    // mens wear links started
    $("#mensLinks").click(function(){
        $("#mensLinksElements").fadeToggle(1);
        $("#whomensLinksElements").fadeOut(1);
    });

    // mens wear links ended
    
    // womens wear links started
    $("#whomensLinks").click(function(){
        $("#whomensLinksElements").fadeToggle(1);
        $("#mensLinksElements").fadeOut(1);
    });
    // whomwns wear links ended
    $(".cuppons-icon").hover(function(){
        $(this).css("background-color", "blue");
  });
    

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("tooltiptext");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn_active");
        current[0].className = current[0].className.replace("btn_active", "");
        this.className += "btn_active";

    });
}
    
  let c = 0;
  let e=0;
  let a=0;
  let costumers = setInterval(function () {
      c++;

      costumer.innerHTML = c;

      if (c == 653) {
       
          clearInterval(costumers);

      }
  }, 5);

  let evenn = setInterval(function () {
      e++;

      even.innerHTML = e;

      if (e == 823) {
       
          clearInterval(evenn);

      }
  }, 3);

  let avards = setInterval(function () {
      a++;

      avard.innerHTML = a;

      if (a == 45) {
       
          clearInterval(avards);

      }
  }, 80); 
  
});


function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
  }

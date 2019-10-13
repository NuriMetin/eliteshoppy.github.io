$(document).ready(function(){

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




    $("#mensWear").click(function(){
    $(".mensWearElements").fadeToggle(1);
    });
    $("#etnicWear").click(function(){
        $(".etnicWearElements").fadeToggle(1)
    });
    $("#partyWear").click(function(){
        $(".partyWearElements").fadeToggle(1)
    });
    $("#casualWear").click(function(){
        $(".casualWearElements").fadeToggle(1)
    });

    $("#bestCollection").click(function(){
        $(".bestCollectionElements").fadeToggle(1)
    });
    $("#newArrival").click(function(){
        $(".newArrivalElements").fadeToggle(1)
    });
    $("#bestOffer").click(function(){
        $(".bestOfferElements").fadeToggle(1)
    });


    $("#summerDiscount").click(function(){
        $(".summerDiscountElements").fadeToggle(1)
    });
    $("#excitingOffer").click(function(){
        $(".excitingOfferElements").fadeToggle(1)
    });
    $("#flatDiscount").click(function(){
        $(".flatDiscountElements").fadeToggle(1)
    });
  });
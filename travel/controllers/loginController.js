
//This is the init function
(function(){        
    console.log('init');
    $(".signup-box").hide();
})();


function navigateToHomePage()
{  
  console.log('1');
  let warning = "Üye olmadan devam ederseniz; paylaşımları değerlendiremez, gezginlerle iletişim kuramazsınız.";
  
  if (confirm(warning)) {
    window.location.href = "homepage.html";
  } 
}


function onClickLogin(){
    //todo: giriş bilgilerini kontrol et backend servisi ile
    console.log('3');
    var response = 'ok';
    if(response == 'ok'){
       alert('Giriş başarılı!');
       window.location.href = "homepage.html";
        
    }
}


function onClickSignUp(){
  
    console.log('4');
    $(".login-box").hide();
    $(".signup-box").show();
    
    $(".travellerSignUpForm").css("background", "#A9A9A9");
    $(".continue").hide();
}

$(".visiterSignUpForm").click(function(){
  $(".travellerSignUpForm").css("background", "#A9A9A9");
  $(".visiterSignUpForm").css("background", "#fff");
    $(".continue").hide();
    $(".submit").show();
});

$(".travellerSignUpForm").click(function(){
  $(".visiterSignUpForm").css("background", "#A9A9A9");
  $(".travellerSignUpForm").css("background", "#fff");
    $(".submit").hide();
    $(".continue").show();
});

function onClickSubmit(){
    //todo: üyeyi kaydet.
    alert('Anasayfaya yönlendiriliyorsunuz!');
    window.location.href = "homepage.html";
}
function onClickContinue(){
    //todo: profil oluşturma sayfası
}

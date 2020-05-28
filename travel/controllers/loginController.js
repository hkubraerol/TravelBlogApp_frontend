//This is the init function
(function(){        
   // document.getElementById("idSignUp").disabled = true;
    console.log('2');
    $(".login-box").hide();
})();



function navigateToHomePage()
{  
  console.log('1');
  let warning = "Üye olmadan devam ederseniz; paylaşımları değerlendiremez, gezginlerle iletişim kuramazsınız.";
  
  if (confirm(warning)) {
    window.location.href = "homepage.html";
  } 
}

function onClickSignUp(){
  //  document.getElementById("idSignIn").disabled = true;
    console.log('4');
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
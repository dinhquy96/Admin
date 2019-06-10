 
 $(document).ready (function(){
    	$("#success-alert").hide();
    	$("#success-alert1").hide();
    	$("#success-alert2").hide();
    	$("#success-alert3").hide();
      //alert(email);
    });


 function login(){
       var email = document.getElementById("emailLogin").value;
        var pass = document.getElementById("passwordLogin").value;

        if(email == 'admin@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');

            $("#success-alert4").show();
        window.setTimeout(function (){
            $("#success-alert4").hide();
        },2000);

          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
        else if(email == 'tranghanu@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');


            $("#success-alert4").show();
        window.setTimeout(function (){
            $("#success-alert4").hide();
        },2000);
          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
        else if(email == 'lanem@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'2');

           
            $("#success-alert4").show();
        window.setTimeout(function (){
            $("#success-alert4").hide();
        },2000);
          window.location = 'https://hanu98.github.io/nAdmin/';
        }
        else if(email == 'editor@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'1');
           
            $("#success-alert4").show();
        window.setTimeout(function (){
            $("#success-alert4").hide();
        },2000);
          window.location = 'https://hanu98.github.io/nAdmin/';
        }
        else if(email == 'linhmiu@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');
           
            $("#success-alert4").show();
        window.setTimeout(function (){
            $("#success-alert4").hide();
        },2000);
          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
        else{
        	 $("#success-alert3").show();
            window.setTimeout(function (){
              $("#success-alert3").hide();
            },2000);
        }
    }


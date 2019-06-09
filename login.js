 
 $(document).ready (function(){
    	$("#success-alert").hide();
    	$("#success-alert1").hide();
    	$("#success-alert2").hide();
    	$("#success-alert3").hide();
      //alert(email);
    });

 function logout(){
 	sessionStorage.removeItem("email");
 	window.location = 'https://hanu98.github.io/Admin/';
 }

 function login(){
       var email = document.getElementById("emailLogin").value;
        var pass = document.getElementById("passwordLogin").value;

        if(email == 'admin@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');

          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
        if(email == 'trangem@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');

          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
        if(email == 'lanem@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'2');

          window.location = 'https://hanu98.github.io/nAdmin/';
        }
        if(email == 'hueem@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'1');

          window.location = 'https://hanu98.github.io/nAdmin/';
        }
         if(email == 'linhmiu@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
           sessionStorage.setItem("status",'10');

          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
    }


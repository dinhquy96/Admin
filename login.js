 function login(){
       var email = document.getElementById("emailLogin").value;
        var pass = document.getElementById("passwordLogin").value;

        if(email == 'admin@gmail.com' && pass == 'hanu98' ){
          sessionStorage.setItem("email",email);
          window.location = 'https://hanu98.github.io/Admin/index1.html';
        }
    }


// *******Register funciton*********

function register(event) {
    event.preventDefault();
    var phNum = document.getElementById("userPhNum").value;
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    var confirmPassword = document.getElementById("userConfirmPassword").value; 
    


    if(phNum && name && email && password && confirmPassword){
        if(password.length >= 8 && confirmPassword.length >= 8){
          if(password == confirmPassword){
            // console.log(userInfo);
            
            var userInfo = {swiggyUserPh: phNum, swiggyUser: name, swiggyEmail: email, swiggyPass: password, swiggyConfirmPass: confirmPassword};
            var multiUsers = JSON.parse(localStorage.getItem("swiggyUsers")) || [];
            var flagForEmail = false;
            
            for(var i = 0; i<multiUsers.length; i++){
              if(multiUsers[i].swiggyEmail == email){
                flagForEmail = true;
              }
            }
            if(!flagForEmail){
              multiUsers.push(userInfo);
              localStorage.setItem("swiggyUsers", JSON.stringify(multiUsers));
              alert("Registered Successfully.");
              phNum = document.getElementById("userPhNum").value = "";
               name = document.getElementById("userName").value = "";
               email = document.getElementById("userEmail").value ="";
               password = document.getElementById("userPassword").value ="";
               confirmPassword = document.getElementById("userConfirmPassword").value =""; 
              window.location.href = `./Login.html`;

            }else{
              alert("You're Already Registered with this Email")
            }
          }else{
            alert("Passwords doesn't Match.")
          }
        }else{
          alert("Passwords must be more than Eight");
        }
      }else{
        alert("All fields are mandatory.");
      }

}

// ****Login func***//

function login(event) {
    event.preventDefault();
  
    var userPh = document.getElementById("userPhNum").value;
    // console.log(userPh);
  
    
    var swiggyLogin = JSON.parse(localStorage.getItem("swiggyUsers"));
    // console.log(swiggyLogin);
    
    var flagForEmail = false;
    var currentUser;
    for(var i=0; i<swiggyLogin.length; i++){
      // console.log(swiggyLogin[i].swiggyUserPh);
      if(swiggyLogin[i].swiggyUserPh == userPh){
        // console.log(swiggyLogin[i]);
        flagForEmail = true;
        currentUser = swiggyLogin[i];
      }
    }if(flagForEmail == true){  
      localStorage.setItem("swiggyActiveUser", JSON.stringify(currentUser));
      alert("Logged in Successflly... ")
      window.location.href = `./HomePage.html`;
    }else{
      alert("Please Register to Login..")
      window.location.href = `./CreateAcc.html`;
    }
  
    
  }
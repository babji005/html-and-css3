

// if( document.myForm.EMail.value == "" ) {
//     alert( "Please provide your Email!" );
//     document.myForm.EMail.focus() ;
//     return false;
//  }

function validate() {
    var pw = document.myForm.password.value;  
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if( emailID == "" ) {
        alert( "Please provide your Email!" );
        emailID.focus() ;
        return false;
     }

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       emailID.focus() ;
       return false;
    }
    return( true );
  
    //check empty password field  
    if(pw == "") {  
        alert( "Please provide your password!" );
       pw.focus(); 
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  
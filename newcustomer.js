function GEEKFORGEEKS() {
    var Fname = 
        document.forms["RegForm"]["FName"];
    var Lname = 
        document.forms["RegForm"]["LName"];
    var email = 
        document.forms["RegForm"]["EMail"];
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var gender = 
        document.forms["RegForm"]["gender"]
    var phone = 
        document.forms["RegForm"]["Telephone"];
    // var state = 
    //     document.forms["RegForm"]["State"];
    var password = 
        document.forms["RegForm"]["Password"];
    var address = 
        document.forms["RegForm"]["Address"];
        

    if ((Fname.value.length <5) || (Fname.value = "") ) {
        window.alert("Please enter your name.");
        Fname.focus();
        return false;
    }
    
    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (email.value == "" || atpos < 1 || ( dotpos - atpos < 2 ))  {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    return true;

    if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    if (what.selectedIndex < 1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}





var citiesByState =  {
    andhra: ["vizag","rajahmundry","vijayawada"],
    telangana: ["warangal","bhadrachalam","hyd"],
    kerala: ["kochi","Kanpur"],
    goa:["panaji"],
    tamilnadu:["chennai","pondi","koyembade","coimbatoor"]
    }
    function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    function displaySelected() { var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
    alert(country+"\n"+city);
    }
    function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
    }
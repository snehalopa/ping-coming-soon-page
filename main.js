function notifyme() {
    var text = document.getElementById("emailid").value;

    var regex = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    if(regex.test(text)){
        document.getElementById("label").innerHTML="This Email Address is valid";
        document.getElementById("label").style.visibility="visible";
        document.getElementById("label").style.color="green";
        
    }
    else {
        document.getElementById("label").innerHTML="Please enter a valid email address";
        document.getElementById("label").style.visibility="visible";
        document.getElementById("label").style.color="red";
        
    }
}

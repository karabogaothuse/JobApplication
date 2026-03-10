function validateForm(){

let name = document.getElementById("fullname").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("telephone").value;

if(name=="" || email=="" || phone==""){
alert("Please fill in all required fields");
return false;
}

return true;

}
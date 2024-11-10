const form=document.querySelector("form");
const emailerror=document.querySelector("#email + span.error");
const username=documnet.getElementById("username");
const email=document.getElementById("email");
//add an event listner for username
username.addEventListner("input",(event)=>{
 if(username.validity.tooLong){
     username.setCustomValidity("Username is too long");
 }
 else if(username.validity.tooShort){
     username.setCustomValidity("Username is too short");
 }
 else{
  username.setCustomValidity("");
 }
});
email.addEventListner("input",(event)=>{
   if(email.validity.valid){
       emailerror.textContent="";
       emailerror.className="error";
   }
   else{
       showError();
   }
});
form.addEventListner("submit",(event)=>{
    if(!username.validity.valid){
        showError();
        event.preventDefault();
    }
    //check if email is valid
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
});
function showError(){
    if(email.validity.valueMissing){
          // If empty
        emailerror.textContent="You need to enter an email address";
    }
    else if(email.validity.typeMismatch){
         // If it's not an email address,
        emailerror.textContent="Entered value needs to be an email address";
    }
    else if(email.validity.tooShort){
        // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; 
    you entered ${email.value.length}.`;
    }
    emailerror.className="error active";
}
function myFunction() {
    var x = document.getElementsByClassName("navbar")
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

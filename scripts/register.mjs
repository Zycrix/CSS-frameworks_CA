import apiCall from "./modules/api.mjs";
import validate from "./modules/validate.mjs";

const email = document.querySelector("#email");
const name = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const form = document.querySelector(".registration");
const error = document.querySelector(".error-div");
const url = "https://nf-api.onrender.com/api/v1/social/auth/register";

async function register(email, name, password){
  
  const body = {  //object to post to the api
    name: name.value,
    email: email.value,
    password: password.value
  };

  const valid = validate(body, confirm.value);  //Validate the email address and password

  if(valid){
    const result = await apiCall("post",body, url); //Call the api

    if(result.id){  //Redirect to homepage if api call is successful
      window.location.href = `${window.location.origin}/index.html`;
    }else{  //Display an error if api call is unsuccessful
      error.innerHTML = "<p class ='text-danger fs-4'>An error has occured, please try again<p>";
      form.reset();
    };
  };
};

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  register(email, name, password);  
});
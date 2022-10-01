import apiCall from "./api.mjs";
const email = document.querySelector("#email");
const name = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const form = document.querySelector(".registration");
const url = "https://nf-api.onrender.com/api/v1/social/auth/register";

async function register(email, name, password){
  if(password.value !== confirm.value){return false};
  
  const body = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  const result = await apiCall("post",body, url);
  
  console.log(result);
}

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  register(email, name, password);
})

console.log(form)
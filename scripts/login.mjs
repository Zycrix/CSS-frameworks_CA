import apiCall from "./modules/api.mjs";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".login");
const url = "https://nf-api.onrender.com/api/v1/social/auth/login";
const error = document.querySelector(".error-div");

async function login(){
  const body = {
    email: email.value,
    password: password.value
  };

  const result = await apiCall("post", body, url);

  if(result.accessToken){
    error.innerHTML = "";
    window.localStorage.setItem("user", JSON.stringify(result));
    window.location.href = `${window.location.origin}/index.html`;
  }else{
    error.innerHTML = `<p class ='text-danger fs-4'>${result.message}<p>`;
  }
}


form.addEventListener("submit", (e)=>{
  e.preventDefault();

  login();
})












































const registerBtn = document.querySelector(".register");

registerBtn.addEventListener("click", (e)=>{
  window.location.href = `${window.location.origin}/register.html`;
});
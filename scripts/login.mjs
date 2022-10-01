const registerBtn = document.querySelector(".register");

registerBtn.addEventListener("click", (e)=>{
  window.location.href = `${window.origin}/register.html`;
})
const searchBar = document.querySelector(".search-field");
const searchIcon = document.querySelector(".s-icon");
const profilePicture = document.querySelectorAll(".profile-picture");
const profileName = document.querySelector(".post-name");
const headerProfile = document.querySelector(".header-profile");
const headerLogin = document.querySelector(".header-login");
const logout = document.querySelector(".logout");

searchIcon.addEventListener("click", (e)=>{
  searchBar.classList.toggle("hidden");
});

if(window.location.href === `${window.origin}/index.html`){
  profileName.addEventListener("click", (e)=>{
    window.location.href = `${window.origin}/profile.html`
  });
}
profilePicture.forEach((e)=>{
  e.addEventListener("click", (e)=>{
    window.location.href = `${window.origin}/profile.html`
  });
})
if(window.sessionStorage.getItem("loggedin") === "true"){
  headerLogin.classList.add("hidden");
  headerProfile.classList.remove("hidden");
}

if(window.location.href === `${window.origin}/login.html`){
  window.sessionStorage.setItem("loggedin", "true");
}


logout.addEventListener("click", (e)=>{
  window.sessionStorage.clear();
  window.location.reload();
});
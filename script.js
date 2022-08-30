const searchBar = document.querySelector(".search");
const searchIcon = document.querySelector(".s-icon");
const close = document.querySelector(".close");
const profilePicture = document.querySelector(".profile-picture");
const profileName = document.querySelector(".post-name");

searchIcon.addEventListener("click", (e)=>{
  searchBar.classList.toggle("hidden");
  searchIcon.classList.toggle("hidden");
});
close.addEventListener("click", (e)=>{
  searchBar.classList.toggle("hidden");
  searchIcon.classList.toggle("hidden");
});

profilePicture.addEventListener("click", (e)=>{
  window.location.href = `${window.origin}/profile.html`
})
profileName.addEventListener("click", (e)=>{
  window.location.href = `${window.origin}/profile.html`
})
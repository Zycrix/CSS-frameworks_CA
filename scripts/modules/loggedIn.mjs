export default function loggedIn(){
  const logIn = document.querySelector(".header-login");
  const profilePicture = document.querySelector(".profile-picture-header");
  const container = document.querySelector(".header-profile");

  if(window.localStorage.getItem("user")){
    logIn.classList.add("hidden");
    container.classList.remove("hidden");

    const user = JSON.parse(window.localStorage.getItem("user"));
    const avatar = user.avatar;
    const defaultAvatar = "/media/default-profile.jpg";

    if(avatar.length < 2){
      profilePicture.src = defaultAvatar
    }else{
      profilePicture.src = avatar;
    };

  }
}
/**
 * This function checks if the user is logged in or not and displays the avatar on the nav bar and handles clearing the storage on logout
 */
export default function loggedIn(){
  const logIn = document.querySelector(".header-login");
  const container = document.querySelector(".header-profile");
  const userImage = document.querySelectorAll(".user-image");
  const logOut = document.querySelector(".log-out");

  if(window.localStorage.getItem("user")){
    logIn.classList.add("hidden");
    container.classList.remove("hidden");

    const user = JSON.parse(window.localStorage.getItem("user"));

    const avatar = user.avatar;
    const defaultAvatar = "/media/default-profile.jpg";
    let image = "";

    if(avatar === null){
      image = defaultAvatar;
    }else{
      image = avatar;
    };

    userImage.forEach((e)=>{
      e.src = image;
    })
  }

  logOut.addEventListener("click", (e)=>{
    window.localStorage.clear();
    window.location.reload();
  })
}
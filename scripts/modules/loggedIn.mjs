export default function loggedIn(){
  const logIn = document.querySelector(".header-login");
  const container = document.querySelector(".header-profile");
  const userImage = document.querySelectorAll(".user-image");

  if(window.localStorage.getItem("user")){
    logIn.classList.add("hidden");
    container.classList.remove("hidden");

    const user = JSON.parse(window.localStorage.getItem("user"));
    const avatar = user.avatar;
    const defaultAvatar = "/media/default-profile.jpg";
    let image = "";

    if(avatar.length < 2){
      image = defaultAvatar;
    }else{
      image = avatar;
    };

    userImage.forEach((e)=>{
      e.src = image
    })
  }
}
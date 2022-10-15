import createFeed from "./createFeed.mjs";
export default function buildProfile(user){
  const {name, posts, avatar, email} = user;
  let picture;

  if(!avatar){
    picture = "/media/default-profile.jpg"; 
  }else{
    picture = avatar
  }

  const profilePicture = document.querySelector(".profile-image");
  const profileName = document.querySelector(".profile-name");
  const profileEmail = document.querySelector(".profile-email");
  const followers = document.querySelector(".follower-count");
  const following = document.querySelector(".following-count");
  const heading = document.querySelector(".heading");

  profilePicture.src = picture;
  profileName.innerHTML = name;
  profileEmail.innerHTML += email;
  followers.innerHTML = user.followers.length;
  following.innerHTML = user.following.length;
  heading.innerHTML = `View ${name}'s posts`;

  const counter = {
    index: 0,
    loaded: posts.length
  };

  posts.forEach((e)=>{
    e.author = {
      name: name,
      email: email,
      avatar: avatar
    };
  });

  createFeed(posts, counter)
}
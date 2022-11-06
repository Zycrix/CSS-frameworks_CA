import createFeed from "./createFeed.mjs";
/**
 * This function build the profile based on a object
 * @param {object} user The object to build the profile from
 */
export default function buildProfile(user){
  const {name, posts, avatar, email, followers, following} = user;
  let picture;

  if(!avatar){
    picture = "/media/default-profile.jpg"; 
  }else{
    picture = avatar
  }

  const profilePicture = document.querySelector(".profile-image");
  const profileName = document.querySelector(".profile-name");
  const profileEmail = document.querySelector(".profile-email");
  const followersContainer = document.querySelector(".follower-count");
  const followingContainer = document.querySelector(".following-count");
  const heading = document.querySelector(".heading");

  profilePicture.src = picture;
  profileName.innerHTML = name;
  profileEmail.innerHTML += email;
  followersContainer.innerHTML = followers.length;
  followingContainer.innerHTML = following.length;
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

  createFeed(posts.reverse(), counter)
}
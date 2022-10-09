import getPosts from "./getPosts.mjs";

import newPost from "./newPost.mjs";

const feedContainer = document.querySelector(".feed-container");

//Get posts to feed
const feed = await getPosts();

const defaultImage = "/media/default-profile.jpg";

for(let i = 0; i < 20; i++){
  let image = feed[i].author.avatar;


createFeed(feed);


//Add event listeners

const searchBar = document.querySelector(".search-field");
const searchIcon = document.querySelector(".s-icon");
const profilePicture = document.querySelectorAll(".profile-picture");
const profileName = document.querySelector(".post-name");
const logout = document.querySelector(".logout");

//Adding some event listeners

profileName.addEventListener("click", (e)=>{
  window.location.href = `${window.origin}/profile.html`
});

profilePicture.forEach((e)=>{
  e.addEventListener("click", (e)=>{
    window.location.href = `${window.origin}/profile.html`
  });
})

logout.addEventListener("click", (e)=>{
  window.sessionStorage.clear();
  window.location.reload();
});

//Search function
const newFeed = search(feed);

//Filter function
filter();


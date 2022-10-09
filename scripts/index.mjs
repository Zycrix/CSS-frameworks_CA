import getPosts from "./getPosts.mjs";
import newPost from "./newPost.mjs";
import search from "./search.mjs";
import createFeed from "./createFeed.mjs";
import filter from "./filter.mjs";

//Get posts to feed
const feed = await getPosts();

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

//New post
newPost();

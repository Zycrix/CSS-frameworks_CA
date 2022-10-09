import getPosts from "./modules/getPosts.mjs";
import newPost from "./modules/newPost.mjs";
import search from "./modules/search.mjs";
import createFeed from "./modules/createFeed.mjs";
import filter from "./modules/filter.mjs";
import getUser from "./modules/getUser.mjs";

//Get posts to feed
const feed = await getPosts();

createFeed(feed);


//Add event listeners

const searchBar = document.querySelector(".search-field");
const searchIcon = document.querySelector(".s-icon");
const logout = document.querySelector(".logout");

//Adding some event listeners

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

getUser();

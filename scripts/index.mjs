import getPosts from "./modules/getPosts.mjs";
import newPost from "./modules/newPost.mjs";
import search from "./modules/search.mjs";
import createFeed from "./modules/createFeed.mjs";
import filter from "./modules/filter.mjs";
import getUser from "./modules/getUser.mjs";
import loggedIn from "./modules/loggedIn.mjs";

loggedIn();

//Get posts to feed
let current = {
  index: 0,
  loaded: 20
};

const feed = await getPosts();

current = createFeed(feed, current);

//Add event listeners
const loadMore = document.querySelector(".load");
const logout = document.querySelector(".logout");

loadMore.addEventListener("click", (e)=>{
  console.log("click")
  current = createFeed(feed, current);
});

logout.addEventListener("click", (e)=>{
  window.localStorage.clear();
  window.location.reload();
});

//Search function
const newFeed = search(feed);

//Filter function
filter(feed);

//New post
newPost();

/* getUser(); */


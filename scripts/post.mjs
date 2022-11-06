import loggedIn from "./modules/loggedIn.mjs";
import getPosts from "./modules/getPosts.mjs";
import createFeed from "./modules/createFeed.mjs";
import deletePost from "./modules/deletePost.mjs";

//Check if the user is logged in
loggedIn()

//Get id from querystring
const queryString = window.location.search;
const search = new URLSearchParams(queryString);
let result = search.get("id");

//Get feed to find correct post
const tabTitle = document.querySelector("title");

const feed = await getPosts()

if(result !== "user"){
  const post = feed.filter((e)=> e.id === Number(result));

  const counter = {
    index: 0,
    loaded: 1
  };

  tabTitle.innerHTML = `Socials | ${post[0].title}`;
  createFeed(post, counter);
}else{
  const user = JSON.parse(window.localStorage.getItem("user"));
  const posts = feed.filter((e)=> e.author.name === user.name);

  const counter = {
    index: 0,
    loaded: 100
  };
  
  tabTitle.innerHTML = "You're posts";

  createFeed(posts, counter);
}
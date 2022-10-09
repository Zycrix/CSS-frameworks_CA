import getPosts from "./getPosts.mjs";
import newPost from "./newPost.mjs";

const feedContainer = document.querySelector(".feed-container");

//Get posts to feed
const feed = await getPosts();

const defaultImage = "/media/default-profile.jpg";

for(let i = 0; i < 20; i++){
  let image = feed[i].author.avatar;

  if(image.length < 1){image = defaultImage};

  feedContainer.innerHTML += `
  <div class = "post-friend my-5">
    <div class = "d-flex">
      <div class = "profile-picture-container p-3">
        <img src =${image} class = "profile-picture rounded-circle h-10">
      </div>
      <div class = "post-container p-3">
        <div class = "post-name">
          <h2>${feed[i].author.name}</h2>
        </div>
        <div class = "post-message">
          <h3 class = "post-title">${feed[i].title}</h3>
          <p>${feed[i].body}</p>
        </div>
      </div>
    </div>
    <div class = "interactions d-flex">
      <button class = "comment w-50 btn btn-primary rounded-0 border-dark">Comment</button>
      <div><hr class = "divider m-1"></div>
      <button class = "like w-50 btn btn-primary rounded-0 border-dark">Like</button>
    </div>
  </div>
  `
}

//Add event listeners

const searchBar = document.querySelector(".search-field");
const searchIcon = document.querySelector(".s-icon");
const profilePicture = document.querySelectorAll(".profile-picture");
const profileName = document.querySelector(".post-name");
const logout = document.querySelector(".logout");

//Adding some event listeners
searchIcon.addEventListener("click", (e)=>{   //Toggle search bar
  searchBar.classList.toggle("hidden");
});

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

newPost();
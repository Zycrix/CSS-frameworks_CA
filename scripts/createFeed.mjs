/**
 * This function creates the html for the feed either on the home page or the profile page
 * @param {array} feed The feed content array fetched from the api
 */
export default function createFeed(feed){
  const defaultImage = "/media/default-profile.jpg";
  const feedContainer = document.querySelector(".feed-container");

  feedContainer.innerHTML = "";

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
}
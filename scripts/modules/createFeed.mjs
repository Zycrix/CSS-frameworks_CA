import deletePost from "./deletePost.mjs";
import updatePost from "./updatePost.mjs";
/**
 * This function creates the html for the feed either on the home page or the profile page
 * @param {array} feed The feed content array fetched from the api
 * @param {object} counter An object containing the counters the for loop should use to get the correct data from the feed array
 * @returns {object} A new counter object to be used when the user clicks the load more button
 */
export default function createFeed(feed, counter){
  let {index, loaded} = counter;

  const defaultImage = "/media/default-profile.jpg";
  const feedContainer = document.querySelector(".feed-container");
  const user = JSON.parse(window.localStorage.getItem("user"));

  if(index === 0){
    feedContainer.innerHTML = ""
  };  

  for(index; index < loaded; index++){
    let image = defaultImage;
    const time = feed[index].created.slice(11,19) + ", " + feed[index].created.slice(0,10);

    if(feed[index].author.avatar.length > 1){
      image = feed[index].author.avatar
    };

    if(feed[index].author.name === user.name && window.location.pathname !== "/index.html"){ //Couldn't get the delete event listener to work on the main feed for some reason so im excluding the post options from the main feed so you have to go to you're profile or you're posts to delete/edit posts
      feedContainer.innerHTML += `
      <div class = "post-friend my-5" data-id = "${feed[index].id}">
        <div class = "d-flex">
          <div class = "profile-picture-container p-3 dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src =${image} class = "profile-picture rounded-circle h-10" data-user = "${feed[index].author.name}"></a>
          <ul class = "dropdown-menu">
            <li class = "delete"><a class = "dropdown-item" data-id = "${feed[index].id}">Delete</a></li>
            <li><a class = "dropdown-item edit" data-id = "${feed[index].id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</a></li>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit post</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form class = "update-form">
                    <div class = "d-flex flex-column">
                      <label for = "post-title" class = "form-label block">Title: <label>
                      <input id = "post-title" class = "post-title form-control block w-100" value = "${feed[index].title}">
                    </div>
                    <div>
                      <label for = "post-message" class = "form-label">Post content: </label>
                      <textarea id = "post-message" class = "form-control">${feed[index].body}</textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary update" data-id = "${feed[index].id}">Update</button>
                </div>
              </div>
            </div>
          </div>
          <div class = "post-container p-3">
            <div>
              <h2 class = "post-name" data-user = "${feed[index].author.name}"><a href = "${window.location.origin}/profile.html?user=${feed[index].author.name}">${feed[index].author.name}</a></h2>
            </div>
            <a href = ${window.location.origin}/post.html?id=${feed[index].id}><div class = "post-message">
              <h3 class = "post-title">${feed[index].title}</h3>
              <p>${feed[index].body}</p>
            </div>
            <div class = "post-date">
              <p>Posted: ${time}</p>
            </div>
          </div>
        </div>
        <div><hr class = "divider m-1"></div>
      </div>
      `

      const remove = document.querySelectorAll(".delete");
      const update = document.querySelectorAll(".update");
      const form = document.querySelector(".update-form");

      remove.forEach((e)=>{
        e.addEventListener("click", async (e)=>{
          const id = e.target.dataset.id;
          const result = await deletePost(id);
          window.location.reload();
        });
        e.style.cursor = "pointer";
      })

      update.forEach((e)=>{
        e.addEventListener("click", async (e)=>{
          const id = e.target.dataset.id;
          const updatedTitle = document.querySelector("#post-title").value;
          const updatedMessage = document.querySelector("#post-message").value;

          const result = await updatePost(id, updatedTitle, updatedMessage);
          window.location.reload();
        })
      })

      form.forEach((e)=>{
        e.addEventListener("submit", (e)=>{
          e.preventDefault();
        })
      })
    }else{
    feedContainer.innerHTML += `
    <div class = "post-friend my-5" data-id = "${feed[index].id}">
      <div class = "d-flex">
        <div class = "profile-picture-container p-3">
          <a href = "${window.location.origin}/profile.html?user=${feed[index].author.name}"><img src =${image} class = "profile-picture rounded-circle h-10" data-user = "${feed[index].author.name}"></a>
        </div>
        <div class = "post-container p-3">
          <div>
            <h2 class = "post-name" data-user = "${feed[index].author.name}"><a href = "${window.location.origin}/profile.html?user=${feed[index].author.name}">${feed[index].author.name}</a></h2>
          </div>
          <a href = ${window.location.origin}/post.html?id=${feed[index].id}><div class = "post-message">
            <h3 class = "post-title">${feed[index].title}</h3>
            <p>${feed[index].body}</p>
          </div></a>
          <div class = "post-date">
            <p>Posted: ${time}</p>
          </div>
        </div>
      </div>
      <div><hr class = "divider m-1"></div>
    </div>
    `
    }
  }

  if(loaded === feed.length && window.location.pathname !== "/profile.html" && window.location.pathname !== "/post.html"){
    const buttonContainer = document.querySelector(".button-container");
    const button = document.querySelector(".load");

    buttonContainer.removeChild(button);
  };

  const current = {
    index: index,
    loaded: loaded + 20
  };

  return current;
}
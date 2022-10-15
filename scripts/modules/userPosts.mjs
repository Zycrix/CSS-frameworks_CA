export default function createUserFeed(feed){

  const defaultImage = "/media/default-profile.jpg";
  const feedContainer = document.querySelector(".feed-container");

  for(let index = 0; index < feed.length; index++){
    let image = defaultImage;
    const time = feed[index].created.slice(11,19) + ", " + feed[index].created.slice(0,10);

    if(feed[index].author.avatar.length > 1){
      image = feed[index].author.avatar
    };

    
    feedContainer.innerHTML += `
    <div class = "post-friend my-5" data-id = "${feed[index].id}">
      <div class = "d-flex">
        <div class = "profile-picture-container p-3 dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src =${image} class = "profile-picture rounded-circle h-10" data-user = "${feed[index].author.name}"></a>
        <ul class = "dropdown-menu">
          <li><a class = "dropdown-item delete" data-id = "${feed[index].id}">Delete</a></li>
          <li><a class = "dropdown-item edit" data-id = "${feed[index].id}">Edit</a></li>
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
  }}
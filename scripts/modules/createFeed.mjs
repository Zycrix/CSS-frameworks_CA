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

  if(index === 0){
    feedContainer.innerHTML = ""
  };  

  for(index; index < loaded; index++){
    console.log("fired");
    let image = defaultImage;
    const time = feed[index].created.slice(11,19) + ", " + feed[index].created.slice(0,10);

    if(feed[index].author.avatar.length > 1){image = feed[index].author.avatar};
    
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
          <div class = "post-message">
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
  }

  if(loaded === feed.length){
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
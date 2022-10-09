import createFeed from "./modules/createFeed.mjs";
/**
 * This function filters trough the feed array based on the input in the search field and runs the html creation function with the new result to display the filtered posts.
 * @param {array} feed The feed array fetched from the api 
 */
export default function search(feed){
  const searchBar = document.querySelector(".search-field input");
  const form = document.querySelector(".search-form");

  let result = [];

  form.addEventListener("submit", (e)=>{ //I'd prefer making it a realtime search but that's going to have to wait until after im done with all the required features
    e.preventDefault();

    result = feed.filter((post)=>post.author.name.toLowerCase().includes(searchBar.value.toLowerCase()));

    if(result.length > 0){
      console.log("fired")
    createFeed(result);
    }else{
      createFeed(feed);
    }
  });
}
import createFeed from "./createFeed.mjs";
/**
 * This function filters trough the feed array based on the input in the search field and runs the html creation function with the new result to display the filtered posts.
 * @param {array} feed The feed array fetched from the api 
 */
export default function search(feed){
  const searchBar = document.querySelector(".search-field input");

  let result = [];

  searchBar.addEventListener("keyup", (e)=>{ 
    e.preventDefault();
    result = feed.filter((post)=>post.author.name.toLowerCase().includes(searchBar.value.toLowerCase()) || post.title.toLowerCase().includes(searchBar.value.toLowerCase()) || `${post.id}`.includes(searchBar.value));

    const current = {
      index: 0,
      loaded: 20
    }

    if(result.length > 0){
      createFeed(result, current);
    }else{
      createFeed(feed, current);
    }
  });
}
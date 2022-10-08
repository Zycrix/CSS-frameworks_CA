import apiCall from "./api.mjs";
/**
 * This function fetches the feed from the api with all the query parameters enabled and stores the result to sessionStorage for later use and returns the result.
 * @returns {array} Returns the array with posts fetched from the api
 */
export default async function getPosts(){
  if(!window.sessionStorage.getItem("user")){
    window.location.href = `${window.location.origin}/login.html`;
  };

  if(!window.sessionStorage.getItem("feed")){

  const url = "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true";
  const result = await apiCall("get", 0, url);

  window.sessionStorage.setItem("feed", JSON.stringify(result));

  return result;
  }else{
    const stored = window.sessionStorage.getItem("feed");
    const result = JSON.parse(stored);

    return result;
  };
};
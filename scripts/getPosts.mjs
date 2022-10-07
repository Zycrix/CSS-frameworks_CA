import apiCall from "./api.mjs";
export default async function getPosts(){
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
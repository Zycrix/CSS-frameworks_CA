import apiCall from "./api.mjs";
/**
 * Function to post a new post to the api
 */
export default async function newPost(){
  const form = document.querySelector(".new-post");
  const content = document.querySelector(".post");
  const title = document.querySelector(".post-title");
  const url = "https://nf-api.onrender.com/api/v1/social/posts";

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const body = {
      title: title.value,
      body: content.value
    };

    const result = await apiCall("post", body, url);

    if(result.title){window.location.reload()};
  });
}
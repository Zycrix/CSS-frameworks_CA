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
      title: /*title.value*/"test",
      body: /*content.value*/"test"
    };

    console.log(body)
    /* const result = await apiCall("post", body, url); */

    /* if(result.title){window.location.reload()}; */
  });
}
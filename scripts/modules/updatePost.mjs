import apiCall from "./api.mjs";
export default async function updatePost(id, title, message){
  const body = {
    title: title,
    body: message
  }
  const url = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
  const result = await apiCall("put", body, url);
  
  return result;
}
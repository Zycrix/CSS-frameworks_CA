import apiCall from "./api.mjs";
/**
 * Updates an existing post on the api
 * @param {number} id Id of the post to update
 * @param {string} title Updated title
 * @param {string} message Updated post
 * @returns The api response
 */
export default async function updatePost(id, title, message){
  const body = {
    title: title,
    body: message
  }
  const url = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
  const result = await apiCall("put", body, url);
  
  return result;
}
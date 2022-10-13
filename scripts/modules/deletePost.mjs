import apiCall from "./api.mjs";
/**
 * Function to delete a post by id
 * @param {number} id The id of the post to be deleted
 * @returns The api response object 
 */
export default async function deletePost(id){
  const url = `https://nf-api.onrender.com/api/v1/social/posts/${id}`
  const result = await apiCall("delete", 0, url);

  return result;
};
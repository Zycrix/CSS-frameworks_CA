import apiCall from "./api.mjs";
export default async function deletePost(id){
  const url = `https://nf-api.onrender.com/api/v1/social/posts/${id}`
  const result = await apiCall("delete", 0, url);

  return result;
};
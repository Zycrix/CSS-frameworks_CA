import apiCall from "./api.mjs";
export default async function getUser(name){
  const url = `https://nf-api.onrender.com/api/v1/social/profiles/${name}?_posts=true&_following=true&_followers=true`;

  const result = await apiCall("get", 0, url);

  console.log(result);
}
import apiCall from "./api.mjs";
/**
 * This function takes a name parameter, fetches the profile information and returns the result
 * @param {string} name The profile name of the user to get
 * @returns {array} The result from the api call
 */
export default async function getUser(name){
  const url = `https://nf-api.onrender.com/api/v1/social/profiles/${name}?_posts=true&_following=true&_followers=true`;

  const result = await apiCall("get", 0, url);

  return result;
};
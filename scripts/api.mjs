/**
 * Calls the api with the parameters given
 * @param {string} method HTML method to be used when calling the api 
 * @param {object} body Object to post to the api, if body is not required it should be sett to null
 * @param {string} url Api endpoint to call
 * @returns Parsed response from api
 */
export default async function apiCall(method, body, url){
  const options = {
    method: method,
    headers:{
      "Content-Type": "application/json",
    },
  };

  if(window.sessionStorage.getItem("key")){
    const key = JSON.parse(window.sessionStorage.getItem("key"));

    options.headers = {
      "Content-Type": "application/json",
      Authorization: `bearer ${key}`
    };
  };

  if(body){
    options.body = JSON.stringify(body);
  };
  try{
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  }catch(e){
    return e;
  }
}
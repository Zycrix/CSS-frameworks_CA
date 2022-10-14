import getUser from "./modules/getUser.mjs";
import loggedIn from "./modules/loggedIn.mjs";
import buildProfile from "./modules/buildProfile.mjs";

loggedIn();

const queryString = window.location.search;
const search = new URLSearchParams(queryString);
let result = search.get("user");

if(!result){
  const stored = JSON.parse(window.localStorage.getItem("user"));
  result = stored.name
};

const user = await getUser(result);

buildProfile(user);


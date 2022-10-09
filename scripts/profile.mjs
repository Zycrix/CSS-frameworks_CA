import getUser from "./modules/getUser.mjs";

const queryString = window.location.search;
const search = new URLSearchParams(queryString);
const result = search.get("user");

console.log(result);

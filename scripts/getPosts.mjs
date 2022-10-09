import apiCall from "./api.mjs";
export default async function getPosts(){
  if(!window.sessionStorage.getItem("feed")){
    try{
      const url = "https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true";
      const result = await apiCall("get", 0, url);

      if(!result.statusCode){
        window.sessionStorage.setItem("feed", JSON.stringify(result));
      }else if(result.statusCode === 401){
        window.location.href = `${window.location.origin}/login.html`;
      };

      return result;
    }catch(e){
      console.log(e)
    };
  }else{
    const stored = window.sessionStorage.getItem("feed");
    const result = JSON.parse(stored);

    if(result.statusCode === 401){
      window.location.href = `${window.location.origin}/login.html`;
    };

    return result;
  };
};
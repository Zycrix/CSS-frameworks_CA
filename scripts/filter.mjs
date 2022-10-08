import createFeed from "./createFeed.mjs";
export default function filter(){
  const filter = document.querySelector("select");
 
  //Create the sorted arrays
  const feedNew = JSON.parse(window.sessionStorage.getItem("feed"));
  const feedOld = JSON.parse(window.sessionStorage.getItem("feed")).reverse();
  const feed = JSON.parse(window.sessionStorage.getItem("feed"));
  const feedPop = feed.sort((a, b)=>{
    return b.reactions.length - a.reactions.length;
  });

  //Filter the feed
  filter.addEventListener("change", (e)=>{
    if(filter.value === "old"){
      createFeed(feedOld);
    }else if(filter.value === "pop"){
      createFeed(feedPop);
      console.log(feedPop)
    }else{
      createFeed(feedNew);
    };
  })
}
import createFeed from "./createFeed.mjs";
export default function filter(feed){
  const filter = document.querySelector("select");
  
  window.sessionStorage.clear();
  window.sessionStorage.setItem("copy", JSON.stringify(feed));  //Doing this to copy the feed by value
  
  
  
  //Create the sorted arrays
  const feedNew = JSON.parse(window.sessionStorage.getItem("copy"));
  const feedOld = JSON.parse(window.sessionStorage.getItem("copy")).reverse();
  console.log("filter");
  const feedPop = JSON.parse(window.sessionStorage.getItem("copy")).sort((a, b)=>{
    return b.reactions.length - a.reactions.length;
  });

  console.log(feedNew)
  console.log(feedOld)
  console.log(feedPop);

  //Filter the feed
  filter.addEventListener("change", (e)=>{
    if(filter.value === "old"){
      console.log("fired old");
      createFeed(feedOld);
    }else if(filter.value === "pop"){
      createFeed(feedPop);
      console.log("fired pop");
    }else{
      createFeed(feedNew);
      console.log("fired new");
    };
  })
}
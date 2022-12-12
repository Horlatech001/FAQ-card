const content = document.querySelectorAll(".accordion-content");

content.forEach((item) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if(item.classList.contains("open")){
        description.style.height = `${description.scrollHeight}px`;
        item.querySelector("i").classList.replace("ti-angle-up", "ti-angle-down");
    }else{
        description.style.height = "0px";
        item.querySelector("i").classList.replace("ti-angle-down", "ti-angle-up"); 
    }
    removeOpen(index);
  });
});

function removeOpen(index1){
  content.forEach((item2, index2) => {
    if(index1 != index2){
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up")
    }
  })
}
const button= document.querySelector(".box");
const contact= document.querySelector("#contact");


button.addEventListener("click", function(){
    contact.scrollIntoView({behavior:"smooth"})
})

const box= document.querySelector(".container");
const observer= new IntersectionObserver(function(enteries,observer){
      enteries.forEach(entry => {
          console.log(entry.isIntersecting);
          entry.target.classList.toggle("show",entry.isIntersecting)
      });
},{threshold:1})

observer.observe(box);



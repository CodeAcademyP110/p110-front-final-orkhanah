"use strict";

[...document.querySelectorAll('.arrow')].forEach(arr => {
    arr.onclick = function () {

        const activeLi = document.querySelector('.slideList li.active');
        activeLi.classList.remove("active");

        let newActiveLi;

        if (this.classList.contains("arrowLeft")) {
            newActiveLi =
                activeLi.previousElementSibling !== null ?
                    activeLi.previousElementSibling :
                    document.querySelector('.slideList li:last-child');
        }
        else {
            newActiveLi =
                activeLi.nextElementSibling !== null ?
                    activeLi.nextElementSibling :
                    document.querySelector('.slideList li:first-child');
        }

        newActiveLi.classList.add("active");
        document.querySelector('.mainSlider img').src = newActiveLi.firstElementChild.src;
        
        document.querySelector(".mainSlider img").style.transition = "all 2s";
       
        
    }
});


[...document.querySelectorAll('.searchMenuBtn')].forEach(searchMenu => {
    searchMenu.onclick = function()
    {
        event.preventDefault()
        document.querySelector('.searchMenuBtn.active').classList.remove("active");
            this.classList.add("active")

            document.querySelector('.detailedSearchTabs.active').classList.remove("active")

            const id = this.getAttribute("data-id");
            const detailedSearchTabs = document.querySelector(`.detailedSearchTabs[data-id="${id}"]`);

            detailedSearchTabs.classList.add("active");
    }
})

window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

[...document.querySelectorAll('.btnholi')].forEach(searchMenu => {
    searchMenu.onclick = function()
    {
        event.preventDefault()
        document.querySelector('.btnholi.active').classList.remove("active");
            this.classList.add("active")

            document.querySelector('.tabsholi.active').classList.remove("active")

            const id = this.getAttribute("data-id");
            const tabsholi = document.querySelector(`.tabsholi[data-id="${id}"]`);

            tabsholi.classList.add("active");
    }
})

